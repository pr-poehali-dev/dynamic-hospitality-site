import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const NotForYouSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-destructive/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Для кого это НЕ подходит
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Лучше честно сказать сразу, чем взять деньги и не дать результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-4 border-destructive/30 bg-destructive/5">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center flex-shrink-0">
                    <Icon name="X" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">НЕ СРАБОТАЕТ</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Фастфуд, стрит-фуд</div>
                      <div className="text-sm text-muted-foreground">Другая специфика</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Средний чек ниже 500₽</div>
                      <div className="text-sm text-muted-foreground">Нечего продавать сверху</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Ожидаете волшебство без усилий</div>
                      <div className="text-sm text-muted-foreground">Нужна ваша вовлечённость</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Проблема не в персонале</div>
                      <div className="text-sm text-muted-foreground">А в неправильной концепции</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Провальная локация</div>
                      <div className="text-sm text-muted-foreground">Нет трафика гостей</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-green-500/30 bg-green-50">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">У ВАС ПОЛУЧИТСЯ</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Средний чек от 1000₽</div>
                      <div className="text-sm text-muted-foreground">Есть что допродавать</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Оборот от 1.5 млн/мес</div>
                      <div className="text-sm text-muted-foreground">Ресурсы на внедрение</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Стабильная команда</div>
                      <div className="text-sm text-muted-foreground">Не увольняются каждый месяц</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Владелец участвует</div>
                      <div className="text-sm text-muted-foreground">Хотя бы 2 часа в неделю</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-foreground">Есть запас хода в меню</div>
                      <div className="text-sm text-muted-foreground">Позиции для upsell</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8 text-center">
              <p className="text-2xl font-black text-foreground mb-4">
                ЧЕСТНО:
              </p>
              <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                Я не волшебник. Если ваше заведение в принципе неконкурентоспособно — никакой тренинг не поможет. Сначала нужно фиксить концепцию и позиционирование.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NotForYouSection;
