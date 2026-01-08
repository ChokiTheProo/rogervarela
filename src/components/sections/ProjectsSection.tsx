import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, memo } from 'react';
import { Github, ExternalLink, Code2, Rocket, GraduationCap, Newspaper, Eye, Sparkles, Zap, ArrowUpRight, Target, Lightbulb, TrendingUp, Wrench, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Project images
import projectFluxen from '@/assets/project-fluxen.png';
import projectKlyexa from '@/assets/project-klyexa.png';
import projectCuidabem from '@/assets/project-cuidabem.png';
import projectTratamento from '@/assets/project-tratamento.png';
import projectEmagrio from '@/assets/project-emagrio.png';
import projectDentiflow from '@/assets/project-dentiflow.png';

interface ProjectStory {
  problem: { pt: string; en: string; es: string };
  solution: { pt: string; en: string; es: string };
  result: { pt: string; en: string; es: string };
}

// Project image mapping
const projectImages: Record<string, string> = {
  'Klyexa': projectKlyexa,
  'Emagrio Transforma Já': projectEmagrio,
  'Tratamento Gastrite': projectTratamento,
  'Fluxen': projectFluxen,
  'CuidaBem': projectCuidabem,
  'DentiFlow': projectDentiflow,
};

const projects = [
  // RoVR Projects with storytelling
  {
    name: 'Klyexa',
    story: {
      problem: {
        pt: 'Profissionais gastam horas em tarefas repetitivas e perdem produtividade.',
        en: 'Professionals spend hours on repetitive tasks and lose productivity.',
        es: 'Los profesionales pierden horas en tareas repetitivas y productividad.',
      },
      solution: {
        pt: 'Plataforma de IA que automatiza fluxos de trabalho e aumenta a produtividade.',
        en: 'AI platform that automates workflows and boosts productivity.',
        es: 'Plataforma de IA que automatiza flujos de trabajo y aumenta la productividad.',
      },
      result: {
        pt: 'MVP funcional com onboarding inteligente e integração de IA.',
        en: 'Functional MVP with smart onboarding and AI integration.',
        es: 'MVP funcional con onboarding inteligente e integración de IA.',
      },
    } as ProjectStory,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Lovable'],
    github: 'https://klyexavenda.lovable.app',
    isLive: true,
    category: 'rovr',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    rating: 4.8,
  },
  {
    name: 'Emagrio Transforma Já',
    story: {
      problem: {
        pt: 'Pessoas desistem de dietas por falta de acompanhamento personalizado.',
        en: 'People give up on diets due to lack of personalized tracking.',
        es: 'Las personas abandonan dietas por falta de seguimiento personalizado.',
      },
      solution: {
        pt: 'Plataforma de transformação com planos personalizados e gamificação.',
        en: 'Transformation platform with personalized plans and gamification.',
        es: 'Plataforma de transformación con planes personalizados y gamificación.',
      },
      result: {
        pt: 'Landing page de alta conversão com sistema de leads ativo.',
        en: 'High-conversion landing page with active lead system.',
        es: 'Landing page de alta conversión con sistema de leads activo.',
      },
    } as ProjectStory,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Lovable'],
    github: 'https://emagrio-venda.lovable.app',
    isLive: true,
    category: 'rovr',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    rating: 4.8,
  },
  {
    name: 'Tratamento Gastrite',
    story: {
      problem: {
        pt: 'Pacientes esquecem medicamentos e não acompanham evolução do tratamento.',
        en: 'Patients forget medications and don\'t track treatment progress.',
        es: 'Pacientes olvidan medicamentos y no siguen la evolución del tratamiento.',
      },
      solution: {
        pt: 'App de acompanhamento diário com lembretes e histórico de sintomas.',
        en: 'Daily tracking app with reminders and symptom history.',
        es: 'App de seguimiento diario con recordatorios e historial de síntomas.',
      },
      result: {
        pt: 'Sistema funcional de tarefas diárias com persistência de dados.',
        en: 'Functional daily task system with data persistence.',
        es: 'Sistema funcional de tareas diarias con persistencia de datos.',
      },
    } as ProjectStory,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Health', 'Lovable'],
    github: 'https://tramentodiario.lovable.app',
    isLive: true,
    category: 'rovr',
    gradient: 'from-rose-500 via-pink-500 to-red-500',
    rating: 4.9,
  },
  {
    name: 'DentiFlow',
    story: {
      problem: {
        pt: 'Clínicas dentárias usam sistemas ultrapassados e perdem agendamentos.',
        en: 'Dental clinics use outdated systems and lose appointments.',
        es: 'Clínicas dentales usan sistemas obsoletos y pierden citas.',
      },
      solution: {
        pt: 'Assistente dental inteligente com gestão de pacientes e agendas.',
        en: 'Intelligent dental assistant with patient and schedule management.',
        es: 'Asistente dental inteligente con gestión de pacientes y agendas.',
      },
      result: {
        pt: 'MVP com fluxo completo de agendamento e dashboard operacional.',
        en: 'MVP with complete scheduling flow and operational dashboard.',
        es: 'MVP con flujo completo de agendamiento y dashboard operacional.',
      },
    } as ProjectStory,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Vercel'],
    github: 'https://v0-dental-assistant-app.vercel.app/',
    isLive: true,
    category: 'rovr',
    gradient: 'from-sky-500 via-blue-500 to-indigo-500',
    rating: 4.7,
  },
  {
    name: 'Fluxen',
    story: {
      problem: {
        pt: 'Pequenos negócios não têm controle financeiro e perdem dinheiro.',
        en: 'Small businesses lack financial control and lose money.',
        es: 'Pequeños negocios no tienen control financiero y pierden dinero.',
      },
      solution: {
        pt: 'Sistema completo de controle de caixa com relatórios e dashboards.',
        en: 'Complete cash control system with reports and dashboards.',
        es: 'Sistema completo de control de caja con informes y dashboards.',
      },
      result: {
        pt: 'App funcional com gestão de entradas, saídas e visão financeira.',
        en: 'Functional app with income, expense management and financial overview.',
        es: 'App funcional con gestión de ingresos, gastos y visión financiera.',
      },
    } as ProjectStory,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Finance', 'Lovable'],
    github: 'https://fluxenvenda.lovable.app',
    isLive: true,
    category: 'rovr',
    gradient: 'from-lime-500 via-green-500 to-emerald-500',
    rating: 4.9,
  },
  {
    name: 'CuidaBem',
    story: {
      problem: {
        pt: 'Famílias têm dificuldade em acompanhar a saúde e rotina de idosos.',
        en: 'Families struggle to track elderly health and daily routines.',
        es: 'Las familias tienen dificultad para seguir la salud y rutina de ancianos.',
      },
      solution: {
        pt: 'Aplicativo de cuidado ao idoso com lembretes, medicamentos e acompanhamento.',
        en: 'Elderly care app with reminders, medications and health tracking.',
        es: 'Aplicación de cuidado al anciano con recordatorios, medicamentos y seguimiento.',
      },
      result: {
        pt: 'Plataforma funcional para gestão do cuidado com interface acessível.',
        en: 'Functional platform for care management with accessible interface.',
        es: 'Plataforma funcional para gestión del cuidado con interfaz accesible.',
      },
    } as ProjectStory,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Health', 'Lovable'],
    github: 'https://cuidadem-facil.lovable.app',
    isLive: true,
    category: 'rovr',
    gradient: 'from-amber-500 via-orange-500 to-red-400',
    rating: 5.0,
  },
  // Academic Projects
  {
    name: 'Sistema Operacional de Redes',
    description: {
      pt: 'Projeto completo de configuração e administração de sistemas operacionais de rede.',
      en: 'Complete project for configuring and managing network operating systems.',
      es: 'Proyecto completo de configuración y administración de sistemas operativos de red.',
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
      es: 'Desarrollo de soluciones IoT utilizando sensores y microcontroladores.',
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
      es: 'Aplicación backend robusta desarrollada con Java y Spring Boot.',
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
      es: 'Proyecto enfocado en metodologías de prueba y garantía de calidad.',
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
      es: 'Aplicaciones móviles con Flutter, Dart y Kotlin.',
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
      es: 'Desarrollo web avanzado con buenas prácticas.',
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
    <section id="projects" className="py-16 sm:py-24 bg-secondary/20 relative overflow-hidden">
      {/* Optimized Background - fewer elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-30"
          style={{
            background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.05), transparent)',
          }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto px-2">{t('projects.subtitle')}</p>
        </motion.div>

        {/* RoVR Projects - Storytelling Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-10 sm:mb-16"
        >
          <motion.h3 
            className="text-lg sm:text-xl font-heading font-semibold text-primary flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            {language === 'pt' ? 'Projetos RoVR' : language === 'es' ? 'Proyectos RoVR' : 'RoVR Projects'}
            <motion.span 
              className="ml-1 sm:ml-2 px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-accent/20 text-accent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Live
            </motion.span>
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {projects.filter(p => p.category === 'rovr').map((project, index) => (
              <StoryCard 
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
            className="text-lg sm:text-xl font-heading font-semibold text-emerald-400 flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/20">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            {language === 'pt' ? 'Projetos Acadêmicos' : language === 'es' ? 'Proyectos Académicos' : 'Academic Projects'}
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.filter(p => p.category === 'academic').map((project, index) => (
              <AcademicCard 
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

// StoryCard for RoVR projects with storytelling
interface StoryCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
  language: 'pt' | 'en' | 'es';
  t: (key: string) => string;
}

const StoryCard = memo(function StoryCard({ project, index, isInView, language, t }: StoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const story = project.story as ProjectStory;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* Card Background with animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-card border border-border/50 transition-all duration-500 group-hover:border-transparent" />
      
      {/* Animated gradient border on hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 blur-sm`}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-card" />

      {/* Card Content */}
      <div className="relative z-10 p-4 sm:p-6">
        {/* Project Image */}
        {projectImages[project.name] && (
          <motion.div 
            className="relative mb-4 rounded-xl overflow-hidden border border-border/30 group/image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-[16/10] relative">
              <img 
                src={projectImages[project.name]} 
                alt={project.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/image:scale-105"
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/image:opacity-40 transition-opacity`} />
              
              {/* Badge and rating */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2 py-1 text-[10px] font-bold rounded-md bg-accent/90 text-white uppercase tracking-wide">
                  {language === 'pt' ? 'Disponível' : language === 'es' ? 'Disponible' : 'Available'}
                </span>
              </div>
              
              {project.rating && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-bold text-white">{project.rating}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
              animate={isHovered ? { scale: 1.05, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
            <div>
              <motion.h3 
                className="font-heading font-bold text-lg sm:text-xl text-foreground"
                animate={isHovered ? { x: 3 } : { x: 0 }}
              >
                {project.name}
              </motion.h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <motion.span 
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-primary">RoVR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
          {/* Problem */}
          <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-destructive" />
              <span className="text-xs font-semibold text-destructive uppercase tracking-wide">
                {language === 'pt' ? 'Problema' : language === 'es' ? 'Problema' : 'Problem'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {story.problem[language]}
            </p>
          </div>

          {/* Solution */}
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                {language === 'pt' ? 'Solução' : language === 'es' ? 'Solución' : 'Solution'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {story.solution[language]}
            </p>
          </div>

          {/* Result */}
          <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                {language === 'pt' ? 'Resultado' : language === 'es' ? 'Resultado' : 'Result'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {story.result[language]}
            </p>
          </div>
        </div>

        {/* Technologies & Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Technologies */}
          <div className="flex items-center gap-2 flex-wrap">
            <Wrench className="w-3.5 h-3.5 text-muted-foreground" />
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <motion.span
                  key={tech}
                  className={`px-2 py-0.5 text-[10px] sm:text-xs rounded-md border ${
                    techColors[tech] || 'bg-primary/20 text-primary border-primary/30'
                  }`}
                  animate={isHovered ? { 
                    y: [0, -2, 0],
                    transition: { delay: i * 0.05, duration: 0.3 }
                  } : {}}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <motion.a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl text-sm font-medium bg-gradient-to-r ${project.gradient} text-white shadow-lg hover:shadow-xl transition-shadow`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{language === 'pt' ? 'Ver Projeto' : language === 'es' ? 'Ver Proyecto' : 'View Project'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
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

// AcademicCard for academic projects (simpler style)
interface AcademicCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
  language: 'pt' | 'en' | 'es';
  t: (key: string) => string;
}

const AcademicCard = memo(function AcademicCard({ project, index, isInView, language, t }: AcademicCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* Card Background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-card border border-border/50 transition-all duration-500 group-hover:border-transparent" />
      
      {/* Animated gradient border on hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 blur-sm`}
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-card" />

      {/* Card Content */}
      <div className="relative z-10 p-4 sm:p-5 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <motion.div 
            className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
            animate={isHovered ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Code2 className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3 
          className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2"
          animate={isHovered ? { x: 3 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {project.name}
        </motion.h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 flex-grow line-clamp-2">
          {project.description?.[language] || ''}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 text-[10px] sm:text-xs rounded-md border ${
                techColors[tech] || 'bg-primary/20 text-primary border-primary/30'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-md bg-muted text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Button */}
        <motion.a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl text-sm font-medium border border-border bg-secondary/50 text-foreground hover:border-primary/50 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Github className="w-4 h-4" />
          <span>{t('projects.viewGithub')}</span>
        </motion.a>
      </div>

      {/* Bottom glow effect */}
      <motion.div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full bg-gradient-to-r ${project.gradient} blur-md`}
        animate={{ opacity: isHovered ? 0.6 : 0, scaleX: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
});
