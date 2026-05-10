import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, GraduationCap, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ElegantCarousel, { type ElegantSlide } from '@/components/ui/elegant-carousel';
import { LazyImage } from '@/components/ui/lazy-image';

import projectFluxen from '@/assets/project-fluxen.jpg';
import projectKlyexa from '@/assets/project-klyexa.jpg';
import projectTratamento from '@/assets/project-tratamento.jpg';
import projectEmagrio from '@/assets/project-emagrio.jpg';
import projectDentiflow from '@/assets/project-dentiflow.jpg';
import projectRovrcont from '@/assets/project-rovrcont.png';

interface RoVRProject {
  name: string;
  subtitle: { pt: string; en: string; es: string };
  description: { pt: string; en: string; es: string };
  accent: string;
  image: string;
  href: string;
}

const rovrProjects: RoVRProject[] = [
  {
    name: 'RoVRCont',
    subtitle: {
      pt: 'SaaS Contábil Completo',
      en: 'Full Accounting SaaS',
      es: 'SaaS Contable Completo',
    },
    description: {
      pt: 'Acabe com planilhas e cálculos manuais. Plataforma única com Fiscal, Tributário, DP, Ponto e NFe — impostos calculados automático e assistente inteligente.',
      en: 'Stop juggling spreadsheets and manual math. Single platform with Tax, Payroll, Time Control and NFe — taxes calculated automatically and intelligent assistant.',
      es: 'Olvídate de hojas de cálculo y cuentas manuales. Plataforma única con Fiscal, Tributario, DP, Punto y NFe — impuestos calculados automático y asistente inteligente.',
    },
    accent: '#10b981',
    image: projectRovrcont,
    href: 'https://rovrcont.com.br',
  },
  {
    name: 'Klyexa',
    subtitle: {
      pt: 'Plataforma de Automação com IA',
      en: 'AI Automation Platform',
      es: 'Plataforma de Automatización con IA',
    },
    description: {
      pt: 'Automatize fluxos repetitivos com onboarding inteligente e integração rápida — produtividade real, sem retrabalho.',
      en: 'Automate repetitive workflows with smart onboarding and quick integration — real productivity, no rework.',
      es: 'Automatiza flujos repetitivos con onboarding inteligente e integración rápida — productividad real, sin retrabajo.',
    },
    accent: '#a855f7',
    image: projectKlyexa,
    href: 'https://klyexa.lovable.app/',
  },
  {
    name: 'Emagrio',
    subtitle: {
      pt: 'Landing de Alta Conversão',
      en: 'High-Conversion Landing',
      es: 'Landing de Alta Conversión',
    },
    description: {
      pt: 'Página estruturada para captura de leads qualificados, com planos personalizados e copy orientada a conversão.',
      en: 'Page engineered to capture qualified leads, with personalized plans and conversion-oriented copy.',
      es: 'Página estructurada para captar leads calificados, con planes personalizados y copy orientado a conversión.',
    },
    accent: '#14b8a6',
    image: projectEmagrio,
    href: 'https://emagrio-venda.lovable.app',
  },
  {
    name: 'Tratamento Gastrite',
    subtitle: {
      pt: 'App de Acompanhamento de Saúde',
      en: 'Health Tracking App',
      es: 'App de Seguimiento de Salud',
    },
    description: {
      pt: 'Aplicativo diário com lembretes de medicação, registro de sintomas e histórico clínico salvo automaticamente.',
      en: 'Daily app with medication reminders, symptom logging and clinical history saved automatically.',
      es: 'App diaria con recordatorios de medicación, registro de síntomas e historial clínico guardado automáticamente.',
    },
    accent: '#f43f5e',
    image: projectTratamento,
    href: 'https://tramentodiario.lovable.app',
  },
  {
    name: 'DentFlow',
    subtitle: {
      pt: 'Sistema de Gestão Odontológica',
      en: 'Dental Practice Management',
      es: 'Sistema de Gestión Odontológica',
    },
    description: {
      pt: 'Gestão completa de clínica: agenda, fluxo de atendimento e dashboard operacional unificados em uma única plataforma.',
      en: 'Full clinic management: scheduling, patient flow and operational dashboard unified in a single platform.',
      es: 'Gestión completa de clínica: agenda, flujo de atención y dashboard operacional unificados en una sola plataforma.',
    },
    accent: '#3b82f6',
    image: projectDentiflow,
    href: 'https://dentflowbr.lovable.app',
  },
  {
    name: 'Fluxen',
    subtitle: {
      pt: 'Sistema de Controle Financeiro',
      en: 'Financial Control System',
      es: 'Sistema de Control Financiero',
    },
    description: {
      pt: 'Controle de fluxo de caixa com gestão de empréstimos, parcelamentos e visão financeira consolidada em tempo real.',
      en: 'Cash-flow control with loan management, installments and consolidated financial overview in real time.',
      es: 'Control de flujo de caja con gestión de préstamos, cuotas y visión financiera consolidada en tiempo real.',
    },
    accent: '#84cc16',
    image: projectFluxen,
    href: 'https://fluxenvenda.lovable.app',
  },
];

