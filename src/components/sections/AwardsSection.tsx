import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const awards = [
  {
    icon: Trophy,
    name: { pt: 'Destaque Acadêmico', en: 'Academic Excellence' },
    institution: 'QI Faculdade e Escola Técnica',
    reason: {
      pt: 'Excelência em projetos de desenvolvimento de sistemas',
      en: 'Excellence in systems development projects',
    },
    year: '2024',
  },
  {
    icon: Medal,
    name: { pt: 'Projeto Inovador IoT', en: 'Innovative IoT Project' },
    institution: 'QI Faculdade',
    reason: {
      pt: 'Desenvolvimento de solução criativa para automação',
      en: 'Creative solution development for automation',
    },
    year: '2024',
  },
  {
    icon: Star,
    name: { pt: 'Melhor Projeto Web', en: 'Best Web Project' },
    institution: 'QI Faculdade',
    reason: {
      pt: 'Reconhecimento pelo desenvolvimento web de alta qualidade',
      en: 'Recognition for high-quality web development',
    },
    year: '2023',
  },
];

export function AwardsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="awards" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('awards.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('awards.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 text-center card-glow"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <award.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30 mb-4">
                  {award.year}
                </span>
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {award.name[language]}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-2">
                  {award.institution}
                </p>
                
                <p className="text-sm text-muted-foreground">
                  {award.reason[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
