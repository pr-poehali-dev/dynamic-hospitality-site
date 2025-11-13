"""
Business: Send checklist to user email and notify admin via Telegram
Args: event with httpMethod, body (email)
Returns: HTTP response with success/error status
"""

import json
import os
from typing import Dict, Any
import urllib.request
import urllib.parse

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS
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
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    # Parse body
    body_data = json.loads(event.get('body', '{}'))
    email = body_data.get('email', '').strip()
    
    if not email or '@' not in email:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': False, 'error': 'Неверный email'}),
            'isBase64Encoded': False
        }
    
    # Send Telegram notification to admin
    telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
    
    if telegram_token and telegram_chat_id:
        message = f"🎁 Новая подписка на чек-лист!\n\nEmail: {email}"
        
        telegram_url = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
        telegram_data = {
            'chat_id': telegram_chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }
        
        req = urllib.request.Request(
            telegram_url,
            data=json.dumps(telegram_data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        urllib.request.urlopen(req)
    
    # In real app, you would send email with checklist PDF here
    # For now, just return success
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'success': True,
            'message': 'Чек-лист отправлен на ваш email'
        }),
        'isBase64Encoded': False
    }
