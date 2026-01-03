import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Briefcase, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Logo3D } from '@/components/Logo3D';

export function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Particle Animation Background */}
      <ParticleBackground />
      
      {/* Simplified Background - static elements for better performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
              {t('hero.greeting')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4"
          >
            <Logo3D size="lg" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold">
              <span className="text-foreground">Roger </span>
              <span className="text-gradient">Varela</span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-medium text-muted-foreground mb-2 px-2"
          >
            {t('hero.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-primary font-medium mb-4 sm:mb-6"
          >
            CEO & {language === 'pt' ? 'Co-fundador' : language === 'es' ? 'Cofundador' : 'Co-founder'} @ <a href="https://rovr.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-gradient font-bold hover:opacity-80 transition-opacity">RoVR</a>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2 sm:gap-4 px-2 sm:px-0"
          >
            <Button variant="hero" size="default" className="sm:size-lg w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="#projects">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                {t('hero.cta.projects')}
              </a>
            </Button>
            <Button variant="heroOutline" size="default" className="sm:size-lg w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="https://github.com/ChokiTheProo" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                {t('hero.cta.github')}
              </a>
            </Button>
            <Button variant="glass" size="default" className="sm:size-lg w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                {t('hero.cta.contact')}
              </a>
            </Button>
            <Button variant="glass" size="default" className="sm:size-lg w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="/downloads/curriculo-roger-varela.pdf" download>
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                {language === 'pt' ? 'Baixar CV' : language === 'es' ? 'Descargar CV' : 'Download CV'}
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto px-4 sm:px-0"
          >
            {[
              { value: '6+', label: language === 'pt' ? 'Projetos' : language === 'es' ? 'Proyectos' : 'Projects' },
              { value: '10+', label: language === 'pt' ? 'Tecnologias' : language === 'es' ? 'Tecnologías' : 'Technologies' },
              { value: '3+', label: language === 'pt' ? 'Anos Exp.' : language === 'es' ? 'Años Exp.' : 'Years Exp.' },
              { value: '🏆', label: language === 'pt' ? 'Premiado' : language === 'es' ? 'Premiado' : 'Award Winner' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-3 sm:p-0 rounded-xl bg-card/30 sm:bg-transparent border border-border/20 sm:border-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
    </section>
  );
}
