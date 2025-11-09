import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
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
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

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
        setAgreedToPrivacy(false);
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
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://cdn.poehali.dev/files/3aca5e4f-c0ba-46eb-9d15-44bc568d73a5.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="border-4 border-primary bg-gradient-to-br from-primary/10 to-background mb-12 shadow-2xl">
            <CardContent className="p-10 text-center space-y-6">
              <div className="inline-block p-4 bg-primary rounded-full mb-4">
                <Icon name="Gift" className="text-white" size={48} />
              </div>
              <h2 className="text-5xl font-black text-foreground">Бесплатная консультация 30 минут!</h2>
              <p className="text-2xl text-foreground max-w-3xl mx-auto">
                Разберем вашу ситуацию и определим точки роста — <span className="text-primary font-black">без оплаты</span>
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="bg-card p-4 rounded-xl border-2 border-border">
                  <Icon name="Check" className="text-green-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-foreground">Анализ ситуации</p>
                </div>
                <div className="bg-card p-4 rounded-xl border-2 border-border">
                  <Icon name="Check" className="text-green-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-foreground">План действий</p>
                </div>
                <div className="bg-card p-4 rounded-xl border-2 border-border">
                  <Icon name="Check" className="text-green-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-foreground">Ответы на вопросы</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Запишитесь сейчас — <strong className="text-primary">мест ограничено!</strong>
              </p>
            </CardContent>
          </Card>

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
                  <div className="flex items-start gap-3 p-4 border-2 border-border rounded-lg bg-muted/30">
                    <Checkbox 
                      id="privacy" 
                      checked={agreedToPrivacy}
                      onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                      Я согласен на сбор и обработку персональных данных в соответствии с политикой конфиденциальности
                    </Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !agreedToPrivacy}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-gray-700 bg-gray-800">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-white">Напишите мне:</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://t.me/maricopro" 
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-xl hover:shadow-lg transition-all group border border-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                        <Icon name="MessageCircle" className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-primary">Telegram</div>
                        <div className="text-sm text-gray-400">@maricopro</div>
                      </div>
                      <Icon name="ArrowRight" className="text-primary" size={20} />
                    </a>

                    <a 
                      href="https://instagram.com/marico.pro"
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-xl hover:shadow-lg transition-all group border border-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Icon name="Camera" className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-primary">Instagram</div>
                        <div className="text-sm text-gray-400">@marico.pro</div>
                      </div>
                      <Icon name="ArrowRight" className="text-primary" size={20} />
                    </a>
                  </div>
                  
                  <div className="border-t-2 border-gray-700 pt-6 mt-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <span>📍 Работаю в Москве и МО</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Icon name="Globe" size={20} className="text-primary" />
                      <span>🌐 Онлайн для регионов</span>
                    </div>
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