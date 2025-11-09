import { Card, CardContent } from '@/components/ui/card';
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
            <div className="space-y-6">
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
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Сертифицированный эксперт HoReCa</h4>
                      <p className="text-sm text-muted-foreground">Постоянное повышение квалификации, участие в международных конференциях</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Работа с разными форматами</h4>
                      <p className="text-sm text-muted-foreground">От семейных кафе до премиум-ресторанов и частных клубов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Гарантия результата</h4>
                      <p className="text-sm text-muted-foreground">100% возврат средств, если не увидите роста показателей</p>
                    </div>
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

export default AboutMeSection;
