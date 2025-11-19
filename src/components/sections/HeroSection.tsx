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
        <div className="max-w-3xl space-y-6 sm:space-y-8 animate-fade-in">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 rounded-full shadow-xl">
            <p className="text-slate-900 font-black text-xs sm:text-sm tracking-wide">⭐ 13 ЛЕТ ОПЫТА • 50+ ПРОЕКТОВ</p>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl pr-4">
            Увеличу средний чек в вашем ресторане на 30% за 90 дней
          </h1>
          
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-1 rounded-xl sm:rounded-2xl inline-block max-w-fit">
            <div className="bg-slate-900 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-400 font-black whitespace-nowrap">
                ИЛИ ВЕРНУ ДЕНЬГИ
              </p>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed drop-shadow-lg pr-4">
            Системный подход к обучению персонала HoReCa. Работала в Marriott, Hilton, Four Seasons. Без шаблонов и волшебных таблеток.
          </p>
          
          <div className="flex flex-col gap-4 pt-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 font-black shadow-2xl hover:scale-105 transition-transform bg-amber-500 hover:bg-amber-600 text-slate-900 border-4 border-amber-300" 
              onClick={() => scrollToSection('contact')}
            >
              ПОЛУЧИТЬ БЕСПЛАТНЫЙ АУДИТ →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;