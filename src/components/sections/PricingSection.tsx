import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PricingSectionProps {
  scrollToSection: (id: string) => void;
}

const PricingSection = ({ scrollToSection }: PricingSectionProps) => {
  const plans = [
    {
      name: 'АУДИТ',
      price: 'от 60,000₽',
      duration: '5-7 дней',
      description: 'Для тех, кто хочет понять корень проблем',
      popular: false,
      features: [
        { text: 'Глубокая диагностика', included: true },
        { text: 'Детальный отчет (30 стр)', included: true },
        { text: 'План исправлений', included: true },
        { text: 'Обучение персонала', included: false },
        { text: 'Личное сопровождение', included: false },
        { text: 'Регулярные встречи', included: false },
      ],
      result: 'Точный диагноз и план действий',
      badge: null
    },
    {
      name: 'ТРЕНИНГ',
      price: 'от 80,000₽',
      duration: '2-3 дня + поддержка',
      description: 'Для команды, готовой внедрять изменения',
      popular: true,
      features: [
        { text: 'Экспресс-аудит', included: true },
        { text: 'Краткий отчет (10 стр)', included: true },
        { text: 'Обучение персонала', included: true },
        { text: 'Скрипты продаж', included: true },
        { text: 'Поддержка 30 дней', included: true },
        { text: 'Регулярные встречи', included: false },
      ],
      result: '+15-25% к среднему чеку за 2 месяца',
      badge: '⭐ САМЫЙ ПОПУЛЯРНЫЙ'
    },
    {
      name: 'FULL СОПРОВОЖДЕНИЕ',
      price: 'от 180,000₽/мес',
      duration: 'от 3 месяцев',
      description: 'Для тех, кто хочет системной трансформации',
      popular: false,
      features: [
        { text: 'Полный аудит ДНК', included: true },
        { text: 'Развернутый отчет (30+ стр)', included: true },
        { text: 'Обучение + переобучение', included: true },
        { text: 'Еженедельные встречи', included: true },
        { text: 'Безлимитные консультации', included: true },
        { text: 'Контроль внедрения', included: true },
      ],
      result: '+30% к выручке за 3 месяца',
      badge: null
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-foreground">
              Что вы получите (и сколько на этом заработаете)
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите формат, который подходит вашей ситуации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? 'border-4 border-amber-500 shadow-2xl scale-105 z-10' 
                    : 'border-2 border-border hover:border-primary hover:shadow-xl'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900 px-6 py-2 font-black text-sm shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-foreground">{plan.name}</h3>
                    <p className="text-muted-foreground font-medium">{plan.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-primary">{plan.price}</span>
                    </div>
                    <div className="text-sm text-muted-foreground font-bold">
                      {plan.duration}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                        ) : (
                          <Icon name="X" className="text-slate-300 flex-shrink-0 mt-0.5" size={20} />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 p-4 rounded-xl">
                    <p className="text-xs font-bold text-green-900 mb-1">РЕАЛИСТИЧНЫЙ РЕЗУЛЬТАТ:</p>
                    <p className="text-sm font-black text-green-700">{plan.result}</p>
                  </div>

                  <Button 
                    size="lg" 
                    className={`w-full font-black text-lg py-6 ${
                      plan.popular 
                        ? 'bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-xl' 
                        : ''
                    }`}
                    onClick={() => scrollToSection('contact')}
                  >
                    {plan.popular ? 'ВЫБРАТЬ ⭐' : 'ВЫБРАТЬ'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-amber-500 bg-amber-50">
            <CardContent className="p-8 text-center">
              <p className="text-lg font-bold text-amber-900 mb-4">
                💡 НЕ УВЕРЕНЫ, ЧТО ВЫБРАТЬ?
              </p>
              <p className="text-foreground mb-6">
                Начните с <span className="font-black">экспресс-диагностики за 35,000₽</span> — приеду на 1 день, дам обратную связь и рекомендации. Потом решите, нужно ли продолжать.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="font-bold border-2 border-amber-600 text-amber-900 hover:bg-amber-100"
                onClick={() => scrollToSection('contact')}
              >
                Заказать экспресс-диагностику
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
