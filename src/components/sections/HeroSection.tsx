import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-primary/20 to-slate-800">
      <div className="absolute inset-0">
        <img 
          src="https://cdn.poehali.dev/files/5ae80724-43ec-4258-b040-d890a18250cc.png" 
          alt="Марина MARICO PRO" 
          className="w-full h-full object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-primary/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-amber-400/90 backdrop-blur-sm rounded-full shadow-lg">
            <p className="text-slate-900 font-bold text-xs tracking-wider">15 ЛЕТ В ПРЕМИУМ HoReCa</p>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl">
              Ваши официанты не умеют продавать
            </h1>
            
            <p className="text-xl sm:text-2xl text-amber-400 font-semibold drop-shadow-lg">
              А должны приносить +5 млн ₽ к выручке в год
            </p>
          </div>
          
          <div className="space-y-3 text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-lg">
            <p className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-xl">→</span>
              <span><strong className="text-white">Для собственников ресторанов и управляющих</strong>, которые хотят увеличить средний чек без затрат на рекламу</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-xl">→</span>
              <span><strong className="text-white">Обучаю вашу команду техникам продаж</strong> через авторскую методику на основе 15 лет в Marriott, Radisson, Four Seasons</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-xl">→</span>
              <span><strong className="text-white">Сервис становится продажей</strong> — мягко, естественно, без давления на гостей</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 font-semibold shadow-xl hover:scale-105 transition-transform bg-amber-500 hover:bg-amber-600 text-slate-900" 
              onClick={() => scrollToSection('contact')}
            >
              Записаться на консультацию
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base px-8 py-6 font-semibold shadow-xl hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white/20" 
              onClick={() => scrollToSection('services')}
            >
              Смотреть программы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;