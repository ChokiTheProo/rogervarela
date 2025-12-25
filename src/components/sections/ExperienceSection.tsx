import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const experiences = [
  {
    role: { pt: 'CEO & Co-fundador', en: 'CEO & Co-founder' },
    company: 'REVYRA',
    companyUrl: 'https://revyera.lovable.app',
    location: 'Remoto',
    period: '2024 - 2025',
    current: true,
    responsibilities: {
      pt: [
        'Criação e gestão de MicroSaaS e aplicações web inovadoras',
        'Desenvolvimento de soluções personalizadas para clientes',
        'Liderança técnica e estratégia de produto',
        'Arquitetura de sistemas escaláveis com React, TypeScript e Supabase',
      ],
      en: [
        'Creation and management of MicroSaaS and innovative web applications',
        'Development of customized solutions for clients',
        'Technical leadership and product strategy',
        'Scalable systems architecture with React, TypeScript, and Supabase',
      ],
    },
  },
  {
    role: { pt: 'Suporte N1', en: 'N1 Support Analyst' },
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
    },
  },
  {
    role: { pt: 'Técnico em Informática - HelpDesk', en: 'IT Technician - HelpDesk' },
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
    },
  },
  {
    role: { pt: 'Auxiliar de Produção', en: 'Production Assistant' },
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
