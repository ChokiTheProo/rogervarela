import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  { quote: '[Aguardando depoimento de cliente]', name: 'Nome do cliente', company: 'Empresa' },
  { quote: '[Aguardando depoimento de cliente]', name: 'Nome do cliente', company: 'Empresa' },
  { quote: '[Aguardando depoimento de cliente]', name: 'Nome do cliente', company: 'Empresa' },
];

export function TestimonialsSection() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">
              {language === 'pt'
                ? 'O que dizem sobre o trabalho'
                : language === 'es'
                ? 'Lo que dicen del trabajo'
                : 'What people say'}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative h-full p-6 md:p-7 rounded-2xl bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 transition-all duration-500 shadow-lg overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/15" />
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 italic min-h-[5rem]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-border/40 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
