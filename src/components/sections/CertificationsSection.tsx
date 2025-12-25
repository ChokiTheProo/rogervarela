import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, Building, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const certifications = [
  {
    name: { pt: 'Técnico em Informática para Internet', en: 'Internet Computing Technician' },
    institution: 'QI Faculdade e Escola Técnica',
    year: '2023',
    type: { pt: 'Formação Técnica', en: 'Technical Degree' },
    hours: '1000h',
  },
  {
    name: { pt: 'Marketing Digital', en: 'Digital Marketing' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification' },
    hours: '40h',
  },
  {
    name: { pt: 'Inglês Nível Básico', en: 'Basic English' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification' },
    hours: '40h',
  },
  {
    name: { pt: 'Inglês Nível Médio', en: 'Intermediate English' },
    institution: 'Curso em Vídeo',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification' },
    hours: '40h',
  },
  {
    name: { pt: 'Lógica de Programação', en: 'Programming Logic' },
    institution: 'Flexxo Centro de Capacitação em TI',
    year: '2021',
    type: { pt: 'Certificação', en: 'Certification' },
    hours: '48h',
  },
  {
    name: { pt: 'Informática Básica', en: 'Basic Computing' },
    institution: 'Cooperativa RioGrandense',
    year: '2020',
    type: { pt: 'Certificação', en: 'Certification' },
    hours: '75h',
  },
  {
    name: { pt: 'JavaScript', en: 'JavaScript' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification' },
    hours: '40h',
  },
  {
    name: { pt: 'Git e GitHub', en: 'Git and GitHub' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification' },
    hours: '20h',
  },
  {
    name: { pt: 'Java Completo', en: 'Complete Java' },
    institution: 'Curso em Vídeo',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification' },
    hours: '40h',
  },
  {
    name: { pt: 'Desenvolvimento de Aplicativos Mobile', en: 'Mobile App Development' },
    institution: 'QI Faculdade',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification' },
  },
  {
    name: { pt: 'Sistemas Operacionais de Redes', en: 'Network Operating Systems' },
    institution: 'QI Faculdade',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification' },
  },
  {
    name: { pt: 'Internet das Coisas (IoT)', en: 'Internet of Things (IoT)' },
    institution: 'QI Faculdade',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification' },
  },
];

export function CertificationsSection() {
  const { t, language } = useLanguage();
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
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow"
            >
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                  {cert.type[language]}
                </span>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {cert.type.pt === 'Formação Técnica' ? (
                  <Award className="w-7 h-7 text-primary-foreground" />
                ) : (
                  <BookOpen className="w-7 h-7 text-primary-foreground" />
                )}
              </div>
              
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 pr-20">
                {cert.name[language]}
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="w-4 h-4" />
                  <span>{cert.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.year}</span>
                  {cert.hours && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent">
                      {cert.hours}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
