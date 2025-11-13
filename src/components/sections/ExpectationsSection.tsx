import { Card, CardContent } from '@/components/ui/card';

const ExpectationsSection = () => {
  const comparisons = [
    {
      promise: 'Средний чек +30% за месяц',
      reality: '+15-25% за 2-3 месяца при соблюдении дисциплины'
    },
    {
      promise: 'Окупаемость за неделю',
      reality: 'Окупаемость за 1.5-3 месяца'
    },
    {
      promise: 'Команда работает сама',
      reality: 'В первые 3 месяца необходим постоянный контроль'
    },
    {
      promise: 'Все сотрудники примут',
      reality: '20-30% уйдут, это нормально'
    },
    {
      promise: 'Гарантия результата',
      reality: 'Гарантия на инструменты, результат зависит от вас'
    },
    {
      promise: 'Результат навсегда',
      reality: 'Результат сохраняется, если поддерживать систему'
    },
    {
      promise: 'Подходит всем',
      reality: 'Не подходит для фастфуда, стритфуда и заведений с чеком менее 500₽'
    },
    {
      promise: 'Не нужно ваше участие',
      reality: 'В первый месяц потребуется 5-10 часов вашего времени в неделю'
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Ожидания против реальности
            </h2>
            <p className="text-xl text-muted-foreground">
              Что обещают обычно vs что будет на самом деле
            </p>
          </div>

          <Card className="border-2 border-amber-500 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border bg-gradient-to-r from-destructive/10 to-green-50">
                      <th className="p-6 text-left w-1/2">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">❌</span>
                          <span className="text-2xl font-black text-foreground">Что обещают обычно</span>
                        </div>
                      </th>
                      <th className="p-6 text-left w-1/2">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">✅</span>
                          <span className="text-2xl font-black text-foreground">Что будет на самом деле</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((item, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-border hover:bg-muted/50 transition-colors"
                      >
                        <td className="p-6 align-top">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl flex-shrink-0">❌</span>
                            <span className="text-lg font-semibold text-destructive/80">{item.promise}</span>
                          </div>
                        </td>
                        <td className="p-6 align-top bg-green-50/50">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl flex-shrink-0">✅</span>
                            <span className="text-lg font-semibold text-green-700">{item.reality}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-8 border-t-4 border-amber-500">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                  <p className="text-2xl font-black text-foreground">ЗОЛОТОЕ ПРАВИЛО</p>
                  <p className="text-xl text-foreground italic">
                    «Лучше недоговорить и переделать, чем пообещать и не выполнить»
                  </p>
                  <div className="pt-4 space-y-3">
                    <p className="text-foreground">
                      Если я скажу <span className="font-bold">«+15-20% за 2 месяца»</span>, а дам <span className="font-bold text-green-600">+25% за месяц</span> — вы будете в восторге.
                    </p>
                    <p className="text-foreground">
                      Если я скажу <span className="font-bold">«+30% за неделю»</span>, а дам <span className="font-bold">+25% за месяц</span> — вы будете разочарованы, хотя результат отличный.
                    </p>
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

export default ExpectationsSection;
