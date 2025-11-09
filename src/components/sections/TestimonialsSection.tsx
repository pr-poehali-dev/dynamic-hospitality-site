import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
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
                        "Я скептически относился к консультантам, но решил рискнуть — заведение откровенно проседало. То, что выявил аудит, было для меня шоком: оказалось, половина моих маркетинговых расходов уходила впустую, а официанты работали по принципам 90-х годов. За три месяца после внедрения рекомендаций мы не просто вышли из минуса — прибыль выросла в 2,4 раза! Самое ценное — это был не разовый эффект. Выстроенная система работает до сих пор, спустя полтора года. Это инвестиция, которая окупилась уже в первый месяц."
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
                        "До работы с Мариной я думала, что знаю всё о кофейном бизнесе. Она перевернула моё представление о продажах в HoReCa. Главное — она не навязывает шаблоны. Марина три дня наблюдала за работой всех пяти точек, разговаривала с каждым сотрудником, даже общалась с нашими постоянными гостями (с их согласия). Потом предложила план, который учитывал специфику каждой локации. Результат? Средний чек вырос на 38%, а текучка персонала упала почти до нуля. Команда наконец-то работает как единый организм, а я сплю спокойно."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary/30">
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
              onClick={() => window.open('https://t.me/maricopro', '_blank')}
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