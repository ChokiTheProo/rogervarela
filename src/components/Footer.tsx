import { Heart, Github, Linkedin, ExternalLink, MapPin, ArrowUpRight, Code2, Sparkles, MessageCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo3D } from '@/components/Logo3D';
import { motion } from 'framer-motion';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#about', label: language === 'pt' ? 'Sobre' : language === 'es' ? 'Sobre mí' : 'About' },
    { href: '#experience', label: language === 'pt' ? 'Experiência' : language === 'es' ? 'Experiencia' : 'Experience' },
    { href: '#projects', label: language === 'pt' ? 'Projetos' : language === 'es' ? 'Proyectos' : 'Projects' },
    { href: '#skills', label: language === 'pt' ? 'Habilidades' : language === 'es' ? 'Habilidades' : 'Skills' },
    { href: '#awards', label: language === 'pt' ? 'Prêmios' : language === 'es' ? 'Premios' : 'Awards' },
  ];

  const legalLinks = [
    { href: '/terms', label: language === 'pt' ? 'Termos' : language === 'es' ? 'Términos' : 'Terms' },
    { href: '/privacy', label: language === 'pt' ? 'Privacidade' : language === 'es' ? 'Privacidad' : 'Privacy' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: language === 'pt' ? 'Contato' : language === 'es' ? 'Contacto' : 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/30">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Animated glow behind CTA */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-[500px] h-[300px] rounded-full blur-[100px]"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2), hsl(280 100% 70% / 0.2))',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border border-primary/30 mb-6 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-primary font-semibold relative z-10">
              {language === 'pt' ? 'Vamos criar algo incrível juntos' : language === 'es' ? 'Construyamos algo increíble juntos' : "Let's build something amazing together"}
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_3s_ease-in-out_infinite]">
              {language === 'pt' ? 'Pronto para começar?' : language === 'es' ? '¿Listo para comenzar?' : 'Ready to start?'}
            </span>
          </h2>
          <p className="text-foreground/70 max-w-md mx-auto mb-10 text-lg font-medium relative">
            {language === 'pt' 
              ? 'Entre em contato e vamos transformar suas ideias em realidade.'
              : language === 'es'
              ? 'Contáctame y transformemos tus ideas en realidad.'
              : "Get in touch and let's turn your ideas into reality."
            }
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative inline-block"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute -inset-1 rounded-2xl opacity-75 blur-sm"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(280 100% 70%), hsl(var(--primary)))',
                backgroundSize: '300% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] text-primary-foreground font-bold text-lg shadow-2xl shadow-primary/40 hover:shadow-primary/50 transition-all duration-300"
              style={{
                animation: 'gradient-x 3s ease infinite',
              }}
            >
              <span>{language === 'pt' ? 'Iniciar Conversa' : language === 'es' ? 'Iniciar Conversación' : 'Start Conversation'}</span>
              <motion.div
                animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* Main Footer Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div 
            className="col-span-2 lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-5">
              <Logo3D size="sm" />
              <div>
                <h3 className="text-xl font-heading font-bold tracking-tight text-foreground">
                  Roger <span className="text-gradient">Varela</span>
                </h3>
                <p className="text-xs text-foreground/70 font-semibold tracking-widest uppercase">
                  {language === 'pt' ? 'Desenvolvedor Low-Code & No-Code' : language === 'es' ? 'Desarrollador Low-Code & No-Code' : 'Low-Code & No-Code Developer'}
                </p>
              </div>
            </div>
            
            <p className="text-foreground/80 text-sm mb-5 max-w-xs leading-relaxed font-normal">
              {language === 'pt' 
                ? 'Desenvolvedor apaixonado por criar soluções digitais inovadoras. CEO & Co-fundador da RoVR.'
                : language === 'es'
                ? 'Desarrollador apasionado por crear soluciones digitales innovadoras. CEO & Cofundador de RoVR.'
                : 'Developer passionate about creating innovative digital solutions. CEO & Co-founder of RoVR.'
              }
            </p>
            
            <div className="flex items-center gap-2 text-foreground/70 text-sm mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-semibold">Brasil</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/in/roger-varela-4b768a189/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/ChokiTheProo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold mb-5 text-sm uppercase tracking-widest text-foreground">
              {language === 'pt' ? 'Navegação' : language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.a 
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="text-foreground/70 hover:text-primary transition-colors cursor-pointer text-sm font-medium inline-flex items-center gap-1 group"
                    whileHover={{ x: 3 }}
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold mb-5 text-sm uppercase tracking-widest text-foreground">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 3 }}>
                    <Link 
                      to={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RoVR Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold mb-5 text-sm uppercase tracking-widest text-foreground">
              RoVR
            </h4>
            <motion.a
              href="https://rovr.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary">RoVR</span>
              </div>
              <p className="text-xs text-foreground/70 font-medium mb-3">
                {language === 'pt' ? 'MicroSaaS & Aplicativos' : language === 'es' ? 'MicroSaaS & Aplicaciones' : 'MicroSaaS & Apps'}
              </p>
              <div className="flex items-center gap-1 text-xs text-primary/70 group-hover:text-primary transition-colors">
                <span>{language === 'pt' ? 'Visitar' : language === 'es' ? 'Visitar' : 'Visit'}</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-foreground/70 text-sm font-medium">
              <span>© {currentYear} Roger Varela.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">{t('footer.rights')}</span>
            </div>
            
            <div className="flex items-center gap-6">
              <motion.div 
                className="flex items-center gap-2 text-sm text-foreground/70 font-medium"
              >
                <span>{language === 'pt' ? 'Feito com' : language === 'es' ? 'Hecho con' : 'Made with'}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>{language === 'pt' ? 'por' : language === 'es' ? 'por' : 'by'}</span>
                <a 
                  href="https://rovr.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gradient font-semibold hover:opacity-80 transition-opacity"
                >
                  RoVR
                </a>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
