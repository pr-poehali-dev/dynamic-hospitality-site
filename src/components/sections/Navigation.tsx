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
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('results')} className="text-sm font-medium hover:text-primary transition-colors">Кейсы</button>
            <Link to="/quiz" className="text-sm font-medium text-primary hover:underline transition-colors">🎯 Квиз</Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</Link>
            <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
            <Button asChild size="sm">
              <Link to="/contact">Связаться</Link>
            </Button>
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
              onClick={() => handleMobileNavClick(() => scrollToSection('pricing'))} 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => handleMobileNavClick(() => scrollToSection('results'))} 
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Кейсы
            </button>
            <Link 
              to="/quiz" 
              className="block w-full text-left py-2 text-sm font-bold text-primary hover:underline transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🎯 Квиз-диагностика
            </Link>
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
              Связаться
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;