import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const GiftForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: 'Ошибка',
        description: 'Необходимо согласие на отправку чек-листа',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const message = `🎁 ЗАПРОС ЧЕК-ЛИСТА

Имя: ${formData.name}
Email: ${formData.email}
Телефон: ${formData.phone}
Согласие: Да`;

      const response = await fetch('https://functions.poehali.dev/5d1ba8c6-82ca-42ab-be50-54dc6866b7b5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
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

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      consent: false
    });
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <Icon name="Gift" className="text-green-600" size={64} />
        </div>
        <h3 className="text-3xl font-black text-foreground">Отлично!</h3>
        <p className="text-xl text-foreground">
          Чек-лист отправлен на вашу почту 📧
        </p>
        <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
          <p className="text-sm text-foreground">
            Проверьте папку «Спам», если письмо не пришло в течение 5 минут
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto">
          <Icon name="Gift" className="text-white" size={32} />
        </div>
        <h3 className="text-2xl font-black text-foreground">Забрать подарок</h3>
        <p className="text-muted-foreground">
          Получите бесплатный чек-лист «10 техник увеличения среднего чека»
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gift-name">Ваше имя *</Label>
              <Input
                id="gift-name"
                placeholder="Иван Петров"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gift-email">Email *</Label>
              <Input
                id="gift-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gift-phone">Телефон *</Label>
              <Input
                id="gift-phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="gift-consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                required
              />
              <Label htmlFor="gift-consent" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
                Даю согласие на отправку чек-листа и обработку персональных данных
              </Label>
            </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка...' : '🎁 Получить чек-лист'}
        </Button>
      </form>
    </div>
  );
};

export default GiftForm;