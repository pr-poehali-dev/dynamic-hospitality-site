import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HonestROISection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-bold text-sm">💰 ЧЕСТНЫЙ РАСЧЕТ</span>
            </div>
            <h2 className="text-5xl font-black text-foreground">Реальная окупаемость</h2>
            <p className="text-xl text-muted-foreground">Без завышенных цифр и маркетинговой шелухи</p>
          </div>

          <Card className="border-4 border-blue-300 bg-white shadow-2xl">
            <CardContent className="p-10">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-black text-foreground mb-4">Пример: Ваш ресторан</h3>
                  <p className="text-lg text-muted-foreground">Средний чек 2,000₽ • 60 гостей в день • 25 рабочих дней</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                    <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Icon name="TrendingDown" className="text-red-600" size={24} />
                      ТЕКУЩАЯ СИТУАЦИЯ
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Средний чек:</span>
                        <span className="font-bold text-foreground text-xl">2,000₽</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Гостей в день:</span>
                        <span className="font-bold text-foreground text-xl">60</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Рабочих дней:</span>
                        <span className="font-bold text-foreground text-xl">25</span>
                      </div>
                      <div className="h-px bg-red-300 my-4"></div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-foreground">Выручка/месяц:</span>
                        <span className="font-black text-red-600 text-2xl">3,000,000₽</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                    <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Icon name="TrendingUp" className="text-green-600" size={24} />
                      ПРОГНОЗ (+20% за 3 месяца)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Новый чек:</span>
                        <span className="font-bold text-foreground text-xl">2,400₽</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Гостей в день:</span>
                        <span className="font-bold text-foreground text-xl">60</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Рабочих дней:</span>
                        <span className="font-bold text-foreground text-xl">25</span>
                      </div>
                      <div className="h-px bg-green-300 my-4"></div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-foreground">Выручка/месяц:</span>
                        <span className="font-black text-green-600 text-2xl">3,600,000₽</span>
                      </div>
                      <div className="bg-green-100 p-3 rounded-lg mt-3">
                        <p className="text-center">
                          <span className="text-sm text-muted-foreground">Прирост: </span>
                          <span className="font-black text-green-700 text-xl">+600,000₽/мес</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-2xl text-white">
                  <h4 className="text-2xl font-black mb-6 text-center">ЧИСТАЯ ПРИБЫЛЬ (маржа 25%):</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-sm text-blue-100 mb-2">Дополнительно в месяц:</p>
                      <p className="text-4xl font-black">150,000₽</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-blue-100 mb-2">За 3 месяца:</p>
                      <p className="text-4xl font-black">450,000₽</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-blue-100 mb-2">За 6 месяцев:</p>
                      <p className="text-4xl font-black">900,000₽</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-8 rounded-2xl border-2 border-amber-300">
                  <h4 className="text-2xl font-black text-foreground mb-6 text-center">МИНУС ЗАТРАТЫ:</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-amber-200">
                      <div>
                        <p className="font-bold text-foreground">Обучение и внедрение</p>
                        <p className="text-sm text-muted-foreground">Мои услуги</p>
                      </div>
                      <p className="font-black text-xl text-foreground">150,000₽</p>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-amber-200">
                      <div>
                        <p className="font-bold text-foreground">Ваше время</p>
                        <p className="text-sm text-muted-foreground">25 часов × 3,000₽/ч</p>
                      </div>
                      <p className="font-black text-xl text-foreground">75,000₽</p>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-amber-200">
                      <div>
                        <p className="font-bold text-foreground">Мотивация персонала</p>
                        <p className="text-sm text-muted-foreground">1% от прироста × 3 месяца</p>
                      </div>
                      <p className="font-black text-xl text-foreground">18,000₽</p>
                    </div>
                    <div className="h-px bg-amber-400 my-4"></div>
                    <div className="flex justify-between items-center p-6 bg-amber-100 rounded-lg">
                      <p className="font-black text-xl text-foreground">ИТОГО ЗАТРАТЫ:</p>
                      <p className="font-black text-3xl text-amber-700">243,000₽</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-10 rounded-2xl text-white text-center">
                  <p className="text-2xl font-bold mb-4">ЧИСТЫЙ ПРОФИТ ЗА 3 МЕСЯЦА:</p>
                  <div className="text-7xl font-black mb-4">207,000₽</div>
                  <div className="h-px bg-white/30 my-6"></div>
                  <p className="text-xl font-bold mb-2">ROI (Возврат инвестиций):</p>
                  <div className="text-5xl font-black text-green-100">85%</div>
                  <p className="text-sm text-green-100 mt-4">(не 1250% как пишут маркетологи)</p>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-300">
                  <h4 className="text-2xl font-black text-foreground mb-6 text-center flex items-center justify-center gap-3">
                    <Icon name="AlertTriangle" className="text-blue-600" size={32} />
                    ЭТО ПРИ УСЛОВИИ:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Вы внедрили всё, что я дала</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Концепция изначально рабочая</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Текучки персонала не было</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Вы контролировали процесс ежедневно</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-2xl text-white">
                  <h4 className="text-2xl font-black mb-6 text-center">НО ДАЛЬШЕ — ИНТЕРЕСНЕЕ:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                      <p className="text-sm text-indigo-100 mb-2">Месяц 4-6:</p>
                      <p className="text-4xl font-black mb-2">+750,000₽</p>
                      <p className="text-sm text-indigo-100">дополнительной прибыли</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                      <p className="text-sm text-indigo-100 mb-2">За год:</p>
                      <p className="text-4xl font-black mb-2">+1,800,000₽</p>
                      <p className="text-sm text-indigo-100">чистой прибыли</p>
                    </div>
                  </div>
                  <p className="text-center text-indigo-100 text-sm mt-6">
                    ROI за год: <span className="font-black text-2xl text-white">740%</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-300 bg-gradient-to-br from-slate-50 to-gray-50">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <Icon name="Info" className="text-slate-600 mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-black text-foreground">Почему такие разные цифры в разных местах?</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Потому что я считаю <strong>реально</strong>, а не для продажи услуг. 
                  Каждый ресторан уникален: разная маржа, разная проходимость, разный уровень текущих продаж. 
                  Эти цифры — <strong>средний реалистичный прогноз</strong>, не лучший и не худший сценарий.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HonestROISection;
