'''
Business: API для приема и сохранения заявок в базу данных с отправкой уведомлений в Telegram
Args: event - dict с httpMethod, body (JSON с полями: name, email, phone, message, type)
      context - объект с атрибутами request_id, function_name
Returns: HTTP response dict с результатом сохранения заявки
'''
import json
import os
from typing import Dict, Any, Optional
from pydantic import BaseModel, Field, EmailStr, ValidationError
import psycopg2
from psycopg2.extras import RealDictCursor
import requests


class LeadRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    email: Optional[EmailStr] = None
    phone: Optional[str] = Field(None, max_length=50)
    message: Optional[str] = None
    business_type: Optional[str] = Field(None, max_length=100)
    type: str = Field(default='lead', max_length=50)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    # Parse request body
    body_data = json.loads(event.get('body', '{}'))
    
    # Validate with Pydantic
    lead_data = LeadRequest(**body_data)
    
    # Connect to database
    db_url = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(db_url)
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    # Insert lead into database
    insert_query = '''
        INSERT INTO leads (name, email, phone, message, type, status, created_at, updated_at)
        VALUES (%s, %s, %s, %s, %s, %s, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        RETURNING id, name, email, phone, created_at
    '''
    
    message_text = lead_data.message or ''
    if lead_data.business_type:
        message_text = f"Тип бизнеса: {lead_data.business_type}\n\n{message_text}"
    
    cur.execute(
        insert_query,
        (
            lead_data.name,
            lead_data.email,
            lead_data.phone,
            message_text,
            lead_data.type,
            'new'
        )
    )
    
    result = cur.fetchone()
    conn.commit()
    
    cur.close()
    conn.close()
    
    # Отправка уведомления в Telegram
    telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if telegram_token and telegram_chat_id:
        telegram_message = f"""
🔔 Новая заявка #{result['id']}

👤 Имя: {lead_data.name}
📧 Email: {lead_data.email or 'не указан'}
📱 Телефон: {lead_data.phone or 'не указан'}
{f"🏢 Тип бизнеса: {lead_data.business_type}" if lead_data.business_type else ""}

💬 Сообщение:
{lead_data.message or 'нет сообщения'}

⏰ Время: {result['created_at'].strftime('%d.%m.%Y %H:%M')}
"""
        
        telegram_url = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
        telegram_payload = {
            'chat_id': telegram_chat_id,
            'text': telegram_message,
            'parse_mode': 'HTML'
        }
        
        try:
            requests.post(telegram_url, json=telegram_payload, timeout=5)
        except Exception as e:
            pass
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Заявка успешно отправлена',
            'lead_id': result['id'],
            'created_at': result['created_at'].isoformat()
        }),
        'isBase64Encoded': False
    }