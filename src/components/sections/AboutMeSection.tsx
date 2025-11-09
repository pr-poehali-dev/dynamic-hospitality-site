import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AboutMeSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl font-black text-foreground">Знакомство</h2>
            <p className="text-xl text-muted-foreground">Кто я и почему мне доверяют</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-foreground">Марина, эксперт MARICO PRO</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Более <strong className="text-foreground">10 лет</strong> помогаю ресторанам, барам и клубам увеличивать выручку через системный подход к продажам и сервису.
                </p>
                <p>
                  Я не верю в шаблонные тренинги. Каждое заведение уникально, каждая команда — со своими особенностями. Поэтому перед началом работы я <strong className="text-foreground">глубоко погружаюсь</strong> в ваш бизнес: изучаю концепцию, анализирую персонал, наблюдаю за работой в роли тайного гостя.
                </p>
                <p>
                  Мой подход — это не мотивационные речи, а <strong className="text-foreground">конкретные инструменты и измеримые результаты</strong>. После моей работы остаётся не просто впечатление, а работающая система.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="text-3xl font-black text-primary">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="text-3xl font-black text-primary">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">обучено сотрудников</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="text-3xl font-black text-primary">97%</div>
                  <div className="text-sm text-muted-foreground mt-1">рекомендуют</div>
                </div>
              </div>

              <Card className="border-2 border-primary bg-primary/5 mt-8">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Icon name="Gift" className="text-primary" size={24} />
                    Бесплатная консультация — что входит?
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Знакомство с вашим бизнесом и текущей ситуацией</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Выявление главных задач и проблемных точек</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Формирование плана действий</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Честная оценка: помогу или нет</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full text-lg"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    Записаться на консультацию
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/b9fc8501-228a-40ed-8a19-174cf4985534.png" 
                  alt="Марина, эксперт MARICO PRO" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="border-2">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <Icon name="Award" className="text-primary" size={20} />
                    </div>
                    <p className="text-xs text-muted-foreground">Сертифицированный эксперт</p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <Icon name="Users" className="text-primary" size={20} />
                    </div>
                    <p className="text-xs text-muted-foreground">Все форматы HoReCa</p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <Icon name="TrendingUp" className="text-primary" size={20} />
                    </div>
                    <p className="text-xs text-muted-foreground">Гарантия результата</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;