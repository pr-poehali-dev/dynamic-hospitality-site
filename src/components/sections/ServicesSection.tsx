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
      icon: 'Search',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      title: 'Аудит "ДНК"',
      price: 'от 60 000₽',
      duration: '5-7 дней',
      description: 'Глубокий анализ всех аспектов вашего бизнеса',
      features: [
        'Анализ концепции и брендинга',
        'Мониторинг отзывов на всех платформах',
        'Интервью с персоналом',
        'Серия тайных гостей',
        'Аудит маркетинга',
        'Полный отчет с пошаговым планом',
        'План на 6-12 месяцев',
        'Презентация для собственника',
        'Чек-листы для внедрения'
      ],
      note: 'Это не просто проверка, а комплексное погружение во все процессы вашего ресторана. Я изучаю каждый аспект, выявляю скрытые проблемы и создаю индивидуальную стратегию роста. Тайные визиты невозможно вычислить — гарантирую объективную оценку.'
    },
    {
      id: 'training',
      icon: 'GraduationCap',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Уникальный тренинг',
      price: 'от 80 000₽',
      duration: '2-3 дня',
      description: 'Обучение под вашу команду после анализа каждого сотрудника',
      features: [
        'Предварительный анализ каждого члена команды',
        'До 15 человек в группе',
        'Персональная программа под ваши задачи',
        '2-3 дня интенсивов',
        'Проработка скриптов и сценариев продаж',
        'Практика на реальных ситуациях',
        '30 дней поддержки после тренинга',
        'Гарантия роста чека от 15%'
      ],
      note: 'Стоимость высока по веской причине: я не использую шаблонные программы. Перед каждым тренингом провожу глубокий анализ вашей команды, общаюсь с каждым сотрудником, выявляю индивидуальные сильные и слабые стороны. Невозможно учить всех одинаково!',
      isHit: true
    },
    {
      id: 'support',
      icon: 'LineChart',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      title: 'Полное сопровождение',
      price: 'от 180 000₽/мес',
      duration: 'от 3 месяцев',
      description: 'Становлюсь вашим внешним директором по продажам на три месяца',
      features: [
        'Поддержка 24/7',
        'Найм и обучение персонала',
        'Контроль качества работы',
        'Внедрение системы KPI',
        'Создание стандартов обслуживания',
        'Рост на 35-60% за квартал'
      ],
      note: 'Для тех, кто хочет системный подход с полным контролем и максимальным результатом. Работаю как часть вашей команды, беру на себя все процессы по продажам и сервису.'
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
                    {service.duration && (
                      <div className="text-sm font-semibold text-muted-foreground">{service.duration}</div>
                    )}
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

          <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Альтернативный формат — онлайн-курсы</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Если вам нужны базовые тренинги или у вас ограниченный бюджет, предлагаю качественные <strong>онлайн-курсы по ключевым темам</strong>: основы профессионального сервиса, работа с конфликтными гостями, техники продаж и допродаж, стандарты обслуживания. 
            </p>
            <p className="text-primary font-semibold mt-4">
              Бонус: доступ на месяц в закрытое сообщество с дополнительными материалами
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;