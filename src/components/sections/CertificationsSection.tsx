import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Calendar, Building, BookOpen, GraduationCap, Code, Globe, Languages, Megaphone, Network, Cpu, Smartphone, GitBranch, Coffee, Monitor, FileCode } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-mobile';

interface Certification {
  name: { pt: string; en: string; es: string };
  institution: string;
  year: string;
  type: { pt: string; en: string; es: string };
  category: 'technical' | 'programming' | 'languages' | 'other';
  hours?: string;
  downloadUrl?: string;
  previewImage?: string;
}

const certifications: Certification[] = [
  {
    name: { pt: 'Técnico em Informática para Internet', en: 'Internet Computing Technician', es: 'Técnico en Informática para Internet' },
    institution: 'QI Faculdade e Escola Técnica',
    year: '2023',
    type: { pt: 'Formação Técnica', en: 'Technical Degree', es: 'Formación Técnica' },
    category: 'technical',
    hours: '1000h',
  },
  {
    name: { pt: 'JavaScript [40 Horas]', en: 'JavaScript [40 Hours]', es: 'JavaScript [40 Horas]' },
    institution: 'Curso em Vídeo',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'programming',
    hours: '40h',
    downloadUrl: '/downloads/certificado-javascript-40h.jpg',
    previewImage: '/downloads/certificado-javascript-40h-thumb.webp',
  },
  {
    name: { pt: 'Lógica de Programação', en: 'Programming Logic', es: 'Lógica de Programación' },
    institution: 'Flexxo Centro de Capacitação em TI',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'programming',
    hours: '48h',
    downloadUrl: '/downloads/certificado-logica-programacao.jpg',
    previewImage: '/downloads/certificado-logica-programacao-thumb.webp',
  },
  {
    name: { pt: 'Marketing Digital', en: 'Digital Marketing', es: 'Marketing Digital' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'other',
    hours: '40h',
  },
  {
    name: { pt: 'Inglês Nível Básico', en: 'Basic English', es: 'Inglés Nivel Básico' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'languages',
    hours: '40h',
  },
  {
    name: { pt: 'Inglês Nível Médio', en: 'Intermediate English', es: 'Inglés Nivel Intermedio' },
    institution: 'Curso em Vídeo',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'languages',
    hours: '40h',
  },
  {
    name: { pt: 'Informática Básica', en: 'Basic Computing', es: 'Informática Básica' },
    institution: 'Cooperativa RioGrandense',
    year: '2020',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'technical',
    hours: '75h',
  },
  {
    name: { pt: 'Git e GitHub', en: 'Git and GitHub', es: 'Git y GitHub' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'programming',
    hours: '20h',
  },
  {
    name: { pt: 'Java Completo', en: 'Complete Java', es: 'Java Completo' },
    institution: 'Curso em Vídeo',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'programming',
    hours: '40h',
  },
  {
    name: { pt: 'Desenvolvimento de Aplicativos Mobile', en: 'Mobile App Development', es: 'Desarrollo de Aplicaciones Móviles' },
    institution: 'QI Faculdade',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'programming',
  },
  {
    name: { pt: 'Sistemas Operacionais de Redes', en: 'Network Operating Systems', es: 'Sistemas Operativos de Redes' },
    institution: 'QI Faculdade',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'technical',
  },
  {
    name: { pt: 'Internet das Coisas (IoT)', en: 'Internet of Things (IoT)', es: 'Internet de las Cosas (IoT)' },
    institution: 'QI Faculdade',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'technical',
  },
];

const categories = [
  { id: 'all', label: { pt: 'Todos', en: 'All', es: 'Todos' }, icon: Award },
  { id: 'programming', label: { pt: 'Programação', en: 'Programming', es: 'Programación' }, icon: Code },
  { id: 'technical', label: { pt: 'Técnico', en: 'Technical', es: 'Técnico' }, icon: GraduationCap },
  { id: 'languages', label: { pt: 'Idiomas', en: 'Languages', es: 'Idiomas' }, icon: Globe },
  { id: 'other', label: { pt: 'Outros', en: 'Other', es: 'Otros' }, icon: BookOpen },
];

export function CertificationsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('all');
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Desativar parallax no mobile
  const cardsY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [50, -50]);

  const filteredCertifications = activeTab === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeTab);


  return (
    <section id="certifications" className="py-16 sm:py-24 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('certs.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto px-2">{t('certs.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 sm:mb-10 overflow-x-auto pb-2"
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 bg-transparent h-auto p-0 min-w-max sm:min-w-0">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border/50 bg-card/50 hover:border-primary/50 transition-all text-xs sm:text-sm whitespace-nowrap"
                  >
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    {category.label[language]}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div style={{ y: cardsY }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCertifications.map((cert, index) => {
            const theme = getCertTheme(cert);
            const Icon = theme.icon;
            return (
            <motion.div
              key={`${cert.name.pt}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              layout
              whileHover={{ y: -4 }}
              className="group relative rounded-xl sm:rounded-2xl p-[1.5px] transition-all duration-300"
              style={{ backgroundImage: theme.borderGradient }}
            >
              <div className="absolute -inset-px rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 -z-10" style={{ backgroundImage: theme.borderGradient }} />
              <div className="relative h-full rounded-[10px] sm:rounded-[14px] bg-card/90 backdrop-blur-sm p-4 sm:p-6">
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full" style={{ backgroundColor: `hsl(var(--primary) / 0.1)`, color: `hsl(var(--primary))`, border: `1px solid hsl(var(--primary) / 0.2)` }}>
                  {cert.type[language]}
                </span>
              </div>
              
              {cert.previewImage && (
                <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden border border-border/30">
                  <img 
                    src={cert.previewImage} 
                    alt={cert.name[language]} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-24 sm:h-32 object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              {!cert.previewImage && (
                <div
                  className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg"
                  style={{ backgroundImage: theme.iconGradient, boxShadow: `0 8px 24px -8px ${theme.shadowColor}` }}
                >
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" strokeWidth={2.2} />
                  )}
                </div>
              )}
              
              <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3 pr-16 sm:pr-20">
                {cert.name[language]}
              </h3>
              
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">{cert.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{cert.year}</span>
                  {cert.hours && (
                    <span className="ml-2 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-accent/10 text-accent">
                      {cert.hours}
                    </span>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {filteredCertifications.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            {language === 'pt' ? 'Nenhuma certificação encontrada nesta categoria.' : language === 'es' ? 'No se encontraron certificaciones en esta categoría.' : 'No certifications found in this category.'}
          </motion.p>
        )}
      </div>
    </section>
  );
}
