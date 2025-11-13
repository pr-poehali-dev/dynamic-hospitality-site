import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import AboutSection from '@/components/sections/AboutSection';
import ProblemSection from '@/components/sections/ProblemSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import WhyMeSection from '@/components/sections/WhyMeSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import CasesSection from '@/components/sections/CasesSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import HonestySection from '@/components/sections/HonestySection';
import ServicesSection from '@/components/sections/ServicesSection';
import NotForYouSection from '@/components/sections/NotForYouSection';
import ExpectationsSection from '@/components/sections/ExpectationsSection';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import ROICalculator from '@/components/sections/ROICalculator';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import LeadMagnetSection from '@/components/sections/LeadMagnetSection';
import PricingSection from '@/components/sections/PricingSection';
import QuizDiagnostic from '@/components/sections/QuizDiagnostic';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const homeUrl = window.location.origin;
  const homeTitle = 'Консультант по увеличению продаж в HoReCa | Марина MARICO PRO';
  const homeDescription = 'Увеличиваю средний чек в ресторанах, барах, отелях на 30%. 13 лет опыта в премиальном HoReCa. Гарантия результата. Работала в Marriott, Hilton, Four Seasons. Аудит, обучение персонала, системная трансформация.';

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
      <SocialProofSection />
      <LeadMagnetSection />
      <ProblemSection />
      <ProblemsSection />
      <ROICalculator />
      <QuizDiagnostic />
      <CasesSection />
      <BeforeAfterSection />
      <ExpectationsSection />
      <HonestySection />
      <PricingSection scrollToSection={scrollToSection} />
      <NotForYouSection />
      <WhyMeSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <AboutSection scrollToSection={scrollToSection} />
      <BlogPreviewSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;