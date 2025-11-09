import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CasesSection from '@/components/sections/CasesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const homeUrl = window.location.origin;
  const homeDescription = 'Марина MARICO PRO — эксперт по продажам и сервису в ресторанах Москвы. Увеличиваю выручку заведений HoReCa на 30-50% за 2-4 недели. Аудит, обучение персонала, внедрение системы продаж. 10+ лет опыта. 500+ обученных сотрудников.';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta property="og:title" content="MARICO PRO — Эксперт по продажам и сервису в HoReCa Москвы" />
        <meta property="og:description" content={homeDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={homeUrl} />
        <meta property="og:image" content="https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/76dfee33-67bf-42da-9a28-f8930d95fa50.jpg" />
        <meta property="og:site_name" content="MARICO PRO" />
        <meta property="og:locale" content="ru_RU" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MARICO PRO — Эксперт по продажам в HoReCa" />
        <meta name="twitter:description" content={homeDescription} />
        <meta name="twitter:image" content="https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/76dfee33-67bf-42da-9a28-f8930d95fa50.jpg" />
        <meta name="twitter:site" content="@marico_pro" />
      </Helmet>
      
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <CasesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;