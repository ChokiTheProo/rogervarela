import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const experiences = [
  {
    role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    company: 'REVYRA',
    location: 'Remoto',
    period: '2024 - Presente',
    current: true,
    responsibilities: {
      pt: [
        'Desenvolvimento de aplicações SaaS e MicroSaaS',
        'Criação de interfaces modernas e responsivas',
        'Implementação de funcionalidades backend',
        'Gestão de projetos e entregas',
      ],
      en: [
        'Development of SaaS and MicroSaaS applications',
        'Creation of modern and responsive interfaces',
        'Backend functionality implementation',
        'Project management and deliveries',
      ],
    },
  },
  {
    role: { pt: 'Estudante de Tecnologia', en: 'Technology Student' },
    company: 'QI Faculdade e Escola Técnica',
    location: 'Porto Alegre, RS',
    period: '2021 - 2024',
    current: false,
    responsibilities: {
      pt: [
        'Desenvolvimento de projetos acadêmicos',
        'Aprendizado de múltiplas linguagens de programação',
        'Participação em projetos de IoT e redes',
        'Desenvolvimento de aplicativos mobile',
      ],
      en: [
        'Development of academic projects',
        'Learning multiple programming languages',
        'Participation in IoT and networking projects',
        'Mobile application development',
      ],
    },
  },
];

export function ExperienceSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute left-0 top-1/3 w-1/3 h-96 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('exp.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('exp.subtitle')}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-5 top-2 w-6 h-6 rounded-full border-4 border-background ${
                  exp.current ? 'bg-gradient-primary animate-pulse-glow' : 'bg-primary/50'
                }`} />

                <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-foreground">
                        {exp.role[language]}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
                        {language === 'pt' ? 'Atual' : 'Current'}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities[language].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
