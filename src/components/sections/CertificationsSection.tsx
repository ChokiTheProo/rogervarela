import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Calendar, Building, BookOpen, Download, GraduationCap, Code, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

interface Certification {
  name: { pt: string; en: string };
  institution: string;
  year: string;
  type: { pt: string; en: string };
  category: 'technical' | 'programming' | 'languages' | 'other';
  hours?: string;
  downloadUrl?: string;
  previewImage?: string;
}

const certifications: Certification[] = [
  {
    name: { pt: 'Técnico em Informática para Internet', en: 'Internet Computing Technician' },
    institution: 'QI Faculdade e Escola Técnica',
    year: '2023',
    type: { pt: 'Formação Técnica', en: 'Technical Degree' },
    category: 'technical',
    hours: '1000h',
  },
  {
    name: { pt: 'JavaScript [40 Horas]', en: 'JavaScript [40 Hours]' },
    institution: 'Curso em Vídeo',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'programming',
    hours: '40h',
    downloadUrl: '/downloads/certificado-javascript-40h.jpg',
    previewImage: '/downloads/certificado-javascript-40h.jpg',
  },
  {
    name: { pt: 'Lógica de Programação', en: 'Programming Logic' },
    institution: 'Flexxo Centro de Capacitação em TI',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'programming',
    hours: '48h',
    downloadUrl: '/downloads/certificado-logica-programacao.jpg',
    previewImage: '/downloads/certificado-logica-programacao.jpg',
  },
  {
    name: { pt: 'Marketing Digital', en: 'Digital Marketing' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'other',
    hours: '40h',
  },
  {
    name: { pt: 'Inglês Nível Básico', en: 'Basic English' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'languages',
    hours: '40h',
  },
  {
    name: { pt: 'Inglês Nível Médio', en: 'Intermediate English' },
    institution: 'Curso em Vídeo',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'languages',
    hours: '40h',
  },
  {
    name: { pt: 'Informática Básica', en: 'Basic Computing' },
    institution: 'Cooperativa RioGrandense',
    year: '2020',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'technical',
    hours: '75h',
  },
  {
    name: { pt: 'Git e GitHub', en: 'Git and GitHub' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'programming',
    hours: '20h',
  },
  {
    name: { pt: 'Java Completo', en: 'Complete Java' },
    institution: 'Curso em Vídeo',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'programming',
    hours: '40h',
  },
  {
    name: { pt: 'Desenvolvimento de Aplicativos Mobile', en: 'Mobile App Development' },
    institution: 'QI Faculdade',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'programming',
  },
  {
    name: { pt: 'Sistemas Operacionais de Redes', en: 'Network Operating Systems' },
    institution: 'QI Faculdade',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'technical',
  },
  {
    name: { pt: 'Internet das Coisas (IoT)', en: 'Internet of Things (IoT)' },
    institution: 'QI Faculdade',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification' },
    category: 'technical',
  },
];

const categories = [
  { id: 'all', label: { pt: 'Todos', en: 'All' }, icon: Award },
  { id: 'programming', label: { pt: 'Programação', en: 'Programming' }, icon: Code },
  { id: 'technical', label: { pt: 'Técnico', en: 'Technical' }, icon: GraduationCap },
  { id: 'languages', label: { pt: 'Idiomas', en: 'Languages' }, icon: Globe },
  { id: 'other', label: { pt: 'Outros', en: 'Other' }, icon: BookOpen },
];

export function CertificationsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('all');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const filteredCertifications = activeTab === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeTab);

  const handleDownload = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="py-24 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('certs.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('certs.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border/50 bg-card/50 hover:border-primary/50 transition-all"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.label[language]}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div style={{ y: cardsY }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={`${cert.name.pt}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              layout
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow"
            >
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                  {cert.type[language]}
                </span>
              </div>
              
              {cert.previewImage && (
                <div className="mb-4 rounded-lg overflow-hidden border border-border/30">
                  <img 
                    src={cert.previewImage} 
                    alt={cert.name[language]} 
                    className="w-full h-32 object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              {!cert.previewImage && (
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {cert.type.pt === 'Formação Técnica' ? (
                    <Award className="w-7 h-7 text-primary-foreground" />
                  ) : (
                    <BookOpen className="w-7 h-7 text-primary-foreground" />
                  )}
                </div>
              )}
              
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

              {cert.downloadUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full gap-2 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleDownload(cert.downloadUrl!, `${cert.name.pt}.jpg`)}
                >
                  <Download className="w-4 h-4" />
                  {language === 'pt' ? 'Baixar Certificado' : 'Download Certificate'}
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {filteredCertifications.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            {language === 'pt' ? 'Nenhuma certificação encontrada nesta categoria.' : 'No certifications found in this category.'}
          </motion.p>
        )}
      </div>
    </section>
  );
}
