import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const BookingCalendar = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState<'calendar' | 'form' | 'success'>('calendar');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business_type: ''
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
    setStep('form');
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
        message: `Запись на консультацию: ${selectedDate?.toLocaleDateString('ru-RU')} в ${selectedTime}`
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
        description: 'Не удалось забронировать время. Попробуйте снова.',
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
    setFormData({ name: '', phone: '', email: '', business_type: '' });
  };

  const selectedDate = Array.isArray(date) ? date[0] : date;
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);

  return (
    <Card className="border-2">
      <CardContent className="p-8">
        {step === 'calendar' && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-foreground">Выберите дату и время</h3>
              <p className="text-muted-foreground">Консультация длится 30 минут</p>
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
        )}

        {step === 'form' && (
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="booking-name">Ваше имя *</Label>
                <Input
                  id="booking-name"
                  placeholder="Иван Петров"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="booking-phone">Телефон *</Label>
                <Input
                  id="booking-phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="booking-email">Email</Label>
                <Input
                  id="booking-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="booking-business">Тип бизнеса</Label>
                <Select 
                  value={formData.business_type} 
                  onValueChange={(value) => setFormData({ ...formData, business_type: value })}
                >
                  <SelectTrigger id="booking-business">
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

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Забронировать консультацию'}
              </Button>
            </form>
          </div>
        )}

        {step === 'success' && (
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
                📞 Я свяжусь с вами за день до встречи для подтверждения
              </p>
            </div>
            <Button variant="outline" onClick={handleReset} className="mt-4">
              Забронировать еще одну встречу
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingCalendar;
