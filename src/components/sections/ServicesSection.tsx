import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  items: {
    title: string;
    description: string;
  }[];
}

const services: Service[] = [
  {
    id: 'sales',
    title: 'Продажи',
    shortDesc: 'Система, где команда продаёт естественно, без давления и заученных фраз',
    icon: 'TrendingUp',
    items: [
      {
        title: 'Консультация «Продажи, которые работают»',
        description: 'За 90 минут найдём слабые точки и составим план, как вырастить чек на 30% за месяц. Конкретные шаги, никакой воды.'
      },
      {
        title: 'Аудит продаж',
        description: 'Тайный гость покажет, где теряются деньги. Детальный отчёт с чек-листом: что работает, что нет, что менять прямо сейчас.'
      },
      {
        title: 'Внедрение «Продажи изнутри»',
        description: 'Работаю в ваших сменах 2-4 недели. Перестраиваю систему изнутри: новые сценарии, апсейл без фальши, живые техники.'
      },
      {
        title: 'Обучение и тренинги по продажам',
        description: 'Команда научится продавать без давления. Практика, а не теория. Отработка на реальных ситуациях.'
      }
    ]
  },
  {
    id: 'service',
    title: 'Сервис',
    shortDesc: 'Культура, где каждая деталь создаёт атмосферу, а гости возвращаются',
    icon: 'Heart',
    items: [
      {
        title: 'Аудит сервиса и атмосферы',
        description: 'Смотрю глазами гостя: от входа до прощания. Что работает на впечатление, что — против. Подробный отчёт с планом улучшений.'
      },
      {
        title: 'Построение культуры сервиса',
        description: 'Создаём стандарты, которые дышат. Не формальные правила, а стиль заведения. Обучаем команду работать в этом ритме.'
      },
      {
        title: 'Работа с гостевым опытом',
        description: 'Учим команду чувствовать гостя: кому нужен покой, кому — разговор. Эмоциональный сервис, который запоминается.'
      },
      {
        title: 'Тренинг по работе с жалобами',
        description: 'Превращаем конфликты в точки роста. Учим решать острые ситуации так, чтобы гость уходил с уважением.'
      }
    ]
  },
  {
    id: 'trainings',
    title: 'Тренинги',
    shortDesc: 'Топ-10 программ для команды: от основ сервиса до работы с VIP-гостями',
    icon: 'GraduationCap',
    items: [
      {
        title: '1. Сервис, который продаёт',
        description: 'Не про официантов. Про отношение. О том, как внимание и уверенность создают выручку без давления. Сервис — это не действия, а энергия.'
      },
      {
        title: '2. Эмоциональный сервис',
        description: 'Понимать гостя с первого взгляда. Про искусство считывать настроение, ритм и ожидания. Когда персонал начинает чувствовать, кому нужен покой, а кому — разговор.'
      },
      {
        title: '3. Работа с жалобами',
        description: 'Конфликты, которые укрепляют. Про внутреннюю силу, выдержку и культуру реакции. Учимся решать острые ситуации так, чтобы гость уходил с уважением.'
      },
      {
        title: '4. Хостес — лицо заведения',
        description: 'Первая секунда: момент, который решает всё. О том, как создать эффект присутствия и уверенности с первой фразы. Хостес — не «девушка на входе», а лицо бренда.'
      },
      {
        title: '5. Менеджер — авторитет без крика',
        description: 'Про управление людьми, которое строится на уважении, а не страхе. После этого тренинга команда начинает слушать не из страха, а из доверия.'
      },
      {
        title: '6. Продажи в сервисе',
        description: 'Когда гости покупают настроение. Как продавать без слова «купите», как предложить не навязчиво, а красиво. О внутренней уверенности и искреннем интересе.'
      },
      {
        title: '7. Стандарты — система, которая дышит',
        description: 'О том, как сделать порядок живым, а не формальным. Не «правила ради отчёта», а стиль, который задаёт уровень.'
      },
      {
        title: '8. Внедрение — смотрю, как есть',
        description: 'Погружение внутрь бизнеса — не снаружи, а рядом с людьми. Настоящая диагностика, где всё становится видно.'
      },
      {
        title: '9. Сервис для VIP-гостей',
        description: 'Тишина, которая продаёт. Про уверенность, такт и язык статуса. Для тех, кто работает с гостями, чувствительными к интонациям и мелочам.'
      },
      {
        title: '10. Команда — одна энергия',
        description: 'Тренинг о том, как соединить зал, кухню и менеджмент в единый организм. Чтобы не просто работали рядом, а действовали вместе.'
      }
    ]
  }
];

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-5xl font-black text-center text-foreground">Услуги</h2>
          
          <div className="space-y-6">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`border-2 transition-all duration-300 ${
                  expandedService === service.id ? 'border-primary shadow-xl' : 'hover:border-primary/50'
                }`}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full p-8 text-left transition-all duration-300 hover:bg-primary/5"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        expandedService === service.id ? 'bg-primary' : 'bg-primary/20'
                      }`}>
                        <Icon 
                          name={service.icon} 
                          className={expandedService === service.id ? 'text-white' : 'text-primary'} 
                          size={32} 
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-3xl font-black text-foreground">{service.title}</h3>
                          <Icon 
                            name={expandedService === service.id ? 'ChevronUp' : 'ChevronDown'}
                            className="text-primary flex-shrink-0" 
                            size={28} 
                          />
                        </div>
                        <p className="text-foreground/80 text-lg">{service.shortDesc}</p>
                      </div>
                    </div>
                  </button>

                  {expandedService === service.id && (
                    <div className="px-8 pb-8 space-y-4 animate-fade-in">
                      <div className="h-px bg-border my-4" />
                      {service.items.map((item, index) => (
                        <Card key={index} className="border-l-4 border-l-primary bg-background">
                          <CardContent className="p-6 space-y-2">
                            <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                            <p className="text-foreground/70">{item.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                      <div className="pt-4">
                        <Button 
                          onClick={() => window.location.href = '#contact'}
                          size="lg"
                          className="w-full md:w-auto"
                        >
                          <Icon name="MessageCircle" className="mr-2" size={20} />
                          Обсудить детали
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-foreground">Работаю по всей России</h3>
                  <p className="text-foreground/80 text-lg">
                    Базируюсь в Москве, но готова приехать к вам лично в любой город. 
                    Работаю с вашей командой на месте — там, где происходит настоящая жизнь заведения.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
