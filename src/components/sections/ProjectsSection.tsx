import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const projects = [
  {
    name: 'Sistema Operacional de Redes',
    description: {
      pt: 'Projeto completo de configuração e administração de sistemas operacionais de rede, incluindo Windows Server e Linux.',
      en: 'Complete project for configuring and managing network operating systems, including Windows Server and Linux.',
    },
    technologies: ['Windows Server', 'Linux', 'Networking', 'DNS', 'DHCP'],
    github: 'https://github.com/ChokiTheProo/SISTEMA-OPERACIONAL-DE-REDES',
    image: 'networking',
  },
  {
    name: 'Internet das Coisas (IoT)',
    description: {
      pt: 'Desenvolvimento de soluções IoT utilizando sensores e microcontroladores para automação e coleta de dados.',
      en: 'Development of IoT solutions using sensors and microcontrollers for automation and data collection.',
    },
    technologies: ['Arduino', 'Sensors', 'IoT', 'C++', 'ESP32'],
    github: 'https://github.com/ChokiTheProo/INTERNET-DAS-COISAS',
    image: 'iot',
  },
  {
    name: 'Análise e Qualidade de Software',
    description: {
      pt: 'Projeto focado em metodologias de teste de software, garantia de qualidade e documentação técnica.',
      en: 'Project focused on software testing methodologies, quality assurance, and technical documentation.',
    },
    technologies: ['Testing', 'QA', 'Documentation', 'Agile'],
    github: 'https://github.com/ChokiTheProo/ANALISE-E-QUALIDADE-DE-SOFTWARE',
    image: 'quality',
  },
  {
    name: 'Desenvolvimento de Aplicativos I',
    description: {
      pt: 'Criação de aplicativos mobile utilizando tecnologias modernas de desenvolvimento.',
      en: 'Creation of mobile applications using modern development technologies.',
    },
    technologies: ['Dart', 'Flutter', 'Mobile', 'UI/UX'],
    github: 'https://github.com/ChokiTheProo/DESENVOLVIMENTO-DE-APLICATIVOS-I-',
    image: 'mobile',
  },
  {
    name: 'Desenvolvimento de Aplicativos II',
    description: {
      pt: 'Continuação do desenvolvimento mobile com funcionalidades avançadas e integração com APIs.',
      en: 'Continuation of mobile development with advanced features and API integration.',
    },
    technologies: ['Kotlin', 'Android', 'API', 'Firebase'],
    github: 'https://github.com/ChokiTheProo/DESENVOLVIMENTO-DE-APLICATIVOS-II',
    image: 'android',
  },
  {
    name: 'Desenvolvimento de Sistemas Web III',
    description: {
      pt: 'Projeto avançado de desenvolvimento web com tecnologias modernas e boas práticas.',
      en: 'Advanced web development project with modern technologies and best practices.',
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/ChokiTheProo/DESENVOLVIMENTO-DE-SISTEMAS-WEB-III',
    image: 'web',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow flex flex-col"
            >
              {/* Project Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-7 h-7 text-primary-foreground" />
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
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    {t('projects.viewGithub')}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
