import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  duration: string;
  icon: string;
  includes: string[];
  result: string;
  forWhom: string;
}

interface Package {
  id: string;
  title: string;
  badge?: string;
  forWhom: string;
  includes: string[];
  result: string;
  duration: string;
  guarantee?: string;
}

const services: Service[] = [
  {
    id: 'consultation',
    title: 'Бесплатная консультация',
    shortDesc: 'Точка входа для знакомства и понимания, как я могу помочь',
    duration: '30-40 минут',
    icon: 'MessageCircle',
    includes: [
      'Знакомство с бизнесом',
      'Выявление главной проблемы',
      'Экспресс-рекомендации',
      'Подбор формата работы'
    ],
    result: 'Понимание, как я могу помочь (без обязательств)',
    forWhom: 'Все сегменты'
  },

  {
    id: 'audit',
    title: 'Аудит системы продаж',
    shortDesc: 'Понимание, что мешает продажам + план действий',
    duration: '1-2 дня',
    icon: 'Search',
    includes: [
      'Анализ меню (что продаёт, что нет)',
      'Наблюдение за работой персонала',
      'Оценка процессов обслуживания',
      'Выявление точек роста выручки',
      'Подробный отчёт с рекомендациями'
    ],
    result: 'Понимание, что мешает продажам + план действий',
    forWhom: 'Владельцы, управляющие'
  },
  {
    id: 'system',
    title: 'Разработка системы продаж',
    shortDesc: 'Готовая система продаж "под ключ" за 2-3 недели',
    duration: '2-3 недели',
    icon: 'Settings',
    includes: [
      'Аудит (меню, персонал, процессы)',
      'Создание индивидуальной системы под ваше заведение',
      'Разработка скриптов и фраз',
      'Чек-листы для контроля',
      'Презентация системы команде'
    ],
    result: 'Готовая система продаж "под ключ"',
    forWhom: 'Владельцы, управляющие'
  },
  {
    id: 'full-support',
    title: 'Сопровождение "Под ключ"',
    shortDesc: 'Система работает автономно, +35-40% к выручке',
    duration: 'От 1 месяца',
    icon: 'Zap',
    includes: [
      'Всё из "Разработки системы продаж"',
      'Обучение команды',
      'Внедрение системы',
      'Еженедельный контроль результатов',
      'Корректировка процессов',
      'Поддержка в чате'
    ],
    result: 'Система работает автономно, +35-40% к выручке',
    forWhom: 'Владельцы (кто хочет систему, которая работает без контроля)'
  },
  {
    id: 'manager-support',
    title: 'Сопровождение управляющего',
    shortDesc: 'Команда слушается и работает с душой',
    duration: 'От 1 месяца',
    icon: 'UserCheck',
    includes: [
      'Обучение управлению без давления',
      'Инструменты мотивации команды',
      'Система обратной связи',
      'Разруливание конфликтов',
      'Еженедельные созвоны',
      'Поддержка в чате'
    ],
    result: 'Команда слушается и работает с душой',
    forWhом: 'Управляющие'
  },
  {
    id: 'premium',
    title: 'Премиум-сопровождение',
    shortDesc: 'WOW-сервис, возврат гостей ×2-3 раза',
    duration: 'От 3 месяцев',
    icon: 'Crown',
    includes: [
      'Индивидуальная работа с каждым сотрудником',
      'Обучение тонкостям премиум-сервиса',
      'Разработка стандартов обслуживания',
      'Незаметные техники продаж',
      'Ежедневная поддержка',
      'Безлимитные консультации'
    ],
    result: 'WOW-сервис, возврат гостей ×2-3 раза',
    forWhom: 'Отели, частные клубы, премиум-заведения'
  }
];

