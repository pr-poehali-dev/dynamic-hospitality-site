import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const WhyMeSection = () => {
  const guarantees = [
    {
      icon: 'Trophy',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      title: 'Работала в окопах',
      description: '13 лет в общепите: официантка, хостес, бармен, менеджер, управляющая. Знаю, как это — работать в поле и как зарабатывать. Я всегда была лучшей и самой перспективной, но быстро перерастала тот или иной проект.',
      highlight: 'Мои тренинги работают, потому что я сама вставала в 6 утра и возвращалась домой через сутки. Я знаю, как зарабатываются деньги и хочу прокачать вас в этом.'
    },
    {
      icon: 'BadgeCheck',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Гарантия результата',
      description: 'Если через месяц средний чек не вырос минимум на 15% — верну все деньги. Без вопросов.',
      highlight: 'За 5 лет ни разу не возвращала. Потому что работает.'
    },
    {
      icon: 'MessageCircle',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Не исчезаю после оплаты',
      description: 'Многие провели тренинг и всё — дальше сами. У меня иначе.',
      highlight: '30 дней после тренинга я на связи. Вопросы? Звоните, пишите, помогу.'
    },
    {
      icon: 'Zap',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Без воды и теории',
      description: 'Терпеть не могу тренеров, которые 6 часов рассказывают "улыбайтесь гостям".',
      highlight: 'Мой тренинг — 80% практики. Скрипты, ролевые игры, фидбек.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-background">
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

          <div className="grid md:grid-cols-2 gap-8">
            {guarantees.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                    <Icon name={item.icon} className={item.iconColor} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-primary text-lg">
                      {item.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-black text-foreground mb-4">
              Гарантия возврата средств без результата
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Если после моей работы вы не увидели минимального роста чека на 15% за месяц — я верну всю сумму полностью. Это моя ответственность за результат.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
