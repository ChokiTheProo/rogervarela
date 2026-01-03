import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, ShoppingCart, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function CoursesSection() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const courseFeatures = language === 'pt' 
    ? [
        'Comandos essenciais do Windows',
        'Automação de tarefas com scripts',
        'Gerenciamento de arquivos e pastas',
        'Configurações avançadas do sistema',
        'Dicas de produtividade',
        'Certificado de conclusão',
      ]
    : language === 'es'
    ? [
        'Comandos esenciales de Windows',
        'Automatización de tareas con scripts',
        'Gestión de archivos y carpetas',
        'Configuraciones avanzadas del sistema',
        'Consejos de productividad',
        'Certificado de finalización',
      ]
    : [
        'Essential Windows commands',
        'Task automation with scripts',
        'File and folder management',
        'Advanced system settings',
        'Productivity tips',
        'Completion certificate',
      ];

  const handleBuyClick = () => {
    window.open('https://pay.hotmart.com/V99843637T?checkoutMode=10', '_blank', 'noopener,noreferrer');
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  return (
    <section id="courses" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">
              {language === 'pt' ? 'Meus Cursos' : language === 'es' ? 'Mis Cursos' : 'My Courses'}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            {language === 'pt' 
              ? 'Aprenda habilidades práticas com meus cursos online'
              : language === 'es'
              ? 'Aprende habilidades prácticas con mis cursos en línea'
              : 'Learn practical skills with my online courses'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-card border border-primary/30 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 md:w-48 h-24 md:h-48 bg-violet-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left side - Course info */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs md:text-sm font-medium mb-3 md:mb-4">
                  <Award className="w-3 h-3 md:w-4 md:h-4" />
                  {language === 'pt' ? 'Curso Online' : language === 'es' ? 'Curso en Línea' : 'Online Course'}
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground">
                      {language === 'pt' ? 'Comandos Windows' : language === 'es' ? 'Comandos de Windows' : 'Windows Commands'}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {language === 'pt' ? 'Do básico ao avançado' : language === 'es' ? 'De lo básico a lo avanzado' : 'From basics to advanced'}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm md:text-base mb-5 md:mb-6">
                  {language === 'pt' 
                    ? 'Domine o terminal do Windows e aumente sua produtividade. Aprenda comandos essenciais, automação de tarefas e técnicas avanzadas.'
                    : language === 'es'
                    ? 'Domina la terminal de Windows y aumenta tu productividad. Aprende comandos esenciales, automatización de tareas y técnicas avanzadas.'
                    : 'Master the Windows terminal and boost your productivity. Learn essential commands, task automation, and advanced techniques.'}
                </p>

                <Button 
                  onClick={handleBuyClick}
                  size="lg"
                  className="w-full md:w-auto gap-2 bg-gradient-to-r from-primary to-violet-500 hover:from-primary/90 hover:to-violet-500/90 shadow-lg shadow-primary/25"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {language === 'pt' ? 'Comprar Agora' : language === 'es' ? 'Comprar Ahora' : 'Buy Now'}
                </Button>
              </div>

              {/* Right side - Features */}
              <div className="space-y-2 md:space-y-3 mt-4 md:mt-0">
                {courseFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-xs md:text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
