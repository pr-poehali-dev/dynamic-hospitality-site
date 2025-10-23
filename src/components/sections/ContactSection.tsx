import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
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
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Петров" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business">Тип бизнеса</Label>
                    <Select>
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
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
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
                      href="https://t.me/marico_pro" 
                      className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-lg transition-all group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                        <Icon name="Send" className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary">Telegram</div>
                        <div className="text-sm text-foreground/60">@marico_pro</div>
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
