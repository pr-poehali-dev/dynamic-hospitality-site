import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
import requests

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправляет рекомендации по результатам квиза на почту пользователя
    Args: event - dict с httpMethod, body (данные квиза)
          context - object с request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('contact', {}).get('name', 'Не указано')
    email = body_data.get('contact', {}).get('email', '')
    phone = body_data.get('contact', {}).get('phone', 'Не указан')
    business = body_data.get('contact', {}).get('business', 'Не указан')
    
    business_type = body_data.get('business_type', 'Не указан')
    team_size = body_data.get('team_size', 'Не указан')
    problems = body_data.get('problems', [])
    training = body_data.get('training', 'Не указан')
    urgency = body_data.get('urgency', 'Не указан')
    budget = body_data.get('budget', 'Не указан')
    recommendation = body_data.get('recommendation', '')
    
    if not email:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': False, 'error': 'Email обязателен'})
        }
    
    business_types_map = {
        'premium': 'Ресторан премиум-класса (чек 3000₽+)',
        'cafe': 'Кафе / семейный ресторан (чек 1500-3000₽)',
        'bar': 'Бар / лаунж (чек от 2000₽)',
        'coffee': 'Кофейня (чек 500-1500₽)',
        'hotel': 'Отель / загородный клуб'
    }
    
    team_sizes_map = {
        'small': 'До 5 человек',
        'medium': '6-15 человек',
        'large': '16-30 человек',
        'xlarge': 'Более 30 человек'
    }
    
    problems_map = {
        'check_down': 'Средний чек стагнирует или падает',
        'no_energy': 'Персонал работает без энергии',
        'complaints': 'Много жалоб от гостей',
        'turnover': 'Высокая текучка кадров',
        'no_upsell': 'Официанты не делают допродажи',
        'no_training': 'Нет системы обучения',
        'conflicts': 'Конфликты между персоналом',
        'unclear': 'Не могу точно сформулировать'
    }
    
    training_map = {
        'regular': 'Проводим регулярные тренинги',
        'standards': 'Есть стандарты, но не соблюдаются',
        'onboarding': 'Новичков обучают "на ходу"',
        'none': 'Ничему не обучаем',
        'failed': 'Пробовали, но толку не было'
    }
    
    urgency_map = {
        'urgent': 'Срочно! В ближайшие 1-2 недели',
        'soon': 'Хочу начать в течение месяца',
        'planned': 'Планирую на 2-3 месяца',
        'research': 'Пока изучаю варианты'
    }
    
    budget_map = {
        'low': 'До 50 000₽',
        'medium': '50 000 - 150 000₽',
        'high': '150 000 - 300 000₽',
        'premium': '300 000 - 600 000₽',
        'unknown': 'Не знаю'
    }
    
    recommendations_data = {
        'express': {
            'title': 'ЭКСПРЕСС-ДИАГНОСТИКА',
            'price': 'от 35 000₽',
            'duration': '1-2 дня',
            'description': 'У вас небольшая команда, начнём с малого.',
            'features': [
                'Экспресс-консультация с владельцем',
                'Наблюдение за работой в смену',
                'Краткий отчёт (8-10 страниц)',
                '1 неделя консультаций в мессенджерах'
            ],
            'result': '+5-10% к среднему чеку за 1.5 месяца'
        },
        'audit': {
            'title': 'АУДИТ "ДНК"',
            'price': 'от 60 000₽',
            'duration': '5-7 дней',
            'description': 'Вам нужна глубокая диагностика, чтобы понять корень проблем.',
            'features': [
                'Глубокий анализ всех процессов',
                'Серия тайных гостей',
                'Детальный отчёт (30-50 стр)',
                'План на 6-12 месяцев'
            ],
            'result': '+12-20% к чеку за 2-4 месяца'
        },
        'training': {
            'title': 'ИНДИВИДУАЛЬНЫЙ ТРЕНИНГ',
            'price': 'от 80 000₽',
            'duration': '2-3 дня + 30 дней поддержки',
            'description': 'У вас есть команда, но ей не хватает системы и энергии.',
            'features': [
                'Анализ каждого сотрудника',
                'Персональная программа',
                '2-3 дня интенсивов',
                '30 дней поддержки после'
            ],
            'result': '+20-30% к чеку в первый месяц'
        },
        'support': {
            'title': 'ПОЛНОЕ СОПРОВОЖДЕНИЕ',
            'price': 'от 180 000₽/мес',
            'duration': 'от 3 месяцев',
            'description': 'Вам нужна системная трансформация, а не разовая встряска.',
            'features': [
                'Поддержка 24/7',
                'Найм и обучение персонала',
                'Внедрение системы KPI',
                'Контроль качества'
            ],
            'result': '+25-35% за 3-6 месяцев'
        },
        'consultation': {
            'title': 'НУЖНА ЛИЧНАЯ КОНСУЛЬТАЦИЯ',
            'price': 'Бесплатно',
            'duration': '30 минут',
            'description': 'По вашим ответам ситуация неоднозначная.',
            'features': [
                'Обсудим детали вашей ситуации',
                'Пойму, в чём реальная проблема',
                'Скажу честно - могу ли помочь',
                'Возможно, порекомендую другого эксперта'
            ],
            'result': 'Понимание дальнейших шагов'
        }
    }
    
    rec_data = recommendations_data.get(recommendation, recommendations_data['consultation'])
    
    problems_list = [problems_map.get(p, p) for p in problems] if problems else ['Не указаны']
    
    html_body = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
            .content {{ background: #f9fafb; padding: 30px; }}
            .recommendation {{ background: white; border: 2px solid #667eea; border-radius: 10px; padding: 20px; margin: 20px 0; }}
            .recommendation h2 {{ color: #667eea; margin-top: 0; }}
            .features {{ background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 15px 0; }}
            .features ul {{ margin: 10px 0; padding-left: 20px; }}
            .result {{ background: #10b981; color: white; padding: 15px; border-radius: 5px; margin: 15px 0; text-align: center; font-weight: bold; }}
            .contact {{ background: #667eea; color: white; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center; }}
            .contact a {{ color: white; text-decoration: none; font-weight: bold; }}
            .footer {{ text-align: center; color: #6b7280; padding: 20px; font-size: 14px; }}
            .divider {{ border-top: 2px solid #e5e7eb; margin: 20px 0; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎯 Ваши персональные рекомендации</h1>
                <p>MARICO PRO | Марина</p>
            </div>
            
            <div class="content">
                <p><strong>Здравствуйте, {name}!</strong></p>
                
                <p>Спасибо за прохождение диагностики. Я проанализировала вашу ситуацию и подготовила рекомендации.</p>
                
                <div class="divider"></div>
                
                <h3>📊 Ваши данные:</h3>
                <ul>
                    <li><strong>Тип заведения:</strong> {business_types_map.get(business_type, business_type)}</li>
                    <li><strong>Размер команды:</strong> {team_sizes_map.get(team_size, team_size)}</li>
                    <li><strong>Основные проблемы:</strong> {', '.join(problems_list)}</li>
                    <li><strong>Текущее обучение:</strong> {training_map.get(training, training)}</li>
                    <li><strong>Срочность:</strong> {urgency_map.get(urgency, urgency)}</li>
                    <li><strong>Бюджет:</strong> {budget_map.get(budget, budget)}</li>
                </ul>
                
                <div class="recommendation">
                    <h2>{rec_data['title']}</h2>
                    <p><strong>Стоимость:</strong> {rec_data['price']}</p>
                    <p><strong>Длительность:</strong> {rec_data['duration']}</p>
                    <p>{rec_data['description']}</p>
                    
                    <div class="features">
                        <h4>Что входит:</h4>
                        <ul>
                            {''.join(f"<li>{feature}</li>" for feature in rec_data['features'])}
                        </ul>
                    </div>
                    
                    <div class="result">
                        ✅ Ожидаемый результат: {rec_data['result']}
                    </div>
                </div>
                
                <div class="contact">
                    <h3>📞 Запишитесь на бесплатную консультацию</h3>
                    <p>Обсудим вашу ситуацию подробнее и определим точный план действий</p>
                    <p>
                        <a href="https://t.me/malinochka_marina">Telegram: @malinochka_marina</a><br>
                        <a href="https://instagram.com/marico.su">Instagram: @marico.su</a><br>
                        <a href="https://marico.su/#contact">Записаться на сайте</a>
                    </p>
                </div>
                
                <div class="divider"></div>
                
                <p><em>P.S. Я работаю только с теми, кому могу реально помочь. Если вижу, что результата не будет — скажу честно.</em></p>
                
                <p>
                    С уважением,<br>
                    <strong>Марина</strong><br>
                    MARICO PRO
                </p>
            </div>
            
            <div class="footer">
                <p>© MARICO PRO | <a href="https://marico.su">marico.su</a></p>
                <p>Это письмо отправлено автоматически на основе вашего запроса</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    smtp_email = os.environ.get('SMTP_EMAIL', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    
    email_sent = False
    if smtp_email and smtp_password:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'🎯 Ваши рекомендации от MARICO PRO'
        msg['From'] = f'Марина MARICO PRO <{smtp_email}>'
        msg['To'] = email
        
        html_part = MIMEText(html_body, 'html', 'utf-8')
        msg.attach(html_part)
        
        try:
            server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
            server.login(smtp_email, smtp_password)
            server.send_message(msg)
            server.quit()
            email_sent = True
        except Exception as e:
            email_sent = False
    
    telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
    
    if telegram_token and telegram_chat_id:
        telegram_message = f"""
🎯 НОВЫЙ РЕЗУЛЬТАТ КВИЗА

👤 Имя: {name}
📧 Email: {email}
📱 Телефон: {phone}
🏢 Бизнес: {business}

🏪 Тип заведения: {business_types_map.get(business_type, business_type)}
👥 Размер команды: {team_sizes_map.get(team_size, team_size)}
🎯 Обучение: {training_map.get(training, training)}
💰 Бюджет: {budget_map.get(budget, budget)}
⏰ Срочность: {urgency_map.get(urgency, urgency)}

📋 Проблемы:
{chr(10).join(f"• {p}" for p in problems_list)}

✅ Рекомендация: {rec_data['title']}

---
Рекомендации отправлены на почту: {email}
        """
        
        requests.post(
            f'https://api.telegram.org/bot{telegram_token}/sendMessage',
            json={'chat_id': telegram_chat_id, 'text': telegram_message}
        )
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Рекомендации отправлены на ваш email',
            'email_sent': email_sent
        })
    }