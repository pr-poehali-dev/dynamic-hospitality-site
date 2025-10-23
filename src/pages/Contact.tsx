import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Instagram',
    icon: 'Instagram',
    url: 'https://www.instagram.com/marico_pro?igsh=eXljY2RqbHJtdjM4&utm_source=qr',
    description: 'Ежедневные кейсы и лайфхаки',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'Telegram',
    icon: 'Send',
    url: 'https://t.me/marico_pro',
    description: 'Быстрая связь и консультации',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'WhatsApp',
    icon: 'MessageCircle',
    url: 'https://wa.me/79000000000',
    description: 'Обсудим ваш проект',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Email',
    icon: 'Mail',
    url: 'mailto:hello@maricopro.ru',
    description: 'hello@maricopro.ru',
    color: 'from-purple-500 to-indigo-500'
  }
];

const directories = [
  {
    name: '2GIS',
    icon: 'MapPin',
    url: 'https://2gis.ru',
    description: 'Найдите нас на карте'
  },
  {
    name: 'Яндекс.Карты',
    icon: 'Map',
    url: 'https://yandex.ru/maps',
    description: 'Карты и навигация'
  },
  {
    name: 'Google Бизнес',
    icon: 'Building2',
    url: 'https://business.google.com',
    description: 'Профиль компании'
  },
  {
    name: 'Zoon',
    icon: 'Star',
    url: 'https://zoon.ru',
    description: 'Отзывы клиентов'
  },
  {
    name: 'Yell.ru',
    icon: 'BookOpen',
    url: 'https://yell.ru',
    description: 'Каталог услуг'
  },
  {
    name: 'Profi.ru',
    icon: 'Award',
    url: 'https://profi.ru',
    description: 'Профессиональные услуги'
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-foreground">MARICO PRO</Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</Link>
              <Link to="/contact" className="text-sm font-medium text-primary">Контакты</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Icon name="MapPin" size={48} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-foreground">
              Где нас <span className="text-primary">найти</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Мы присутствуем на всех популярных площадках. Выбирайте удобный способ связи!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-black text-foreground">
                  Социальные сети
                </h2>
                <p className="text-lg text-foreground/70">
                  Следите за новостями, получайте лайфхаки и общайтесь напрямую
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/50">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className={`p-4 rounded-2xl bg-gradient-to-br ${link.color} flex-shrink-0`}>
                            <Icon name={link.icon as any} size={32} className="text-white" />
                          </div>
                          <div className="space-y-2 flex-1">
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {link.name}
                            </h3>
                            <p className="text-foreground/70">
                              {link.description}
                            </p>
                            <div className="flex items-center gap-2 text-primary font-medium pt-2">
                              Перейти
                              <Icon name="ExternalLink" size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  <span className="font-bold text-primary">SEO-бонус</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-foreground">
                  Каталоги и справочники
                </h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Присутствие в каталогах улучшает позиции в поиске и дает дополнительный трафик
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {directories.map((directory, index) => (
                  <a
                    key={index}
                    href={directory.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                      <CardContent className="p-6 space-y-4">
                        <div className="p-3 bg-primary/10 rounded-xl w-fit">
                          <Icon name={directory.icon as any} size={28} className="text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {directory.name}
                          </h3>
                          <p className="text-sm text-foreground/60">
                            {directory.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
                          Открыть профиль
                          <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            <Card className="border-2 border-primary/40 bg-gradient-to-br from-background to-card">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <div className="inline-block p-4 bg-primary/10 rounded-full">
                  <Icon name="Lightbulb" size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground">
                  Инсайт от Юры
                </h3>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                  Каталоги дают не только прямой трафик, но и <strong>обратные ссылки</strong>. 
                  Это улучшает позиции сайта в поисковых системах. Чем больше качественных 
                  упоминаний — тем выше ваш сайт в Google и Яндекс.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Больше трафика</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Выше в поиске</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Больше доверия</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-black text-foreground">
                  Готовы обсудить ваш проект?
                </h3>
                <p className="text-lg text-foreground/80">
                  Выберите удобный способ связи — отвечу в течение 2 часов
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="font-semibold" asChild>
                    <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" className="mr-2" size={20} />
                      Telegram
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="font-semibold border-2" asChild>
                    <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" className="mr-2" size={20} />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Contact;
