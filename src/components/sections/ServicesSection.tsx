import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Check } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-gray-900">Мои услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выбирайте формат работы в зависимости от ваших задач
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-rose-100 flex items-center justify-center">
                    <Icon name="Target" className="text-rose-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Аудит 360°</h3>
                  <div className="text-3xl font-black text-primary">от 95 000₽</div>
                  <p className="text-gray-600">Глубокий анализ всех аспектов вашего бизнеса</p>
                </div>

                <div className="space-y-3">
                  {[
                    'Анализ концепции и брендинга',
                    'Мониторинг отзывов',
                    'Интервью с персоналом',
                    'Серия тайных гостей',
                    'Аудит маркетинга',
                    'Отчет на 40-60 страниц'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Включает:</strong> изучение концепции, гостей вашего формата и внутренний брендинг. Всё индивидуально — только то, что действительно нужно вашему заведению.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary relative hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                ХИТ ПРОДАЖ
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <Icon name="Handshake" className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">💪 Индивидуальный тренинг</h3>
                  <div className="text-3xl font-black text-primary">от 120 000₽</div>
                  <p className="text-gray-600">Обучение под вашу команду после анализа каждого сотрудника</p>
                </div>

                <div className="space-y-3">
                  {[
                    'Предварительный анализ команды',
                    'Персональная программа',
                    '2-3 дня интенсивов',
                    'Готовые скрипты продаж',
                    '45 дней поддержки',
                    'Гарантия роста на 20%'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t bg-orange-50 -mx-8 -mb-8 px-8 py-4 rounded-b-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Важно:</strong> Стоимость высока, так как перед тренингами я изучаю и анализирую весь персонал, выявляю сильные и слабые стороны. Невозможно учить всех одинаково — я выстраиваю методы и техники именно для вашей команды.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center">
                    <Icon name="BarChart3" className="text-teal-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">📊 Полное сопровождение</h3>
                  <div className="text-3xl font-black text-primary">от 180 000₽/мес</div>
                  <p className="text-gray-600">Становлюсь вашим внешним директором по продажам</p>
                </div>

                <div className="space-y-3">
                  {[
                    'Поддержка 24/7',
                    'Найм и обучение персонала',
                    'Контроль качества',
                    'Система KPI',
                    'Рост на 35-60% за квартал'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    Для тех, кто хочет системный подход с полным контролем и максимальным результатом.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-8">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Если необходимы <strong>базовые тренинги</strong>, можно получить <strong>онлайн-курсы по конкретной теме + доступ на месяц в закрытое сообщество</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