const academicProjects = [
  {
    name: 'Sistema Operacional de Redes',
    description: {
      pt: 'Configuração e administração de sistemas de rede.',
      en: 'Network operating system configuration and administration.',
      es: 'Configuración y administración de sistemas de red.',
    },
    technologies: ['Windows Server', 'Linux', 'DNS', 'DHCP'],
    github: 'https://github.com/ChokiTheProo/SISTEMA-OPERACIONAL-DE-REDES',
  },
  {
    name: 'Internet das Coisas (IoT)',
    description: {
      pt: 'Soluções IoT com sensores e microcontroladores.',
      en: 'IoT solutions with sensors and microcontrollers.',
      es: 'Soluciones IoT con sensores y microcontroladores.',
    },
    technologies: ['Arduino', 'ESP32', 'C++', 'IoT'],
    github: 'https://github.com/ChokiTheProo/INTERNET-DAS-COISAS',
  },
  {
    name: 'Java Spring Boot',
    description: {
      pt: 'Aplicação backend robusta com Spring Boot.',
      en: 'Robust backend application with Spring Boot.',
      es: 'Aplicación backend robusta con Spring Boot.',
    },
    technologies: ['Java', 'Spring Boot', 'SQL', 'REST'],
    github: 'https://github.com/ChokiTheProo',
  },
  {
    name: 'Desenvolvimento Mobile',
    description: {
      pt: 'Apps mobile com Flutter, Dart e Kotlin.',
      en: 'Mobile apps with Flutter, Dart and Kotlin.',
      es: 'Apps móviles con Flutter, Dart y Kotlin.',
    },
    technologies: ['Flutter', 'Dart', 'Kotlin', 'Firebase'],
    github: 'https://github.com/ChokiTheProo/DESENVOLVIMENTO-DE-APLICATIVOS-I-',
  },
];

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const slides: ElegantSlide[] = rovrProjects.map((p) => ({
    title: p.name,
    subtitle: p.subtitle[language],
    description: p.description[language],
    accent: p.accent,
    imageUrl: p.image,
    href: p.href,
    cta: language === 'pt' ? 'Ver Projeto' : language === 'es' ? 'Ver Proyecto' : 'View Project',
  }));

  return (
    <section id="projects" className="py-16 sm:py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-30"
          style={{
            background:
              'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.05), transparent)',
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

        {/* RoVR Projects Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 sm:mb-20"
        >
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            {language === 'pt' ? 'Projetos RoVR' : language === 'es' ? 'Proyectos RoVR' : 'RoVR Projects'}
            <span className="ml-1 sm:ml-2 px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-accent/20 text-accent animate-pulse">
              Live
            </span>
          </h3>

          <ElegantCarousel slides={slides} />
        </motion.div>

        {/* Academic Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-emerald-400 flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/20">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            {language === 'pt' ? 'Projetos Acadêmicos' : language === 'es' ? 'Proyectos Académicos' : 'Academic Projects'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {academicProjects.map((project) => (
              <a
                key={project.name}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{project.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-secondary/60 text-muted-foreground border border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
