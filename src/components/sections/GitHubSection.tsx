import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Github, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ImageZoom } from '@/components/ui/image-zoom';

const stats = [
  { icon: Code, value: '6+', labelPt: 'Repositórios', labelEn: 'Repositories', labelEs: 'Repositorios' },
];

const languages = [
  { name: 'JavaScript', percentage: 30, color: 'bg-yellow-400' },
  { name: 'PHP', percentage: 25, color: 'bg-indigo-400' },
  { name: 'Dart', percentage: 20, color: 'bg-cyan-400' },
  { name: 'HTML/CSS', percentage: 15, color: 'bg-orange-400' },
  { name: 'Kotlin', percentage: 10, color: 'bg-purple-400' },
];

export function GitHubSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="github" className="py-16 md:py-24 relative overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute right-0 top-1/4 w-1/2 h-96 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('github.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('github.subtitle')}</p>
        </motion.div>

        <motion.div style={{ y: contentY }} className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glow-card group mb-6 md:mb-8"
          >
            <div className="glow-card-inner p-5 md:p-8">
            <div className="flex flex-col items-center gap-4 md:gap-6 md:flex-row">
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/30">
                  <ImageZoom
                    src="https://avatars.githubusercontent.com/u/119018632?v=4"
                    alt="GitHub Profile"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-9 md:h-9 rounded-xl glow-icon pointer-events-none">
                  <Github className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.4} />
                </div>
              </div>
              
              <div className="text-center md:text-left flex-grow">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-1">
                  Roger Varela
                </h3>
                <p className="text-muted-foreground text-sm mb-2">@ChokiTheProo</p>
                <p className="text-xs md:text-sm text-muted-foreground max-w-md">
                  {language === 'pt'
                    ? 'Em busca de uma oportunidade na área de Desenvolvimento. Compartilhando projetos feitos durante os cursos.'
                    : language === 'es'
                    ? 'En busca de una oportunidad en el área de Desarrollo. Compartiendo proyectos realizados durante los cursos.'
                    : 'Looking for an opportunity in the Development field. Sharing projects made during courses.'}
                </p>
              </div>

              <a 
                href="https://github.com/ChokiTheProo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-10 md:h-12 px-6 md:px-8 rounded-lg text-sm md:text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
                {t('github.viewProfile')}
              </a>
            </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 max-w-xs mx-auto gap-2 md:gap-4 mb-6 md:mb-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glow-card group">
                <div className="glow-card-inner p-3 md:p-6 text-center">
                  <div className="glow-icon w-10 h-10 md:w-12 md:h-12 mx-auto mb-1 md:mb-2">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.4} />
                  </div>
                  <div className="text-lg md:text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {language === 'pt' ? stat.labelPt : language === 'es' ? stat.labelEs : stat.labelEn}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glow-card"
          >
            <div className="glow-card-inner p-4 md:p-6">
            <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">
              {language === 'pt' ? 'Linguagens Mais Usadas' : language === 'es' ? 'Lenguajes Más Usados' : 'Most Used Languages'}
            </h4>
            
            {/* Progress Bars */}
            <div className="space-y-3 md:space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs md:text-sm mb-1">
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="h-1.5 md:h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percentage}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      className={`h-full rounded-full ${lang.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
