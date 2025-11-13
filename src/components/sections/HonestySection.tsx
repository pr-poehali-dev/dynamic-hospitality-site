import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HonestySection = () => {
  return (
    <section className="py-24 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="border-4 border-amber-500 shadow-2xl">
            <CardContent className="p-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
                    <Icon name="AlertTriangle" className="text-white" size={32} />
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black text-foreground">
                    ПРЕЖДЕ ЧЕМ ЗАКАЗАТЬ — ПРОЧИТАЙТЕ ЭТО
                  </h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    Я не волшебник. Я не могу гарантировать результат, потому что он зависит не только от меня.
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-amber-200 pt-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  ВОТ КАК РАСПРЕДЕЛЯЕТСЯ ОТВЕТСТВЕННОСТЬ:
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-xl border-2 border-border space-y-3">
                    <div className="text-4xl font-black text-primary">30%</div>
                    <div className="text-lg font-bold text-foreground">МОЯ РАБОТА</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Даю работающие методики</li>
                      <li>✓ Обучаю команду</li>
                      <li>✓ Создаю систему</li>
                    </ul>
                  </div>

                  <div className="bg-card p-6 rounded-xl border-2 border-border space-y-3">
                    <div className="text-4xl font-black text-orange-600">30%</div>
                    <div className="text-lg font-bold text-foreground">ВАШ КОНТРОЛЬ</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Внедряете рекомендации</li>
                      <li>✓ Контролируете выполнение</li>
                      <li>✓ Поддерживаете дисциплину</li>
                    </ul>
                  </div>

                  <div className="bg-card p-6 rounded-xl border-2 border-border space-y-3">
                    <div className="text-4xl font-black text-teal-600">40%</div>
                    <div className="text-lg font-bold text-foreground">БАЗА</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Качество продукта</li>
                      <li>✓ Локация</li>
                      <li>✓ Позиционирование</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-destructive/10 p-6 rounded-xl border-2 border-destructive/30">
                <p className="text-lg font-bold text-foreground mb-3">ЧЕСТНО:</p>
                <p className="text-foreground leading-relaxed">
                  Если у вас провальная концепция или плохая локация — никакое обучение не спасёт. Сначала чините базу.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Я ОТКАЗЫВАЮСЬ РАБОТАТЬ, ЕСЛИ:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={24} />
                    <span className="text-foreground">Оборот меньше 1 млн/мес</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={24} />
                    <span className="text-foreground">Владелец не готов участвовать лично</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={24} />
                    <span className="text-foreground">Заведение на грани закрытия</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={24} />
                    <span className="text-foreground">Вы ждёте чуда без усилий</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-foreground mb-3">СРЕДНИЙ РЕЗУЛЬТАТ МОИХ КЛИЕНТОВ:</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Рост среднего чека: <span className="font-bold">+18%</span> (не 30-50%!)</li>
                  <li>• Срок: <span className="font-bold">2-3 месяца</span> (не 1 неделя!)</li>
                  <li>• При условии дисциплины</li>
                </ul>
              </div>

              <div className="text-center pt-6 border-t-2 border-amber-200">
                <p className="text-lg font-bold text-destructive mb-4">
                  10-15% КЛИЕНТОВ НЕ ПОЛУЧАЮТ РЕЗУЛЬТАТА.
                </p>
                <p className="text-muted-foreground">
                  Причины: не внедряли, высокая текучка, проблема не в персонале.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HonestySection;
