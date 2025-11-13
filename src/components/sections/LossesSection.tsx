import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const LossesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block px-6 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-red-700 font-bold text-sm">⚠️ СКОЛЬКО ВЫ ТЕРЯЕТЕ КАЖДЫЙ ДЕНЬ</span>
            </div>
            <h2 className="text-5xl font-black text-foreground">Цена ошибок персонала</h2>
            <p className="text-xl text-muted-foreground">Конкретные потери в рублях, о которых вы не подозреваете</p>
          </div>

          <Card className="border-4 border-red-300 bg-white shadow-2xl">
            <CardContent className="p-10">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-black text-foreground mb-4">Типичный вечер в вашем ресторане:</h3>
                  <p className="text-lg text-muted-foreground">Один стол, четверо гостей, 2 часа ужина</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                          <Icon name="XCircle" className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-foreground mb-2">Официант не предложил десерт</p>
                          <p className="text-sm text-muted-foreground mb-2">4 гостя × 200₽ средний чек десерта</p>
                          <p className="text-2xl font-black text-red-600">-800₽</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                          <Icon name="XCircle" className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-foreground mb-2">Бармен налил вино без рекомендации закуски</p>
                          <p className="text-sm text-muted-foreground mb-2">4 гостя × 300₽ закуска к вину</p>
                          <p className="text-2xl font-black text-red-600">-1,200₽</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                          <Icon name="XCircle" className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-foreground mb-2">Хостес не рассказала про акцию и спецпредложения</p>
                          <p className="text-sm text-muted-foreground mb-2">Упущенная возможность допродажи</p>
                          <p className="text-2xl font-black text-red-600">-2,500₽</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                          <Icon name="XCircle" className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-foreground mb-2">Официант принес счет, не предложив кофе</p>
                          <p className="text-sm text-muted-foreground mb-2">4 гостя × 200₽ кофе</p>
                          <p className="text-2xl font-black text-red-600">-800₽</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl text-center space-y-4 shadow-xl">
                      <p className="text-white text-lg font-bold">Итого потери с ОДНОГО стола:</p>
                      <div className="text-6xl font-black text-white">-5,300₽</div>
                      <div className="h-1 w-full bg-white/30 my-4"></div>
                      <p className="text-white text-sm">При 40 столах в день:</p>
                      <div className="text-4xl font-black text-white">-212,000₽</div>
                      <p className="text-red-100 text-sm">упущенной выручки каждый день</p>
                    </div>

                    <div className="mt-6 bg-amber-50 p-6 rounded-xl border-2 border-amber-300">
                      <p className="text-center text-foreground">
                        <span className="font-black text-3xl text-amber-700">6,360,000₽</span>
                        <br />
                        <span className="text-sm text-muted-foreground">теряете каждый месяц</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300">
                  <div className="text-center space-y-4">
                    <Icon name="TrendingUp" className="text-green-600 mx-auto" size={48} />
                    <h4 className="text-2xl font-black text-foreground">А если бы персонал предлагал правильно?</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Конверсия в десерт</p>
                        <p className="text-3xl font-black text-green-600">60%</p>
                        <p className="text-sm text-muted-foreground">вместо 10%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Допродажи закусок</p>
                        <p className="text-3xl font-black text-green-600">70%</p>
                        <p className="text-sm text-muted-foreground">вместо 15%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Средний чек</p>
                        <p className="text-3xl font-black text-green-600">+35%</p>
                        <p className="text-sm text-muted-foreground">за 3 месяца</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-8 rounded-2xl border-2 border-primary">
                  <h4 className="text-2xl font-black text-foreground mb-6 text-center">Реальность такова:</h4>
                  <div className="space-y-4 text-foreground">
                    <div className="flex items-start gap-3">
                      <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p>85% официантов боятся "навязываться" и не делают допродажи</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p>Каждый пропущенный момент допродажи = прямые потери прибыли</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p>Без системного обучения персонал будет работать так же плохо через 5 лет</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p>Вы платите зарплаты, а упущенная прибыль уходит к конкурентам</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LossesSection;
