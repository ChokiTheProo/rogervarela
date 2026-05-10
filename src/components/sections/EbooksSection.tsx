import { motion } from 'framer-motion';
import { Globe, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import blogsSitesHero from '@/assets/blogs-sites-hero.jpg';
import { LazyImage } from '@/components/ui/lazy-image';
import { HorizonBackground } from '@/components/ui/horizon-hero-section';

const translations = {
  pt: {
    badge: 'Portfólio Digital',
    title: 'Blogs & Sites em Produção',
    description: 'Projetos reais publicados e em operação para clientes — sites institucionais, blogs e landing pages entregues, indexados e gerando resultado.',
    cta: 'Ver Sites no Ar',
    contact: 'Quero o Meu',
    highlight: 'Projetos publicados e em operação',
  },
  en: {
    badge: 'Digital Portfolio',
    title: 'Blogs & Sites in Production',
    description: 'Real projects published and operating for clients — institutional sites, blogs and landing pages delivered, indexed and generating results.',
    cta: 'View Live Sites',
    contact: 'I Want Mine',
    highlight: 'Published projects, live in production',
  },
  es: {
    badge: 'Portafolio Digital',
    title: 'Blogs y Sitios en Producción',
    description: 'Proyectos reales publicados y en operación para clientes — sitios institucionales, blogs y landing pages entregados, indexados y generando resultados.',
    cta: 'Ver Sitios en Vivo',
    contact: 'Quiero el Mío',
    highlight: 'Proyectos publicados y en operación',
  },
};

export const EbooksSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="sites" className="py-20 md:py-32 relative overflow-hidden">
      {/* Cosmic 3D background */}
      <HorizonBackground />

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
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-background">
                <LazyImage
                  src={blogsSitesHero}
                  alt="Sites e blogs reais em produção - showcase RoVR"
                  width={1280}
                  height={768}
                  containerClassName="absolute inset-0 w-full h-full"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />
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
