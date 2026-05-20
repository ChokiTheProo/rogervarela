import { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PageTransition } from '@/components/PageTransition';
import { ParallaxStarsBackground } from '@/components/ParallaxStarsBackground';

const AboutSection = lazy(() => import('@/components/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const HowIWorkSection = lazy(() => import('@/components/sections/HowIWorkSection').then(m => ({ default: m.HowIWorkSection })));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const LandingPagesSection = lazy(() => import('@/components/sections/LandingPagesSection').then(m => ({ default: m.LandingPagesSection })));
const AwardsSection = lazy(() => import('@/components/sections/AwardsSection').then(m => ({ default: m.AwardsSection })));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection').then(m => ({ default: m.ExperienceSection })));
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection').then(m => ({ default: m.SkillsSection })));
const EducationSection = lazy(() => import('@/components/sections/EducationSection').then(m => ({ default: m.EducationSection })));
const CertificationsSection = lazy(() => import('@/components/sections/CertificationsSection').then(m => ({ default: m.CertificationsSection })));
const GitHubSection = lazy(() => import('@/components/sections/GitHubSection').then(m => ({ default: m.GitHubSection })));
const ContactSection = lazy(() => import('@/components/sections/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const SectionFallback = () => <div className="min-h-[40vh]" />;

const Index = () => {
  return (
    <PageTransition>
      <ParallaxStarsBackground />
      <div className="min-h-screen bg-transparent relative">
        <Header />
        <main>
          <HeroSection />
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
            <HowIWorkSection />
            <ProjectsSection />
            <LandingPagesSection />
            <AwardsSection />
            <TestimonialsSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <CertificationsSection />
            <GitHubSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </PageTransition>
  );
};

export default Index;
