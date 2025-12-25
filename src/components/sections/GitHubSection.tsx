import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Star, GitFork, Users, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Code, value: '6+', labelPt: 'Repositórios', labelEn: 'Repositories' },
  { icon: Users, value: '1', labelPt: 'Seguidores', labelEn: 'Followers' },
  { icon: Star, value: '2', labelPt: 'Seguindo', labelEn: 'Following' },
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

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-1/2 h-96 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('github.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('github.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-gradient-card border border-border/50 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/30">
                  <img
                    src="https://avatars.githubusercontent.com/u/119018632?v=4"
                    alt="GitHub Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Github className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              
              <div className="text-center md:text-left flex-grow">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                  Roger Varela
                </h3>
                <p className="text-muted-foreground mb-2">@ChokiTheProo</p>
                <p className="text-sm text-muted-foreground max-w-md">
                  {language === 'pt'
                    ? 'Em busca de uma oportunidade na área de Desenvolvimento. Compartilhando projetos feitos durante os cursos.'
                    : 'Looking for an opportunity in the Development field. Sharing projects made during courses.'}
                </p>
              </div>

              <a 
                href="https://github.com/ChokiTheProo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                {t('github.viewProfile')}
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border/50 text-center hover:border-primary/30 transition-colors"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'pt' ? stat.labelPt : stat.labelEn}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-xl bg-gradient-card border border-border/50"
          >
            <h4 className="font-heading font-semibold text-foreground mb-4">
              {language === 'pt' ? 'Linguagens Mais Usadas' : 'Most Used Languages'}
            </h4>
            
            {/* Progress Bars */}
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
