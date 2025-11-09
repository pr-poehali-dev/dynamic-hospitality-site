import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const WhyMeSection = () => {
  const guarantees = [
    {
      icon: 'Trophy',
      title: 'Работала в окопах',
      description: '13 лет в общепите: официантка, хостес, бармен, менеджер, управляющая. Знаю, как это — работать в поле и как зарабатывать.',
      highlight: 'Мои тренинги работают, потому что я сама вставала в 6 утра и возвращалась домой через сутки. Я знаю, как зарабатываются деньги и хочу прокачать вас в этом.',
      fact: '13 лет опыта',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: 'BadgeCheck',
      title: 'Гарантия результата',
      description: 'Если через месяц средний чек не вырос минимум на 15% — верну все деньги. Без вопросов.',
      highlight: 'За 5 лет ни разу не возвращала. Потому что работает.',
      fact: '0 возвратов за 5 лет',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: 'MessageCircle',
      title: 'Не исчезаю после оплаты',
      description: 'Многие провели тренинг и всё — дальше сами. У меня иначе.',
      highlight: '30 дней после тренинга я на связи. Вопросы? Звоните, пишите, помогу.',
      fact: '30 дней поддержки',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: 'Zap',
      title: 'Без воды и теории',
      description: 'Терпеть не могу тренеров, которые 6 часов рассказывают "улыбайтесь гостям".',
      highlight: 'Мой тренинг — 80% практики. Скрипты, ролевые игры, фидбек.',
      fact: '80% практики',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-foreground">
              Почему я?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                Гарантия возврата средств без результата
              </h3>
              <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
                Если после моей работы вы не увидели минимального роста чека на <span className="text-primary font-black text-2xl">15% за месяц</span> — я верну всю сумму полностью. Это моя ответственность за результат.
              </p>
              <div className="pt-4">
                <p className="text-3xl font-black text-primary">0 возвратов за 5 лет работы</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
