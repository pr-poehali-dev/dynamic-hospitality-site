import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const getSocialNetworks = (t: (key: string) => string) => [
  {
    name: t('social.vk'),
    icon: 'Users',
    url: 'https://vk.com/marico_su?from=groups',
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: t('social.instagram'),
    icon: 'Instagram',
    url: 'https://www.instagram.com/malinochka__marina?igsh=MXNzdzR3Z3MxM25kOQ%3D%3D&utm_source=qr',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'VK Video',
    icon: 'Video',
    url: 'https://vk.com/video/@marico_pro',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: t('social.telegram'),
    icon: 'Send',
    url: 'https://t.me/marico_pro',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    name: t('social.max'),
    icon: 'Radio',
    url: 'https://t.me/marico_pro',
    color: 'from-purple-500 to-violet-600'
  },
  {
    name: t('social.blog'),
    icon: 'BookOpen',
    url: '/blog',
    color: 'from-amber-500 to-orange-600',
    isInternal: true
  }
];

const getQuickContacts = (t: (key: string) => string) => [
  {
    name: t('contact.whatsapp'),
    icon: 'MessageCircle',
    url: 'https://wa.me/79182858216',
    color: 'text-green-500'
  },
  {
    name: t('contact.telegram'),
    icon: 'Send',
    url: 'https://t.me/malinochka_marina',
    color: 'text-blue-500'
  },
  {
    name: t('contact.max'),
    icon: 'MessageSquare',
    url: 'https://wa.me/79182858216',
    color: 'text-purple-500'
  },
  {
    name: t('contact.email'),
    icon: 'Mail',
    url: 'mailto:malinochkamarina@gmail.com',
    color: 'text-amber-500'
  }
];

const Contact = () => {
  const { t } = useLanguage();
  const socialNetworks = getSocialNetworks(t);
  const quickContacts = getQuickContacts(t);
  const currentUrl = `${window.location.origin}/contact`;
  const contactDescription = 'Свяжитесь с Мариной MARICO PRO — экспертом по продажам и сервису в HoReCa. Instagram, Telegram, VK, Max, Email. Работаю по всей России.';
  
  useEffect(() => {
    document.title = 'Контакты MARICO PRO — Мои социальные сети';
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Helmet>
        <title>Контакты MARICO PRO — Мои социальные сети</title>
        <meta name="description" content={contactDescription} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-amber-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-white hover:text-amber-400 transition-colors">
              MARICO PRO
            </Link>
            <Link to="/" className="text-sm font-medium text-amber-400 hover:text-white transition-colors">
              ← {t('nav.back')}
            </Link>
          </div>
        </div>
      </nav>

      {/* Бегущая строка */}
      <div className="mt-20 overflow-hidden whitespace-nowrap bg-amber-500 py-3 border-y border-amber-600">
        <div className="inline-block animate-marquee">
          <div className="flex gap-12">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-lg md:text-xl font-bold text-slate-900 px-6">
                {t('marquee.text')}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            
            {/* Мои соцсети */}
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-white">
                  {t('contact.title')}
                </h1>
                <p className="text-xl text-amber-400">
                  {t('contact.subtitle')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {socialNetworks.map((network, index) => (
                  network.isInternal ? (
                    <Link
                      key={index}
                      to={network.url}
                      className="group"
                    >
                      <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:scale-105">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${network.color} flex items-center justify-center mx-auto`}>
                              <Icon name={network.icon as any} size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white text-center group-hover:text-amber-400 transition-colors">
                              {network.name}
                            </h3>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={network.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:scale-105">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${network.color} flex items-center justify-center mx-auto`}>
                              <Icon name={network.icon as any} size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white text-center group-hover:text-amber-400 transition-colors">
                              {network.name}
                            </h3>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* Быстрая связь */}
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-amber-500/20 backdrop-blur-sm rounded-full border-2 border-amber-500">
                  <Icon name="Zap" size={48} className="text-amber-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  {t('contact.quick.title')}
                </h2>
                <p className="text-xl text-slate-300">
                  {t('contact.quick.subtitle')}
                </p>
              </div>

              <div className="flex justify-center items-center gap-6 flex-wrap">
                {quickContacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-20 h-20 rounded-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 hover:border-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Icon name={contact.icon as any} size={36} className={`${contact.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors font-medium">
                      {contact.name}
                    </span>
                  </a>
                ))}
              </div>

              <div className="text-center pt-8">
                <Card className="bg-slate-800/50 backdrop-blur-sm border-2 border-amber-500/30 max-w-2xl mx-auto">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <Icon name="Clock" size={32} className="text-amber-400 mx-auto" />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 justify-center">
                          <Icon name="Clock" size={20} className="text-amber-400" />
                          <h3 className="text-xl font-bold text-white">{t('contact.hours.title')}</h3>
                        </div>
                        <p className="text-slate-300">{t('contact.hours.text')}</p>
                        <p className="text-2xl font-black text-amber-400">{t('contact.hours.time')}</p>
                        <p className="text-sm text-slate-400">{t('contact.hours.weekend')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>
      <LanguageSwitcher />
    </div>
  );
};

export default Contact;