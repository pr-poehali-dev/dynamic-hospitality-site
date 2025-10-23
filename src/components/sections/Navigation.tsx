import { Link } from 'react-router-dom';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">MARICO PRO</div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">Знакомство</button>
            <button onClick={() => scrollToSection('for-whom')} className="text-sm font-medium hover:text-primary transition-colors">Для кого</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-primary transition-colors">Процесс</button>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Где нас найти</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
