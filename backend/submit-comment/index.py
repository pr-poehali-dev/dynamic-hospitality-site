'''
Business: API для приема комментариев к статьям блога
Args: event - dict с httpMethod, body (JSON с полями: post_id, author_name, author_email, content)
      context - объект с атрибутами request_id, function_name
Returns: HTTP response dict с результатом сохранения комментария
'''
import json
import os
from typing import Dict, Any, Optional
from pydantic import BaseModel, Field, EmailStr
import psycopg2
from psycopg2.extras import RealDictCursor


class CommentRequest(BaseModel):
    post_id: int = Field(..., gt=0)
    author_name: str = Field(..., min_length=1, max_length=255)
    author_email: Optional[EmailStr] = None
    content: str = Field(..., min_length=10, max_length=2000)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    db_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(db_url)
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    # GET - получить комментарии к статье
    if method == 'GET':
        params = event.get('queryStringParameters') or {}
        post_id = params.get('post_id')
        
        if not post_id:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'post_id required'}),
                'isBase64Encoded': False
            }
        
        cur.execute(
            "SELECT id, post_id, author_name, content, created_at FROM comments WHERE post_id = %s AND status = %s ORDER BY created_at DESC",
            (int(post_id), 'approved')
        )
        
        comments = cur.fetchall()
        
        result = []
        for comment in comments:
            result.append({
                'id': comment['id'],
                'post_id': comment['post_id'],
                'author_name': comment['author_name'],
                'content': comment['content'],
                'created_at': comment['created_at'].isoformat()
            })
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'comments': result, 'total': len(result)}),
            'isBase64Encoded': False
        }
    
    # POST - добавить комментарий
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        comment_data = CommentRequest(**body_data)
        
        insert_query = '''
            INSERT INTO comments (post_id, author_name, author_email, content, status, created_at, updated_at)
            VALUES (%s, %s, %s, %s, %s, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            RETURNING id, post_id, author_name, created_at
        '''
        
        cur.execute(
            insert_query,
            (
                comment_data.post_id,
                comment_data.author_name,
                comment_data.author_email,
                comment_data.content,
                'approved'
            )
        )
        
        result = cur.fetchone()
        conn.commit()
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Комментарий успешно добавлен',
                'comment_id': result['id']
            }),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }
