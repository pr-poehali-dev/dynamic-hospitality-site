import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://cdn.poehali.dev/files/5ae80724-43ec-4258-b040-d890a18250cc.png" 
          alt="Марина MARICO PRO" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <p className="text-primary font-semibold text-sm">13 лет опыта • 50+ успешных проектов • Гарантия результата</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
            Ваши официанты работают на автопилоте?
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary font-black">
            Увеличу средний чек на 30% за 3 месяца
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Или верну деньги. Системный подход к обучению персонала HoReCa. Без шаблонов и волшебных таблеток — только проверенные методики.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 font-bold shadow-2xl hover:scale-105 transition-transform" 
              onClick={() => scrollToSection('contact')}
            >
              ПОЛУЧИТЬ АУДИТ
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 font-bold border-2" 
              onClick={() => scrollToSection('results')}
            >
              Смотреть кейсы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;