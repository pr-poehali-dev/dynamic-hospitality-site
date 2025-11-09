import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HowWeWorkSection = () => {
  const steps = [
    {
      number: '1',
      icon: 'Phone',
      title: 'Первичная консультация',
      description: 'Бесплатно, 30 минут. Обсудим вашу ситуацию',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      number: '2',
      icon: 'Search',
      title: 'Диагностика',
      description: 'Приезжаю, смотрю работу, общаюсь с командой',
      color: 'from-purple-500 to-violet-600'
    },
    {
      number: '3',
      icon: 'FileText',
      title: 'Предложение',
      description: 'План работы + цена + сроки + гарантии',
      color: 'from-orange-500 to-amber-600'
    },
    {
      number: '4',
      icon: 'GraduationCap',
      title: 'Обучение',
      description: 'Тренинг/аудит/сопровождение по выбранному формату',
      color: 'from-green-500 to-emerald-600'
    },
    {
      number: '5',
      icon: 'TrendingUp',
      title: 'Результат',
      description: 'Замеры чека, фидбек, корректировки',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      number: '6',
      icon: 'MessageCircle',
      title: 'Поддержка',
      description: '30 дней на связи после тренинга',
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-foreground">
              Как мы будем работать
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс от знакомства до результата
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[4.5rem] left-[8%] right-[8%] h-1">
              <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <Card 
                  key={index}
                  className="border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden bg-card group"
                >
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${step.color} opacity-10 rounded-full transform group-hover:scale-150 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  <CardContent className="p-8 space-y-5 relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={step.icon} className="text-white" size={36} />
                      </div>
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-white text-3xl font-black">{step.number}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-foreground">{step.title}</h3>
                    
                    <div className="bg-muted/50 p-5 rounded-xl border-2 border-border/50">
                      <p className="text-foreground leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center pt-4">
                        <Icon name="ArrowDown" className="text-primary animate-bounce" size={24} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
