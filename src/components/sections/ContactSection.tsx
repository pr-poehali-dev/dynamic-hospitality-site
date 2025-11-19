import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import BookingCalendar from '@/components/BookingCalendar';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="border-4 border-primary bg-gradient-to-br from-primary/10 to-background mb-12 shadow-2xl">
            <CardContent className="p-10 space-y-6">
              <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center">
                <div className="flex justify-center">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
                    <img 
                      src="https://cdn.poehali.dev/files/a45a0c62-e8c3-401e-9174-57df5f3b3840.jpg" 
                      alt="Марина" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center md:text-left space-y-4">
                  <div className="inline-block p-3 bg-primary rounded-full mb-2">
                    <Icon name="Gift" className="text-white" size={40} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Заполните бриф — начнём работать!</h2>
                  <p className="text-lg sm:text-xl text-foreground">
                    Расскажите о вашем ресторане и задачах. Я проанализирую и предложу <span className="text-primary font-black">оптимальный формат работы</span>
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Отвечаю в течение <strong className="text-primary">24 часов</strong>. Первая консультация — бесплатно!
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-xl border-2 border-border text-center">
                  <Icon name="Check" className="text-green-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-foreground">Анализ ситуации</p>
                </div>
                <div className="bg-card p-4 rounded-xl border-2 border-border text-center">
                  <Icon name="Check" className="text-green-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-foreground">План действий</p>
                </div>
                <div className="bg-card p-4 rounded-xl border-2 border-border text-center">
                  <Icon name="Check" className="text-green-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-foreground">Ответы на вопросы</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <BookingCalendar />

            <div className="space-y-6">
              <Card className="border-2 border-gray-700 bg-gray-800">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-white">Напишите мне:</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://t.me/malinochka_marina" 
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-xl hover:shadow-lg transition-all group border border-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                        <Icon name="MessageCircle" className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-primary">Telegram</div>
                        <div className="text-sm text-gray-400">@malinochka_marina</div>
                      </div>
                      <Icon name="ArrowRight" className="text-primary" size={20} />
                    </a>

                    <a 
                      href="https://instagram.com/marico.su"
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-xl hover:shadow-lg transition-all group border border-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Icon name="Camera" className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-primary">Instagram</div>
                        <div className="text-sm text-gray-400">@marico.su</div>
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