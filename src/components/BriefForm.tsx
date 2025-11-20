import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const BriefForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business_name: '',
    business_type: '',
    city: '',
    avg_check: '',
    team_size: '',
    main_problem: '',
    goal: '',
    budget: '',
    start_time: ''
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
        body: JSON.stringify({
          ...formData,
          message: `БРИФ: ${formData.business_name}\nГород: ${formData.city}\nСредний чек: ${formData.avg_check}\nКоманда: ${formData.team_size}\nПроблема: ${formData.main_problem}\nЦель: ${formData.goal}\nБюджет: ${formData.budget}\nСтарт: ${formData.start_time}`
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
        description: 'Не удалось отправить бриф. Попробуйте снова.',
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
      phone: '',
      email: '',
      business_name: '',
      business_type: '',
      city: '',
      avg_check: '',
      team_size: '',
      main_problem: '',
      goal: '',
      budget: '',
      start_time: ''
    });
  };

  if (isSuccess) {
    return (
      <Card className="border-2">
        <CardContent className="p-8">
          <div className="text-center space-y-6 py-8">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <Icon name="CheckCircle" className="text-green-600" size={64} />
            </div>
            <h3 className="text-3xl font-black text-foreground">Бриф получен!</h3>
            <div className="space-y-2">
              <p className="text-xl text-foreground">
                Спасибо за доверие, {formData.name}
              </p>
              <p className="text-lg text-muted-foreground">
                Я изучу ваш запрос и свяжусь с вами в течение 24 часов
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <p className="text-sm text-foreground">
                📞 Подготовлю персональное предложение по вашей ситуации
              </p>
            </div>
            <Button variant="outline" onClick={handleReset} className="mt-4">
              Заполнить еще один бриф
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2">
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-foreground">Бриф на консультацию</h3>
            <p className="text-muted-foreground">Расскажите о вашем заведении — это поможет мне подготовиться</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brief-name">Ваше имя *</Label>
                <Input
                  id="brief-name"
                  placeholder="Иван Петров"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brief-phone">Телефон *</Label>
                <Input
                  id="brief-phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="brief-email">Email</Label>
              <Input
                id="brief-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brief-business">Название заведения *</Label>
                <Input
                  id="brief-business"
                  placeholder="Ресторан 'Пример'"
                  value={formData.business_name}
                  onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brief-type">Тип заведения *</Label>
                <Select 
                  value={formData.business_type} 
                  onValueChange={(value) => setFormData({ ...formData, business_type: value })}
                  required
                >
                  <SelectTrigger id="brief-type">
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">Ресторан</SelectItem>
                    <SelectItem value="club">Клуб</SelectItem>
                    <SelectItem value="hotel">Отель</SelectItem>
                    <SelectItem value="bar">Бар/Винный бар</SelectItem>
                    <SelectItem value="cafe">Кафе</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brief-city">Город *</Label>
                <Input
                  id="brief-city"
                  placeholder="Москва"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brief-check">Средний чек (₽)</Label>
                <Input
                  id="brief-check"
                  type="number"
                  placeholder="2500"
                  value={formData.avg_check}
                  onChange={(e) => setFormData({ ...formData, avg_check: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brief-team">Размер команды</Label>
                <Input
                  id="brief-team"
                  type="number"
                  placeholder="15"
                  value={formData.team_size}
                  onChange={(e) => setFormData({ ...formData, team_size: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="brief-problem">Главная проблема / задача *</Label>
              <Textarea
                id="brief-problem"
                placeholder="Например: низкий средний чек, персонал не умеет продавать, высокая текучка..."
                value={formData.main_problem}
                onChange={(e) => setFormData({ ...formData, main_problem: e.target.value })}
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brief-goal">Какой результат хотите получить? *</Label>
              <Textarea
                id="brief-goal"
                placeholder="Например: увеличить чек на 30%, обучить команду техникам продаж..."
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                rows={3}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brief-budget">Планируемый бюджет</Label>
                <Select 
                  value={formData.budget} 
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                >
                  <SelectTrigger id="brief-budget">
                    <SelectValue placeholder="Выберите диапазон" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25-60">25 000 - 60 000₽</SelectItem>
                    <SelectItem value="60-120">60 000 - 120 000₽</SelectItem>
                    <SelectItem value="120-200">120 000 - 200 000₽</SelectItem>
                    <SelectItem value="200+">От 200 000₽</SelectItem>
                    <SelectItem value="discuss">Обсудим индивидуально</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="brief-start">Когда хотите начать?</Label>
                <Select 
                  value={formData.start_time} 
                  onValueChange={(value) => setFormData({ ...formData, start_time: value })}
                >
                  <SelectTrigger id="brief-start">
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">Как можно скорее</SelectItem>
                    <SelectItem value="week">В течение недели</SelectItem>
                    <SelectItem value="month">В течение месяца</SelectItem>
                    <SelectItem value="planning">Пока изучаю варианты</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить бриф'}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default BriefForm;
