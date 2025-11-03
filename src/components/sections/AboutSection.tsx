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
                Эксперт по продажам, психологии и коммуникации в ресторанном бизнесе. 
                За 10+ лет помогла 200+ заведениям увеличить выручку и выстроить системы продаж.
              </p>
              <p>
                <strong>Моя суперсила</strong> — я разбираюсь в людях. Работаю с психологией персонала и гостей, 
                выстраиваю коммуникацию и управление командой, мотивирую без давления.
              </p>
              <p>
                Благодаря постоянному обучению и развитию адаптируюсь под любой сегмент: 
                от семейных кафе до премиум-ресторанов, отелей и клубов.
              </p>
              <p className="font-semibold text-primary">
                Погружаюсь в ваш бизнес. Создаю решения под вас. Работаю до результата.
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <Icon name="Users" className="text-primary" size={20} />
                <span className="text-foreground"><strong>200+ заведений</strong> — клиентов по всей России</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="TrendingUp" className="text-primary" size={20} />
                <span className="text-foreground"><strong>+35-40%</strong> к выручке за первый месяц</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Target" className="text-primary" size={20} />
                <span className="text-foreground"><strong>-35%</strong> текучки персонала</span>
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