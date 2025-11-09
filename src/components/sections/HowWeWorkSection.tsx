import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HowWeWorkSection = () => {
  const steps = [
    {
      number: '1',
      icon: 'Phone',
      title: 'Первичная консультация',
      description: 'Бесплатно, 30 минут. Обсудим вашу ситуацию',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      number: '2',
      icon: 'Search',
      title: 'Диагностика',
      description: 'Приезжаю, смотрю работу, общаюсь с командой',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      number: '3',
      icon: 'FileText',
      title: 'Предложение',
      description: 'План работы + цена + сроки + гарантии',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      number: '4',
      icon: 'GraduationCap',
      title: 'Обучение',
      description: 'Тренинг/аудит/сопровождение по выбранному формату',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      number: '5',
      icon: 'TrendingUp',
      title: 'Результат',
      description: 'Замеры чека, фидбек, корректировки',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      number: '6',
      icon: 'MessageCircle',
      title: 'Поддержка',
      description: '30 дней на связи после тренинга',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600'
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-foreground">
              Как мы будем работать
            </h2>
            <p className="text-xl text-muted-foreground">
              Прозрачный процесс от знакомства до результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-8xl font-black text-muted-foreground/5 pr-4 pt-2">
                  {step.number}
                </div>
                <CardContent className="p-8 space-y-4 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center`}>
                    <Icon name={step.icon} className={step.iconColor} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
