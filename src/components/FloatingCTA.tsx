import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FloatingCTAProps {
  scrollToContact: () => void;
}

const FloatingCTA = ({ scrollToContact }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <Button
        size="lg"
        onClick={scrollToContact}
        className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold shadow-2xl px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3"
      >
        <Icon name="Sparkles" size={24} />
        Заполнить бриф
      </Button>
    </div>
  );
};

export default FloatingCTA;
