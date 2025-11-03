import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src="https://cdn.poehali.dev/files/d389612d-0b1f-418a-956f-71c6c1c715c7.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/75 to-background/80"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black text-foreground leading-tight">
            Хватит терять деньги <br />на плохом <span className="text-primary">сервисе</span>.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium max-w-3xl mx-auto">
            Выстраиваю систему продаж и культуры в ресторанах, клубах и отелях.
          </p>
          <div className="inline-block px-6 py-2 bg-primary/20 rounded-full border border-primary/40">
            <p className="text-primary font-semibold">Эксперт по продажам и сервису в HoReCa</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="text-lg px-8 py-6 font-semibold" onClick={() => scrollToSection('process')}>
              С чего начать
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold border-2" onClick={() => scrollToSection('contact')}>
              Оставить заявку
            </Button>
          </div>
          <p className="text-xs text-muted-foreground pt-4">
            Отправляя форму, вы соглашаетесь с обработкой персональных данных.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;