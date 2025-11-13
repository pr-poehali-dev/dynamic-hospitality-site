import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-foreground">Что говорят клиенты</h2>
            <p className="text-muted-foreground">Реальные истории трансформации бизнеса</p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                    АМ
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">Алексей Морозов</h4>
                      <p className="text-muted-foreground">Владелец ресторана "Seasons", Санкт-Петербург</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <p className="text-foreground italic text-lg leading-relaxed">
                        "Я скептически относился к консультантам, но решил рискнуть — заведение откровенно проседало. То, что выявил аудит, было для меня шоком: оказалось, половина моих маркетинговых расходов уходила впустую, а официанты работали по принципам 90-х годов. За три месяца после внедрения рекомендаций мы не просто вышли из минуса — прибыль выросла в 2.4 раза! Самое ценное — это был не разовый эффект. Выстроенная система работает до сих пор, спустя полтора года. Это инвестиция, которая окупилась уже в первый месяц."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                    ЕС
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">Екатерина Соколова</h4>
                      <p className="text-muted-foreground">Управляющая сети кафе "Coffee&Go"</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <p className="text-foreground italic text-lg leading-relaxed">
                        "Работала с разными тренерами, но подход здесь принципиально другой. Это не тренинг 'для галочки', а реальное погружение в проблемы конкретно нашей команды. Тренер провел неделю, изучая каждого сотрудника, их взаимодействие, слабые места. Программа была составлена индивидуально. Результат превзошел ожидания: текучка персонала снизилась с 40% до 8% за полгода, а средний чек вырос на 34%. Команда стала работать как единый механизм. Особенно впечатлило, что через три месяца после тренинга провели контрольную проверку и дали дополнительные рекомендации — совершенно бесплатно! Это уровень."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                    ДК
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">Дмитрий Кузнецов</h4>
                      <p className="text-muted-foreground">Владелец гастробара "Медь", Казань</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <p className="text-foreground italic text-lg leading-relaxed">
                        "Мы застряли на одном уровне и никак не могли пробить 'стеклянный потолок'. Аудит показал, что проблема не в кухне или локации, а в системе обслуживания и позиционировании. За четыре месяца работы изменили концепцию подачи, переобучили весь персонал, скорректировали маркетинг. Сейчас у нас очередь на выходных, рейтинг 4.9, а прибыль выросла на 210%. Самое главное — я наконец понял, как должен работать ресторан на этом уровне. Знания, которые я получил, стоят в десятки раз больше, чем я заплатил. Теперь открываю вторую точку и уже знаю, что делать."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-10 rounded-2xl border-2 border-primary shadow-lg">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6">
              После моей работы остается не просто впечатление
            </h3>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              Остается <strong className="text-foreground">работающая система</strong>, <strong className="text-foreground">обученная команда</strong>, <strong className="text-foreground">выстроенные процессы</strong> и, самое главное, — <strong className="text-foreground">измеримый результат в деньгах</strong>. Я не продаю мотивационные речи. Я создаю фундамент для вашего роста.
            </p>
          </div>

          <div className="text-center pt-8">
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2"
              onClick={() => window.open('https://t.me/malinochka_marina', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Оставить свой отзыв
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;