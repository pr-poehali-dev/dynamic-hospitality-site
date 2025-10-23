import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const FooterSection = () => {
  return (
    <footer className="py-12 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-black">MARICO PRO</h3>
          <p className="text-white/80">Продажи и сервис — одна система.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
              <a href="https://www.instagram.com/marico_pro?igsh=eXljY2RqbHJtdjM4&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Icon name="Instagram" size={24} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
              <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={24} />
              </a>
            </Button>
          </div>
          <div className="pt-6 border-t border-white/20 text-white/60 text-sm">
            <p>© 2024 MARICO PRO. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
