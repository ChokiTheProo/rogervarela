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
  description: { pt: string; en: string; es: string };
}

const certifications: Certification[] = [
  {
    name: { pt: 'Técnico em Informática para Internet', en: 'Internet Computing Technician', es: 'Técnico en Informática para Internet' },
    institution: 'QI Faculdade e Escola Técnica',
    year: '2023',
    type: { pt: 'Formação Técnica', en: 'Technical Degree', es: 'Formación Técnica' },
    category: 'technical',
    hours: '1000h',
    description: {
      pt: 'Formação técnica completa em desenvolvimento web, redes, banco de dados e infraestrutura de TI.',
      en: 'Complete technical training in web development, networks, databases, and IT infrastructure.',
      es: 'Formación técnica completa en desarrollo web, redes, bases de datos e infraestructura de TI.',
    },
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
    description: {
      pt: 'Fundamentos e recursos modernos do JavaScript: DOM, ES6+, funções, eventos e manipulação dinâmica.',
      en: 'JavaScript fundamentals and modern features: DOM, ES6+, functions, events, and dynamic manipulation.',
      es: 'Fundamentos y recursos modernos de JavaScript: DOM, ES6+, funciones, eventos y manipulación dinámica.',
    },
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
    description: {
      pt: 'Estruturas de decisão, repetição, vetores e algoritmos — base sólida para qualquer linguagem.',
      en: 'Decision structures, loops, arrays, and algorithms — solid foundation for any language.',
      es: 'Estructuras de decisión, bucles, vectores y algoritmos — base sólida para cualquier lenguaje.',
    },
  },
  {
    name: { pt: 'Marketing Digital', en: 'Digital Marketing', es: 'Marketing Digital' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'other',
    hours: '40h',
    description: {
      pt: 'SEO, tráfego pago, funis e estratégias para gerar leads e conversão online.',
      en: 'SEO, paid traffic, funnels, and strategies to generate leads and online conversion.',
      es: 'SEO, tráfico pagado, embudos y estrategias para generar leads y conversión online.',
    },
  },
  {
    name: { pt: 'Inglês Nível Básico', en: 'Basic English', es: 'Inglés Nivel Básico' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'languages',
    hours: '40h',
    description: {
      pt: 'Vocabulário, gramática e conversação para comunicação técnica e do dia a dia.',
      en: 'Vocabulary, grammar, and conversation for technical and everyday communication.',
      es: 'Vocabulario, gramática y conversación para comunicación técnica y cotidiana.',
    },
  },
  {
    name: { pt: 'Inglês Nível Médio', en: 'Intermediate English', es: 'Inglés Nivel Intermedio' },
    institution: 'Curso em Vídeo',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'languages',
    hours: '40h',
    description: {
      pt: 'Leitura de documentação técnica, escrita profissional e comunicação fluente em contexto de TI.',
      en: 'Reading technical documentation, professional writing, and fluent communication in IT context.',
      es: 'Lectura de documentación técnica, escritura profesional y comunicación fluida en contexto TI.',
    },
  },
  {
    name: { pt: 'Informática Básica', en: 'Basic Computing', es: 'Informática Básica' },
    institution: 'Cooperativa RioGrandense',
    year: '2020',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'technical',
    hours: '75h',
    description: {
      pt: 'Sistemas operacionais, pacote Office, internet e fundamentos de hardware e software.',
      en: 'Operating systems, Office suite, internet, and hardware/software fundamentals.',
      es: 'Sistemas operativos, paquete Office, internet y fundamentos de hardware y software.',
    },
  },
  {
    name: { pt: 'Git e GitHub', en: 'Git and GitHub', es: 'Git y GitHub' },
    institution: 'Curso em Vídeo',
    year: '2022',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'programming',
    hours: '20h',
    description: {
      pt: 'Versionamento de código, branches, pull requests e colaboração em projetos reais.',
      en: 'Code versioning, branches, pull requests, and collaboration on real projects.',
      es: 'Versionado de código, ramas, pull requests y colaboración en proyectos reales.',
    },
  },
  {
    name: { pt: 'Java Completo', en: 'Complete Java', es: 'Java Completo' },
    institution: 'Curso em Vídeo',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'programming',
    hours: '40h',
    description: {
      pt: 'Programação orientada a objetos, classes, herança, polimorfismo e aplicações Java.',
      en: 'Object-oriented programming, classes, inheritance, polymorphism, and Java applications.',
      es: 'Programación orientada a objetos, clases, herencia, polimorfismo y aplicaciones Java.',
    },
  },
  {
    name: { pt: 'Desenvolvimento de Aplicativos Mobile', en: 'Mobile App Development', es: 'Desarrollo de Aplicaciones Móviles' },
    institution: 'QI Faculdade',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'programming',
    description: {
      pt: 'Criação de apps Android e iOS com foco em UX, navegação e integração com APIs.',
      en: 'Building Android and iOS apps focused on UX, navigation, and API integration.',
      es: 'Creación de apps Android e iOS con foco en UX, navegación e integración con APIs.',
    },
  },
  {
    name: { pt: 'Sistemas Operacionais de Redes', en: 'Network Operating Systems', es: 'Sistemas Operativos de Redes' },
    institution: 'QI Faculdade',
    year: '2023',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'technical',
    description: {
      pt: 'Administração de servidores, protocolos de rede e configuração de ambientes Linux/Windows.',
      en: 'Server administration, network protocols, and Linux/Windows environment configuration.',
      es: 'Administración de servidores, protocolos de red y configuración de entornos Linux/Windows.',
    },
  },
  {
    name: { pt: 'Internet das Coisas (IoT)', en: 'Internet of Things (IoT)', es: 'Internet de las Cosas (IoT)' },
    institution: 'QI Faculdade',
    year: '2024',
    type: { pt: 'Certificação', en: 'Certification', es: 'Certificación' },
    category: 'technical',
    description: {
      pt: 'Sensores, microcontroladores e dispositivos conectados aplicados a soluções inteligentes.',
      en: 'Sensors, microcontrollers, and connected devices applied to smart solutions.',
      es: 'Sensores, microcontroladores y dispositivos conectados aplicados a soluciones inteligentes.',
    },
  },
];

const categories = [
  { id: 'all', label: { pt: 'Todos', en: 'All', es: 'Todos' }, icon: Award },
  { id: 'programming', label: { pt: 'Programação', en: 'Programming', es: 'Programación' }, icon: Code },
  { id: 'technical', label: { pt: 'Técnico', en: 'Technical', es: 'Técnico' }, icon: GraduationCap },
  { id: 'languages', label: { pt: 'Idiomas', en: 'Languages', es: 'Idiomas' }, icon: Globe },
  { id: 'other', label: { pt: 'Outros', en: 'Other', es: 'Otros' }, icon: BookOpen },
];

function getCertTheme(cert: Certification) {
  const name = cert.name.pt.toLowerCase();
  const inst = cert.institution.toLowerCase();

  // Specific matches first
  if (name.includes('javascript')) {
    return { icon: FileCode, iconGradient: 'linear-gradient(135deg, #f7df1e 0%, #f0a500 100%)', borderGradient: 'linear-gradient(135deg, #f7df1e55, #f0a50033, transparent 70%)', shadowColor: '#f7df1e66' };
  }
  if (name.includes('java') && !name.includes('javascript')) {
    return { icon: Coffee, iconGradient: 'linear-gradient(135deg, #f89820 0%, #e76f00 100%)', borderGradient: 'linear-gradient(135deg, #f8982055, #e76f0033, transparent 70%)', shadowColor: '#f8982066' };
  }
  if (name.includes('git')) {
    return { icon: GitBranch, iconGradient: 'linear-gradient(135deg, #f05033 0%, #b34329 100%)', borderGradient: 'linear-gradient(135deg, #f0503355, #b3432933, transparent 70%)', shadowColor: '#f0503366' };
  }
  if (name.includes('mobile') || name.includes('aplicativ')) {
    return { icon: Smartphone, iconGradient: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)', borderGradient: 'linear-gradient(135deg, #06b6d455, #2563eb33, transparent 70%)', shadowColor: '#06b6d466' };
  }
  if (name.includes('iot') || name.includes('coisas')) {
    return { icon: Cpu, iconGradient: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)', borderGradient: 'linear-gradient(135deg, #14b8a655, #0ea5e933, transparent 70%)', shadowColor: '#14b8a666' };
  }
  if (name.includes('rede') || name.includes('sistemas operacionais') || name.includes('network')) {
    return { icon: Network, iconGradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', borderGradient: 'linear-gradient(135deg, #6366f155, #4f46e533, transparent 70%)', shadowColor: '#6366f166' };
  }
  if (name.includes('lógica') || name.includes('logic') || name.includes('lógica de programação')) {
    return { icon: Code, iconGradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', borderGradient: 'linear-gradient(135deg, #8b5cf655, #6366f133, transparent 70%)', shadowColor: '#8b5cf666' };
  }
  if (name.includes('marketing')) {
    return { icon: Megaphone, iconGradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)', borderGradient: 'linear-gradient(135deg, #ec489955, #f43f5e33, transparent 70%)', shadowColor: '#ec489966' };
  }
  if (cert.category === 'languages') {
    return { icon: Languages, iconGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', borderGradient: 'linear-gradient(135deg, #10b98155, #05966933, transparent 70%)', shadowColor: '#10b98166' };
  }
  if (name.includes('informática básica') || name.includes('básica')) {
    return { icon: Monitor, iconGradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)', borderGradient: 'linear-gradient(135deg, #64748b55, #47556933, transparent 70%)', shadowColor: '#64748b66' };
  }
  if (cert.type.pt === 'Formação Técnica') {
    return { icon: GraduationCap, iconGradient: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', borderGradient: 'linear-gradient(135deg, #a855f755, #6366f133, transparent 70%)', shadowColor: '#a855f766' };
  }
  if (cert.category === 'technical') {
    return { icon: Cpu, iconGradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)', borderGradient: 'linear-gradient(135deg, #0ea5e955, #6366f133, transparent 70%)', shadowColor: '#0ea5e966' };
  }
  if (cert.category === 'programming') {
    return { icon: Code, iconGradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', borderGradient: 'linear-gradient(135deg, #8b5cf655, #ec489933, transparent 70%)', shadowColor: '#8b5cf666' };
  }
  return { icon: BookOpen, iconGradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', borderGradient: 'linear-gradient(135deg, #6366f155, #8b5cf633, transparent 70%)', shadowColor: '#6366f166' };
}

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
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-[2px] transition-all duration-500"
              style={{
                backgroundImage: `conic-gradient(from var(--angle, 0deg) at 50% 50%, ${theme.shadowColor}, transparent 35%, ${theme.shadowColor} 60%, transparent 85%, ${theme.shadowColor})`,
                animation: 'spin-border 8s linear infinite',
              }}
            >
              {/* Outer glow on hover */}
              <div
                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-700 -z-10"
                style={{ backgroundImage: theme.borderGradient }}
              />
              {/* Static gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: theme.borderGradient }}
              />
              <div className="relative h-full rounded-[14px] bg-card/95 backdrop-blur-md p-4 sm:p-6 overflow-hidden">
              {/* Subtle shine on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 30% 0%, ${theme.shadowColor}, transparent 60%)` }} />
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
                <div className="relative mb-3 sm:mb-4 inline-block">
                  {/* Glow halo */}
                  <div
                    className="absolute -inset-2 rounded-2xl blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-500"
                    style={{ backgroundImage: theme.iconGradient }}
                  />
                  {/* Icon container */}
                  <div
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 ring-1 ring-white/20"
                    style={{
                      backgroundImage: theme.iconGradient,
                      boxShadow: `0 10px 30px -8px ${theme.shadowColor}, inset 0 1px 0 0 rgba(255,255,255,0.25)`,
                    }}
                  >
                    {/* Glossy highlight */}
                    <div className="absolute inset-x-1 top-1 h-1/3 rounded-t-xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]" strokeWidth={2.4} />
                  </div>
                </div>
              )}
              
              <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-1.5 sm:mb-2 pr-16 sm:pr-20">
                {cert.name[language]}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed mb-3 sm:mb-4">
                {cert.description[language]}
              </p>
              
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
              </div>
            </motion.div>
            );
          })}
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
