import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const education = [
  {
    degree: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development', es: 'Análisis y Desarrollo de Sistemas' },
    institution: 'Uninter',
    location: 'EAD',
    period: '2024 - 2027',
    status: { pt: 'Em andamento', en: 'In progress', es: 'En curso' },
    current: true,
    description: {
      pt: 'Graduação tecnológica com foco em desenvolvimento de software, banco de dados e gestão de projetos.',
      en: 'Technology degree focused on software development, databases, and project management.',
      es: 'Grado tecnológico enfocado en desarrollo de software, bases de datos y gestión de proyectos.',
    },
  },
  {
    degree: { pt: 'Técnico em Informática para Internet', en: 'Internet Computing Technician', es: 'Técnico en Informática para Internet' },
    institution: 'QI Faculdade e Escola Técnica',
    location: 'Caxias do Sul, RS',
    period: '2021 - 2023',
    status: { pt: 'Concluído', en: 'Completed', es: 'Completado' },
    current: false,
    description: {
      pt: 'Formação técnica de 1000 horas com foco em desenvolvimento web, redes, sistemas operacionais e segurança da informação.',
      en: '1000-hour technical training focused on web development, networking, operating systems, and information security.',
      es: 'Formación técnica de 1000 horas enfocada en desarrollo web, redes, sistemas operativos y seguridad de la información.',
    },
    certificate: true,
  },
  {
    degree: { pt: 'Ensino Médio', en: 'High School', es: 'Educación Secundaria' },
    institution: 'E.E.E.M. Prof. Apolinário Alves dos Santos',
    location: 'Caxias do Sul, RS',
    period: '2017 - 2019',
    status: { pt: 'Concluído', en: 'Completed', es: 'Completado' },
    current: false,
    description: {
      pt: 'Ensino médio completo com base sólida em ciências exatas e linguagens.',
      en: 'Complete high school education with a solid foundation in exact sciences and languages.',
      es: 'Educación secundaria completa con una base sólida en ciencias exactas y lenguajes.',
    },
  },
];

export function EducationSection() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute right-0 top-1/3 w-1/3 h-96 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">
              {language === 'pt' ? 'Formação Acadêmica' : language === 'es' ? 'Formación Académica' : 'Education'}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            {language === 'pt' 
              ? 'Minha jornada educacional em tecnologia e desenvolvimento'
              : language === 'es'
              ? 'Mi trayectoria educativa en tecnología y desarrollo'
              : 'My educational journey in technology and development'}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-5 top-2 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center ${
                  edu.current ? 'bg-gradient-to-br from-accent to-primary animate-pulse-glow' : 'bg-accent/50'
                }`}>
                  <GraduationCap className="w-3 h-3 text-accent-foreground" />
                </div>

                <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-foreground">
                        {edu.degree[language]}
                      </h3>
                      <p className="text-accent font-medium">{edu.institution}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                      edu.current 
                        ? 'bg-accent/20 text-accent border-accent/30' 
                        : 'bg-primary/10 text-primary border-primary/20'
                    }`}>
                      {edu.status[language]}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {edu.description[language]}
                  </p>

                  {edu.certificate && (
                    <div className="flex gap-2">
                      <Button variant="glass" size="sm" asChild>
                        <a href="/downloads/certificado-roger.pdf" download>
                          <Download className="w-4 h-4 mr-2" />
                          {language === 'pt' ? 'Baixar Certificado' : language === 'es' ? 'Descargar Certificado' : 'Download Certificate'}
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
