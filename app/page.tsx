import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
            <ProjectsSection />
            <CTASection />
<ContactSection />
    </main>
  );
}