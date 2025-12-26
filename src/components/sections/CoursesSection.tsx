import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, ShoppingCart, Award, CheckCircle, Smartphone, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function CoursesSection() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const courseFeatures = language === 'pt' 
    ? [
        'Aplicativo completo de emagrecimento',
        'E-book com dicas e receitas exclusivas',
        'Jornada personalizada de perda de peso',
        'Acompanhamento do progresso',
        'Dietas e exercícios adaptados',
        'Acesso vitalício ao conteúdo',
      ]
    : [
        'Complete weight loss app',
        'E-book with exclusive tips and recipes',
        'Personalized weight loss journey',
        'Progress tracking',
        'Adapted diets and exercises',
        'Lifetime access to content',
      ];

  const handleBuyClick = () => {
    window.open('https://pay.cakto.com.br/ao9jb7c_673490', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">
              {language === 'pt' ? 'Meus Produtos' : 'My Products'}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            {language === 'pt' 
              ? 'Transforme sua vida com meus produtos digitais'
              : 'Transform your life with my digital products'}
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
                  {language === 'pt' ? 'App + E-book' : 'App + E-book'}
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">
                      Emagrio
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === 'pt' ? 'Sua jornada de emagrecimento' : 'Your weight loss journey'}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {language === 'pt' 
                    ? 'Transforme seu corpo e sua saúde com o Emagrio. Um aplicativo completo de emagrecimento combinado com um e-book exclusivo repleto de dicas, receitas e estratégias para alcançar seus objetivos.'
                    : 'Transform your body and health with Emagrio. A complete weight loss app combined with an exclusive e-book full of tips, recipes, and strategies to achieve your goals.'}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Smartphone className="w-4 h-4 text-primary" />
                    {language === 'pt' ? 'Aplicativo' : 'App'}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 text-primary" />
                    {language === 'pt' ? 'E-book' : 'E-book'}
                  </div>
                </div>

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
