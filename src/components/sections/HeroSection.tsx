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
          
          <h1 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
            Эксперт по трансформации ресторанного бизнеса: <span className="text-primary">продажи и сервис в HoReCa</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Рост среднего чека на 30% возможен даже без изменения меню и повышения цен. Авторский подход и уникальная методика работы.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-semibold" 
              onClick={() => scrollToSection('contact')}
            >
              Бесплатная консультация
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 font-semibold border-2" 
              onClick={() => scrollToSection('results')}
            >
              Смотреть результаты
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;