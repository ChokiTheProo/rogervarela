import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const hardSkills = [
  { name: 'React / Next.js', level: 85 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'HTML5 / CSS3', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'PHP', level: 75 },
  { name: 'PostgreSQL / MySQL', level: 80 },
  { name: 'Supabase', level: 85 },
  { name: 'Flutter / Dart', level: 70 },
  { name: 'Kotlin', level: 65 },
  { name: 'Git / GitHub', level: 90 },
  { name: 'Linux', level: 80 },
  { name: 'Windows Server', level: 75 },
  { name: 'Networking / TCP-IP', level: 80 },
  { name: 'IoT / Arduino', level: 75 },
  { name: 'ERP Systems', level: 80 },
  { name: 'HelpDesk / Suporte N1', level: 90 },
  { name: 'Marketing Digital', level: 75 },
];

const languageSkills = {
  pt: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês - Básico', level: 'A1-A2' },
    { name: 'Inglês - Intermediário', level: 'B1' },
  ],
  en: [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English - Basic', level: 'A1-A2' },
    { name: 'English - Intermediate', level: 'B1' },
  ],
  es: [
    { name: 'Portugués', level: 'Nativo' },
    { name: 'Inglés - Básico', level: 'A1-A2' },
    { name: 'Inglés - Intermedio', level: 'B1' },
  ],
};

const softSkills = {
  pt: [
    'Liderança',
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
    'Empreendedorismo',
  ],
  en: [
    'Leadership',
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
    'Entrepreneurship',
  ],
  es: [
    'Liderazgo',
    'Comunicación Efectiva',
    'Trabajo en Equipo',
    'Resolución de Problemas',
    'Pensamiento Crítico',
    'Adaptabilidad',
    'Gestión del Tiempo',
    'Organización',
    'Proactividad',
    'Aprendizaje Continuo',
    'Atención al Detalle',
    'Emprendimiento',
  ],
};

