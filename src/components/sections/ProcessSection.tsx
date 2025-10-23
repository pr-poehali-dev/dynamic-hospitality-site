import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ProcessSectionProps {
  scrollToSection: (id: string) => void;
}

const ProcessSection = ({ scrollToSection }: ProcessSectionProps) => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-5xl font-black text-center text-foreground">Как мы работаем</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                icon: 'MessageSquare',
                title: 'Знакомство',
                desc: 'Обсуждаем задачу, боли, цели. Смотрим, подходим ли друг другу.'
              },
              {
                step: '02',
                icon: 'Search',
                title: 'Аудит',
                desc: 'Анализирую процессы, меню, команду. Выявляю точки роста.'
              },
              {
                step: '03',
                icon: 'Settings',
                title: 'Внедрение',
                desc: 'Обучение, полевая работа, отладка. Всё — в реальной смене.'
              },
              {
                step: '04',
                icon: 'LineChart',
                title: 'Результат',
                desc: 'Передаю вам инструменты. Вы можете вести систему дальше сами.'
              }
            ].map((item, i) => (
              <Card key={i} className="relative border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-white font-black text-xl flex items-center justify-center">
                  {item.step}
                </div>
                <CardContent className="p-6 space-y-4 pt-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/80">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" onClick={() => scrollToSection('contact')}>
              Начать работу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
