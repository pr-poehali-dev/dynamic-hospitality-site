import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('sales');

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-5xl font-black text-center text-foreground">Услуги</h2>
          
          <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-transparent">
              <TabsTrigger value="sales" className="data-[state=active]:bg-primary data-[state=active]:text-white text-base py-3">
                Система продаж
              </TabsTrigger>
              <TabsTrigger value="service" className="data-[state=active]:bg-primary data-[state=active]:text-white text-base py-3">
                Культура сервиса
              </TabsTrigger>
              <TabsTrigger value="mentoring" className="data-[state=active]:bg-primary data-[state=active]:text-white text-base py-3">
                Наставничество
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="mt-8 space-y-6">
              <Card className="border-2">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" className="text-primary" size={32} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black text-foreground">Построение системы продаж</h3>
                      <p className="text-foreground/80 text-lg">
                        Создаём культуру, где официанты не «впаривают», а создают атмосферу и уверенно рекомендуют.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-foreground">Что включено:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Аудит текущей ситуации',
                        'Карта пути гостя по меню',
                        'Живые сценарии продаж',
                        'Обучение команды',
                        'Полевое сопровождение',
                        'Отчёты и метрики'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-xl">
                    <p className="text-foreground font-semibold">
                      Результат: +20–40% к среднему чеку через 2–3 месяца.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="service" className="mt-8 space-y-6">
              <Card className="border-2">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Heart" className="text-primary" size={32} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black text-foreground">Культура сервиса</h3>
                      <p className="text-foreground/80 text-lg">
                        Формируем атмосферу, где гости чувствуют заботу, а команда — гордость за своё место.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-foreground">Что включено:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Определение стандартов',
                        'Тренировка команды',
                        'Работа с гостевым опытом',
                        'Построение коммуникации',
                        'Регулярный контроль',
                        'Обратная связь'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-xl">
                    <p className="text-foreground font-semibold">
                      Результат: рост повторных визитов, позитивные отзывы, сильная команда.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mentoring" className="mt-8 space-y-6">
              <Card className="border-2">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="text-primary" size={32} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black text-foreground">Персональное наставничество</h3>
                      <p className="text-foreground/80 text-lg">
                        Работаю с управляющими, официантами, барменами — в смене, в реальных условиях.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-foreground">Что включено:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Индивидуальный подход',
                        'Работа в зале',
                        'Разбор кейсов',
                        'Практические навыки',
                        'Поддержка и мотивация',
                        'План развития'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-xl">
                    <p className="text-foreground font-semibold">
                      Результат: уверенность, рост продаж, лояльность к месту.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
