import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ForWhomSection from '@/components/sections/ForWhomSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CasesSection from '@/components/sections/CasesSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection scrollToSection={scrollToSection} />
      <ForWhomSection />
      <ServicesSection />
      <ProcessSection scrollToSection={scrollToSection} />
      <CasesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
