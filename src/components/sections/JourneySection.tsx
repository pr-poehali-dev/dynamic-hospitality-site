import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const JourneySection = () => {
  const timeline = [
    {
      years: '2009-2015',
      title: 'Старт карьеры',
      icon: 'Coffee',
      items: [
        'Официантка, хостес, бармен в премиум-ресторанах',
        'Научилась понимать гостей и продавать'
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      years: '2015-2019',
      title: 'Рост до управляющей',
      icon: 'Building',
      items: [
        'Отели: Marriott, Radisson, Four Seasons',
        'Организация VIP-мероприятий и закрытых событий',
        'Работа с первыми лицами государства'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      years: '2019-2022',
      title: 'Уникальные проекты',
      icon: 'Sparkles',
      items: [
        'Развитие эксклюзивных клубов',
        'Запуски ресторанов с нуля',
        'Ребрендинги популярных заведений'
      ],
      color: 'from-purple-500 to-violet-600'
    },
    {
      years: '2022-2024',
      title: 'Имиджевый клуб',
      icon: 'Crown',
      items: [
        'Куратор VIP-клуба с эксклюзивным сервисом',
        'Работа с избранными гостями',
        'Разработка собственной системы обучения'
      ],
      color: 'from-rose-500 to-pink-600'
    },
    {
      years: '2025-сейчас',
      title: 'MARICO PRO',
      icon: 'Rocket',
      items: [
        'Помогаю ресторанам внедрять мою систему',
        'Гарантирую результат — или возвращаю деньги',
        '7-дневный интенсив — авторская методика'
      ],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-4">
              <p className="text-primary font-black text-sm tracking-wide">📍 МОЙ ПУТЬ</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">
              Как я прошла весь HoReCa изнутри
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              15 лет от линейного персонала до создания собственной системы обучения
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((period, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${period.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon name={period.icon} className="text-white" size={48} />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                          {period.title}
                        </h3>
                        <div className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${period.color} text-white font-black text-sm shadow-md`}>
                          {period.years}
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {period.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${period.color} flex-shrink-0`} />
                            <p className="text-base sm:text-lg text-foreground leading-relaxed">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-4 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-background shadow-2xl">
            <CardContent className="p-10 text-center space-y-6">
              <Icon name="TrendingUp" className="mx-auto text-primary" size={56} />
              <h3 className="text-3xl sm:text-4xl font-black text-foreground">
                Не теоретик, а практик
              </h3>
              <p className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
                Я знаю HoReCa изнутри — от кухни до VIP-залов. Прошла все позиции: от официантки до управляющей в премиум-сегменте. 
                <span className="block mt-4 text-primary font-black text-2xl">
                  Теперь помогаю другим строить успешные рестораны
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
