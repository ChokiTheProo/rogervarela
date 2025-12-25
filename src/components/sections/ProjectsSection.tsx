import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Code2, Play, Rocket, GraduationCap, Newspaper } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const projects = [
  // REVYRA Projects
  {
    name: 'Klyexa',
    description: {
      pt: 'Aplicativo inovador desenvolvido com IA pela REVYRA - Plataforma inteligente para produtividade e automação.',
      en: 'Innovative app developed with AI by REVYRA - Intelligent platform for productivity and automation.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Lovable'],
    github: 'https://klyexa.lovable.app',
    isLive: true,
    category: 'revyra',
  },
  {
    name: 'Emagrio Transforma Já',
    description: {
      pt: 'Plataforma de transformação e bem-estar desenvolvida pela REVYRA com foco em resultados.',
      en: 'Transformation and wellness platform developed by REVYRA focused on results.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Lovable'],
    github: 'https://emagrio-transforma-ja.lovable.app',
    isLive: true,
    category: 'revyra',
  },
  {
    name: 'Emagrio Journey',
    description: {
      pt: 'Jornada de emagrecimento personalizada com onboarding inteligente pela REVYRA.',
      en: 'Personalized weight loss journey with intelligent onboarding by REVYRA.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UX/UI', 'Lovable'],
    github: 'https://emagrio-journey-unlocked.lovable.app/onboarding',
    isLive: true,
    category: 'revyra',
  },
  // Journalism Project
  {
    name: 'Projeto de Jornalismo 2019',
    description: {
      pt: 'Projeto audiovisual de jornalismo desenvolvido em 2019, demonstrando habilidades em comunicação e produção de conteúdo.',
      en: 'Audiovisual journalism project developed in 2019, demonstrating communication and content production skills.',
    },
    technologies: ['Jornalismo', 'Produção', 'Audiovisual', 'Comunicação'],
    github: 'https://www.youtube.com/watch?v=Qnp20Cq433A',
    isVideo: true,
    category: 'journalism',
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
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('projects.subtitle')}</p>
        </motion.div>

        {/* REVYRA Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-xl font-heading font-semibold text-primary flex items-center gap-2 mb-6">
            <Rocket className="w-5 h-5" />
            {language === 'pt' ? 'Projetos REVYRA' : 'REVYRA Projects'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.category === 'revyra').map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isInView={isInView} language={language} t={t} techColors={techColors} />
            ))}
          </div>
        </motion.div>

        {/* Journalism Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-xl font-heading font-semibold text-rose-400 flex items-center gap-2 mb-6">
            <Newspaper className="w-5 h-5" />
            {language === 'pt' ? 'Projetos de Jornalismo' : 'Journalism Projects'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.category === 'journalism').map((project, index) => (
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
          <h3 className="text-xl font-heading font-semibold text-emerald-400 flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5" />
            {language === 'pt' ? 'Projetos Acadêmicos' : 'Academic Projects'}
          </h3>
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
  const getIcon = () => {
    switch (project.category) {
      case 'revyra': return <Rocket className="w-7 h-7 text-primary-foreground" />;
      case 'journalism': return <Newspaper className="w-7 h-7 text-primary-foreground" />;
      default: return <Code2 className="w-7 h-7 text-primary-foreground" />;
    }
  };

  const getIconBg = () => {
    switch (project.category) {
      case 'revyra': return 'bg-gradient-to-br from-primary to-violet-500';
      case 'journalism': return 'bg-gradient-to-br from-rose-500 to-pink-500';
      default: return 'bg-gradient-primary';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow flex flex-col"
    >
      {/* Category Badge */}
      {project.category === 'revyra' && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
            REVYRA
          </span>
        </div>
      )}
      {'isVideo' in project && project.isVideo && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
            YouTube
          </span>
        </div>
      )}

      {/* Project Icon */}
      <div className={`w-14 h-14 rounded-xl ${getIconBg()} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {getIcon()}
      </div>

      <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
        {project.name}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 flex-grow">
        {project.description[language]}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className={`px-2 py-1 text-xs rounded-md border ${
              techColors[tech] || 'bg-primary/20 text-primary border-primary/30'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {'isLive' in project && project.isLive ? (
          <Button variant="default" size="sm" asChild className="flex-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              {language === 'pt' ? 'Ver Projeto' : 'View Project'}
            </a>
          </Button>
        ) : 'isVideo' in project && project.isVideo ? (
          <Button variant="outline" size="sm" asChild className="flex-1 border-rose-500/30 text-rose-400 hover:bg-rose-500/10">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Play className="w-4 h-4 mr-2" />
              {language === 'pt' ? 'Assistir Vídeo' : 'Watch Video'}
            </a>
          </Button>
        ) : (
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              {t('projects.viewGithub')}
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
