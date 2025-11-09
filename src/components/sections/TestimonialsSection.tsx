import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-5xl font-black text-center text-gray-900">Что говорят клиенты</h2>

          <div className="space-y-8">
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                    АМ
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Алексей Морозов</h4>
                      <p className="text-gray-600">Владелец ресторана "Seasons", Санкт-Петербург</p>
                    </div>
                    <div className="border-l-4 border-amber-500 pl-6">
                      <p className="text-gray-700 italic text-lg leading-relaxed">
                        "Я скептически относился к консультантам, но решил рискнуть — заведение откровенно проседало. То, что выявил аудит, было для меня шоком: оказалось, половина моих маркетинговых расходов уходила впустую, а официанты работали по принципам 90-х годов. За три месяца после внедрения рекомендаций мы не просто вышли из минуса — прибыль выросла в 2,4 раза! Самое ценное — это был не разовый эффект. Выстроенная система работает до сих пор, спустя полтора года. Это инвестиция, которая окупилась уже в первый месяц."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                    ЕС
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Екатерина Соколова</h4>
                      <p className="text-gray-600">Управляющая сети кафе "Coffee&Go"</p>
                    </div>
                    <div className="border-l-4 border-amber-500 pl-6">
                      <p className="text-gray-700 italic text-lg leading-relaxed">
                        "До работы с Мариной я думала, что знаю всё о кофейном бизнесе. Она перевернула моё представление о продажах в HoReCa. Главное — она не навязывает шаблоны. Марина три дня наблюдала за работой всех пяти точек, разговаривала с каждым сотрудником, даже общалась с нашими постоянными гостями (с их согласия). Потом предложила план, который учитывал специфику каждой локации. Результат? Средний чек вырос на 38%, а текучка персонала упала почти до нуля. Команда наконец-то работает как единый организм, а я сплю спокойно."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl border-2 border-amber-300">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
              После моей работы остается не просто впечатление
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              Остается <strong>работающая система</strong>, <strong>обученная команда</strong>, <strong>выстроенные процессы</strong> и, самое главное, — <strong>измеримый результат в деньгах</strong>. Я не продаю мотивационные речи. Я создаю фундамент для вашего роста.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
