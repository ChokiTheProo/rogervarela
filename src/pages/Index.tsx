import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { AwardsSection } from '@/components/sections/AwardsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <CertificationsSection />
          <ExperienceSection />
          <ProjectsSection />
          <GitHubSection />
          <AwardsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
