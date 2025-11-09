import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProblemsSection = () => {
  const problems = [
    {
      icon: 'TrendingDown',
      title: 'Низкий средний чек',
      description: 'Гости уходят, заказав только основное блюдо. Персонал не умеет продавать допродажи',
      solution: 'Обучаю техникам ненавязчивых допродаж, создаю скрипты под ваше меню'
    },
    {
      icon: 'UserX',
      title: 'Высокая текучка кадров',
      description: 'Официанты увольняются каждый месяц. Постоянный набор и обучение новичков',
      solution: 'Выстраиваю корпоративную культуру, систему мотивации и развития персонала'
    },
    {
      icon: 'Star',
      title: 'Плохие отзывы и низкий рейтинг',
      description: 'Негативные комментарии в интернете отпугивают новых гостей',
      solution: 'Анализирую причины, внедряю стандарты сервиса, обучаю работе с отзывами'
    },
    {
      icon: 'Users',
      title: 'Немотивированная команда',
      description: 'Персонал работает "для галочки", без души и инициативы',
      solution: 'Создаю систему KPI, обучаю управляющих правильной мотивации без давления'
    },
    {
      icon: 'AlertCircle',
      title: 'Сервис не соответствует ценнику',
      description: 'Премиум-заведение с обычным уровнем обслуживания. Гости не возвращаются',
      solution: 'Разрабатываю стандарты премиум-сервиса, обучаю тонкостям работы с VIP-гостями'
    },
    {
      icon: 'BarChart3',
      title: 'Маркетинг не приносит результата',
      description: 'Тратите бюджет на рекламу, но новых гостей мало или они не возвращаются',
      solution: 'Аудирую каналы привлечения, оптимизирую воронку продаж, работаю с retention'
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
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={problem.icon} className="text-primary" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">{problem.title}</h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary flex items-start gap-2">
                      <Icon name="CheckCircle2" size={18} className="flex-shrink-0 mt-0.5" />
                      <span>{problem.solution}</span>
                    </p>
                  </div>
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
