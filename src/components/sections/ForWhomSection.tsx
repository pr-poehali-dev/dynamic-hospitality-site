import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ForWhomSection = () => {
  return (
    <section id="for-whom" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <h2 className="text-5xl font-black text-center text-foreground">Для кого мои решения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Crown', title: 'Владельцы/совладельцы', desc: 'Нужна управляемая система продаж, а не хаос' },
              { icon: 'Briefcase', title: 'Управляющие', desc: 'Нужен уверенный персонал и культура сервиса' },
              { icon: 'Users', title: 'Команды залов', desc: 'Хочется продавать без давления и «скриптов»' },
              { icon: 'Building2', title: 'Отели/частные клубы', desc: 'Важны эмоции гостя и высокий стандарт' }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/80">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-card p-8 rounded-2xl border-2 border-border">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Боли, с которыми работаю:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'падает средний чек',
                'мало повторных визитов',
                '«скрипты не работают»',
                'сервис не чувствуется',
                '«все стараются, а результат плавает»'
              ].map((pain, i) => (
                <div key={i} className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-primary/40">
                  <Icon name="AlertCircle" className="text-primary" size={16} />
                  <span className="text-foreground text-sm font-medium">{pain}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
