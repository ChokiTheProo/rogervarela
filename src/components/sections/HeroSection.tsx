import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Briefcase, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Logo3D } from '@/components/Logo3D';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTypewriter } from '@/hooks/use-typewriter';
import { useMemo } from 'react';

export function HeroSection() {
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  const typewriterWords = useMemo(() => {
    if (language === 'pt') {
      return [
        'Transformando ideias em Micro-SaaS funcionais',
        'Criando soluções digitais inovadoras',
        'Desenvolvendo produtos que impactam',
      ];
    } else if (language === 'es') {
      return [
        'Transformando ideas en Micro-SaaS funcionales',
        'Creando soluciones digitales innovadoras',
        'Desarrollando productos que impactan',
      ];
    }
    return [
      'Turning ideas into functional Micro-SaaS',
      'Creating innovative digital solutions',
      'Building products that make an impact',
    ];
  }, [language]);

  const { text: typewriterText } = useTypewriter({
    words: typewriterWords,
    typeSpeed: 80,
    deleteSpeed: 40,
    delayBetweenWords: 2500,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Particle Animation Background */}
      <ParticleBackground />
      
      {/* Background elements - simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-accent/10 rounded-full blur-3xl" />
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        )}
        
        {/* Grid Pattern - hidden on mobile for performance */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
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
            className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4 mb-3 sm:mb-4"
          >
            <Logo3D size={isMobile ? "md" : "lg"} />
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold">
              <span className="text-foreground">Roger </span>
              <span className="text-gradient">Varela</span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-heading font-medium text-muted-foreground mb-2 px-2 h-[1.5em] sm:h-[1.4em]"
          >
            <span className="inline-block min-w-[1ch]">
              {typewriterText}
              <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-lg text-primary font-medium mb-3 sm:mb-6"
          >
            {language === 'pt' 
              ? 'Desenvolvedor Low-Code & No-Code' 
              : language === 'es' 
                ? 'Desarrollador Low-Code & No-Code' 
                : 'Low-Code & No-Code Developer'}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 px-4 sm:px-2"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-4 px-2 sm:px-0"
          >
            <Button variant="hero" size="sm" className="sm:size-lg w-full sm:w-auto text-xs sm:text-base" asChild>
              <a href="#projects">
                <Briefcase className="w-3.5 h-3.5 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                {t('hero.cta.projects')}
              </a>
            </Button>
            <Button variant="heroOutline" size="sm" className="sm:size-lg w-full sm:w-auto text-xs sm:text-base" asChild>
              <a href="https://github.com/ChokiTheProo" target="_blank" rel="noopener noreferrer">
                <Github className="w-3.5 h-3.5 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                {t('hero.cta.github')}
              </a>
            </Button>
            <Button variant="glass" size="sm" className="sm:size-lg w-full sm:w-auto text-xs sm:text-base" asChild>
              <a href="#contact">
                <Mail className="w-3.5 h-3.5 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                {t('hero.cta.contact')}
              </a>
            </Button>
            <Button variant="glass" size="sm" className="sm:size-lg w-full sm:w-auto text-xs sm:text-base" asChild>
              <a href="/downloads/curriculo-roger-varela.pdf" download>
                <Download className="w-3.5 h-3.5 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                {language === 'pt' ? 'Baixar CV' : language === 'es' ? 'Descargar CV' : 'Download CV'}
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 max-w-2xl mx-auto px-2 sm:px-0"
          >
            {[
              { value: '6+', label: language === 'pt' ? 'Projetos' : language === 'es' ? 'Proyectos' : 'Projects' },
              { value: '10+', label: language === 'pt' ? 'Tecnologias' : language === 'es' ? 'Tecnologías' : 'Technologies' },
              { value: '3+', label: language === 'pt' ? 'Anos Exp.' : language === 'es' ? 'Años Exp.' : 'Years Exp.' },
              { value: '🏆', label: language === 'pt' ? 'Premiado' : language === 'es' ? 'Premiado' : 'Award Winner' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-2 sm:p-3 rounded-xl bg-card/30 sm:bg-transparent border border-border/20 sm:border-0"
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
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
