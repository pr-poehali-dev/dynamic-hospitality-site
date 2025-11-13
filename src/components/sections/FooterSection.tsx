import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const FooterSection = () => {
  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-black text-primary">MARICO PRO</h3>
          <p className="text-gray-400">Консультант №1 по продажам в HoReCa</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
              <a href="https://t.me/malinochka_marina" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={24} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
              <a href="https://instagram.com/marico.su" target="_blank" rel="noopener noreferrer">
                <Icon name="Camera" size={24} />
              </a>
            </Button>
          </div>
          <div className="pt-6 border-t border-gray-800 text-gray-500 text-sm">
            <p>© 2024 MARICO PRO. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;