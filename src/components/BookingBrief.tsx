import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const BookingBrief = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState<'calendar' | 'brief' | 'success'>('calendar');
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    goal: ''
  });

  const availableTimes = [
    '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const handleDateChange = (value: Value) => {
    setDate(value);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('brief');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedDate = Array.isArray(date) ? date[0] : date;
      const bookingData = {
        ...formData,
        date: selectedDate?.toLocaleDateString('ru-RU'),
        time: selectedTime,
        message: `КОНСУЛЬТАЦИЯ: ${selectedDate?.toLocaleDateString('ru-RU')} в ${selectedTime}
        
ДАННЫЕ КЛИЕНТА:
Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}

ЗАВЕДЕНИЕ:
Название: ${formData.business_name}
Тип: ${formData.business_type}
Город: ${formData.city}
Средний чек: ${formData.avg_check}
Команда: ${formData.team_size} человек

ЗАПРОС:
Проблема: ${formData.main_problem}
Цель: ${formData.goal}`
      };

      const response = await fetch('https://functions.poehali.dev/5d1ba8c6-82ca-42ab-be50-54dc6866b7b5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStep('success');
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
    setStep('calendar');
    setDate(new Date());
    setSelectedTime('');
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
      goal: ''
    });
  };

  const selectedDate = Array.isArray(date) ? date[0] : date;
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);

  if (step === 'success') {
    return (
      <Card className="border-2">
        <CardContent className="p-8">
          <div className="text-center space-y-6 py-8">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <Icon name="CheckCircle" className="text-green-600" size={64} />
            </div>
            <h3 className="text-3xl font-black text-foreground">Отлично!</h3>
            <div className="space-y-2">
              <p className="text-xl text-foreground">
                Консультация забронирована
              </p>
              <p className="text-lg font-semibold text-primary">
                {selectedDate?.toLocaleDateString('ru-RU')} в {selectedTime}
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <p className="text-sm text-foreground">
                📞 Я свяжусь с вами за день до встречи для подтверждения и подготовлю персональные рекомендации
              </p>
            </div>
            <Button variant="outline" onClick={handleReset} className="mt-4">
              Забронировать еще одну встречу
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (step === 'brief') {
    return (
      <Card className="border-2">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep('calendar')}
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
              <div className="text-center">
                <p className="font-semibold text-foreground">
                  {selectedDate?.toLocaleDateString('ru-RU')} в {selectedTime}
                </p>
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-foreground">Расскажите о вашем заведении</h3>
              <p className="text-muted-foreground">Это поможет мне подготовиться к консультации</p>
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

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Забронировать консультацию'}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
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
            <h3 className="text-2xl font-black text-foreground">Выберите дату и время</h3>
            <p className="text-muted-foreground">Консультация длится 30-60 минут</p>
          </div>
          
          <div className="calendar-wrapper">
            <Calendar
              onChange={handleDateChange}
              value={date}
              minDate={minDate}
              maxDate={maxDate}
              locale="ru-RU"
              className="mx-auto border-2 border-border rounded-lg"
            />
          </div>

          {selectedDate && (
            <div className="space-y-3">
              <p className="text-center font-semibold text-foreground">
                Доступное время на {selectedDate.toLocaleDateString('ru-RU')}:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'default' : 'outline'}
                    onClick={() => handleTimeSelect(time)}
                    className="w-full"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingBrief;
