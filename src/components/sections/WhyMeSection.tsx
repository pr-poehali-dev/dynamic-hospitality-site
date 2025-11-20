import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const WhyMeSection = () => {
  const guarantees = [
    {
      icon: 'Award',
      title: 'Инсайдер премиум-сегмента',
      description: '15 лет в HoReCa на всех стадиях: запуски с нуля, ребрендинги, популярные рестораны. Управляющая в Marriott, Radisson, Four Seasons. Закрытые мероприятия с первыми лицами государства.',
      highlight: 'В 2025 году рынок HoReCa вырос на 24% в РФ. Но большинство заведений продолжают работать по старым схемам. Я помогаю взять свою долю этого роста.',
      fact: '15 лет в премиум',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: 'MapPin',
      title: 'Работаю по всей России',
      description: 'Москва — не единственный город, где можно зарабатывать. Любое заведение может расти — будь то Иркутск, Сочи или ваш город.',
      highlight: 'Москва для всех эталон, но это не отмазка. Я готова помочь заработать каждому ресторатору в любом регионе.',
      fact: 'Вся Россия',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: 'Target',
      title: 'Нахожу корни проблем',
      description: 'Не симптомы, а причины. Умею разбирать возражения и конфликты. Учу продавать всё — даже немыслимые позиции.',
      highlight: 'Нахожу подход к каждому: к персоналу, управляющим, гостям. 15 лет опыта работы с людьми в премиум-сегменте.',
      fact: 'Диагностика + решение',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: 'BadgeCheck',
      title: 'Прозрачный результат',
      description: 'Работаю на результат: вы видите метрики до и после, контрольные точки каждые 2 недели. Без воды — только конкретные цифры и действия.',
      highlight: 'Даю чёткий план на 90 дней с измеримыми KPI. Вы всегда знаете, где мы сейчас и куда идём.',
      fact: 'Конкретные KPI',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">
              Почему я?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Не просто впечатление — работающая система и измеримый результат в деньгах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guarantees.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl group overflow-hidden">
                <CardContent className="p-8 space-y-5">
                  <div className="flex items-start justify-between">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <Icon name={item.icon} className="text-white" size={40} />
                    </div>
                    <div className="text-right">
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-sm shadow-md`}>
                        {item.fact}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground">{item.title}</h3>
                  
                  <div className="bg-muted/50 p-5 rounded-xl border-2 border-border/50">
                    <p className="text-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className={`bg-gradient-to-r ${item.color} p-5 rounded-xl text-white shadow-lg`}>
                    <p className="font-bold leading-relaxed">
                      {item.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-4 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-background shadow-2xl">
            <CardContent className="p-10 text-center space-y-6">
              <div className="inline-block p-4 bg-primary rounded-full mb-4">
                <Icon name="Shield" className="text-white" size={48} />
              </div>
              <h3 className="text-4xl font-black text-foreground">
                Любое заведение может развиваться и расти
              </h3>
              <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
                Не важно, где вы находитесь — в Москве, Иркутске или любом другом городе. Москва для многих эталон, но это не отмазка для других регионов. <span className="text-primary font-black text-2xl">Я готова заработать для каждого ресторатора</span>, потому что знаю: при правильном подходе растут все.
              </p>
              <div className="pt-4">
                <p className="text-3xl font-black text-primary">Гарантия +30% к чеку или возврат средств</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;