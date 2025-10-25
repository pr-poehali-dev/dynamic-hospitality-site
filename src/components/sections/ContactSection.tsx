import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business_type: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/5d1ba8c6-82ca-42ab-be50-54dc6866b7b5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Свяжемся с вами в течение 2 часов',
        });
        setFormData({ name: '', phone: '', business_type: '', message: '' });
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте снова.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-5xl font-black text-foreground">Готовы обсудить проект?</h2>
            <p className="text-xl text-foreground/80">
              Заполните форму — отвечу в течение 2 часов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Петров" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business">Тип бизнеса</Label>
                    <Select value={formData.business_type} onValueChange={(value) => setFormData({...formData, business_type: value})}>
                      <SelectTrigger id="business">
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Ресторан</SelectItem>
                        <SelectItem value="club">Клуб</SelectItem>
                        <SelectItem value="hotel">Отель</SelectItem>
                        <SelectItem value="bar">Бар</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Опишите задачу</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите, с чем нужна помощь..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Или напишите напрямую:</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://t.me/malinochka_marina" 
                      className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-lg transition-all group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                        <Icon name="Send" className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary">Telegram</div>
                        <div className="text-sm text-foreground/60">@malinochka_marina</div>
                      </div>
                      <Icon name="ArrowRight" className="text-primary" size={20} />
                    </a>

                    <a 
                      href="https://www.instagram.com/marico_pro?igsh=eXljY2RqbHJtdjM4&utm_source=qr"
                      className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-lg transition-all group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                        <Icon name="Instagram" className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary">Instagram</div>
                        <div className="text-sm text-foreground/60">@marico_pro</div>
                      </div>
                      <Icon name="ArrowRight" className="text-primary" size={20} />
                    </a>

                    <a 
                      href="https://wa.me/79000000000"
                      className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-lg transition-all group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <Icon name="MessageCircle" className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary">WhatsApp</div>
                        <div className="text-sm text-foreground/60">Быстрая связь</div>
                      </div>
                      <Icon name="ArrowRight" className="text-primary" size={20} />
                    </a>

                    <a 
                      href="tel:+79182858216"
                      className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-lg transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Icon name="Phone" className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary">Max</div>
                        <div className="text-sm text-foreground/60">+7 (918) 285-82-16</div>
                      </div>
                      <Icon name="ArrowRight" className="text-primary" size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" className="text-primary" size={20} />
                      <span className="text-foreground">Отвечаю в течение 2 часов</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Shield" className="text-primary" size={20} />
                      <span className="text-foreground">Конфиденциальность гарантирую</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Coffee" className="text-primary" size={20} />
                      <span className="text-foreground">Первая консультация бесплатно</span>
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

export default ContactSection;