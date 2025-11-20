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
          <div className="inline-block px-4 py-2 bg-amber-500 backdrop-blur-sm rounded-full shadow-lg border-2 border-white">
            <p className="text-white font-bold text-sm tracking-wider">💎 ЭКСПЕРТ ПРЕМИУМ HoReCa</p>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl">
              Прокачаю твой персонал
            </h1>
            
            <p className="text-2xl sm:text-3xl text-amber-400 font-bold drop-shadow-lg">
              +5 млн к выручке. Без рекламы
            </p>
            
            <p className="text-lg sm:text-xl text-white/90 drop-shadow-lg">
              <span className="text-amber-400 font-bold">Для кого:</span> Собственники и управленцы ресторанов, баров, клубов
            </p>
            
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3">
              <p className="text-base sm:text-lg text-white font-semibold">
                🚀 Метод: Интенсив «7 дней» — полная трансформация команды
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 font-semibold shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white" 
              onClick={() => scrollToSection('gift')}
            >
              🎁 Забрать подарок
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base px-8 py-6 font-semibold shadow-xl hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white/20" 
              onClick={() => scrollToSection('contact')}
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
      
      {/* Мигающие стрелочки для прокрутки */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={() => scrollToSection('gift')}
          className="flex flex-col items-center gap-2 text-white hover:text-amber-400 transition-colors"
          aria-label="Прокрутить вниз"
        >
          <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <svg className="w-8 h-8 animate-pulse" style={{ animationDelay: '0.2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;