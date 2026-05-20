import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Briefcase, Download, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/ParticleBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { lazy, Suspense } from 'react';

const TubesBackground = lazy(() =>
  import('@/components/TubesBackground').then((m) => ({ default: m.TubesBackground }))
);

export function HeroSection() {
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  const positioning = language === 'pt'
    ? 'Desenvolvedor de Produto Digital | Low-Code, Code e IA'
    : language === 'es'
    ? 'Desarrollador de Producto Digital | Low-Code, Code e IA'
    : 'Digital Product Developer | Low-Code, Code & AI';

  const description = language === 'pt'
    ? 'Construo Micro-SaaS, landing pages e automações com IA do MVP ao checkout. Já lancei 7 SaaS próprios e 5 sites pra cliente. Entrego em 7 a 14 dias, com preview grátis — você só paga depois de aprovar.'
    : language === 'es'
    ? 'Construyo Micro-SaaS, landing pages y automatizaciones con IA del MVP al checkout. Ya lancé 7 SaaS propios y 5 sitios para clientes. Entrego en 7 a 14 días, con preview gratis — pagas solo después de aprobar.'
    : 'I build Micro-SaaS, landing pages and AI automations from MVP to checkout. I have shipped 7 of my own SaaS and 5 client sites. Delivery in 7–14 days with a free preview — you only pay after approval.';

  const stats = [
    { value: '12+', labelPt: 'Produtos lançados', labelEn: 'Products shipped', labelEs: 'Productos lanzados' },
    { value: '15+', labelPt: 'Tecnologias', labelEn: 'Technologies', labelEs: 'Tecnologías' },
    { value: '3', labelPt: 'anos em TI', labelEn: 'years in IT', labelEs: 'años en TI' },
    { value: '🥉', labelPt: 'Bronze QITEC 2023', labelEn: 'Bronze QITEC 2023', labelEs: 'Bronce QITEC 2023' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-auto">
          <Suspense fallback={null}>
            <TubesBackground />
          </Suspense>
        </div>
      )}

      <ParticleBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-accent/10 rounded-full blur-3xl" />
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 sm:mb-6"
          >
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
              {t('hero.greeting')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 sm:mb-4"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold">
              <span className="text-foreground">Roger </span>
              <span className="text-gradient">Varela</span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-heading font-medium text-foreground mb-4 px-2"
          >
            {positioning}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-2 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 px-2 sm:px-0 mb-4"
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">
                <Sparkles className="w-5 h-5 mr-2" />
                {language === 'pt' ? 'Quero contratar a RoVR' : language === 'es' ? 'Quiero contratar a RoVR' : 'I want to hire RoVR'}
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="/downloads/curriculo-roger-varela.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                {language === 'pt' ? 'Sou recrutador → Baixar CV' : language === 'es' ? 'Soy reclutador → Descargar CV' : 'Recruiter → Download CV'}
              </a>
            </Button>
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm"
          >
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              {t('hero.cta.projects')}
            </a>
            <span className="text-border">·</span>
            <a href="https://github.com/ChokiTheProo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto px-2 sm:px-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-2 sm:p-3 rounded-xl bg-card/30 sm:bg-transparent border border-border/20 sm:border-0"
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-sm text-muted-foreground mt-1">
                  {language === 'pt' ? stat.labelPt : language === 'es' ? stat.labelEs : stat.labelEn}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
