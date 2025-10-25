import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ROICalculator = () => {
  const [averageCheck, setAverageCheck] = useState<number>(1500);
  const [guestsPerDay, setGuestsPerDay] = useState<number>(50);
  const [workingDays, setWorkingDays] = useState<number>(25);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const currentRevenue = averageCheck * guestsPerDay * workingDays;
    const checkIncrease = 0.3;
    const newCheck = averageCheck * (1 + checkIncrease);
    const newRevenue = newCheck * guestsPerDay * workingDays;
    const additionalRevenue = newRevenue - currentRevenue;
    
    return {
      currentRevenue,
      newRevenue,
      additionalRevenue,
      yearlyIncrease: additionalRevenue * 12
    };
  };

  const results = calculateROI();

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(Math.round(num));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Icon name="Calculator" size={48} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Калькулятор роста выручки
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Посчитайте, насколько вырастет доход вашего заведения после внедрения системы продаж
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Settings" className="text-primary" />
                  Введите данные вашего заведения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="check">Средний чек (₽)</Label>
                  <Input
                    id="check"
                    type="number"
                    value={averageCheck}
                    onChange={(e) => setAverageCheck(Number(e.target.value))}
                    className="text-lg"
                  />
                  <p className="text-sm text-muted-foreground">Текущая средняя сумма заказа</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей в день</Label>
                  <Input
                    id="guests"
                    type="number"
                    value={guestsPerDay}
                    onChange={(e) => setGuestsPerDay(Number(e.target.value))}
                    className="text-lg"
                  />
                  <p className="text-sm text-muted-foreground">Среднее количество посетителей за день</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="days">Рабочих дней в месяц</Label>
                  <Input
                    id="days"
                    type="number"
                    value={workingDays}
                    onChange={(e) => setWorkingDays(Number(e.target.value))}
                    className="text-lg"
                  />
                  <p className="text-sm text-muted-foreground">Количество дней работы в месяц</p>
                </div>

                <Button 
                  onClick={() => setShowResults(true)} 
                  size="lg" 
                  className="w-full"
                >
                  <Icon name="TrendingUp" className="mr-2" />
                  Рассчитать рост
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="DollarSign" className="text-primary" />
                  Прогноз роста выручки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {showResults ? (
                  <>
                    <div className="space-y-4">
                      <div className="p-4 bg-background rounded-xl border-2">
                        <div className="text-sm text-muted-foreground mb-1">Текущая выручка в месяц</div>
                        <div className="text-3xl font-black text-foreground">
                          {formatNumber(results.currentRevenue)} ₽
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <Icon name="ArrowDown" className="text-primary animate-bounce" size={32} />
                      </div>

                      <div className="p-4 bg-primary/10 rounded-xl border-2 border-primary/30">
                        <div className="text-sm text-primary mb-1">Выручка после внедрения (+30%)</div>
                        <div className="text-3xl font-black text-primary">
                          {formatNumber(results.newRevenue)} ₽
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-primary to-primary/80 rounded-xl text-white">
                        <div className="text-sm opacity-90 mb-2">Дополнительный доход</div>
                        <div className="text-4xl font-black mb-4">
                          +{formatNumber(results.additionalRevenue)} ₽
                        </div>
                        <div className="text-sm opacity-90">в месяц</div>
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="text-2xl font-bold">
                            +{formatNumber(results.yearlyIncrease)} ₽
                          </div>
                          <div className="text-sm opacity-90">в год</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-start gap-3 text-sm">
                        <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-foreground/80">Рост среднего чека на 30% — консервативная оценка по моим кейсам</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-foreground/80">Результат достигается за 2-4 недели после внедрения</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-foreground/80">Эффект сохраняется при поддержке системы</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => window.location.href = '#contact'} 
                      size="lg" 
                      className="w-full"
                    >
                      Обсудить внедрение
                    </Button>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <Icon name="BarChart3" className="text-muted-foreground mb-4" size={64} />
                    <p className="text-lg text-foreground/60">
                      Заполните данные слева и нажмите "Рассчитать рост"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-2 border-primary/20 bg-gradient-to-r from-background to-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon name="Lightbulb" className="text-primary" size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-foreground">Как это работает?</h3>
                  <p className="text-foreground/80">
                    Калькулятор показывает консервативный прогноз роста выручки при увеличении среднего чека на 30%. 
                    Это достижимо через внедрение культуры продаж: апсейл, кросс-селл, правильная презентация меню 
                    и обучение персонала. В моих реальных кейсах рост достигал 40-50%.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Icon name="Award" size={20} />
                      <span>10+ лет опыта</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Icon name="Users" size={20} />
                      <span>47+ довольных клиентов</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Icon name="TrendingUp" size={20} />
                      <span>Средний рост чека 30-40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
