import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  useEffect(() => {
    document.title = 'Частые вопросы — MARICO PRO | Ответы эксперта по HoReCa';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Ответы на частые вопросы о продажах и сервисе в ресторанах, клубах и отелях. Как увеличить средний чек, обучить персонал, повысить выручку заведения.');
    }
  }, []);

  const faqCategories = [
    {
      category: 'О консультациях',
      icon: 'MessageCircleQuestion',
      questions: [
        {
          question: 'Как проходит первая консультация?',
          answer: 'Первая консультация длится 90 минут. Мы детально разбираем вашу текущую ситуацию: анализируем продажи, средний чек, работу персонала. Выявляем слабые места и составляем план действий. В результате вы получаете конкретный план, как вырастить чек на 30% за месяц.'
        },
        {
          question: 'Работаете ли вы дистанционно?',
          answer: 'Да, работаю как очно, так и онлайн. Для аудита и внедрения предпочтительна очная работа, так как важно видеть реальные процессы в заведении. Консультации и обучение персонала могу проводить дистанционно по всей России.'
        },
        {
          question: 'Сколько стоят ваши услуги?',
          answer: 'Стоимость зависит от формата работы: консультация от 15 000₽, аудит от 25 000₽, внедрение и обучение рассчитываются индивидуально. Окупаемость обычно происходит в первый месяц за счет роста среднего чека и выручки.'
        },
        {
          question: 'Какие гарантии результата?',
          answer: 'Даю конкретные показатели: рост среднего чека на 20-30%, увеличение выручки на 30-50% в течение первого месяца. Работаю на результат — если рекомендации внедрены, но изменений нет, продолжаю работать до достижения цели.'
        }
      ]
    },
    {
      category: 'Про продажи',
      icon: 'TrendingUp',
      questions: [
        {
          question: 'Как увеличить средний чек в ресторане?',
          answer: 'Средний чек растёт за счёт правильного допродажа. Учу персонал предлагать дополнения естественно, без давления. Внедряю систему рекомендаций, составляю скрипты для каждой позиции меню. Обычно чек растёт на 20-30% уже через 2 недели после внедрения.'
        },
        {
          question: 'Почему персонал не продаёт?',
          answer: 'Чаще всего проблема не в людях, а в системе. Персонал не знает ЧТО предлагать, КОГДА и КАК. Нет мотивации и понимания зачем это нужно. Я выстраиваю систему продаж, обучаю команду техникам и даю инструменты для ежедневной работы.'
        },
        {
          question: 'Как мотивировать официантов продавать больше?',
          answer: 'Мотивация работает только в связке с обучением. Внедряю систему бонусов за выполнение KPI: средний чек, выручка за смену, количество допродаж. Создаю здоровую конкуренцию через рейтинги. Главное — персонал должен понимать, как продавать, тогда мотивация сработает.'
        },
        {
          question: 'За какой срок виден результат?',
          answer: 'Первые изменения видны через 1-2 недели: персонал начинает активнее предлагать, растёт средний чек. Устойчивый результат (рост выручки на 30-50%) закрепляется через месяц регулярной работы и контроля.'
        }
      ]
    },
    {
      category: 'Про обучение',
      icon: 'GraduationCap',
      questions: [
        {
          question: 'Как проходит обучение персонала?',
          answer: 'Обучение максимально практическое. Минимум теории — максимум отработки в реальных условиях. Провожу тренинги в вашем заведении, работаю в сменах с персоналом, показываю на примерах. Даю скрипты продаж, учу работать с возражениями, отрабатываем все ситуации.'
        },
        {
          question: 'Сколько длится обучение?',
          answer: 'Базовый тренинг — 1-2 дня (8-16 часов). Для глубокого внедрения рекомендую формат "погружение" — 5-7 дней работы внутри смен с командой. За это время успеваем отработать все техники, закрепить навыки и выстроить систему.'
        },
        {
          question: 'Обучаете ли вы управляющих и менеджеров?',
          answer: 'Да, провожу отдельные программы для управляющих: как контролировать продажи, мотивировать персонал, анализировать показатели, проводить планёрки. Учу выстраивать систему, которая будет работать без вашего постоянного участия.'
        },
        {
          question: 'Что делать, если персонал обучили, а результата нет?',
          answer: 'Значит не было системы контроля и поддержки. После обучения обязательно нужен период сопровождения: проверка выполнения, корректировка ошибок, дополнительная практика. Я не просто обучаю, а внедряю систему и контролирую результат.'
        }
      ]
    },
    {
      category: 'Про аудит',
      icon: 'ClipboardCheck',
      questions: [
        {
          question: 'Что входит в аудит продаж?',
          answer: 'Аудит включает визит тайного гостя, анализ работы персонала в реальных условиях, проверку знания меню, техник продаж, сервиса. Оцениваю атмосферу, чистоту, скорость обслуживания. Даю детальный отчёт со всеми проблемами и планом устранения.'
        },
        {
          question: 'Как долго длится аудит?',
          answer: 'Визит тайного гостя — 1-2 часа. Подготовка отчёта и рекомендаций — 2-3 дня. Вы получаете детальный документ с оценками по всем параметрам, чек-листом ошибок и конкретным планом исправлений.'
        },
        {
          question: 'Что такое Mystery Shopping?',
          answer: 'Mystery Shopping (тайный гость) — это визит под видом обычного клиента для оценки реального уровня сервиса и продаж. Персонал не знает, что их проверяют, поэтому я вижу настоящую картину. После визита даю детальный отчёт с рекомендациями.'
        },
        {
          question: 'Зачем нужен аудит, если я сам вижу проблемы?',
          answer: 'Вы видите проблемы изнутри, но часто упускаете важное. Тайный гость смотрит глазами клиента — замечает то, к чему вы привыкли. Плюс получаете независимую оценку и конкретный план действий от эксперта.'
        }
      ]
    },
    {
      category: 'Про сервис',
      icon: 'Star',
      questions: [
        {
          question: 'Как улучшить сервис в ресторане?',
          answer: 'Сервис начинается с стандартов. Создаю чёткие правила обслуживания, прописываю все этапы взаимодействия с гостем. Обучаю персонал работать в этих стандартах, контролирую исполнение. Сервис должен быть системой, а не зависеть от настроения официанта.'
        },
        {
          question: 'Что такое культура сервиса?',
          answer: 'Культура сервиса — это когда весь персонал работает по единым стандартам, понимает ценности заведения и транслирует их гостям. Это атмосфера, внимание к деталям, умение предвосхищать желания гостя. Я помогаю создать и внедрить эту культуру.'
        },
        {
          question: 'Как бороться с негативными отзывами?',
          answer: 'Негативные отзывы — это симптом проблем в сервисе. Работаю с причиной, а не следствием. Устраняем ошибки в обслуживании, обучаем персонал работать с претензиями, выстраиваем систему контроля качества. Когда сервис налажен, негатива становится в разы меньше.'
        },
        {
          question: 'Как создать wow-эффект для гостей?',
          answer: 'Wow-эффект — это не дорогие подарки, а внимание к мелочам. Учу персонал замечать детали: запоминать предпочтения гостей, делать приятные мелочи, удивлять сервисом. Это работает лучше любых скидок и повышает лояльность.'
        }
      ]
    },
    {
      category: 'Для кого',
      icon: 'Users',
      questions: [
        {
          question: 'С какими заведениями вы работаете?',
          answer: 'Работаю с ресторанами, кафе, барами, ночными клубами, отелями — любые заведения сферы HoReCa. От небольших локальных точек до сетевых проектов. Главное — желание владельца развиваться и внедрять изменения.'
        },
        {
          question: 'Подойдёт ли ваша система для небольшого кафе?',
          answer: 'Да, система адаптируется под любой формат. Для небольшого кафе это может быть базовое обучение персонала и простые техники продаж. Не нужны сложные процессы — даю только то, что реально работает и легко внедряется.'
        },
        {
          question: 'Работаете ли с сетевыми ресторанами?',
          answer: 'Да, работаю как с отдельными заведениями, так и с сетями. Для сетей разрабатываю единые стандарты продаж и сервиса, провожу обучение управляющих, настраиваю систему контроля и масштабирования.'
        },
        {
          question: 'Нужен ли опыт персоналу для обучения?',
          answer: 'Нет, обучаю как новичков, так и опытных сотрудников. С новичками работаем с нуля — даю базу сервиса и продаж. Опытным показываю новые техники, исправляю ошибки, повышаю эффективность. Главное — желание учиться.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-foreground">MARICO PRO</Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
              <Link to="/faq" className="text-sm font-medium text-primary">FAQ</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Icon name="HelpCircle" size={48} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-foreground">
              Частые <span className="text-primary">вопросы</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о продажах и сервисе в HoReCa
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon name={category.icon as any} size={28} className="text-primary" />
                  </div>
                  <h2 className="text-3xl font-black text-foreground">{category.category}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem 
                      key={questionIndex} 
                      value={`item-${categoryIndex}-${questionIndex}`}
                      className="border-2 border-border rounded-xl px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left hover:text-primary text-lg font-semibold py-6">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 text-base leading-relaxed pb-6">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/40 bg-gradient-to-br from-background to-card">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="MessageCircle" className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl font-black text-foreground">
                    Не нашли ответ?
                  </h2>
                  <p className="text-foreground/80 text-lg">
                    Напишите мне напрямую — отвечу на любые вопросы о вашем проекте
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="font-semibold" asChild>
                    <a href="https://t.me/malinochka_marina" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" className="mr-2" size={20} />
                      Написать в Telegram
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="font-semibold border-2" asChild>
                    <Link to="/#contact">
                      <Icon name="Mail" className="mr-2" size={20} />
                      Оставить заявку
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                  <Icon name="MessageSquare" size={24} />
                </a>
              </Button>
            </div>
            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-white/60">© 2024 MARICO PRO. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
