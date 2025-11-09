import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProblemSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-destructive/5 via-background to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Почему ваши сотрудники не продают?
            </h2>
            <p className="text-xl text-muted-foreground">
              Вы потратили миллионы на создание проекта
            </p>
          </div>

          <Card className="border-2 border-destructive/20 bg-card">
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Icon name="ChefHat" className="mx-auto text-primary" size={40} />
                  <p className="text-foreground font-semibold">Нашли талантливого шефа</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Megaphone" className="mx-auto text-primary" size={40} />
                  <p className="text-foreground font-semibold">Запустили хорошую рекламу</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Users" className="mx-auto text-primary" size={40} />
                  <p className="text-foreground font-semibold">Гости идут</p>
                </div>
              </div>

              <div className="border-t border-destructive/20 pt-6 space-y-4">
                <p className="text-lg text-foreground">
                  <strong>Но персонал работает на автопилоте:</strong> принял заказ, принес тарелки, пробил чек. Никаких рекомендаций, никаких предложений.
                </p>
                <p className="text-lg text-muted-foreground">
                  Только отмазки и разные поводы в своем качестве работы. А я про бизнес — и бизнес должен приносить деньги, не останавливаясь на месте.
                </p>
                
                <div className="bg-destructive/5 border-l-4 border-destructive p-6 rounded-r-xl mt-6">
                  <h4 className="text-xl font-bold text-destructive mb-3">Почему так происходит?</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <span>Сотрудники не знают, <strong>как правильно</strong> предлагать блюда и напитки</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <span>Никто не обучил их <strong>психологии продаж</strong> и работе с возражениями</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <span>Отсутствует <strong>система мотивации</strong> и контроля качества обслуживания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                      <span>Многие просто <strong>не понимают своей ценности</strong> для бизнеса и работают "для галочки"</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-destructive/10 rounded-xl p-6 space-y-4">
                <h3 className="text-2xl font-bold text-destructive">Результат?</h3>
                <div className="space-y-2 text-lg">
                  <p className="text-foreground">
                    Гость <strong>мог потратить 4 500₽</strong>, но потратил <strong className="text-destructive">2 200₽</strong>
                  </p>
                  <p className="text-foreground">
                    Вы недополучили <strong className="text-destructive text-2xl">2 300₽</strong> прибыли
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border-2 border-primary rounded-xl p-6 space-y-3">
                <p className="text-xl font-bold text-foreground">
                  Умножьте на 60 гостей в день:
                </p>
                <p className="text-3xl font-black text-primary">
                  138 000₽ упущенной выручки каждый день
                </p>
                <p className="text-4xl font-black text-destructive">
                  4 140 000₽ в месяц
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-2xl font-bold text-primary">
              Я знаю, как это исправить. Я работала в окопах — 13 лет изнутри общепита.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;