import { Card, CardContent } from '@/components/ui/card';

const BeforeAfterSection = () => {
  const comparisons = [
    {
      label: 'Средний чек',
      before: '2,800₽',
      after: '3,640₽ (+30%)',
      afterColor: 'text-green-600'
    },
    {
      label: 'Выручка/день',
      before: '210,000₽',
      after: '273,000₽',
      afterColor: 'text-green-600'
    },
    {
      label: 'Текучка персонала',
      before: '40%',
      after: '12%',
      afterColor: 'text-green-600'
    },
    {
      label: 'Рейтинг на картах',
      before: '4.1',
      after: '4.9',
      afterColor: 'text-green-600'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              До и После работы со мной
            </h2>
            <p className="text-xl text-muted-foreground">
              Типичные показатели среднего ресторана
            </p>
          </div>

          <Card className="border-2 border-primary overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="p-6 text-left bg-muted/30">
                        <span className="text-2xl font-black text-foreground">Показатель</span>
                      </th>
                      <th className="p-6 text-center bg-destructive/5">
                        <span className="text-2xl font-black text-destructive">ДО</span>
                      </th>
                      <th className="p-6 text-center">
                        <span className="text-4xl font-black text-primary">→</span>
                      </th>
                      <th className="p-6 text-center bg-green-50">
                        <span className="text-2xl font-black text-green-600">ПОСЛЕ</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((item, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/20 transition-colors">
                        <td className="p-6 font-bold text-foreground text-lg">
                          {item.label}
                        </td>
                        <td className="p-6 text-center">
                          <span className="text-2xl font-black text-destructive/70">
                            {item.before}
                          </span>
                        </td>
                        <td className="p-6 text-center">
                          <span className="text-3xl font-black text-primary">→</span>
                        </td>
                        <td className="p-6 text-center">
                          <span className={`text-2xl font-black ${item.afterColor}`}>
                            {item.after}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-green-50 p-8 text-center border-t-4 border-primary">
                <p className="text-sm text-muted-foreground mb-2">ИТОГОВЫЙ ПРИРОСТ ЗА 3 МЕСЯЦА:</p>
                <p className="text-4xl md:text-5xl font-black text-green-600">
                  +1,890,000₽ дополнительной выручки
                </p>
                <p className="text-lg text-muted-foreground mt-3">
                  При полном внедрении рекомендаций и контроле
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto italic">
              * Цифры основаны на среднем результате клиентов с начальным чеком 2,800₽ и 75 гостями/день.
              Ваш результат может отличаться в зависимости от специфики заведения и дисциплины внедрения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
