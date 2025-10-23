import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CasesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-5xl font-black text-center text-foreground">Примеры результатов</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'TrendingUp',
                metric: '+35%',
                title: 'Средний чек',
                desc: 'Ресторан, Москва',
                detail: 'За 3 месяца работы'
              },
              {
                icon: 'Users',
                metric: '+40%',
                title: 'Повторные визиты',
                desc: 'Клуб, Сочи',
                detail: 'За 2 месяца'
              },
              {
                icon: 'Star',
                metric: '4.8→4.9',
                title: 'Рейтинг',
                desc: 'Отель, Санкт-Петербург',
                detail: 'Яндекс и Google'
              },
              {
                icon: 'Heart',
                metric: '92%',
                title: 'NPS',
                desc: 'Частный клуб, Москва',
                detail: 'Лояльность гостей'
              },
              {
                icon: 'Award',
                metric: '-60%',
                title: 'Текучка',
                desc: 'Ресторан, Казань',
                detail: 'За 4 месяца'
              },
              {
                icon: 'BarChart3',
                metric: '+28%',
                title: 'Выручка',
                desc: 'Винный бар, Москва',
                detail: 'За квартал'
              }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-black text-primary">{item.metric}</div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                  <p className="text-sm text-foreground/60">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-primary/10 p-8 rounded-2xl text-center border-2 border-primary/30">
            <p className="text-lg text-foreground/90">
              <span className="font-bold text-primary">Важно:</span> результаты зависят от специфики бизнеса, команды и следования рекомендациям.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
