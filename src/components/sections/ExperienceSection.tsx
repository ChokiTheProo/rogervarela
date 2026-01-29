import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const experiences = [
  {
    role: { pt: 'Suporte N1', en: 'N1 Support Analyst', es: 'Analista de Soporte N1' },
    company: 'Windel Sistemas',
    location: 'Caxias do Sul, RS',
    period: 'Mar 2025 - Presente',
    current: true,
    responsibilities: {
      pt: [
        'Suporte técnico para notas fiscais eletrônicas',
        'Desenvolvimento e manutenção de scripts de automação',
        'Gestão de títulos bancários e integrações financeiras',
        'Instalação e configuração de sistemas ERP',
      ],
      en: [
        'Technical support for electronic invoices',
        'Development and maintenance of automation scripts',
        'Management of bank titles and financial integrations',
        'ERP system installation and configuration',
      ],
      es: [
        'Soporte técnico para facturas electrónicas',
        'Desarrollo y mantenimiento de scripts de automatización',
        'Gestión de títulos bancarios e integraciones financieras',
        'Instalación y configuración de sistemas ERP',
      ],
    },
  },
  {
    role: { pt: 'Técnico em Informática - HelpDesk', en: 'IT Technician - HelpDesk', es: 'Técnico en Informática - HelpDesk' },
    company: 'Cruzeiro Automação',
    location: 'Caxias do Sul, RS',
    period: 'Out 2023 - Nov 2024',
    current: false,
    responsibilities: {
      pt: [
        'Manutenção preventiva e corretiva de equipamentos',
        'Instalação e configuração de sistemas ERP',
        'Suporte técnico para sistema de caixa',
        'Treinamento de usuários e documentação técnica',
      ],
      en: [
        'Preventive and corrective equipment maintenance',
        'ERP system installation and configuration',
        'Technical support for POS system',
        'User training and technical documentation',
      ],
      es: [
        'Mantenimiento preventivo y correctivo de equipos',
        'Instalación y configuración de sistemas ERP',
        'Soporte técnico para sistema de caja',
        'Capacitación de usuarios y documentación técnica',
      ],
    },
  },
  {
    role: { pt: 'Auxiliar de Produção', en: 'Production Assistant', es: 'Auxiliar de Producción' },
    company: 'Moon',
    location: 'Caxias do Sul, RS',
    period: 'Jul 2021 - Mar 2023',
    current: false,
    responsibilities: {
      pt: [
        'Produção de embutidos de teto',
        'Controle de qualidade de produtos',
        'Trabalho em equipe e cumprimento de metas',
        'Organização e manutenção do ambiente de trabalho',
      ],
      en: [
        'Ceiling embedded production',
        'Product quality control',
        'Teamwork and meeting targets',
        'Organization and maintenance of the work environment',
      ],
      es: [
        'Producción de embutidos de techo',
        'Control de calidad de productos',
        'Trabajo en equipo y cumplimiento de metas',
        'Organización y mantenimiento del ambiente de trabajo',
      ],
    },
  },
];

export function ExperienceSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <section id="experience" className="py-12 sm:py-24 relative overflow-hidden">
      {/* Animated Background - simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {!isMobile && (
          <>
            <motion.div
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-1/3 w-96 h-96 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 100, 0],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-0 bottom-1/3 w-80 h-80 bg-gradient-to-l from-accent/20 to-transparent rounded-full blur-3xl"
            />
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4"
            whileHover={!isMobile ? { scale: 1.02 } : undefined}
          >
            <span className="text-gradient">{t('exp.title')}</span>
          </motion.h2>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">{t('exp.subtitle')}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-4 sm:left-8 top-0 bottom-0 w-px"
              style={{
                background: 'linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--primary) / 0.5), transparent)'
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 80
                }}
                className="relative pl-12 sm:pl-20 pb-8 sm:pb-12 last:pb-0"
                onHoverStart={() => !isMobile && setHoveredIndex(index)}
                onHoverEnd={() => !isMobile && setHoveredIndex(null)}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className={`absolute left-1.5 sm:left-5 top-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 border-background z-10 ${
                    exp.current ? 'bg-gradient-primary' : 'bg-primary/50'
                  }`}
                  animate={exp.current && !isMobile ? {
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0 0 hsl(var(--primary) / 0.4)',
                      '0 0 0 10px hsl(var(--primary) / 0)',
                      '0 0 0 0 hsl(var(--primary) / 0.4)',
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Card */}
                <motion.div 
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-card border border-border/50 transition-all duration-300"
                  whileHover={!isMobile ? { 
                    scale: 1.02,
                    borderColor: 'hsl(var(--primary) / 0.5)',
                    boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.25)'
                  } : undefined}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <motion.h3 
                        className="font-heading font-semibold text-base sm:text-xl text-foreground"
                        animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                      >
                        {exp.role[language]}
                      </motion.h3>
                      <p className="text-primary font-medium flex items-center gap-2 text-sm sm:text-base">
                        {exp.company}
                        {'companyUrl' in exp && exp.companyUrl && (
                          <a 
                            href={exp.companyUrl as string} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </a>
                        )}
                      </p>
                    </div>
                    {exp.current && (
                      <motion.span 
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30"
                        animate={!isMobile ? { 
                          boxShadow: [
                            '0 0 0 0 hsl(var(--accent) / 0.4)',
                            '0 0 10px 2px hsl(var(--accent) / 0.2)',
                            '0 0 0 0 hsl(var(--accent) / 0.4)',
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {language === 'pt' ? 'Atual' : language === 'es' ? 'Actual' : 'Current'}
                      </motion.span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 sm:space-y-2">
                    {exp.responsibilities[language].map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.05 }}
                        whileHover={!isMobile ? { x: 5, color: 'hsl(var(--foreground))' } : undefined}
                      >
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
