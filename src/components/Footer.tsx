import { Heart, Github, Linkedin, ExternalLink, MapPin, ArrowUpRight, Code2, Sparkles } from 'lucide-react';
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
    { href: '#about', label: language === 'pt' ? 'Sobre' : 'About' },
    { href: '#experience', label: language === 'pt' ? 'Experiência' : 'Experience' },
    { href: '#projects', label: language === 'pt' ? 'Projetos' : 'Projects' },
    { href: '#skills', label: language === 'pt' ? 'Habilidades' : 'Skills' },
    { href: '#awards', label: language === 'pt' ? 'Prêmios' : 'Awards' },
  ];

  const legalLinks = [
    { href: '/terms', label: language === 'pt' ? 'Termos' : 'Terms' },
    { href: '/privacy', label: language === 'pt' ? 'Privacidade' : 'Privacy' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: language === 'pt' ? 'Contato' : 'Contact' },
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
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              {language === 'pt' ? 'Vamos criar algo incrível juntos' : "Let's build something amazing together"}
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {language === 'pt' ? 'Pronto para começar?' : 'Ready to start?'}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            {language === 'pt' 
              ? 'Entre em contato e vamos transformar suas ideias em realidade.'
              : "Get in touch and let's turn your ideas into reality."
            }
          </p>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              <span>{language === 'pt' ? 'Iniciar Conversa' : 'Start Conversation'}</span>
              <ArrowUpRight className="w-5 h-5" />
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
                <h3 className="text-xl font-heading font-bold tracking-tight">
                  Roger <span className="text-gradient">Varela</span>
                </h3>
                <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Full Stack Developer</p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-5 max-w-xs leading-relaxed font-light">
              {language === 'pt' 
                ? 'Desenvolvedor apaixonado por criar soluções digitais inovadoras. CEO & Co-fundador da RoVR.'
                : 'Developer passionate about creating innovative digital solutions. CEO & Co-founder of RoVR.'
              }
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">Brasil</span>
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
            <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-wider text-foreground/80">
              {language === 'pt' ? 'Navegação' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.a 
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm inline-flex items-center gap-1 group"
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
            <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-wider text-foreground/80">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 3 }}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
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
            <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-wider text-foreground/80">
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
                <span className="font-semibold text-primary">RoVR</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {language === 'pt' ? 'MicroSaaS & Aplicativos' : 'MicroSaaS & Apps'}
              </p>
              <div className="flex items-center gap-1 text-xs text-primary/70 group-hover:text-primary transition-colors">
                <span>{language === 'pt' ? 'Visitar' : 'Visit'}</span>
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
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Roger Varela.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">{t('footer.rights')}</span>
            </div>
            
            <div className="flex items-center gap-6">
              <motion.div 
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span>{language === 'pt' ? 'Feito com' : 'Made with'}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>{language === 'pt' ? 'por' : 'by'}</span>
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
