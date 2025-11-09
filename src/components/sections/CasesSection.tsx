import { Card, CardContent } from '@/components/ui/card';

const CasesSection = () => {
  return (
    <section id="results" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-foreground">Как я достигаю результатов</h2>
            <p className="text-xl text-muted-foreground">Реальные кейсы трансформации бизнеса</p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-primary overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Семейный ресторан грузинской кухни</h3>
                    <p className="text-muted-foreground">Москва, Юго-Запад • 85-100 гостей/день</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Было:</div>
                      <div className="text-2xl font-black text-destructive">Чек: 1450₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 3 950 000₽/мес</div>
                    </div>

                    <div className="bg-primary p-6 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl font-black text-white">+50%</div>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Стало:</div>
                      <div className="text-2xl font-black text-green-600">Чек: 2180₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 5 930 000₽/мес</div>
                    </div>
                  </div>

                  <div className="bg-primary p-6 rounded-2xl text-center">
                    <div className="text-3xl font-black text-white">Прирост: +1 980 000₽ в месяц</div>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-xl">
                    <p className="text-foreground italic text-lg mb-4">
                      "Марина не просто провела тренинг и ушла. Она три недели каждый день приезжала, смотрела, как работают официанты, исправляла ошибки на месте. Окупили инвестиции за 18 дней."
                    </p>
                    <p className="text-foreground font-bold">— Георгий, владелец</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Винный бар в центре</h3>
                    <p className="text-muted-foreground">Москва, ЦАО • Премиум сегмент • 60-75 гостей/день</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Было:</div>
                      <div className="text-2xl font-black text-destructive">Чек: 3200₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 5 760 000₽/мес</div>
                    </div>

                    <div className="bg-primary p-6 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl font-black text-white">+45%</div>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Стало:</div>
                      <div className="text-2xl font-black text-green-600">Чек: 4650₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 8 370 000₽/мес</div>
                    </div>
                  </div>

                  <div className="bg-primary p-6 rounded-2xl text-center">
                    <div className="text-3xl font-black text-white">Прирост: +2 610 000₽ в месяц</div>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-xl">
                    <p className="text-foreground italic text-lg mb-4">
                      "Марина показала, что знать продукт и уметь его продать — это разные вещи. Теперь наши бармены не просто наливают вино, они создают опыт. Чек вырос почти в полтора раза."
                    </p>
                    <p className="text-foreground font-bold">— Анна, управляющая</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Кофейня на Патриарших</h3>
                    <p className="text-muted-foreground">Москва, ЦАО • Премиум-локация • 120-140 гостей/день</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Было:</div>
                      <div className="text-2xl font-black text-destructive">Чек: 850₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 3 400 000₽/мес</div>
                    </div>

                    <div className="bg-primary p-6 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl font-black text-white">+38%</div>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Стало:</div>
                      <div className="text-2xl font-black text-green-600">Чек: 1170₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 4 690 000₽/мес</div>
                    </div>
                  </div>

                  <div className="bg-primary p-6 rounded-2xl text-center">
                    <div className="text-3xl font-black text-white">Прирост: +1 290 000₽ в месяц</div>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-xl">
                    <p className="text-foreground italic text-lg mb-4">
                      "Марина научила баристов не просто готовить кофе, а общаться с гостями. Теперь каждый второй гость берет десерт или выпечку к напитку. Текучка персонала упала практически до нуля — команда работает вместе уже 8 месяцев."
                    </p>
                    <p className="text-foreground font-bold">— Ольга, владелица</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-2">
                    <span className="text-white text-2xl font-black">+187%</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Премиальный ресторан</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-foreground text-sm leading-relaxed">
                      Рост выручки за 4 месяца. Средний чек с 3 200₽ до 5 800₽ благодаря новой концепции подачи и обучению персонала.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-primary font-bold uppercase tracking-wide">Переформатирование меню и система допродаж</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-card to-amber-50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center mb-2">
                    <span className="text-white text-2xl font-black">4.9⭐</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Сеть кафе, 5 локаций</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-foreground text-sm leading-relaxed">
                      Рейтинг вырос с 3.8 до 4.9 за 2 месяца. Негативные отзывы сократились на 94%. Поток гостей +65%.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-amber-600 font-bold uppercase tracking-wide">Перестройка сервиса и работа с отзывами</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-card to-green-50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-2">
                    <span className="text-white text-2xl font-black">-78%</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Семейный ресторан</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-foreground text-sm leading-relaxed">
                      Снижение текучести персонала. За год уволился 1 сотрудник. До этого — 2-3 человека каждый месяц.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-green-600 font-bold uppercase tracking-wide">Корпоративная культура и система обучения</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-card to-blue-50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-2">
                    <span className="text-white text-2xl font-black">+52%</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Бистро в Сити</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-foreground text-sm leading-relaxed">
                      Рост среднего чека с 1650₽ до 2510₽ за 6 недель. Обучение персонала работе с бизнес-ланчами и предложениями дня.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-blue-600 font-bold uppercase tracking-wide">Скрипты продаж и таргетированные предложения</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;