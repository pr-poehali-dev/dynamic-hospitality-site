import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProblemsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const problems = [
    {
      icon: 'TrendingDown',
      title: 'Низкий средний чек',
      description: 'Гости уходят, заказав только основное блюдо. Персонал не умеет продавать допродажи',
      solution: 'Обучаю техникам ненавязчивых допродаж, создаю скрипты под ваше меню',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: 'UserX',
      title: 'Высокая текучка кадров',
      description: 'Официанты увольняются каждый месяц. Постоянный набор и обучение новичков',
      solution: 'Выстраиваю корпоративную культуру, систему мотивации и развития персонала',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: 'Star',
      title: 'Плохие отзывы и низкий рейтинг',
      description: 'Негативные комментарии в интернете отпугивают новых гостей',
      solution: 'Анализирую причины, внедряю стандарты сервиса, обучаю работе с отзывами',
      color: 'from-yellow-500 to-lime-500'
    },
    {
      icon: 'Users',
      title: 'Немотивированная команда',
      description: 'Персонал работает "для галочки", без души и инициативы',
      solution: 'Создаю систему KPI, обучаю управляющих правильной мотивации без давления',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: 'AlertCircle',
      title: 'Сервис не соответствует ценнику',
      description: 'Премиум-заведение с обычным уровнем обслуживания. Гости не возвращаются',
      solution: 'Разрабатываю стандарты премиум-сервиса, обучаю тонкостям работы с VIP-гостями',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: 'BarChart3',
      title: 'Маркетинг не приносит результата',
      description: 'Тратите бюджет на рекламу, но новых гостей мало или они не возвращаются',
      solution: 'Аудирую каналы привлечения, оптимизирую воронку продаж, работаю с retention',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl font-black text-foreground">Чем я могу помочь</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Решаю типичные проблемы ресторанного бизнеса системно и с гарантией результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className={`border-2 cursor-pointer transition-all duration-300 ${
                  activeIndex === index 
                    ? 'border-primary shadow-2xl scale-105' 
                    : 'hover:border-primary/50 hover:shadow-lg'
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center`}>
                    <Icon name={problem.icon} className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">{problem.title}</h3>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-foreground text-sm leading-relaxed font-medium">
                      {problem.description}
                    </p>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t-2 border-primary/30 mt-4 bg-primary/5 p-4 rounded-lg">
                      <div className="flex items-start gap-2 mb-2">
                        <Icon name="Lightbulb" size={20} className="flex-shrink-0 mt-0.5 text-primary" />
                        <span className="text-xs font-bold text-primary uppercase tracking-wide">Решение</span>
                      </div>
                      <p className="text-sm font-semibold text-foreground leading-relaxed">
                        {problem.solution}
                      </p>
                    </div>
                  </div>

                  <button 
                    className="flex items-center justify-center gap-2 w-full text-sm text-primary font-bold hover:text-primary/80 transition-colors py-2 px-4 rounded-lg bg-primary/5 hover:bg-primary/10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(activeIndex === index ? null : index);
                    }}
                  >
                    <span>{activeIndex === index ? 'Скрыть решение' : 'Показать решение'}</span>
                    <Icon 
                      name={activeIndex === index ? 'ChevronUp' : 'ChevronDown'} 
                      size={18} 
                      className="transition-transform"
                    />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;