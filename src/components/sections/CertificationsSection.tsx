import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const certifications = [
  {
    name: 'Técnico em Informática',
    institution: 'QI Faculdade e Escola Técnica',
    year: '2023',
    type: 'Formação Técnica',
  },
  {
    name: 'Análise e Desenvolvimento de Sistemas',
    institution: 'QI Faculdade e Escola Técnica',
    year: '2024',
    type: 'Graduação',
  },
  {
    name: 'Desenvolvimento Web',
    institution: 'Cursos Online',
    year: '2023',
    type: 'Certificação',
  },
  {
    name: 'Desenvolvimento de Aplicativos Mobile',
    institution: 'QI Faculdade',
    year: '2024',
    type: 'Certificação',
  },
  {
    name: 'Sistemas Operacionais de Redes',
    institution: 'QI Faculdade',
    year: '2023',
    type: 'Certificação',
  },
  {
    name: 'Internet das Coisas (IoT)',
    institution: 'QI Faculdade',
    year: '2024',
    type: 'Certificação',
  },
];

export function CertificationsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('certs.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('certs.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow"
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                  {cert.type}
                </span>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 pr-16">
                {cert.name}
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="w-4 h-4" />
                  <span>{cert.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
