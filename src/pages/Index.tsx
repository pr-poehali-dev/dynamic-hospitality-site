import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState('sales');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-foreground">MARICO PRO</div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">Знакомство</button>
              <button onClick={() => scrollToSection('for-whom')} className="text-sm font-medium hover:text-primary transition-colors">Для кого</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-primary transition-colors">Процесс</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/76dfee33-67bf-42da-9a28-f8930d95fa50.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/75 to-background/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black text-foreground leading-tight">
              Хватит терять деньги <br />на плохом <span className="text-primary">сервисе</span>.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium max-w-3xl mx-auto">
              Выстраиваю систему продаж и культуры в ресторанах, клубах и отелях.
            </p>
            <div className="inline-block px-6 py-2 bg-primary/20 rounded-full border border-primary/40">
              <p className="text-primary font-semibold">Эксперт по продажам и сервису в HoReCa</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 py-6 font-semibold" onClick={() => scrollToSection('process')}>
                С чего начать
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold border-2" onClick={() => scrollToSection('contact')}>
                Оставить заявку
              </Button>
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              Отправляя форму, вы соглашаетесь с обработкой персональных данных.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto animate-slide-up">
            <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/ec636e5f-8860-4ed3-a14e-094d8acd3c94.png" 
                alt="Марина" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-black text-foreground">Привет, я Марина.</h2>
              <div className="space-y-4 text-foreground/90 text-lg">
                <p>
                  Я эксперт по продажам и сервису в HoReCa. 10+ лет в индустрии гостеприимства.
                </p>
                <p>
                  Помогаю владельцам и управляющим собрать систему, где персонал не просто обслуживает — а продаёт, вовлекает и создаёт настроение вечера.
                </p>
                <p>
                  Мои сильные стороны: стратегия, живые сценарии общения, «полевое» внедрение, обучение команды.
                </p>
                <p className="font-semibold">
                  Работаю бережно к атмосфере места и строго к результату.
                </p>
              </div>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <Icon name="Utensils" className="text-primary" size={20} />
                  <span className="text-foreground">Рестораны, клубы, отели</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="TrendingUp" className="text-primary" size={20} />
                  <span className="text-foreground">Рост среднего чека и повторных визитов</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-primary" size={20} />
                  <span className="text-foreground">Наставничество в смене</span>
                </div>
              </div>
              <Button size="lg" className="mt-6" onClick={() => scrollToSection('services')}>
                Посмотреть услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="for-whom" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
            <h2 className="text-5xl font-black text-center text-foreground">Для кого мои решения</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Crown', title: 'Владельцы/совладельцы', desc: 'Нужна управляемая система продаж, а не хаос' },
                { icon: 'Briefcase', title: 'Управляющие', desc: 'Нужен уверенный персонал и культура сервиса' },
                { icon: 'Users', title: 'Команды залов', desc: 'Хочется продавать без давления и «скриптов»' },
                { icon: 'Building2', title: 'Отели/частные клубы', desc: 'Важны эмоции гостя и высокий стандарт' }
              ].map((item, i) => (
                <Card key={i} className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-foreground/80">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-card p-8 rounded-2xl border-2 border-border">
              <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Боли, с которыми работаю:</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'падает средний чек',
                  'мало повторных визитов',
                  '«скрипты не работают»',
                  'сервис не чувствуется',
                  '«все стараются, а результат плавает»'
                ].map((pain, i) => (
                  <div key={i} className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-primary/40">
                    <Icon name="AlertCircle" className="text-primary" size={16} />
                    <span className="text-foreground text-sm font-medium">{pain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img src="https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/6a5728f0-32b4-4722-b31b-8121fa03989e.jpg" alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">
            <h2 className="text-5xl font-black text-center text-foreground">Чем я помогаю</h2>
            <div className="space-y-6">
              {[
                'Собираю работающую систему продаж внутри зала',
                'Превращаю сервис в живое поведение, которое чувствует гость',
                'Обучаю команду продавать без фальши',
                'Внедряю стандарты, мотивацию, контроль и обратную связь',
                'Запускаю изменения прямо в сменах (формат «внедрение»)'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-background rounded-xl border-2 border-border hover:border-primary transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={20} />
                  </div>
                  <p className="text-lg text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary/10 p-8 rounded-2xl border-2 border-primary/40">
              <h3 className="text-2xl font-bold mb-4 text-foreground text-center">Результаты:</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: 'TrendingUp', text: 'средний чек' },
                  { icon: 'RotateCcw', text: 'повторные визиты' },
                  { icon: 'MessageCircle', text: 'больше рекомендаций' },
                  { icon: 'Heart', text: 'команда уверена' }
                ].map((result, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center">
                    <Icon name={result.icon} className="text-primary" size={24} />
                    <span className="text-foreground font-semibold">{result.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
            <h2 className="text-5xl font-black text-center text-foreground">Услуги</h2>
            <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-14">
                <TabsTrigger value="sales" className="text-lg font-semibold">Продажи</TabsTrigger>
                <TabsTrigger value="service" className="text-lg font-semibold">Сервис</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sales" className="mt-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Консультация',
                      subtitle: '«Продажи, которые работают»',
                      duration: '90 мин',
                      desc: 'Диагностика, разбор слабых точек, пошаговый план внедрения. Формат: онлайн/офлайн.',
                      icon: 'MessageSquare'
                    },
                    {
                      title: 'Аудит продаж',
                      subtitle: '3–5 дней',
                      duration: '',
                      desc: 'Проверка всей воронки в зале: встреча → рекомендации → апсейл → чек. Тайный гость / по видео / очно.',
                      icon: 'Search'
                    },
                    {
                      title: 'Внедрение',
                      subtitle: '«Продажи изнутри»',
                      duration: '2–14 дней',
                      desc: 'Я или мой специалист встраиваемся в команду и перестраиваем систему на практике: сценарии, апсейл, мотивация.',
                      icon: 'Rocket'
                    },
                    {
                      title: 'Обучение и тренинги',
                      subtitle: 'по продажам',
                      duration: '',
                      desc: 'Мини-тренинг (1,5–2 ч), День практики (4–6 ч), Серия (3–5 встреч). Команда понимает кому и как продавать.',
                      icon: 'GraduationCap'
                    }
                  ].map((service, i) => (
                    <Card key={i} className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                          <Icon name={service.icon} className="text-primary group-hover:text-white" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                          <p className="text-primary font-semibold">{service.subtitle}</p>
                          {service.duration && <p className="text-sm text-muted-foreground">{service.duration}</p>}
                        </div>
                        <p className="text-foreground/80">{service.desc}</p>
                        <Button variant="outline" className="w-full border-2 font-semibold">Подробнее</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="service" className="mt-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Консультация',
                      subtitle: '«Сервис, который удерживает»',
                      duration: '90 мин',
                      desc: 'Разбор формата, команды, атмосферы, быстрые решения для «вау»-ощущения.',
                      icon: 'Sparkles'
                    },
                    {
                      title: 'Аудит сервиса',
                      subtitle: 'и атмосферы',
                      duration: '3–5 дней',
                      desc: 'Речь, жесты, внимание, скорость, эмоциональный фон. Тайный гость / наблюдение / по видео.',
                      icon: 'Eye'
                    },
                    {
                      title: 'Внедрение',
                      subtitle: '«Культура сервиса изнутри»',
                      duration: '2–14 дней',
                      desc: 'Наставник в смене: стандарты, обратная связь, поведение и атмосфера — не на бумаге, а в действии.',
                      icon: 'Star'
                    },
                    {
                      title: 'Обучение и тренинги',
                      subtitle: 'по сервису',
                      duration: '',
                      desc: 'Мини-формат (1,5–2 ч), День практики («эмоциональный интеллект в зале»), Серия обучения.',
                      icon: 'Award'
                    }
                  ].map((service, i) => (
                    <Card key={i} className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                          <Icon name={service.icon} className="text-primary group-hover:text-white" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                          <p className="text-primary font-semibold">{service.subtitle}</p>
                          {service.duration && <p className="text-sm text-muted-foreground">{service.duration}</p>}
                        </div>
                        <p className="text-foreground/80">{service.desc}</p>
                        <Button variant="outline" className="w-full border-2 font-semibold">Подробнее</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">
            <h2 className="text-5xl font-black text-center text-foreground">С чего начать</h2>
            <div className="relative">
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-primary/30 hidden md:block"></div>
              <div className="space-y-8">
                {[
                  { num: '01', title: 'Заявка → короткий бриф', icon: 'FileText' },
                  { num: '02', title: 'Консультация 90 мин → диагностика и план', icon: 'MessageCircle' },
                  { num: '03', title: 'Выбор формата → аудит / внедрение / обучение', icon: 'ListChecks' },
                  { num: '04', title: 'Старт работ → первые изменения за 1–2 недели', icon: 'Zap' }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-6 relative">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                      <Icon name={step.icon} className="text-white" size={28} />
                    </div>
                    <div className="flex-1 pt-3">
                      <div className="text-sm font-bold text-primary mb-1">{step.num}</div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center pt-8">
              <Button size="lg" className="text-lg px-12 py-6 font-bold" onClick={() => scrollToSection('contact')}>
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <img src="https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/c523b05f-465a-4b67-b605-5fb518a0a85e.jpg" alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-5xl font-black text-center text-foreground">Пакеты и стоимость</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Старт', service: 'Консультация 90 мин', price: 'от 15 000 ₽', icon: 'Play', features: ['Диагностика', 'Пошаговый план', 'Онлайн/офлайн'] },
                { title: 'Стандарт', service: 'Аудит 3–5 дней', price: 'от 30 000 ₽', icon: 'Target', features: ['Полный анализ', 'Тайный гость', 'Отчёт + задачи'], highlight: true },
                { title: 'Про', service: 'Внедрение 2–14 дней', price: 'от 50 000 ₽', icon: 'Gem', features: ['Работа в сменах', 'Перестройка системы', 'Быстрый результат'] }
              ].map((pkg, i) => (
                <Card key={i} className={`border-2 ${pkg.highlight ? 'border-primary shadow-2xl scale-105' : 'border-border'} hover:shadow-xl transition-all duration-300`}>
                  <CardContent className="p-8 space-y-6">
                    <div className={`w-14 h-14 rounded-xl ${pkg.highlight ? 'bg-primary' : 'bg-primary/20'} flex items-center justify-center`}>
                      <Icon name={pkg.icon} className={pkg.highlight ? 'text-white' : 'text-primary'} size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-foreground">{pkg.title}</h3>
                      <p className="text-foreground/80 font-medium">{pkg.service}</p>
                    </div>
                    <div className="text-4xl font-black text-primary">{pkg.price}</div>
                    <div className="space-y-2">
                      {pkg.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={18} />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant={pkg.highlight ? 'default' : 'outline'} className="w-full border-2 font-semibold" onClick={() => scrollToSection('contact')}>
                      Выбрать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Финальная стоимость зависит от формата, состава команды и количества смен.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <h2 className="text-5xl font-black text-center text-foreground">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Сколько времени занимает внедрение системы продаж?',
                  a: 'В зависимости от формата: консультация — 90 минут, аудит — 3–5 дней, полное внедрение — от 2 до 14 дней. Первые изменения видны уже через 1–2 недели.'
                },
                {
                  q: 'Работаете ли вы с небольшими заведениями?',
                  a: 'Да, работаю с любыми форматами: от небольших кафе до крупных ресторанов, клубов и отелей. Подход адаптируется под размер команды и специфику бизнеса.'
                },
                {
                  q: 'Можно ли начать с онлайн-консультации?',
                  a: 'Конечно! Первая консультация доступна в онлайн и офлайн форматах. За 90 минут мы проведём диагностику и составим пошаговый план.'
                },
                {
                  q: 'Что включает аудит продаж или сервиса?',
                  a: 'Полный анализ процессов: встреча гостей, рекомендации, апсейл, атмосфера, скорость обслуживания. Формат тайного гостя или наблюдение в смене. Итог — детальный отчёт с задачами.'
                },
                {
                  q: 'Как происходит внедрение «изнутри»?',
                  a: 'Я или мой специалист работаем в ваших сменах: обучаем команду на практике, внедряем стандарты, даём обратную связь в реальном времени. Это самый быстрый способ изменить систему.'
                },
                {
                  q: 'Какие результаты я получу?',
                  a: 'Рост среднего чека, увеличение повторных визитов, больше рекомендаций от гостей, уверенная и мотивированная команда, чёткие стандарты работы.'
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-background p-6 rounded-xl border-2 border-border hover:border-primary transition-all">
                  <summary className="text-xl font-bold text-foreground cursor-pointer flex items-center justify-between">
                    <span>{faq.q}</span>
                    <Icon name="ChevronDown" className="text-primary group-open:rotate-180 transition-transform" size={24} />
                  </summary>
                  <p className="text-foreground/80 mt-4 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-black text-foreground">Контакты + форма заявки</h2>
              <p className="text-lg text-foreground/80">Оставьте заявку, и я свяжусь с вами в течение 24 часов</p>
            </div>
            
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" placeholder="Ваше имя" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон/WhatsApp *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (900) 000-00-00" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">Город *</Label>
                    <Input id="city" placeholder="Москва" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="format">Формат *</Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Выберите формат" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Консультация</SelectItem>
                        <SelectItem value="audit">Аудит</SelectItem>
                        <SelectItem value="implementation">Внедрение</SelectItem>
                        <SelectItem value="training">Обучение</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea id="comment" placeholder="Расскажите о вашем проекте..." className="min-h-24" />
                  </div>
                </div>
                
                <Button size="lg" className="w-full text-lg py-6 font-bold">
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Отправляя форму, вы соглашаетесь с{' '}
                  <a href="#" className="text-primary hover:underline">обработкой персональных данных</a>
                </p>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-2 font-semibold">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-2 font-semibold">
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </Button>
              <Button size="lg" variant="outline" className="border-2 font-semibold">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-black">MARICO PRO</h3>
            <p className="text-white/80">Продажи и сервис — одна система.</p>
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Send" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Mail" size={24} />
              </Button>
            </div>
            <p className="text-sm text-white/60">© 2024 MARICO PRO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;