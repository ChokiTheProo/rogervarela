import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const hardSkills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'PHP', level: 75 },
  { name: 'MySQL', level: 80 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'Flutter/Dart', level: 70 },
  { name: 'Kotlin', level: 65 },
  { name: 'Git/GitHub', level: 85 },
  { name: 'Linux', level: 75 },
  { name: 'Windows Server', level: 70 },
  { name: 'Networking', level: 75 },
  { name: 'IoT', level: 65 },
];

const softSkills = {
  pt: [
    'Comunicação Efetiva',
    'Trabalho em Equipe',
    'Resolução de Problemas',
    'Pensamento Crítico',
    'Adaptabilidade',
    'Gestão de Tempo',
    'Organização',
    'Proatividade',
    'Aprendizado Contínuo',
    'Atenção aos Detalhes',
  ],
  en: [
    'Effective Communication',
    'Teamwork',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
    'Time Management',
    'Organization',
    'Proactivity',
    'Continuous Learning',
    'Attention to Detail',
  ],
};

export function SkillsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute left-0 bottom-0 w-1/3 h-96 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('skills.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-primary" />
              {t('skills.hard')}
            </h3>
            
            <div className="space-y-4">
              {hardSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                      className="h-full rounded-full bg-gradient-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {t('skills.soft')}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {softSkills[language].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-foreground text-sm font-medium hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            {/* Decorative Element */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-card border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-3xl">
                  🚀
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {language === 'pt' ? 'Sempre Evoluindo' : 'Always Evolving'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'pt'
                      ? 'Constantemente aprendendo novas tecnologias e metodologias'
                      : 'Constantly learning new technologies and methodologies'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
