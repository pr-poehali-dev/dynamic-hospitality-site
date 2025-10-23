import { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Где нас найти</Link>
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
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold border-2" asChild>
                <a href="#contact">Оставить заявку</a>
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
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Что получишь:</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: 'TrendingUp', stat: '+30–50%', text: 'к среднему чеку за 2–4 недели' },
                  { icon: 'RotateCcw', stat: 'x2', text: 'больше гостей возвращаются повторно' },
                  { icon: 'MessageCircle', stat: '+40%', text: 'живых рекомендаций от гостей' },
                  { icon: 'Users', stat: '100%', text: 'команда понимает, зачем продавать' }
                ].map((result, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name={result.icon} className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-primary mb-1">{result.stat}</div>
                      <div className="text-foreground font-medium">{result.text}</div>
                    </div>
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
                      desc: 'За 90 минут найдём слабые точки и составим план, как вырастить чек на 30% за месяц. Без воды — только конкретика для твоего зала.',
                      icon: 'MessageSquare'
                    },
                    {
                      title: 'Аудит продаж',
                      subtitle: '3–5 дней',
                      duration: '',
                      desc: 'Тайный гость покажет, где теряются деньги: встреча, рекомендации, апсейл. Получишь детальный отчёт с чек-листом — что менять прямо завтра.',
                      icon: 'Search'
                    },
                    {
                      title: 'Внедрение',
                      subtitle: '«Продажи изнутри»',
                      duration: '2–14 дней',
                      desc: 'Работаю в твоих сменах. Перестраиваю систему изнутри: новые сценарии, апсейл без фальши, команда начинает продавать с первого дня.',
                      icon: 'Rocket'
                    },
                    {
                      title: 'Обучение и тренинги',
                      subtitle: 'по продажам',
                      duration: '',
                      desc: 'Команда научится продавать без давления. Практика, а не теория: разбор кейсов, отработка в зале, живые сценарии для вашего формата.',
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
                        <Button variant="outline" className="w-full border-2 font-semibold" asChild>
                          <a href="#contact">Подробнее</a>
                        </Button>
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
                      desc: 'Увидишь, почему гости не возвращаются. Разберём атмосферу, команду, скорость. Получишь быстрые решения для «вау-эффекта».',
                      icon: 'Sparkles'
                    },
                    {
                      title: 'Аудит сервиса',
                      subtitle: 'и атмосферы',
                      duration: '3–5 дней',
                      desc: 'Проверю всё: речь, жесты, внимание, скорость, эмоции. Тайный гость вскроет то, что не видишь изнутри. Отчёт + план действий.',
                      icon: 'Eye'
                    },
                    {
                      title: 'Внедрение',
                      subtitle: '«Культура сервиса изнутри»',
                      duration: '2–14 дней',
                      desc: 'Наставник работает в твоих сменах. Обучает команду на практике, дает обратную связь в моменте. Сервис меняется в действии, не на бумаге.',
                      icon: 'Star'
                    },
                    {
                      title: 'Обучение и тренинги',
                      subtitle: 'по сервису',
                      duration: '',
                      desc: 'Команда поймёт, как создавать атмосферу, а не просто «улыбаться». Практика эмоционального интеллекта, работа с конфликтами, внимание к деталям.',
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
                        <Button variant="outline" className="w-full border-2 font-semibold" asChild>
                          <a href="#contact">Подробнее</a>
                        </Button>
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
                    <Button variant={pkg.highlight ? 'default' : 'outline'} className="w-full border-2 font-semibold" asChild>
                      <a href="#contact">Подробнее</a>
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
            <div className="text-center space-y-6">
              <h2 className="text-6xl font-black text-foreground leading-tight">
                Готов вырастить <span className="text-primary">чек на 30%</span>?<br/>
                Оставь заявку
              </h2>
              <p className="text-xl text-foreground/80 font-medium">Позвони сейчас — обсудим формат, дату и покажу, как вырастить чек на 30% за 2 недели</p>
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
              <Button size="lg" variant="default" className="font-semibold text-lg py-6" asChild>
                <a href="https://wa.me/79182858216" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="default" className="font-semibold text-lg py-6" asChild>
                <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={20} />
                  Telegram
                </a>
              </Button>
              <Button size="lg" variant="default" className="font-semibold text-lg py-6" asChild>
                <a href="tel:+79182858216">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </a>
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
            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://www.instagram.com/marico_pro?igsh=eXljY2RqbHJtdjM4&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <Icon name="Instagram" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://vk.com/marico_pro" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.39 14.79c-.46.76-1.35.87-2.23.87h-.69c-.78 0-.98-.19-1.68-1.02-.86-1.02-1.24-1.15-1.46-1.15-.3 0-.39.09-.39.52v1.48c0 .4-.13.64-1.17.64-1.69 0-3.56-.99-4.88-2.83-1.98-2.66-2.52-4.66-2.52-5.07 0-.22.09-.43.52-.43h.69c.39 0 .54.18.69.6.75 2.09 2 3.92 2.52 3.92.19 0 .28-.09.28-.58v-2.25c-.06-.99-.58-1.07-.58-1.42 0-.18.15-.35.39-.35h2.17c.33 0 .45.18.45.56v3.04c0 .33.15.45.24.45.19 0 .35-.12.71-.48 1.09-1.22 1.87-3.11 1.87-3.11.1-.21.28-.43.67-.43h.69c.41 0 .5.21.41.56-.13.86-1.91 3.59-1.91 3.59-.16.26-.22.38 0 .68.16.23.69.68 1.05 1.09.65.75 1.15 1.38 1.28 1.81.14.43-.07.65-.5.65z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://www.tiktok.com/@maricoprosales?_t=ZT-90nKjemc0jO&_r=1" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://www.threads.com/@marico_pro?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12.186 3.002c-2.053.002-3.64.453-4.875 1.344-1.353.975-2.235 2.486-2.646 4.518l-.056.293 2.158.464.053-.273c.332-1.645.97-2.811 1.955-3.568.902-.692 2.122-1.041 3.728-1.044 1.575-.002 2.762.36 3.53 1.077.73.682 1.104 1.68 1.104 2.95v.456l-.455.095c-2.329.487-4.266.98-5.76 1.469-1.815.595-3.175 1.277-4.046 2.031-1.038.897-1.564 2.082-1.564 3.524 0 1.378.505 2.545 1.502 3.47.997.927 2.325 1.397 3.954 1.397 1.72 0 3.13-.473 4.193-1.408.61-.537 1.105-1.187 1.482-1.947.248.755.664 1.354 1.241 1.786.816.612 1.853.92 3.086.92h.067l.003-2.25h-.058c-.854 0-1.472-.193-1.839-.575-.368-.383-.553-.99-.553-1.814v-5.244c0-2.028-.693-3.616-2.061-4.72-1.367-1.103-3.262-1.664-5.632-1.662zm-.008 9.534c1.306-.427 2.937-.856 4.844-1.274v.456c0 1.283-.394 2.336-1.173 3.13-.778.792-1.84 1.19-3.157 1.19-1.018 0-1.827-.252-2.407-.75-.58-.497-.873-1.15-.873-1.942 0-.904.33-1.612.981-2.107.652-.495 1.63-.918 2.785-1.297z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://pin.it/1IbXJIzRp" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.79-.166-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                </a>
              </Button>
            </div>
            <div className="pt-6 border-t border-white/20">
              <Card className="max-w-2xl mx-auto border-2 border-primary/40 bg-gradient-to-br from-background to-card">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-bold text-foreground mb-1">Подписывайтесь на обновления</h4>
                      <p className="text-sm text-foreground/70">Кейсы, статьи и инсайты о продажах</p>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" className="font-semibold" asChild>
                        <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
                          <Icon name="Send" className="mr-2" size={16} />
                          Telegram
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="font-semibold border-2" asChild>
                        <Link to="/blog">
                          <Icon name="BookOpen" className="mr-2" size={16} />
                          Блог
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-white/60 pt-6">© 2024 MARICO PRO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;