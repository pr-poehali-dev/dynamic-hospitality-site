import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import WhyMeSection from '@/components/sections/WhyMeSection';
import CasesSection from '@/components/sections/CasesSection';
import ServicesAccordion from '@/components/sections/ServicesAccordion';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import JourneySection from '@/components/sections/JourneySection';
import FloatingCTA from '@/components/FloatingCTA';
import MarqueeText from '@/components/MarqueeText';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const homeUrl = window.location.origin;
  const homeTitle = 'Консультант по увеличению продаж в ресторанах | Марина MARICO PRO';
  const homeDescription = '+5 млн ₽ к выручке без рекламы. 15 лет в премиум HoReCa. Управляющая в Marriott, Radisson, Four Seasons. Авторская методика обучения персонала. Прозрачный результат за 90 дней.';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{homeTitle}</title>
        <meta name="description" content={homeDescription} />
        <meta property="og:title" content={homeTitle} />
        <meta property="og:description" content={homeDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={homeUrl} />
        <meta property="og:image" content="https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/76dfee33-67bf-42da-9a28-f8930d95fa50.jpg" />
        <meta property="og:site_name" content="MARICO PRO" />
        <meta property="og:locale" content="ru_RU" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homeTitle} />
        <meta name="twitter:description" content={homeDescription} />
        <meta name="twitter:image" content="https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/76dfee33-67bf-42da-9a28-f8930d95fa50.jpg" />
        <meta name="twitter:site" content="@marico_pro" />
        
        <link rel="canonical" href={homeUrl} />
      </Helmet>
      
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <MarqueeText 
        text={[
          '⭐ 15 лет в премиум HoReCa',
          '📈 +5 млн ₽ к выручке',
          '🎯 Работаю по всей России',
          '👥 Ваши официанты не умеют продавать',
          '💪 Интенсив "7 дней"',
          '✅ Прозрачный результат',
          '🏛️ Marriott • Radisson • Four Seasons'
        ]} 
      />
      <SocialProofSection />
      <JourneySection />
      <WhyMeSection />
      <CasesSection />
      <ServicesAccordion />
      <TestimonialsSection />
      <HowWeWorkSection />
      <ContactSection />
      <FooterSection />
      <FloatingCTA scrollToContact={() => scrollToSection('contact')} />
    </div>
  );
};

export default Index;