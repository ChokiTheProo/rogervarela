import { motion, useInView } from 'framer-motion';
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

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">
              {language === 'pt' ? 'Meus Cursos' : 'My Courses'}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            {language === 'pt' 
              ? 'Aprenda habilidades práticas com meus cursos online'
              : 'Learn practical skills with my online courses'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 rounded-3xl bg-gradient-card border border-primary/30 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Course info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  {language === 'pt' ? 'Curso Online' : 'Online Course'}
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center">
                    <Terminal className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">
                      {language === 'pt' ? 'Comandos Windows' : 'Windows Commands'}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === 'pt' ? 'Do básico ao avançado' : 'From basics to advanced'}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {language === 'pt' 
                    ? 'Domine o terminal do Windows e aumente sua produtividade. Aprenda comandos essenciais, automação de tarefas e técnicas avançadas de administração de sistemas.'
                    : 'Master the Windows terminal and boost your productivity. Learn essential commands, task automation, and advanced system administration techniques.'}
                </p>

                <Button 
                  onClick={handleBuyClick}
                  size="lg"
                  className="w-full md:w-auto gap-2 bg-gradient-to-r from-primary to-violet-500 hover:from-primary/90 hover:to-violet-500/90 shadow-lg shadow-primary/25"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {language === 'pt' ? 'Comprar Agora' : 'Buy Now'}
                </Button>
              </div>

              {/* Right side - Features */}
              <div className="space-y-3">
                {courseFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
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
