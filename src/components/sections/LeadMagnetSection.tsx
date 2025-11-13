import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const LeadMagnetSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/e1eae6a2-5c49-41d1-ae04-0ee93a5569be', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить запрос. Попробуйте снова.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="border-4 border-amber-500 shadow-2xl bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-10 text-white flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon name="Gift" className="text-white" size={48} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                      БЕСПЛАТНО:<br />Чек-лист проверки персонала
                    </h2>
                    <p className="text-xl font-bold text-amber-100">
                      15 критических точек, где вы теряете деньги каждый день
                    </p>
                  </div>
                </div>

                <div className="p-10 space-y-6">
                  {!submitted ? (
                    <>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-black text-slate-900">
                          ЧТО ВНУТРИ:
                        </h3>
                        <div className="space-y-3">
                          {[
                            'Как за 30 минут оценить уровень команды',
                            'Какие фразы официантов убивают продажи',
                            '5 типичных ошибок при встрече гостя',
                            'Чек-лист правильной подачи блюд',
                            'Как проверить знание меню за 5 минут',
                          ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                              <span className="text-foreground font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-300">
                        <p className="text-sm text-slate-900 font-bold">
                          🎁 БОНУС: PDF с 10 скриптами допродаж, которые работают в премиальном сегменте
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                          type="email"
                          placeholder="Ваш email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="text-lg py-6 border-2 border-slate-300"
                        />
                        <Button 
                          type="submit" 
                          size="lg" 
                          disabled={isSubmitting}
                          className="w-full text-lg py-6 font-black bg-amber-500 hover:bg-amber-600 text-slate-900"
                        >
                          {isSubmitting ? 'ОТПРАВКА...' : 'ПОЛУЧИТЬ ЧЕК-ЛИСТ БЕСПЛАТНО →'}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          Никакого спама. Отписаться можно в любой момент.
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="text-center space-y-6 py-8">
                      <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <Icon name="CheckCircle" className="text-green-600" size={64} />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900">
                        ГОТОВО!
                      </h3>
                      <p className="text-xl text-slate-700">
                        Чек-лист отправлен на <span className="font-bold text-amber-600">{email}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Проверьте папку "Спам", если письмо не пришло в течение 5 минут
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 text-sm text-slate-600">
            <p className="font-medium">
              🔥 Уже скачали <span className="font-black text-amber-600">1,247</span> владельцев ресторанов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;