import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, memo } from 'react';
import { Github, ExternalLink, Code2, Rocket, GraduationCap, Newspaper, Eye, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  // RoVR Projects
  {
    name: 'Klyexa',
    description: {
      pt: 'Aplicativo inovador desenvolvido com IA pela RoVR - Plataforma inteligente para produtividade e automação.',
      en: 'Innovative app developed with AI by RoVR - Intelligent platform for productivity and automation.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Lovable'],
    github: 'https://klyexa.lovable.app',
    isLive: true,
    category: 'rovr',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
  },
  {
    name: 'Emagrio Transforma Já',
    description: {
      pt: 'Plataforma de transformação e bem-estar desenvolvida pela RoVR com foco em resultados.',
      en: 'Transformation and wellness platform developed by RoVR focused on results.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Lovable'],
    github: 'https://emagrio-transforma-ja.lovable.app',
    isLive: true,
    category: 'rovr',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    name: 'Emagrio Journey',
    description: {
      pt: 'Jornada de emagrecimento personalizada com onboarding inteligente pela RoVR.',
      en: 'Personalized weight loss journey with intelligent onboarding by RoVR.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UX/UI', 'Lovable'],
    github: 'https://emagrio-journey-unlocked.lovable.app/onboarding',
    isLive: true,
    category: 'rovr',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
  },
  {
    name: 'Tratamento Gastrite',
    description: {
      pt: 'Aplicativo de acompanhamento diário para tratamento de gastrite e saúde digestiva.',
      en: 'Daily tracking app for gastritis treatment and digestive health.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Health', 'Lovable'],
    github: 'https://tratamentodiario.lovable.app/tasks',
    isLive: true,
    category: 'rovr',
    gradient: 'from-rose-500 via-pink-500 to-red-500',
  },
  {
    name: 'DentiFlow',
    description: {
      pt: 'Assistente dental inteligente para gestão de clínicas e atendimento odontológico.',
      en: 'Intelligent dental assistant for clinic management and dental care.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Vercel'],
    github: 'https://v0-dental-assistant-app.vercel.app/',
    isLive: true,
    category: 'rovr',
    gradient: 'from-sky-500 via-blue-500 to-indigo-500',
  },
  {
    name: 'Fluxen',
    description: {
      pt: 'Sistema completo para controle de caixa e gestão financeira empresarial.',
      en: 'Complete system for cash control and business financial management.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Finance', 'Lovable'],
    github: 'https://fluxenbr.lovable.app',
    isLive: true,
    category: 'rovr',
    gradient: 'from-lime-500 via-green-500 to-emerald-500',
  },
  // Academic Projects
  {
    name: 'Sistema Operacional de Redes',
    description: {
      pt: 'Projeto completo de configuração e administração de sistemas operacionais de rede.',
      en: 'Complete project for configuring and managing network operating systems.',
    },
    technologies: ['Windows Server', 'Linux', 'Networking', 'DNS', 'DHCP'],
    github: 'https://github.com/ChokiTheProo/SISTEMA-OPERACIONAL-DE-REDES',
    category: 'academic',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Internet das Coisas (IoT)',
    description: {
      pt: 'Desenvolvimento de soluções IoT utilizando sensores e microcontroladores.',
      en: 'Development of IoT solutions using sensors and microcontrollers.',
    },
    technologies: ['Arduino', 'Sensors', 'IoT', 'C++', 'ESP32'],
    github: 'https://github.com/ChokiTheProo/INTERNET-DAS-COISAS',
    category: 'academic',
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    name: 'Projeto Java Spring Boot',
    description: {
      pt: 'Aplicação backend robusta desenvolvida com Java e Spring Boot.',
      en: 'Robust backend application developed with Java and Spring Boot.',
    },
    technologies: ['Java', 'Spring Boot', 'SQL', 'Python', 'REST API'],
    github: 'https://github.com/ChokiTheProo',
    category: 'academic',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    name: 'Análise e Qualidade de Software',
    description: {
      pt: 'Projeto focado em metodologias de teste e garantia de qualidade.',
      en: 'Project focused on software testing and quality assurance.',
    },
    technologies: ['Testing', 'QA', 'Documentation', 'Agile'],
    github: 'https://github.com/ChokiTheProo/ANALISE-E-QUALIDADE-DE-SOFTWARE',
    category: 'academic',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Desenvolvimento Mobile',
    description: {
      pt: 'Criação de aplicativos mobile com Flutter, Dart e Kotlin.',
      en: 'Mobile applications with Flutter, Dart and Kotlin.',
    },
    technologies: ['Dart', 'Flutter', 'Kotlin', 'Android', 'Firebase'],
    github: 'https://github.com/ChokiTheProo/DESENVOLVIMENTO-DE-APLICATIVOS-I-',
    category: 'academic',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Desenvolvimento Web',
    description: {
      pt: 'Projeto avançado de desenvolvimento web com boas práticas.',
      en: 'Advanced web development with best practices.',
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/ChokiTheProo/DESENVOLVIMENTO-DE-SISTEMAS-WEB-III',
    category: 'academic',
    gradient: 'from-amber-500 to-yellow-500',
  },
];

const techColors: Record<string, string> = {
  'Windows Server': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Linux': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Networking': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Arduino': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  'Flutter': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Kotlin': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'PHP': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  'React': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  'TypeScript': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
  'Tailwind CSS': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'AI': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  'Lovable': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'Java': 'bg-red-500/20 text-red-400 border-red-500/30',
  'Spring Boot': 'bg-green-600/20 text-green-400 border-green-600/30',
  'SQL': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Python': 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  'UX/UI': 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30',
  'Health': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  'Vercel': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  'Finance': 'bg-lime-500/20 text-lime-400 border-lime-500/30',
};

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="projects" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Optimized Background - fewer elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-30"
          style={{
            background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.05), transparent)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('projects.subtitle')}</p>
        </motion.div>

        {/* RoVR Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-16"
        >
          <motion.h3 
            className="text-xl font-heading font-semibold text-primary flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="p-2 rounded-lg bg-primary/20">
              <Rocket className="w-5 h-5" />
            </div>
            {language === 'pt' ? 'Projetos RoVR' : 'RoVR Projects'}
            <motion.span 
              className="ml-2 px-2 py-0.5 text-xs rounded-full bg-accent/20 text-accent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Live
            </motion.span>
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.category === 'rovr').map((project, index) => (
              <ProjectCard 
                key={project.name} 
                project={project} 
                index={index} 
                isInView={isInView} 
                language={language} 
                t={t} 
              />
            ))}
          </div>
        </motion.div>

        {/* Academic Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.h3 
            className="text-xl font-heading font-semibold text-emerald-400 flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="p-2 rounded-lg bg-emerald-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            {language === 'pt' ? 'Projetos Acadêmicos' : 'Academic Projects'}
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.category === 'academic').map((project, index) => (
              <ProjectCard 
                key={project.name} 
                project={project} 
                index={index} 
                isInView={isInView} 
                language={language} 
                t={t} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
  language: 'pt' | 'en';
  t: (key: string) => string;
}

const ProjectCard = memo(function ProjectCard({ project, index, isInView, language, t }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (project.category) {
      case 'rovr': return <Rocket className="w-6 h-6" />;
      case 'journalism': return <Newspaper className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Card Background with animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-card border border-border/50 transition-all duration-500 group-hover:border-transparent" />
      
      {/* Animated gradient border on hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 blur-sm`}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-card" />

      {/* Animated Preview Overlay - pointer-events-none to allow clicks */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-10 rounded-2xl overflow-hidden pointer-events-none"
          >
            {/* Animated gradient background */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}

            {/* Scan line effect */}
            <motion.div
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />

            {/* Corner sparkles */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-white/60" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Zap className="w-5 h-5 text-white/60" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div 
            className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
            animate={isHovered ? { 
              scale: 1.1,
              rotate: [0, -10, 10, 0],
            } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            {getIcon()}
          </motion.div>
          
          {project.category === 'rovr' && (
            <motion.div
              animate={isHovered ? { scale: 1.1, y: -2 } : { scale: 1, y: 0 }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30"
            >
              <motion.span 
                className="w-1.5 h-1.5 rounded-full bg-accent"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs font-medium text-primary">RoVR</span>
            </motion.div>
          )}
        </div>

        {/* Title */}
        <motion.h3 
          className="font-heading font-semibold text-lg text-foreground mb-2"
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {project.name}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2"
          animate={isHovered ? { opacity: 0.8 } : { opacity: 1 }}
        >
          {project.description[language]}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <motion.span
              key={tech}
              className={`px-2 py-0.5 text-xs rounded-md border ${
                techColors[tech] || 'bg-primary/20 text-primary border-primary/30'
              }`}
              animate={isHovered ? { 
                y: [0, -3, 0],
                transition: { delay: i * 0.05, duration: 0.3 }
              } : {}}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <motion.a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`relative overflow-hidden inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-sm font-medium transition-all duration-300 ${
            'isLive' in project && project.isLive
              ? `bg-gradient-to-r ${project.gradient} text-white shadow-lg`
              : 'border border-border bg-secondary/50 text-foreground hover:border-primary/50'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Button shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={isHovered ? { x: ['-100%', '100%'] } : { x: '-100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
          
          <span className="relative z-10 flex items-center gap-2">
            {'isLive' in project && project.isLive ? (
              <>
                <span>{language === 'pt' ? 'Ver Projeto' : 'View Project'}</span>
                <motion.div
                  animate={isHovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </>
            ) : (
              <>
                <Github className="w-4 h-4" />
                <span>{t('projects.viewGithub')}</span>
              </>
            )}
          </span>
        </motion.a>
      </div>

      {/* Bottom glow effect */}
      <motion.div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full bg-gradient-to-r ${project.gradient} blur-md`}
        animate={{ opacity: isHovered ? 0.8 : 0, scaleX: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
});
