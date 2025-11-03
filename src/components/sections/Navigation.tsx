import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">MARICO PRO</div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">Знакомство</button>
            <button onClick={() => scrollToSection('for-whom')} className="text-sm font-medium hover:text-primary transition-colors">Для кого</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('trainings')} className="text-sm font-medium hover:text-primary transition-colors">Тренинги</button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-primary transition-colors">Процесс</button>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</Link>
            <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Где нас найти</Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button 
              onClick={() => handleMobileNavClick(() => scrollToSection('about'))} 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Знакомство
            </button>
            <button 
              onClick={() => handleMobileNavClick(() => scrollToSection('for-whom'))} 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Для кого
            </button>
            <button 
              onClick={() => handleMobileNavClick(() => scrollToSection('services'))} 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => handleMobileNavClick(() => scrollToSection('trainings'))} 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Тренинги
            </button>
            <button 
              onClick={() => handleMobileNavClick(() => scrollToSection('process'))} 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Процесс
            </button>
            <Link 
              to="/blog" 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Блог
            </Link>
            <Link 
              to="/faq" 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Где нас найти
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
