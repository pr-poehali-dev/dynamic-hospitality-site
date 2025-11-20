import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'audit',
      icon: 'Search',
      title: 'Аудит "ДНК"',
      price: 'от 60 000₽',
      duration: '5-7 дней',
      shortDesc: 'Глубокий анализ всех аспектов вашего бизнеса',
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
      fullDesc: 'Это не просто проверка, а комплексное погружение во все процессы вашего ресторана. Я изучаю каждый аспект, выявляю скрытые проблемы и создаю индивидуальную стратегию роста. Тайные визиты невозможно вычислить — гарантирую объективную оценку.',
      color: 'from-rose-500 to-pink-600',
      results: [
        'Понимание реального состояния бизнеса',
        'Конкретный план действий на 6-12 месяцев',
        'Выявление скрытых проблем и точек роста',
        'Готовые чек-листы для внедрения'
      ]
    },
    {
      id: 'training',
      icon: 'GraduationCap',
      title: 'Авторский тренинг',
      price: 'от 25 000₽',
      duration: '1 день',
      shortDesc: 'Один авторский тренинг по выбранной вами теме',
      isHit: true,
      features: [
        'Выбор темы: продажи, сервис, винный этикет, конфликты',
        'До 15 человек в группе',
        '6-8 часов интенсивной работы',
        'Практика на реальных кейсах',
        'Рабочие материалы и шаблоны',
        'Проверка знаний после тренинга',
        'Сертификаты участникам'
      ],
      fullDesc: 'Идеально для точечного усиления команды по конкретной теме. Можно заказать как отдельно, так и курсом из нескольких тренингов.',
      color: 'from-amber-500 to-orange-600',
      results: [
        'Команда освоит конкретные техники продаж',
        'Рост среднего чека от 15% за месяц',
        'Готовые скрипты для работы с гостями',
        'Сертификаты для мотивации персонала'
      ]
    },
    {
      id: 'intensive',
      icon: 'Zap',
      title: 'Интенсив "7 дней"',
      price: 'от 120 000₽',
      duration: '7 дней',
      shortDesc: 'Комплексная трансформация команды за неделю',
      features: [
        'Полная диагностика команды',
        'Ежедневные тренинги по 6 часов',
        'Индивидуальная работа с каждым',
        'Разработка скриптов продаж',
        'Ролевые игры и практика',
        '30 дней поддержки после',
        'Гарантия роста чека от 20%'
      ],
      fullDesc: 'Авторская методика 2025 года. За 7 дней полностью перестраиваю подход команды к продажам. Интенсивная работа каждый день с каждым участником.',
      color: 'from-purple-500 to-violet-600',
      results: [
        'Полная трансформация подхода команды',
        'Рост среднего чека от 20-30%',
        'Работающие скрипты продаж',
        '30 дней поддержки после интенсива'
      ]
    },
    {
      id: 'support',
      icon: 'LineChart',
      title: 'Полное сопровождение',
      price: 'от 180 000₽/мес',
      duration: 'от 3 месяцев',
      shortDesc: 'Становлюсь вашим внешним директором по продажам',
      features: [
        'Поддержка 24/7',
        'Найм и обучение персонала',
        'Контроль качества работы',
        'Внедрение системы KPI',
        'Создание стандартов обслуживания',
        'Рост на 35-60% за квартал'
      ],
      fullDesc: 'Для тех, кто хочет системный подход с полным контролем и максимальным результатом. Работаю как часть вашей команды, беру на себя все процессы по продажам и сервису.',
      color: 'from-teal-500 to-cyan-600',
      results: [
        'Системный рост выручки 35-60% за квартал',
        'Полный контроль качества сервиса',
        'Экономия времени владельца',
        'Построение работающей системы продаж'
      ]
    }
  ];

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Helmet>
        <title>Услуги | MARICO PRO - Консультант по увеличению продаж в ресторанах</title>
        <meta name="description" content="Аудит, тренинги, интенсив 7 дней, полное сопровождение. Выберите формат работы для вашего ресторана. 15 лет опыта в премиум HoReCa." />
      </Helmet>

      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-amber-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-white hover:text-amber-400 transition-colors">
              MARICO PRO
            </Link>
            <Button asChild variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white">
              <Link to="/">← Назад на главную</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
              Услуги и программы
            </h1>
            <p className="text-xl text-amber-400 max-w-3xl mx-auto">
              От точечного обучения до полного сопровождения — выберите формат, который подходит вашему бизнесу
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service) => (
              <Card 
                key={service.id}
                className="border-2 border-amber-500/30 bg-slate-800/50 backdrop-blur-sm hover:border-amber-500 transition-all duration-300 relative overflow-hidden"
              >
                {service.isHit && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-lg z-10 animate-pulse">
                    ХИТ 🔥
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <Icon name={service.icon} className="text-white" size={32} />
                        </div>
                        
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                          <p className="text-lg text-slate-300">{service.shortDesc}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <span className="text-2xl font-black text-amber-400">{service.price}</span>
                            <span className="text-sm text-slate-400 font-semibold">{service.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className={`p-6 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                        <p className="text-base leading-relaxed">
                          {service.fullDesc}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-bold text-white text-sm uppercase tracking-wide">Результат:</h3>
                        {service.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
                            <span className="text-base text-slate-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="font-bold text-white text-sm uppercase tracking-wide">Что входит:</h3>
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        size="lg"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold"
                        onClick={scrollToContact}
                      >
                        Записаться на консультацию
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6 pt-8">
            <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-amber-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Не уверены, какой формат выбрать?
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Запишитесь на бесплатную консультацию — я помогу подобрать оптимальное решение для вашего ресторана
              </p>
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold">
                <Link to="/contact">Записаться на консультацию</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
