import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { Label } from '@/components/ui/label';

const QuizDiagnostic = () => {
  const [step, setStep] = useState(() => {
    const saved = localStorage.getItem('quiz_step');
    return saved ? parseInt(saved) : 0;
  });
  const [answers, setAnswers] = useState<Record<string, any>>(() => {
    const saved = localStorage.getItem('quiz_answers');
    return saved ? JSON.parse(saved) : {};
  });
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    localStorage.setItem('quiz_step', step.toString());
    localStorage.setItem('quiz_answers', JSON.stringify(answers));
  }, [step, answers]);

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
    localStorage.removeItem('quiz_step');
    localStorage.removeItem('quiz_answers');
  };

  const questions = [
    {
      id: 'business_type',
      title: 'Какой у вас тип заведения?',
      type: 'single',
      options: [
        { icon: 'Utensils', label: 'Ресторан премиум-класса', value: 'premium', sublabel: 'средний чек 3000₽+' },
        { icon: 'Coffee', label: 'Кафе / семейный ресторан', value: 'cafe', sublabel: 'чек 1500-3000₽' },
        { icon: 'Wine', label: 'Бар / лаунж', value: 'bar', sublabel: 'чек от 2000₽' },
        { icon: 'CupSoda', label: 'Кофейня', value: 'coffee', sublabel: 'чек 500-1500₽' },
        { icon: 'Hotel', label: 'Отель / загородный клуб', value: 'hotel', sublabel: '' },
      ]
    },
    {
      id: 'team_size',
      title: 'Сколько человек в вашей команде зала?',
      type: 'single',
      options: [
        { label: 'До 5 человек', value: 'small' },
        { label: '6-15 человек', value: 'medium' },
        { label: '16-30 человек', value: 'large' },
        { label: 'Более 30 человек', value: 'xlarge' },
      ]
    },
    {
      id: 'problems',
      title: 'Что беспокоит вас больше всего?',
      subtitle: 'Можно выбрать несколько вариантов',
      type: 'multiple',
      options: [
        { icon: 'TrendingDown', label: 'Средний чек стагнирует или падает', value: 'check_down' },
        { icon: 'Frown', label: 'Персонал работает без энергии', value: 'no_energy' },
        { icon: 'MessageCircleWarning', label: 'Много жалоб от гостей', value: 'complaints' },
        { icon: 'Users', label: 'Высокая текучка кадров', value: 'turnover' },
        { icon: 'X', label: 'Официанты не делают допродажи', value: 'no_upsell' },
        { icon: 'BookX', label: 'Нет системы обучения', value: 'no_training' },
        { icon: 'AlertTriangle', label: 'Конфликты между персоналом', value: 'conflicts' },
        { icon: 'HelpCircle', label: 'Не могу точно сформулировать', value: 'unclear' },
      ]
    },
    {
      id: 'training',
      title: 'Как вы сейчас обучаете персонал?',
      type: 'single',
      options: [
        { label: 'Проводим регулярные тренинги', value: 'regular' },
        { label: 'Есть стандарты, но не соблюдаются', value: 'standards' },
        { label: 'Новичков обучают "на ходу"', value: 'onboarding' },
        { label: 'Ничему не обучаем', value: 'none' },
        { label: 'Пробовали, но толку не было', value: 'failed' },
      ]
    },
    {
      id: 'urgency',
      title: 'Насколько срочно вам нужно решение?',
      type: 'single',
      options: [
        { icon: 'Flame', label: 'Срочно! В ближайшие 1-2 недели', value: 'urgent' },
        { icon: 'Zap', label: 'Хочу начать в течение месяца', value: 'soon' },
        { icon: 'Calendar', label: 'Планирую на 2-3 месяца', value: 'planned' },
        { icon: 'Search', label: 'Пока изучаю варианты', value: 'research' },
      ]
    },
    {
      id: 'budget',
      title: 'Какой бюджет вы готовы выделить?',
      type: 'single',
      options: [
        { label: 'До 50 000₽', value: 'low', sublabel: 'Первичная консультация' },
        { label: '50 000 - 150 000₽', value: 'medium', sublabel: 'Разовая работа' },
        { label: '150 000 - 300 000₽', value: 'high', sublabel: 'Комплексная трансформация' },
        { label: '300 000 - 600 000₽', value: 'premium', sublabel: 'Долгосрочное сопровождение' },
        { label: 'Не знаю', value: 'unknown', sublabel: 'Хочу понять что нужно' },
      ]
    },
    {
      id: 'contact',
      title: 'Куда отправить рекомендации?',
      type: 'form',
      fields: ['name', 'email', 'phone', 'business']
    }
  ];

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const handleAnswer = (value: any) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = async () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Отправляем данные на backend перед показом результата
      const recommendation = getRecommendation();
      const quizData = {
        ...answers,
        recommendation
      };

      try {
        const response = await fetch('https://functions.poehali.dev/4276991a-c1c0-4761-86fd-9a9e74eadf0d', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(quizData)
        });

        if (response.ok) {
          setShowResult(true);
        } else {
          // Даже при ошибке отправки показываем результат
          setShowResult(true);
        }
      } catch (error) {
        // При ошибке всё равно показываем результат пользователю
        setShowResult(true);
      }
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const getRecommendation = () => {
    const problems = answers.problems || [];
    const teamSize = answers.team_size;
    const budget = answers.budget;
    const training = answers.training;
    
    if (teamSize === 'small' && (budget === 'low' || budget === 'medium')) {
      return 'express';
    }
    
    if ((problems.length >= 3 || problems.includes('unclear')) && 
        (training === 'none' || training === 'failed') && 
        (budget === 'medium' || budget === 'high')) {
      return 'audit';
    }
    
    if ((teamSize === 'medium' || teamSize === 'large') && 
        (problems.includes('no_energy') || problems.includes('no_upsell')) && 
        (training === 'onboarding' || training === 'standards') && 
        (budget === 'high' || budget === 'medium')) {
      return 'training';
    }
    
    if ((teamSize === 'large' || teamSize === 'xlarge') && 
        problems.length >= 4 && 
        (budget === 'premium' || budget === 'high')) {
      return 'support';
    }
    
    return 'consultation';
  };

  const recommendations = {
    express: {
      title: 'ЭКСПРЕСС-ДИАГНОСТИКА',
      price: 'от 35 000₽',
      duration: '1-2 дня',
      description: 'У вас небольшая команда, начнём с малого.',
      features: [
        'Экспресс-консультация с владельцем',
        'Наблюдение за работой в смену',
        'Краткий отчёт (8-10 страниц)',
        '1 неделя консультаций в мессенджерах'
      ],
      result: '+5-10% к среднему чеку за 1.5 месяца',
      context: 'При условии внедрения рекомендаций'
    },
    audit: {
      title: 'АУДИТ "ДНК"',
      price: 'от 60 000₽',
      duration: '5-7 дней',
      description: 'Вам нужна глубокая диагностика, чтобы понять корень проблем.',
      features: [
        'Глубокий анализ всех процессов',
        'Серия тайных гостей',
        'Детальный отчёт (30-50 стр)',
        'План на 6-12 месяцев'
      ],
      result: '+12-20% к чеку за 2-4 месяца',
      context: 'После начала внедрения плана'
    },
    training: {
      title: 'ИНДИВИДУАЛЬНЫЙ ТРЕНИНГ',
      price: 'от 80 000₽',
      duration: '2-3 дня + 30 дней поддержки',
      description: 'У вас есть команда, но ей не хватает системы и энергии.',
      features: [
        'Анализ каждого сотрудника',
        'Персональная программа',
        '2-3 дня интенсивов',
        '30 дней поддержки после'
      ],
      result: '+20-30% к чеку в первый месяц',
      context: 'При дисциплине и контроле'
    },
    support: {
      title: 'ПОЛНОЕ СОПРОВОЖДЕНИЕ',
      price: 'от 180 000₽/мес',
      duration: 'от 3 месяцев',
      description: 'Вам нужна системная трансформация, а не разовая встряска.',
      features: [
        'Поддержка 24/7',
        'Найм и обучение персонала',
        'Внедрение системы KPI',
        'Контроль качества'
      ],
      result: '+25-35% за 3-6 месяцев',
      context: 'Становлюсь частью вашей команды'
    },
    consultation: {
      title: 'НУЖНА ЛИЧНАЯ КОНСУЛЬТАЦИЯ',
      price: 'Бесплатно',
      duration: '30 минут',
      description: 'По вашим ответам ситуация неоднозначная.',
      features: [
        'Обсудим детали вашей ситуации',
        'Пойму, в чём реальная проблема',
        'Скажу честно - могу ли помочь',
        'Возможно, порекомендую другого эксперта'
      ],
      result: 'Определим правильное решение',
      context: 'Иногда я отказываю - это нормально'
    }
  };

  if (showResult) {
    const recommendation = getRecommendation();
    const service = recommendations[recommendation as keyof typeof recommendations];

    return (
      <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-primary shadow-2xl">
              <CardContent className="p-10 space-y-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto">
                    <Icon name="CheckCircle" className="text-white" size={48} />
                  </div>
                  <h2 className="text-3xl font-black text-foreground">ПРЕДВАРИТЕЛЬНАЯ РЕКОМЕНДАЦИЯ</h2>
                  <p className="text-lg text-muted-foreground">
                    Судя по вашим ответам, вам может подойти:
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-background p-8 rounded-2xl border-2 border-primary space-y-6">
                  <h3 className="text-3xl font-black text-primary">{service.title}</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-black text-foreground">{service.price}</div>
                    <div className="text-sm text-muted-foreground">• {service.duration}</div>
                  </div>
                  <p className="text-lg text-foreground">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                    <p className="font-bold text-foreground mb-2">РЕАЛИСТИЧНЫЙ РЕЗУЛЬТАТ:</p>
                    <p className="text-xl font-black text-green-600">{service.result}</p>
                    <p className="text-sm text-muted-foreground mt-2">{service.context}</p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-300">
                  <p className="font-bold text-amber-900 mb-3">⚠️ НО УЧТИТЕ:</p>
                  <p className="text-foreground">
                    Это предварительная оценка, а не точный диагноз. Финальное решение примем только после бесплатной консультации.
                  </p>
                </div>

                <div className="text-center space-y-4 pt-6">
                  <Button 
                    size="lg" 
                    className="w-full text-lg py-6 font-bold"
                    onClick={() => {
                      setTimeout(() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                          window.location.href = '/#contact';
                        }
                      }, 100);
                    }}
                  >
                    ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2"
                    onClick={resetQuiz}
                  >
                    Пройти заново
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Или напишите в Telegram: <a href="https://t.me/malinochka_marina" className="text-primary font-bold">@malinochka_marina</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-24 bg-gradient-to-br from-primary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Найдите направление для решения проблем
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответьте на 7 вопросов — я помогу понять, какой формат может вам подойти
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-primary">Вопрос {step + 1} из {questions.length}</span>
              <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300 rounded-full" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Card className="border-2 border-primary shadow-xl">
            <CardContent className="p-8 md:p-10 space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-black text-foreground">
                  {currentQuestion.title}
                </h3>
                {currentQuestion.subtitle && (
                  <p className="text-muted-foreground">{currentQuestion.subtitle}</p>
                )}
              </div>

              {currentQuestion.type === 'form' ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input 
                      id="name"
                      placeholder="Иван Иванов"
                      onChange={(e) => handleAnswer({ ...answers.contact, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="example@mail.ru"
                      onChange={(e) => handleAnswer({ ...answers.contact, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон (необязательно)</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      onChange={(e) => handleAnswer({ ...answers.contact, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business">Название заведения (необязательно)</Label>
                    <Input 
                      id="business"
                      placeholder="Ресторан"
                      onChange={(e) => handleAnswer({ ...answers.contact, business: e.target.value })}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="consent" />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                      Я согласен на обработку персональных данных и получение персональных рекомендаций
                    </Label>
                  </div>
                </div>
              ) : currentQuestion.type === 'multiple' ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {currentQuestion.options?.map((option) => {
                    const isSelected = (answers[currentQuestion.id] || []).includes(option.value);
                    return (
                      <div
                        key={option.value}
                        onClick={() => {
                          const current = answers[currentQuestion.id] || [];
                          const updated = isSelected 
                            ? current.filter((v: string) => v !== option.value)
                            : [...current, option.value];
                          handleAnswer(updated);
                        }}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          isSelected 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {option.icon && (
                            <div className="flex-shrink-0">
                              <Icon name={option.icon} className={isSelected ? 'text-primary' : 'text-muted-foreground'} size={24} />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className={`font-bold ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                              {option.label}
                            </div>
                            {option.sublabel && (
                              <div className="text-sm text-muted-foreground mt-1">{option.sublabel}</div>
                            )}
                          </div>
                          {isSelected && (
                            <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={24} />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-4">
                  {currentQuestion.options?.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option.value;
                    return (
                      <div
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          isSelected 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {option.icon && (
                            <div className="flex-shrink-0">
                              <Icon name={option.icon} className={isSelected ? 'text-primary' : 'text-muted-foreground'} size={28} />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className={`font-bold text-lg ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                              {option.label}
                            </div>
                            {option.sublabel && (
                              <div className="text-sm text-muted-foreground mt-1">{option.sublabel}</div>
                            )}
                          </div>
                          {isSelected && (
                            <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={28} />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="flex gap-4 pt-6">
                {step > 0 && (
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleBack}
                    className="flex-1 border-2"
                  >
                    ← Назад
                  </Button>
                )}
                <Button 
                  size="lg"
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                  className="flex-1 font-bold"
                >
                  {step === questions.length - 1 ? 'ПОЛУЧИТЬ РЕКОМЕНДАЦИИ' : 'Продолжить →'}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground italic">
            ⏱️ Это займёт 2-3 минуты • Это не точный диагноз, а первичная оценка
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizDiagnostic;