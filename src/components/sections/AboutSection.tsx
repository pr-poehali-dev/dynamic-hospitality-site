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
                <strong>13 лет в общепите.</strong> С 2012 года работаю в ресторанном бизнесе: от официантки до управляющей. Прошла путь изнутри — в премиальных ресторанах, международных отелях (Marriott, Hilton, Four Seasons, Radisson), руководила сигарными и закрытыми клубами, создавала уникальные концепции и форматы.
              </p>
              <p>
                <strong>С 2020 года — эксперт по развитию сервиса и продаж.</strong> Моя уникальность — я анализирую глубже. Я не работаю по шаблонам. Перед каждым тренингом изучаю каждого участника команды: выявляю сильные и слабые стороны, нахожу общий язык, понимаю корни проблем.
              </p>
              <p>
                Моя задача — найти корень любой проблемы и либо вырастить его, либо удалить. Я не продаю мотивационные речи. Я создаю фундамент для вашего роста.
              </p>
              <p className="font-semibold text-primary text-xl">
                После моей работы остается не просто впечатление — остается работающая система, обученная команда, выстроенные процессы и, самое главное, измеримый результат в деньгах.
              </p>
            </div>
            <div className="space-y-3 pt-4 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <Icon name="Award" className="text-primary" size={22} />
                <span className="text-foreground"><strong>50+ заведений</strong> успешно проработанных проектов</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="TrendingUp" className="text-primary" size={22} />
                <span className="text-foreground"><strong>+30-50%</strong> роста чека в среднем за квартал</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="GraduationCap" className="text-primary" size={22} />
                <span className="text-foreground">Международные сертификаты и дипломы в сфере HoReCa</span>
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