const packages: Package[] = [
  {
    id: 'start',
    title: 'Пакет "Старт"',
    forWhom: 'Тех, кто хочет попробовать без больших вложений',
    includes: [
      'Бесплатная консультация',
      'Аудит системы продаж (1 день)',
      'Отчёт с рекомендациями',
      'Чек-лист для внедрения',
      '1 неделя поддержки в чате'
    ],
    result: 'Понимание проблем + план действий',
    duration: '1-2 недели'
  },
  {
    id: 'standard',
    title: 'Пакет "Стандарт"',
    badge: '⭐ ТОП-2',
    forWhom: 'Тех, кто готов работать над результатом',
    includes: [
      'Бесплатная консультация',
      'Полный аудит (меню, персонал, процессы)',
      'Разработка системы продаж под ваше заведение',
      'Тренинг для команды (1 день, 2-4 часа)',
      'Готовые скрипты и фразы',
      'Чек-листы для контроля',
      '2 недели сопровождения после внедрения',
      'Поддержка в чате'
    ],
    result: 'Работающая система + обученная команда',
    duration: '1 месяц',
    guarantee: '+15-20% к чеку или доработка бесплатно'
  },
  {
    id: 'premium',
    title: 'Пакет "Премиум"',
    badge: '🏆 МАКСИМУМ',
    forWhom: 'Тех, кто хочет максимальный результат с гарантией',
    includes: [
      'Бесплатная консультация',
      'Глубокий аудит (3 дня наблюдения)',
      'Разработка индивидуальной системы продаж',
      '2 тренинга для команды (базовый + продвинутый)',
      'Индивидуальная работа с управляющим',
      'Внедрение системы с моим участием',
      '3 месяца полного сопровождения',
      'Еженедельные встречи/созвоны',
      'Безлимитная поддержка в чате',
      'Корректировка системы по результатам',
      'Контрольный аудит через 3 месяца'
    ],
    result: 'Автономная система продаж, которая работает без вас',
    duration: '3 месяца',
    guarantee: '+30-35% к выручке или возврат 50% стоимости'
  }
];

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [showPackages, setShowPackages] = useState(false);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-foreground">Услуги</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              От бесплатной консультации до долгосрочного сопровождения — выбирайте формат под свои задачи
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant={!showPackages ? 'default' : 'outline'}
              onClick={() => setShowPackages(false)}
              size="lg"
            >
              <Icon name="List" className="mr-2" size={20} />
              Разовые услуги
            </Button>
            <Button 
              variant={showPackages ? 'default' : 'outline'}
              onClick={() => setShowPackages(true)}
              size="lg"
            >
              <Icon name="Package" className="mr-2" size={20} />
              Пакеты услуг
            </Button>
          </div>

          {!showPackages ? (
            <div className="space-y-6">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  className={`border-2 transition-all duration-300 ${
                    expandedService === service.id ? 'border-primary shadow-xl' : 'hover:border-primary/50'
                  }`}
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleService(service.id)}
                      className="w-full p-8 text-left transition-all duration-300 hover:bg-primary/5"
                    >
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          expandedService === service.id ? 'bg-primary' : 'bg-primary/20'
                        }`}>
                          <Icon 
                            name={service.icon} 
                            className={expandedService === service.id ? 'text-white' : 'text-primary'} 
                            size={32} 
                          />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-3xl font-black text-foreground">{service.title}</h3>
                              <p className="text-sm text-primary font-semibold mt-1">{service.duration}</p>
                            </div>
                            <Icon 
                              name={expandedService === service.id ? 'ChevronUp' : 'ChevronDown'}
                              className="text-primary flex-shrink-0" 
                              size={28} 
                            />
                          </div>
                          <p className="text-foreground/80 text-lg">{service.shortDesc}</p>
                        </div>
                      </div>
                    </button>

                    {expandedService === service.id && (
                      <div className="px-8 pb-8 space-y-6 animate-fade-in">
                        <div className="h-px bg-border my-4" />
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <Card className="bg-background border-l-4 border-l-primary">
                            <CardContent className="p-6 space-y-3">
                              <h4 className="font-bold text-foreground flex items-center gap-2">
                                <Icon name="CheckCircle" className="text-primary" size={20} />
                                Что включает:
                              </h4>
                              <ul className="space-y-2">
                                {service.includes.map((item, index) => (
                                  <li key={index} className="text-foreground/70 flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>

                          <div className="space-y-4">
                            <Card className="bg-primary/5 border-primary/30">
                              <CardContent className="p-6 space-y-2">
                                <h4 className="font-bold text-foreground flex items-center gap-2">
                                  <Icon name="Target" className="text-primary" size={20} />
                                  Результат:
                                </h4>
                                <p className="text-foreground/80">{service.result}</p>
                              </CardContent>
                            </Card>

                            <Card className="bg-background">
                              <CardContent className="p-6 space-y-2">
                                <h4 className="font-bold text-foreground flex items-center gap-2">
                                  <Icon name="Users" className="text-primary" size={20} />
                                  Для кого:
                                </h4>
                                <p className="text-foreground/70">{service.forWhom}</p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button 
                            onClick={() => window.location.href = '#contact'}
                            size="lg"
                            className="w-full md:w-auto"
                          >
                            <Icon name="MessageCircle" className="mr-2" size={20} />
                            Записаться на консультацию
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  className={`relative border-2 transition-all duration-300 hover:border-primary hover:shadow-xl ${
                    pkg.badge ? 'border-primary' : ''
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      {pkg.badge}
                    </div>
                  )}
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-foreground">{pkg.title}</h3>
                      <p className="text-sm text-foreground/60">{pkg.forWhom}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">
                        Что включает:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, index) => (
                          <li key={index} className="text-foreground/70 text-sm flex items-start gap-2">
                            <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="TrendingUp" className="text-primary" size={16} />
                        <span className="font-semibold text-foreground">{pkg.result}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Icon name="Clock" className="text-primary" size={16} />
                        <span>{pkg.duration}</span>
                      </div>
                      {pkg.guarantee && (
                        <div className="flex items-start gap-2 text-sm text-primary font-semibold">
                          <Icon name="Shield" className="flex-shrink-0 mt-0.5" size={16} />
                          <span>{pkg.guarantee}</span>
                        </div>
                      )}
                    </div>

                    <Button 
                      onClick={() => window.location.href = '#contact'}
                      className="w-full"
                      variant={pkg.badge ? 'default' : 'outline'}
                    >
                      Обсудить пакет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-black text-foreground">
                    Не нашли подходящий формат?
                  </h3>
                  <p className="text-foreground/80">
                    Я создаю индивидуальные программы под конкретные задачи вашего бизнеса. 
                    Можем комбинировать услуги или разработать что-то уникальное.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '#contact'}
                    size="lg"
                    variant="outline"
                  >
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Обсудить индивидуальный формат
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;