import { Card, CardContent } from '@/components/ui/card';

const CasesSection = () => {
  return (
    <section id="results" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-foreground">Как я достигаю результатов</h2>
            <p className="text-xl text-muted-foreground">Реальные кейсы трансформации бизнеса</p>
          </div>

          <div className="space-y-12">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
              <div className="space-y-2 mb-8">
                <h3 className="text-3xl font-bold">Семейный ресторан грузинской кухни</h3>
                <p className="text-orange-100">Москва, Юго-Запад • 85-100 гостей/день</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-sm text-orange-100 mb-2">Было:</div>
                  <div className="text-2xl font-black text-red-200">Чек: 1450₽</div>
                  <div className="text-sm text-orange-100 mt-1">Выручка: 3 950 000₽/мес</div>
                </div>

                <div className="bg-emerald-500 p-6 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-black">+50%</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-sm text-orange-100 mb-2">Стало:</div>
                  <div className="text-2xl font-black text-emerald-200">Чек: 2180₽</div>
                  <div className="text-sm text-orange-100 mt-1">Выручка: 5 930 000₽/мес</div>
                </div>
              </div>

              <div className="bg-purple-600 p-6 rounded-2xl text-center mb-8">
                <div className="text-3xl font-black">Прирост: +1 980 000₽ в месяц</div>
              </div>

              <Card className="bg-white/95 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <p className="text-gray-700 italic text-lg mb-4">
                      "Марина не просто провела тренинг и ушла. Она три недели каждый день приезжала, смотрела, как работают официанты, исправляла ошибки на месте. Окупили инвестиции за 18 дней."
                    </p>
                    <p className="text-gray-900 font-bold">— Георгий, владелец</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
              <div className="space-y-2 mb-8">
                <h3 className="text-3xl font-bold">Винный бар в центре</h3>
                <p className="text-orange-100">Москва, ЦАО • Премиум сегмент • 60-75 гостей/день</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-sm text-orange-100 mb-2">Было:</div>
                  <div className="text-2xl font-black text-red-200">Чек: 3200₽</div>
                  <div className="text-sm text-orange-100 mt-1">Выручка: 5 760 000₽/мес</div>
                </div>

                <div className="bg-emerald-500 p-6 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-black">+45%</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-sm text-orange-100 mb-2">Стало:</div>
                  <div className="text-2xl font-black text-emerald-200">Чек: 4650₽</div>
                  <div className="text-sm text-orange-100 mt-1">Выручка: 8 370 000₽/мес</div>
                </div>
              </div>

              <div className="bg-purple-600 p-6 rounded-2xl text-center mb-8">
                <div className="text-3xl font-black">Прирост: +2 610 000₽ в месяц</div>
              </div>

              <Card className="bg-white/95 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <p className="text-gray-700 italic text-lg mb-4">
                      "Марина показала, что знать продукт и уметь его продать — это разные вещи. Теперь наши бармены не просто наливают вино, они создают опыт. Чек вырос почти в полтора раза."
                    </p>
                    <p className="text-gray-900 font-bold">— Анна, управляющая</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl font-black text-gray-900">Премиальный ресторан, Москва</div>
                  <div className="text-6xl font-black text-primary">+187%</div>
                  <p className="text-gray-600">
                    Рост выручки за 4 месяца после внедрения рекомендаций. Средний чек вырос с 3 200₽ до 5 800₽ благодаря новой концепции подачи и обучению персонала техникам продаж.
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-primary font-semibold">Ключевое изменение: переформатирование меню и создание системы допродаж, которая не раздражает гостей.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl font-black text-gray-900">Сеть кафе, 5 локаций</div>
                  <div className="text-6xl font-black text-primary">4.9⭐</div>
                  <p className="text-gray-600">
                    Рейтинг вырос с 3.8 до 4.9 на всех площадках за 2 месяца. Количество негативных отзывов сократилось на 94%. Поток гостей увеличился на 65%.
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-primary font-semibold">Ключевое изменение: полная перестройка системы обслуживания и внедрение стандартов работы с отзывами.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl font-black text-gray-900">Семейный ресторан</div>
                  <div className="text-6xl font-black text-primary">-78%</div>
                  <p className="text-gray-600">
                    Снижение текучести персонала. За год работы уволился только один сотрудник (по семейным обстоятельствам). До этого каждый месяц увольнялось 2-3 человека. Команда стала сплоченной и мотивированной.
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-primary font-semibold">Ключевое изменение: создание корпоративной культуры и системы обучения/развития персонала.</p>
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