export function SkillsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <section id="skills" className="py-12 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl"
        />
        
        {/* Floating Tech Icons - hidden on mobile */}
        {!isMobile && ['⚛️', '🔷', '🎨', '⚡', '🔥'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              top: `${15 + i * 18}%`,
              left: `${5 + i * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.h2 
            className="section-title mb-4 text-2xl md:text-4xl"
            whileHover={isMobile ? {} : { scale: 1.02 }}
          >
            <span className="text-gradient">{t('skills.title')}</span>
          </motion.h2>
          <p className="section-subtitle mx-auto text-sm md:text-base px-2">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Hard Skills with 3D Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.h3 
              className="font-heading font-semibold text-lg md:text-xl text-foreground mb-4 md:mb-6 flex items-center gap-2"
              whileHover={isMobile ? {} : { x: 5 }}
            >
              <motion.span 
                className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-gradient-primary"
                animate={isMobile ? {} : { scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {t('skills.hard')}
            </motion.h3>
            
            <div className="space-y-3 md:space-y-4">
              {hardSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.02 }}
                  onHoverStart={() => !isMobile && setHoveredSkill(index)}
                  onHoverEnd={() => !isMobile && setHoveredSkill(null)}
                  className="group cursor-pointer"
                >
                  <div className="flex justify-between text-xs md:text-sm mb-1">
                    <motion.span 
                      className="text-foreground font-medium group-hover:text-primary transition-colors"
                      animate={!isMobile && hoveredSkill === index ? { x: 5 } : { x: 0 }}
                    >
                      {skill.name}
                    </motion.span>
                    <motion.span 
                      className="text-muted-foreground"
                      animate={!isMobile && hoveredSkill === index ? { scale: 1.1, color: 'hsl(var(--primary))' } : {}}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div 
                    className="h-2.5 md:h-3 rounded-full bg-secondary overflow-hidden relative"
                    style={{ 
                      perspective: isMobile ? 'none' : '500px',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  >
                    <motion.div
                      initial={{ width: 0, rotateX: isMobile ? 0 : 45 }}
                      animate={isInView ? { 
                        width: `${skill.level}%`, 
                        rotateX: 0,
                      } : {}}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.2 + index * 0.03,
                        type: 'spring',
                        stiffness: 50
                      }}
                      className="h-full rounded-full bg-gradient-primary relative"
                      style={{
                        boxShadow: !isMobile && hoveredSkill === index 
                          ? '0 0 20px hsl(var(--primary) / 0.6), inset 0 1px 0 rgba(255,255,255,0.3)' 
                          : 'inset 0 1px 0 rgba(255,255,255,0.2)'
                      }}
                    >
                      {/* Shine Effect - simplified on mobile */}
                      {!isMobile && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            delay: index * 0.1,
                          }}
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills with 3D Cards */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3 
              className="font-heading font-semibold text-lg md:text-xl text-foreground mb-4 md:mb-6 flex items-center gap-2"
              whileHover={isMobile ? {} : { x: 5 }}
            >
              <motion.span 
                className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-accent"
                animate={isMobile ? {} : { scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              {t('skills.soft')}
            </motion.h3>
            
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              {softSkills[language].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: isMobile ? 0 : -90 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + index * 0.05,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={isMobile ? {} : { 
                    scale: 1.1, 
                    rotateY: 10,
                    boxShadow: '0 10px 30px -10px hsl(var(--primary) / 0.4)',
                    backgroundColor: 'hsl(var(--primary) / 0.2)',
                  }}
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary/50 border border-border/50 text-foreground text-xs md:text-sm font-medium hover:border-primary/50 transition-all cursor-pointer"
                  style={{ 
                    perspective: isMobile ? 'none' : '1000px',
                    transformStyle: isMobile ? 'flat' : 'preserve-3d'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Language Skills */}
            <motion.h3 
              className="font-heading font-semibold text-lg md:text-xl text-foreground mb-3 md:mb-4 flex items-center gap-2"
              whileHover={isMobile ? {} : { x: 5 }}
            >
              <motion.span 
                className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-emerald-500"
                animate={isMobile ? {} : { scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              {language === 'pt' ? 'Idiomas' : language === 'es' ? 'Idiomas' : 'Languages'}
            </motion.h3>
            
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              {languageSkills[language].map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={isMobile ? {} : { 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: '0 15px 30px -10px rgba(16, 185, 129, 0.3)'
                  }}
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-medium cursor-pointer transition-all"
                >
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-emerald-400/70 ml-1 md:ml-2">({lang.level})</span>
                </motion.div>
              ))}
            </div>
            
            {/* CEO Badge with 3D Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20, rotateX: isMobile ? 0 : -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={isMobile ? {} : { 
                scale: 1.02, 
                rotateY: 5,
                boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.4)'
              }}
              className="mt-6 md:mt-8 p-4 md:p-6 rounded-2xl bg-gradient-card border border-primary/30 cursor-pointer transition-all"
              style={{ 
                perspective: isMobile ? 'none' : '1000px',
                transformStyle: isMobile ? 'flat' : 'preserve-3d'
              }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl md:text-3xl"
                  animate={isMobile ? {} : { rotateY: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{ transformStyle: isMobile ? 'flat' : 'preserve-3d' }}
                >
                  🚀
                </motion.div>
                <div>
                  <h4 className="font-heading font-semibold text-sm md:text-base text-foreground">
                    CEO @ RoVR
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {language === 'pt'
                      ? 'Criando MicroSaaS e soluções inovadoras para o mercado'
                      : language === 'es'
                      ? 'Creando MicroSaaS y soluciones innovadoras para el mercado'
                      : 'Creating MicroSaaS and innovative solutions for the market'}
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Element with Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20, rotateX: isMobile ? 0 : -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={isMobile ? {} : { 
                scale: 1.02, 
                rotateY: -5,
                boxShadow: '0 20px 40px -15px hsl(var(--accent) / 0.3)'
              }}
              className="mt-4 md:mt-6 p-4 md:p-6 rounded-2xl bg-gradient-card border border-border/50 cursor-pointer transition-all"
              style={{ 
                perspective: isMobile ? 'none' : '1000px',
                transformStyle: isMobile ? 'flat' : 'preserve-3d'
              }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-accent/20 flex items-center justify-center text-2xl md:text-3xl"
                  animate={isMobile ? {} : { 
                    rotateZ: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  📚
                </motion.div>
                <div>
                  <h4 className="font-heading font-semibold text-sm md:text-base text-foreground">
                    {language === 'pt' ? 'Sempre Evoluindo' : language === 'es' ? 'Siempre Evolucionando' : 'Always Evolving'}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {language === 'pt'
                      ? 'Constantemente aprendendo novas tecnologias e metodologias'
                      : language === 'es'
                      ? 'Constantemente aprendiendo nuevas tecnologías y metodologías'
                      : 'Constantly learning new technologies and methodologies'}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
