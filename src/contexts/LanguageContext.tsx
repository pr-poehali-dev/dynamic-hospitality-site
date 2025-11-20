import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'ru') ? saved : 'ru';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  ru: {
    'nav.home': 'Главная',
    'nav.blog': 'Блог',
    'nav.back': 'Назад на главную',
    'contact.title': 'Мои социальные сети',
    'contact.subtitle': 'Выбирайте удобную площадку — следите за новостями и получайте лайфхаки',
    'contact.quick.title': 'Готовы обсудить ваш проект?',
    'contact.quick.subtitle': 'Выберите удобный способ связи — отвечу в течение 2 часов',
    'contact.hours.title': 'Время работы',
    'contact.hours.text': 'Понедельник — Пятница',
    'contact.hours.time': '10:00 — 19:00 (МСК)',
    'contact.hours.weekend': 'Выходные — связь в мессенджерах',
    'social.vk': 'Группа в VK',
    'social.instagram': 'Instagram',
    'social.vk_video': 'VK Video',
    'social.telegram': 'Telegram Канал',
    'social.max': 'Max Канал',
    'social.blog': 'Блог',
    'contact.whatsapp': 'WhatsApp',
    'contact.telegram': 'Telegram',
    'contact.max': 'Max',
    'contact.email': 'Email',
    'marquee.text': '✈️ Не важно где вы находишься — ваш сервис может быть лучше чем в Москве • Прилечу в любую точку России • 15 лет опыта • От официанта до куратора закрытого клуба в Москве, аналогов которому нет'
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.back': 'Back to Home',
    'contact.title': 'My Social Networks',
    'contact.subtitle': 'Choose your preferred platform — follow news and get life hacks',
    'contact.quick.title': 'Ready to discuss your project?',
    'contact.quick.subtitle': 'Choose your preferred contact method — I will reply within 2 hours',
    'contact.hours.title': 'Working Hours',
    'contact.hours.text': 'Monday — Friday',
    'contact.hours.time': '10:00 AM — 7:00 PM (MSK)',
    'contact.hours.weekend': 'Weekends — contact via messengers',
    'social.vk': 'VK Group',
    'social.instagram': 'Instagram',
    'social.vk_video': 'VK Video',
    'social.telegram': 'Telegram Channel',
    'social.max': 'Max Channel',
    'social.blog': 'Blog',
    'contact.whatsapp': 'WhatsApp',
    'contact.telegram': 'Telegram',
    'contact.max': 'Max',
    'contact.email': 'Email',
    'marquee.text': '✈️ No matter where you are — your service can be better than in Moscow • I fly to any city in Russia • 15 years of experience • From waiter to curator of an exclusive Moscow club with no analogues'
  }
};
