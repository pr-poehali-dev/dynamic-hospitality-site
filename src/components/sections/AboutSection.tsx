import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AboutSectionProps {
  scrollToSection: (id: string) => void;
}

const AboutSection = ({ scrollToSection }: AboutSectionProps) => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto animate-slide-up">
          <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/files/ec636e5f-8860-4ed3-a14e-094d8acd3c94.png" 
              alt="Марина" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl font-black text-foreground">Привет, я Марина.</h2>
            <div className="space-y-4 text-foreground/90 text-lg">
              <p>
                Я эксперт по продажам и сервису в HoReCa. 10+ лет в индустрии гостеприимства.
              </p>
              <p>
                Помогаю владельцам и управляющим собрать систему, где персонал не просто обслуживает — а продаёт, вовлекает и создаёт настроение вечера.
              </p>
              <p>
                Мои сильные стороны: стратегия, живые сценарии общения, «полевое» внедрение, обучение команды.
              </p>
              <p className="font-semibold">
                Работаю бережно к атмосфере места и строго к результату.
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <Icon name="Utensils" className="text-primary" size={20} />
                <span className="text-foreground">Рестораны, клубы, отели</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="TrendingUp" className="text-primary" size={20} />
                <span className="text-foreground">Рост среднего чека и повторных визитов</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Users" className="text-primary" size={20} />
                <span className="text-foreground">Наставничество в смене</span>
              </div>
            </div>
            <Button size="lg" className="mt-6" onClick={() => scrollToSection('services')}>
              Посмотреть услуги
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
