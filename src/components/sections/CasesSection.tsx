import { Card, CardContent } from '@/components/ui/card';

const CasesSection = () => {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-4">
              <p className="text-primary font-black text-sm tracking-wide">📊 СВЕЖИЕ КЕЙСЫ 2025</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Как я достигаю результатов</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Реальные проекты этого года с измеримыми результатами</p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-primary overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">Семейный ресторан → VIP-формат</h3>
                      <p className="text-muted-foreground">Региональный город • Средний сегмент • 70-90 гостей/день</p>
                    </div>
                    <div className="px-4 py-2 bg-green-100 rounded-full">
                      <p className="text-green-800 font-black text-sm">МАРТ-ИЮНЬ 2025</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Было:</div>
                      <div className="text-2xl font-black text-destructive">Чек: 1450₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 3.9M/мес</div>
                    </div>

                    <div className="bg-primary p-6 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl font-black text-white">+38%</div>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Стало:</div>
                      <div className="text-2xl font-black text-green-600">Чек: 2000₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 5.4M/мес</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-2xl border-2 border-primary/20">
                    <p className="text-sm font-bold text-primary mb-3">🎯 ЧТО СДЕЛАЛА:</p>
                    <p className="text-foreground font-medium">7-дневный интенсив: аудит → диагностика → тренинги → внедрение → анализ → доработка → результат</p>
                  </div>

                  <div className="bg-primary p-6 rounded-2xl text-center">
                    <div className="text-3xl font-black text-white">Прирост: +1.5M₽ в месяц</div>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-xl">
                    <p className="text-foreground italic text-lg mb-4">
                      "Не верил, что система из Москвы сработает у нас. Марина доказала — при правильном подходе растут все. Главное — не отмазки, а работа."
                    </p>
                    <p className="text-foreground font-bold">— Андрей, владелец</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">Винный бар: проблема с продажами дорогих позиций</h3>
                      <p className="text-muted-foreground">Крупный город • Премиум-сегмент • 60-75 гостей/день</p>
                    </div>
                    <div className="px-4 py-2 bg-green-100 rounded-full">
                      <p className="text-green-800 font-black text-sm">МАЙ-ИЮЛЬ 2025</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Было:</div>
                      <div className="text-2xl font-black text-destructive">Чек: 3200₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 5.8M/мес</div>
                    </div>

                    <div className="bg-primary p-6 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl font-black text-white">+32%</div>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Стало:</div>
                      <div className="text-2xl font-black text-green-600">Чек: 4220₽</div>
                      <div className="text-sm text-muted-foreground mt-1">Выручка: 7.6M/мес</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-2xl border-2 border-primary/20">
                    <p className="text-sm font-bold text-primary mb-3">🎯 ЧТО СДЕЛАЛА:</p>
                    <p className="text-foreground font-medium">Мастер-класс для сомелье + скрипты продаж премиальных позиций. Научила продавать дорогое вино через правильную подачу и историю.</p>
                  </div>

                  <div className="bg-primary p-6 rounded-2xl text-center">
                    <div className="text-3xl font-black text-white">Прирост: +1.8M₽ в месяц</div>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-xl">
                    <p className="text-foreground italic text-lg mb-4">
                      "Марина показала: знать продукт и уметь его продать — разные вещи. Теперь персонал не боится предлагать дорогие позиции."
                    </p>
                    <p className="text-foreground font-bold">— Анна, управляющая</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">Запуск ресторана премиум-сегмента с нуля</h3>
                      <p className="text-muted-foreground">Москва • Новое открытие • Концептуальная кухня</p>
                    </div>
                    <div className="px-4 py-2 bg-green-100 rounded-full">
                      <p className="text-green-800 font-black text-sm">ФЕВРАЛЬ-АПРЕЛЬ 2025</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Задача:</div>
                      <div className="text-xl font-black text-foreground">Открытие нового заведения премиум-сегмента</div>
                      <div className="text-sm text-muted-foreground mt-2">Найм персонала + обучение с нуля</div>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border-2 border-border">
                      <div className="text-sm text-muted-foreground mb-2">Результат:</div>
                      <div className="text-2xl font-black text-green-600">2.8M₽ выручка</div>
                      <div className="text-sm text-muted-foreground mt-2">в первый месяц работы</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-2xl border-2 border-primary/20">
                    <p className="text-sm font-bold text-primary mb-3">🎯 ЧТО СДЕЛАЛА:</p>
                    <p className="text-foreground font-medium">Найм персонала → обучение команды → стандарты сервиса → запуск. Команда работает слаженно с первого дня.</p>
                  </div>

                  <div className="bg-primary p-6 rounded-2xl text-center">
                    <div className="text-3xl font-black text-white">Успешный старт без провала первых месяцев</div>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-xl">
                    <p className="text-foreground italic text-lg mb-4">
                      "Марина собрала команду, которая сработалась мгновенно. Обычно первые месяцы — хаос, у нас всё работало как часы с первого дня."
                    </p>
                    <p className="text-foreground font-bold">— Дмитрий, основатель</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center mb-2">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl font-black">+187%</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground text-center">Премиальный ресторан</h4>
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
                  <div className="flex justify-center mb-2">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl font-black">4.9⭐</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground text-center">Сеть кафе, 5 локаций</h4>
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
                  <div className="flex justify-center mb-2">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl font-black">-78%</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground text-center">Семейный ресторан</h4>
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
                  <div className="flex justify-center mb-2">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl font-black">+52%</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground text-center">Бистро в Сити</h4>
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