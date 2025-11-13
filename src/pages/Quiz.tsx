import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import QuizDiagnostic from '@/components/sections/QuizDiagnostic';

const Quiz = () => {
  const currentUrl = `${window.location.origin}/quiz`;
  
  useEffect(() => {
    document.title = 'Диагностика заведения — MARICO PRO | Подберите решение за 2 минуты';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta property="og:title" content="Диагностика заведения — MARICO PRO" />
        <meta property="og:description" content="Ответьте на 7 вопросов и получите персональные рекомендации по развитию вашего ресторана, бара или кафе." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <Icon name="ArrowLeft" className="text-primary" size={24} />
              <span className="text-xl font-black text-foreground">MARICO PRO</span>
            </Link>
            <Button variant="outline" asChild>
              <Link to="/">На главную</Link>
            </Button>
          </div>
        </div>
      </nav>

      <QuizDiagnostic />
    </div>
  );
};

export default Quiz;
