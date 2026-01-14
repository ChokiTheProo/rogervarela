import { motion } from 'framer-motion';
import { Globe, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import blogsSitesHero from '@/assets/blogs-sites-hero.jpg';

const translations = {
  pt: {
    badge: 'Portfólio Digital',
    title: 'Blogs & Sites',
    description: 'Confira os blogs e sites que já desenvolvi para clientes e projetos pessoais.',
    cta: 'Acessar Agora',
    contact: 'Falar Comigo',
    highlight: 'Projetos reais em produção!',
  },
  en: {
    badge: 'Digital Portfolio',
    title: 'Blogs & Sites',
    description: 'Check out the blogs and websites I have developed for clients and personal projects.',
    cta: 'Access Now',
    contact: 'Contact Me',
    highlight: 'Real projects in production!',
  },
  es: {
    badge: 'Portafolio Digital',
    title: 'Blogs y Sitios',
    description: 'Descubre los blogs y sitios web que he desarrollado para clientes y proyectos personales.',
    cta: 'Acceder Ahora',
    contact: 'Hablar Conmigo',
    highlight: '¡Proyectos reales en producción!',
  },
};

export const EbooksSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="sites" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={blogsSitesHero} 
                  alt="Blogs & Sites Showcase" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="p-8 md:p-10 text-center -mt-16 relative z-10">
                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  {t.highlight}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    variant="hero"
                    size="lg"
                    className="gap-2"
                  >
                    <a
                      href="https://sitesrovr.lovable.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.cta}
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="heroOutline"
                    size="lg"
                    className="gap-2"
                  >
                    <a
                      href="https://wa.me/5554991710543"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t.contact}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
