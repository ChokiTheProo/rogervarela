import { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PageTransition } from '@/components/PageTransition';
import { ParallaxStarsBackground } from '@/components/ParallaxStarsBackground';

// Lazy-load below-the-fold sections for faster initial paint
const AboutSection = lazy(() => import('@/components/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const EducationSection = lazy(() => import('@/components/sections/EducationSection').then(m => ({ default: m.EducationSection })));
const CertificationsSection = lazy(() => import('@/components/sections/CertificationsSection').then(m => ({ default: m.CertificationsSection })));
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection').then(m => ({ default: m.ExperienceSection })));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const LandingPagesSection = lazy(() => import('@/components/sections/LandingPagesSection').then(m => ({ default: m.LandingPagesSection })));

const CoursesSection = lazy(() => import('@/components/sections/CoursesSection').then(m => ({ default: m.CoursesSection })));
const LiveProductsSection = lazy(() => import('@/components/sections/LiveProductsSection').then(m => ({ default: m.LiveProductsSection })));
const AwardsSection = lazy(() => import('@/components/sections/AwardsSection').then(m => ({ default: m.AwardsSection })));
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection').then(m => ({ default: m.SkillsSection })));
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
            <EducationSection />
            <CertificationsSection />
            <ExperienceSection />
            <ProjectsSection />
            <LandingPagesSection />
            <CoursesSection />
            <LiveProductsSection />
            <AwardsSection />
            <SkillsSection />
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
