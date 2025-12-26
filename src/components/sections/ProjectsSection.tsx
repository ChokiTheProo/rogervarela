import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Code2, Play, Rocket, GraduationCap, Newspaper } from 'lucide-react';
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
  },
  // Academic Projects
  {
    name: 'Sistema Operacional de Redes',
    description: {
      pt: 'Projeto completo de configuração e administração de sistemas operacionais de rede, incluindo Windows Server e Linux.',
      en: 'Complete project for configuring and managing network operating systems, including Windows Server and Linux.',
    },
    technologies: ['Windows Server', 'Linux', 'Networking', 'DNS', 'DHCP'],
    github: 'https://github.com/ChokiTheProo/SISTEMA-OPERACIONAL-DE-REDES',
    category: 'academic',
  },
  {
    name: 'Internet das Coisas (IoT)',
    description: {
      pt: 'Desenvolvimento de soluções IoT utilizando sensores e microcontroladores para automação e coleta de dados.',
      en: 'Development of IoT solutions using sensors and microcontrollers for automation and data collection.',
    },
    technologies: ['Arduino', 'Sensors', 'IoT', 'C++', 'ESP32'],
    github: 'https://github.com/ChokiTheProo/INTERNET-DAS-COISAS',
    category: 'academic',
  },
  {
    name: 'Projeto Java Spring Boot',
    description: {
      pt: 'Aplicação backend robusta desenvolvida com Java, Spring Boot e integração com banco de dados SQL.',
      en: 'Robust backend application developed with Java, Spring Boot and SQL database integration.',
    },
    technologies: ['Java', 'Spring Boot', 'SQL', 'Python', 'REST API'],
    github: 'https://github.com/ChokiTheProo',
    category: 'academic',
  },
  {
    name: 'Análise e Qualidade de Software',
    description: {
      pt: 'Projeto focado em metodologias de teste de software, garantia de qualidade e documentação técnica.',
      en: 'Project focused on software testing methodologies, quality assurance, and technical documentation.',
    },
    technologies: ['Testing', 'QA', 'Documentation', 'Agile'],
    github: 'https://github.com/ChokiTheProo/ANALISE-E-QUALIDADE-DE-SOFTWARE',
    category: 'academic',
  },
  {
    name: 'Desenvolvimento de Aplicativos Mobile',
    description: {
      pt: 'Criação de aplicativos mobile utilizando Flutter, Dart, Kotlin e tecnologias modernas.',
      en: 'Creation of mobile applications using Flutter, Dart, Kotlin and modern technologies.',
    },
    technologies: ['Dart', 'Flutter', 'Kotlin', 'Android', 'Firebase'],
    github: 'https://github.com/ChokiTheProo/DESENVOLVIMENTO-DE-APLICATIVOS-I-',
    category: 'academic',
  },
  {
    name: 'Desenvolvimento de Sistemas Web',
    description: {
      pt: 'Projeto avançado de desenvolvimento web com tecnologias modernas e boas práticas.',
      en: 'Advanced web development project with modern technologies and best practices.',
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/ChokiTheProo/DESENVOLVIMENTO-DE-SISTEMAS-WEB-III',
    category: 'academic',
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
  'Jornalismo': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  'UX/UI': 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30',
};

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.05), transparent)',
          }}
        />
        {/* Floating Code Symbols */}
        {['</', '/>', '{ }', '( )', '[ ]'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl font-mono text-primary/10"
            style={{
              top: `${10 + i * 20}%`,
              right: `${5 + i * 15}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              rotate: [-10, 10, -10],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="section-title mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient">{t('projects.title')}</span>
          </motion.h2>
          <p className="section-subtitle mx-auto">{t('projects.subtitle')}</p>
        </motion.div>

        {/* RoVR Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <motion.h3 
            className="text-xl font-heading font-semibold text-primary flex items-center gap-2 mb-6"
            whileHover={{ x: 10 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Rocket className="w-5 h-5" />
            </motion.div>
            {language === 'pt' ? 'Projetos RoVR' : 'RoVR Projects'}
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.category === 'rovr').map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isInView={isInView} language={language} t={t} techColors={techColors} />
            ))}
          </div>
        </motion.div>

        {/* Academic Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h3 
            className="text-xl font-heading font-semibold text-emerald-400 flex items-center gap-2 mb-6"
            whileHover={{ x: 10 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <GraduationCap className="w-5 h-5" />
            </motion.div>
            {language === 'pt' ? 'Projetos Acadêmicos' : 'Academic Projects'}
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.category === 'academic').map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isInView={isInView} language={language} t={t} techColors={techColors} />
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
  techColors: Record<string, string>;
}

function ProjectCard({ project, index, isInView, language, t, techColors }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (project.category) {
      case 'rovr': return <Rocket className="w-7 h-7 text-primary-foreground" />;
      case 'journalism': return <Newspaper className="w-7 h-7 text-primary-foreground" />;
      default: return <Code2 className="w-7 h-7 text-primary-foreground" />;
    }
  };

  const getIconBg = () => {
    switch (project.category) {
      case 'rovr': return 'bg-gradient-to-br from-primary to-violet-500';
      case 'journalism': return 'bg-gradient-to-br from-rose-500 to-pink-500';
      default: return 'bg-gradient-primary';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 80
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        rotateX: -5,
      }}
      className="relative p-6 rounded-2xl bg-gradient-card border border-border/50 transition-all duration-300 flex flex-col cursor-pointer"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        boxShadow: isHovered 
          ? '0 25px 50px -12px hsl(var(--primary) / 0.25), 0 0 30px -10px hsl(var(--primary) / 0.2)' 
          : 'none'
      }}
    >
      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Category Badge */}
      {project.category === 'rovr' && (
        <motion.div 
          className="absolute top-4 right-4"
          style={{ transform: 'translateZ(20px)' }}
          animate={isHovered ? { scale: 1.1, rotate: 5 } : {}}
        >
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
            RoVR
          </span>
        </motion.div>
      )}

      {/* Project Icon with 3D Effect */}
      <motion.div 
        className={`w-14 h-14 rounded-xl ${getIconBg()} flex items-center justify-center mb-4 relative z-10`}
        style={{ transform: 'translateZ(30px)' }}
        animate={isHovered ? { 
          rotateY: 360,
          scale: 1.1,
        } : {}}
        transition={{ duration: 0.6 }}
      >
        {getIcon()}
      </motion.div>

      <motion.h3 
        className="font-heading font-semibold text-lg text-foreground mb-3 relative z-10"
        style={{ transform: 'translateZ(25px)' }}
        animate={isHovered ? { x: 5 } : { x: 0 }}
      >
        {project.name}
      </motion.h3>

      <motion.p 
        className="text-sm text-muted-foreground mb-4 flex-grow relative z-10"
        style={{ transform: 'translateZ(20px)' }}
      >
        {project.description[language]}
      </motion.p>

      {/* Technologies with stagger animation */}
      <div className="flex flex-wrap gap-2 mb-6 relative z-10" style={{ transform: 'translateZ(15px)' }}>
        {project.technologies.map((tech, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className={`px-2 py-1 text-xs rounded-md border ${
              techColors[tech] || 'bg-primary/20 text-primary border-primary/30'
            }`}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 relative z-20" style={{ transform: 'translateZ(10px)' }}>
        {'isLive' in project && project.isLive ? (
          <motion.a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md text-sm font-medium bg-primary text-primary-foreground transition-all"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px -10px hsl(var(--primary) / 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
            {language === 'pt' ? 'Ver Projeto' : 'View Project'}
          </motion.a>
        ) : (
          <motion.a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md text-sm font-medium border border-border bg-transparent text-foreground transition-all"
            whileHover={{ 
              scale: 1.05,
              borderColor: 'hsl(var(--primary) / 0.5)',
              backgroundColor: 'hsl(var(--secondary))'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            {t('projects.viewGithub')}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
