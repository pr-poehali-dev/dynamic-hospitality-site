import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';
import QuizDiagnostic from '@/components/sections/QuizDiagnostic';
import ContactSection from '@/components/sections/ContactSection';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const cities: Record<string, { name: string; cases: { prepositional: string; genitive: string } }> = {
  'moskva': { name: 'Москва', cases: { prepositional: 'Москве', genitive: 'Москвы' } },
  'sankt-peterburg': { name: 'Санкт-Петербург', cases: { prepositional: 'Санкт-Петербурге', genitive: 'Санкт-Петербурга' } },
  'novosibirsk': { name: 'Новосибирск', cases: { prepositional: 'Новосибирске', genitive: 'Новосибирска' } },
  'ekaterinburg': { name: 'Екатеринбург', cases: { prepositional: 'Екатеринбурге', genitive: 'Екатеринбурга' } },
  'kazan': { name: 'Казань', cases: { prepositional: 'Казани', genitive: 'Казани' } },
  'nizhniy-novgorod': { name: 'Нижний Новгород', cases: { prepositional: 'Нижнем Новгороде', genitive: 'Нижнего Новгорода' } },
  'chelyabinsk': { name: 'Челябинск', cases: { prepositional: 'Челябинске', genitive: 'Челябинска' } },
  'samara': { name: 'Самара', cases: { prepositional: 'Самаре', genitive: 'Самары' } },
  'omsk': { name: 'Омск', cases: { prepositional: 'Омске', genitive: 'Омска' } },
  'rostov-na-donu': { name: 'Ростов-на-Дону', cases: { prepositional: 'Ростове-на-Дону', genitive: 'Ростова-на-Дону' } },
  'ufa': { name: 'Уфа', cases: { prepositional: 'Уфе', genitive: 'Уфы' } },
  'krasnoyarsk': { name: 'Красноярск', cases: { prepositional: 'Красноярске', genitive: 'Красноярска' } },
  'voronezh': { name: 'Воронеж', cases: { prepositional: 'Воронеже', genitive: 'Воронежа' } },
  'perm': { name: 'Пермь', cases: { prepositional: 'Перми', genitive: 'Перми' } },
  'volgograd': { name: 'Волгоград', cases: { prepositional: 'Волгограде', genitive: 'Волгограда' } },
  'krasnodar': { name: 'Краснодар', cases: { prepositional: 'Краснодаре', genitive: 'Краснодара' } },
  'sochi': { name: 'Сочи', cases: { prepositional: 'Сочи', genitive: 'Сочи' } },
};

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? cities[citySlug] : null;

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Город не найден</p>
      </div>
    );
  }

  const { name, cases } = city;
  const pageTitle = `Консультант по увеличению продаж ресторанов в ${cases.prepositional} | Марина MARICO PRO`;
  const pageDescription = `Увеличиваю средний чек в ресторанах и барах ${cases.genitive} на 25-35% за 3 месяца. Гарантия возврата средств. 13 лет опыта. Обучение персонала, аудит продаж.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://marico.su/city/${citySlug}`} />
        <link rel="canonical" href={`https://marico.su/city/${citySlug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": `MARICO PRO - ${name}`,
            "description": pageDescription,
            "url": `https://marico.su/city/${citySlug}`,
            "areaServed": {
              "@type": "City",
              "name": name
            },
            "priceRange": "35000-600000 RUB",
            "telephone": "+7-918-285-82-16",
            "email": "malinochkamarina@gmail.com"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <section className="py-24 bg-gradient-to-br from-primary/20 via-primary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-block px-6 py-2 bg-primary/20 rounded-full border-2 border-primary">
                <p className="text-primary font-bold text-lg">📍 {name}</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
                Консультант по увеличению продаж ресторанов в {cases.prepositional}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Увеличиваю средний чек в ресторанах и барах {cases.genitive} на <span className="text-primary font-black">25-35% за 3 месяца</span>
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <Card className="border-2 hover:border-primary transition-all">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <Icon name="TrendingUp" className="text-primary" size={32} />
                    </div>
                    <p className="font-bold text-foreground">13 лет опыта в HoReCa</p>
                    <p className="text-sm text-muted-foreground">Работала в премиальных отелях и ресторанах</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-all">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                      <Icon name="BadgeCheck" className="text-green-600" size={32} />
                    </div>
                    <p className="font-bold text-foreground">Гарантия результата</p>
                    <p className="text-sm text-muted-foreground">Возврат средств, если рост менее 15% за месяц</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-all">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
                      <Icon name="Users" className="text-amber-600" size={32} />
                    </div>
                    <p className="font-bold text-foreground">500+ официантов</p>
                    <p className="text-sm text-muted-foreground">Обучено за 5 лет работы</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center">
                Что получают рестораны {cases.genitive}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="CircleDollarSign" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">Рост среднего чека</h3>
                        <p className="text-muted-foreground">На 25-35% за первые 3 месяца работы. Измеримо, документально подтверждено.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Smile" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">Мотивированный персонал</h3>
                        <p className="text-muted-foreground">Официанты работают с энергией, понимают свою роль в бизнесе.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Star" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">Меньше жалоб от гостей</h3>
                        <p className="text-muted-foreground">Улучшение культуры сервиса снижает количество конфликтов.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="BookOpen" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">Система обучения</h3>
                        <p className="text-muted-foreground">Готовые стандарты и методика, которые работают дальше без вас.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-4 border-primary bg-primary/5">
                <CardContent className="p-8 text-center space-y-4">
                  <Icon name="MapPin" className="text-primary mx-auto" size={48} />
                  <h3 className="text-2xl font-black text-foreground">
                    Работаю с ресторанами {cases.genitive} онлайн и очно
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Выезжаю в {name} для проведения аудита и тренингов. Онлайн-консультации и сопровождение — в любое удобное время.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <QuizDiagnostic />
        <ContactSection />
      </div>
    </>
  );
};

export default CityPage;
