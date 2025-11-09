import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            Превращаю ваших официантов в <span className="text-primary">машину по продажам</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-semibold max-w-4xl mx-auto">
            Рост среднего чека на 30-50% без изменения меню и повышения цен
          </p>
          <div className="pt-6">
            <Button size="lg" className="text-xl px-10 py-7 font-bold" onClick={() => scrollToSection('contact')}>
              Бесплатная консультация
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-black text-primary mb-2">185 000₽</div>
              <div className="text-sm text-gray-600">средний прирост выручки/месяц</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-black text-primary mb-2">10-14 дней</div>
              <div className="text-sm text-gray-600">до первых результатов</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-black text-primary mb-2">97%</div>
              <div className="text-sm text-gray-600">клиентов рекомендуют</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-black text-primary mb-2">100%</div>
              <div className="text-sm text-gray-600">гарантия возврата денег</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;