import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EbooksSection } from '@/components/sections/EbooksSection';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { AwardsSection } from '@/components/sections/AwardsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <CertificationsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EbooksSection />
          <CoursesSection />
          <GitHubSection />
          <AwardsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
