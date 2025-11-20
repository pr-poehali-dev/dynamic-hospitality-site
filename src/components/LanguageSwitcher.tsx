import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2 bg-slate-900/95 backdrop-blur-sm p-2 rounded-full border-2 border-amber-500/30 shadow-2xl">
      <Button
        variant={language === 'ru' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ru')}
        className={`rounded-full font-bold ${language === 'ru' ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'text-white hover:text-amber-400'}`}
      >
        RU
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`rounded-full font-bold ${language === 'en' ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'text-white hover:text-amber-400'}`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
