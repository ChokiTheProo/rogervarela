import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Eye, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function HowIWorkSection() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: MessageCircle,
      step: '01',
      title: { pt: 'Briefing rápido', en: 'Quick briefing', es: 'Briefing rápido' },
      desc: {
        pt: '15 minutos no WhatsApp pra entender o que você precisa. Sem reunião enrolada, sem formulário gigante.',
        en: '15 minutes on WhatsApp to understand what you need. No drawn-out meeting, no giant form.',
        es: '15 minutos en WhatsApp para entender lo que necesitas. Sin reunión enredada, sin formulario gigante.',
      },
    },
    {
      icon: Eye,
      step: '02',
      title: { pt: 'Preview grátis em 48h', en: 'Free preview in 48h', es: 'Preview gratis en 48h' },
      desc: {
        pt: 'Você vê o protótipo funcionando antes de pagar. Se não gostar, não tem custo nenhum.',
        en: 'You see the prototype working before paying. If you don\'t like it, there\'s no cost at all.',
        es: 'Ves el prototipo funcionando antes de pagar. Si no te gusta, no hay costo alguno.',
      },
    },
    {
      icon: Rocket,
      step: '03',
      title: { pt: 'Entrega em 7 a 14 dias', en: 'Delivery in 7 to 14 days', es: 'Entrega en 7 a 14 días' },
      desc: {
        pt: 'Site, landing ou SaaS no ar com revisões inclusas. Pagamento só na aprovação final.',
        en: 'Site, landing or SaaS live with revisions included. Payment only after final approval.',
        es: 'Sitio, landing o SaaS en producción con revisiones incluidas. Pago solo en la aprobación final.',
      },
    },
  ];

  return (
    <section id="how-i-work" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">
              {language === 'pt' ? 'Como trabalho' : language === 'es' ? 'Cómo trabajo' : 'How I work'}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            {language === 'pt'
              ? 'Do primeiro contato à entrega final — sem mistério, sem surpresa.'
              : language === 'es'
              ? 'Del primer contacto a la entrega final — sin misterio, sin sorpresa.'
              : 'From first contact to final delivery — no mystery, no surprises.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative group"
              >
                <div className="relative h-full p-6 md:p-7 rounded-2xl bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-primary/10 overflow-hidden">
                  {/* Step number watermark */}
                  <span className="absolute -top-2 -right-2 text-7xl md:text-8xl font-heading font-black text-primary/[0.06] select-none">
                    {step.step}
                  </span>

                  {/* Icon */}
                  <div className="relative mb-5 inline-flex">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg ring-1 ring-white/20">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground mb-2 relative">
                    {step.title[language]}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative">
                    {step.desc[language]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
