import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RealitySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block px-6 py-2 bg-amber-100 rounded-full mb-4">
              <span className="text-amber-700 font-bold text-sm">💯 ЧЕСТНО БЕЗ ПРИКРАС</span>
            </div>
            <h2 className="text-5xl font-black text-foreground">Как это будет на самом деле</h2>
            <p className="text-xl text-muted-foreground">Реалистичный таймлайн и что от вас потребуется</p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-2">НЕДЕЛЯ 1-2: Сопротивление</h3>
                    <p className="text-muted-foreground">Фаза адаптации и конфликтов</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Frown" className="text-red-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">"Мы и так нормально работали"</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Frown" className="text-red-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">"Это всё теория, на практике не работает"</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Frown" className="text-red-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Скептицизм и саботаж со стороны старичков</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-red-200">
                    <p className="font-bold text-foreground mb-2">Рост чека:</p>
                    <p className="text-4xl font-black text-red-600">0-5%</p>
                    <p className="text-sm text-muted-foreground mt-2">Команда учится, делает ошибки, пока нестабильно</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-2">НЕДЕЛЯ 3-4: Первые попытки</h3>
                    <p className="text-muted-foreground">Ошибки и обучение на практике</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Meh" className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Кто-то начинает применять техники</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Meh" className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Много ошибок, неуверенность</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Meh" className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">"У гостей бесят эти допродажи" — критика</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-amber-200">
                    <p className="font-bold text-foreground mb-2">Рост чека:</p>
                    <p className="text-4xl font-black text-amber-600">10-15%</p>
                    <p className="text-sm text-muted-foreground mt-2">Навыки закрепляются, уверенность растет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-2">МЕСЯЦ 2-3: Привыкание</h3>
                    <p className="text-muted-foreground">Команда втягивается в процесс</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Smile" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Часть команды начала продавать уверенно</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Smile" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">У активных растут чаевые — это мотивирует</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Smile" className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Остальные видят результат и подтягиваются</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                    <p className="font-bold text-foreground mb-2">Рост чека:</p>
                    <p className="text-4xl font-black text-blue-600">20-30%</p>
                    <p className="text-sm text-muted-foreground mt-2">Уже работает стабильно, видна системность</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-2">МЕСЯЦ 4-6: Новая норма</h3>
                    <p className="text-muted-foreground">Система работает на автомате</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Делают автоматически, без напоминаний</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Кто не смог — ушел сам (это нормально)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground">Новички учатся у старых по новой системе</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                    <p className="font-bold text-foreground mb-2">Рост чека:</p>
                    <p className="text-4xl font-black text-green-600">25-35%</p>
                    <p className="text-sm text-muted-foreground mt-2">Стабильный результат, масштабирование</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-4 border-red-500 bg-gradient-to-br from-red-100 to-orange-100">
            <CardContent className="p-10">
              <div className="space-y-6">
                <div className="text-center">
                  <Icon name="AlertTriangle" className="text-red-600 mx-auto mb-4" size={64} />
                  <h3 className="text-3xl font-black text-foreground mb-4">⚠️ ВАЖНО: Что от вас потребуется</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-red-300">
                    <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Icon name="Clock" className="text-red-600" size={24} />
                      ВАШЕ ВРЕМЯ
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>• Неделя 1-2: <strong>10-15 часов</strong> (внедрение)</li>
                      <li>• Неделя 3-8: <strong>5-7 часов</strong> (контроль)</li>
                      <li>• Месяц 3+: <strong>2-3 часа</strong> (поддержка)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-red-300">
                    <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Icon name="Target" className="text-red-600" size={24} />
                      ДИСЦИПЛИНА
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>• Ежедневные планерки (15 минут)</li>
                      <li>• Еженедельные разборы (30 минут)</li>
                      <li>• Mystery Shopping раз в 2 недели</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-red-300">
                    <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Icon name="MessageSquare" className="text-red-600" size={24} />
                      НЕУДОБНЫЕ РАЗГОВОРЫ
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>• Кого-то придется уволить</li>
                      <li>• С кем-то конфликтовать</li>
                      <li>• Кто-то будет обижаться</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-red-300">
                    <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Icon name="DollarSign" className="text-red-600" size={24} />
                      ИНВЕСТИЦИИ
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>• Процент от чека персоналу</li>
                      <li>• Возможно новая униформа</li>
                      <li>• Может потребоваться обновить POS</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-600 p-6 rounded-2xl text-center">
                  <p className="text-white text-xl font-black mb-2">ЧЕСТНО:</p>
                  <p className="text-white text-lg">20-30% команды не примут изменения и уйдут</p>
                  <p className="text-red-100 text-sm mt-2">Это НОРМАЛЬНО и даже хорошо — остаются только мотивированные</p>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-red-400">
                  <h4 className="font-bold text-xl text-foreground mb-4 text-center">❌ ЕСЛИ ВЫ НЕ ГОТОВЫ:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Icon name="X" className="text-red-600" size={20} />
                      <span className="text-foreground">Тратить время</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="X" className="text-red-600" size={20} />
                      <span className="text-foreground">Идти на конфликт</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="X" className="text-red-600" size={20} />
                      <span className="text-foreground">Инвестировать дополнительно</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="X" className="text-red-600" size={20} />
                      <span className="text-foreground">Терпеть временный хаос</span>
                    </div>
                  </div>
                  <p className="text-center text-red-600 font-black text-xl mt-6">→ Лучше не начинайте. Деньги потратите впустую.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-amber-500 bg-gradient-to-br from-amber-50 to-yellow-50">
            <CardContent className="p-10">
              <div className="text-center space-y-4">
                <Icon name="AlertCircle" className="text-amber-600 mx-auto" size={64} />
                <h3 className="text-3xl font-black text-foreground">⚠️ ЕСЛИ К МЕСЯЦУ 3 РОСТА НЕТ:</h3>
                <p className="text-lg text-muted-foreground">Значит что-то не так:</p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-amber-300">
                    <Icon name="XCircle" className="text-amber-600 mx-auto mb-3" size={32} />
                    <p className="font-bold text-foreground">Не внедряются рекомендации</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-amber-300">
                    <Icon name="XCircle" className="text-amber-600 mx-auto mb-3" size={32} />
                    <p className="font-bold text-foreground">Команда саботирует</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-amber-300">
                    <Icon name="XCircle" className="text-amber-600 mx-auto mb-3" size={32} />
                    <p className="font-bold text-foreground">Проблема глубже (концепция, локация)</p>
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

export default RealitySection;
