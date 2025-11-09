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
            
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
              <p className="text-foreground text-lg font-semibold">
                13 лет в общепите. Работала только в премиальных ресторанах, международных отелях: Marriott, Hilton, Four Seasons, Radisson.
              </p>
            </div>

            <div className="space-y-4 text-foreground/90 text-lg">
              <p>
                Прошла путь от официантки до управляющей. Руководила сигарными и закрытыми клубами, создавала уникальные концепции и форматы. <strong>С 2020 года стала уникальным специалистом по развитию сервиса и продаж.</strong>
              </p>
              
              <div className="bg-card border-2 border-border p-6 rounded-xl space-y-3">
                <h3 className="text-xl font-bold text-primary">Мои ключевые особенности:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Анализирую намного глубже — изучаю каждого участника, выявляю сильные и слабые стороны</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Довожу поставленный результат до конца — моя задача найти корни любой проблемы и либо вырастить их, либо удалить</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Обучаю только тому, что действительно нужно — если нужно научить разбираться в психологии гостей, значит этому; если меню — значит меню</span>
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-xl text-foreground">
                На моих плечах <span className="text-primary text-2xl">50+ заведений</span>, с которыми я проработала. Имею международные сертификаты и дипломы в гостеприимстве и сфере HoReCa.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary p-6 rounded-xl">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>После моей работы остается не просто впечатление</strong> — остается работающая система, обученная команда, выстроенные процессы и, самое главное, <strong className="text-primary text-xl">измеримый результат в деньгах.</strong>
              </p>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1" onClick={() => scrollToSection('contact')}>
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="flex-1 border-2" onClick={() => scrollToSection('services')}>
                Посмотреть услуги
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;