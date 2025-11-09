import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'audit',
      icon: 'Target',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      title: 'Аудит "ДНК"',
      price: 'от 95 000₽',
      description: 'Глубокий анализ всех аспектов вашего бизнеса',
      features: [
        'Анализ концепции и брендинга',
        'Мониторинг отзывов',
        'Интервью с персоналом',
        'Серия тайных гостей',
        'Аудит маркетинга',
        'Отчет на 40-60 страниц'
      ],
      note: 'Изучение концепции, гостей вашего формата и внутренний брендинг. Всё индивидуально — только то, что действительно нужно вашему заведению.'
    },
    {
      id: 'training',
      icon: 'Handshake',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: '💪 Индивидуальный тренинг',
      price: 'от 120 000₽',
      description: 'Обучение под вашу команду после анализа каждого сотрудника',
      features: [
        'Предварительный анализ команды',
        'Персональная программа',
        '2-3 дня интенсивов',
        'Готовые скрипты продаж',
        '45 дней поддержки',
        'Гарантия роста на 20%'
      ],
      note: 'Стоимость высока, так как перед тренингами я изучаю и анализирую весь персонал, выявляю сильные и слабые стороны.',
      isHit: true
    },
    {
      id: 'support',
      icon: 'BarChart3',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      title: '📊 Полное сопровождение',
      price: 'от 180 000₽/мес',
      description: 'Становлюсь вашим внешним директором по продажам',
      features: [
        'Поддержка 24/7',
        'Найм и обучение персонала',
        'Контроль качества',
        'Система KPI',
        'Рост на 35-60% за квартал'
      ],
      note: 'Для тех, кто хочет системный подход с полным контролем и максимальным результатом.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-foreground">Мои услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выбирайте формат работы в зависимости от ваших задач
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`border-2 transition-all duration-300 hover:shadow-xl relative ${
                  service.isHit ? 'border-primary' : 'hover:border-primary'
                }`}
              >
                {service.isHit && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg z-10">
                    ХИТ ПРОДАЖ
                  </div>
                )}
                
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center`}>
                      <Icon name={service.icon} className={service.iconColor} size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <div className="text-3xl font-black text-primary">{service.price}</div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      {service.note}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        const element = document.getElementById('contact');
                        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      Заказать
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-2"
                      onClick={() => navigate(`/service/${service.id}`)}
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Если необходимы <strong>базовые тренинги</strong>, можно получить <strong>онлайн-курсы по конкретной теме + доступ на месяц в закрытое сообщество</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
