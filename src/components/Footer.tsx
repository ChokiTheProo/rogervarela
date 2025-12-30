import { Heart, Github, Linkedin, ExternalLink, MapPin } from 'lucide-react';
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

  const quickLinks = [
    { href: '#about', label: language === 'pt' ? 'Sobre' : 'About' },
    { href: '#experience', label: language === 'pt' ? 'Experiência' : 'Experience' },
    { href: '#projects', label: language === 'pt' ? 'Projetos' : 'Projects' },
    { href: '#skills', label: language === 'pt' ? 'Habilidades' : 'Skills' },
    { href: '#contact', label: language === 'pt' ? 'Contato' : 'Contact' },
  ];

  const legalLinks = [
    { href: '/terms', label: language === 'pt' ? 'Termos de Uso' : 'Terms of Use' },
    { href: '/privacy', label: language === 'pt' ? 'Privacidade' : 'Privacy' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: language === 'pt' ? 'Contato' : 'Contact' },
  ];

  return (
    <footer className="border-t border-border/50 bg-gradient-card relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Logo3D size="sm" />
              <h3 className="text-2xl font-heading font-bold">
                Roger <span className="text-gradient">Varela</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              {language === 'pt' 
                ? 'Desenvolvedor Full Stack apaixonado por criar soluções inovadoras. CEO & Co-fundador da RoVR.'
                : 'Full Stack Developer passionate about creating innovative solutions. CEO & Co-founder of RoVR.'
              }
            </p>
            
            {/* Location */}
            <motion.div 
              className="flex items-center gap-2 text-muted-foreground mb-6"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>Brasil</span>
            </motion.div>
            
            {/* RoVR Banner */}
            <motion.a
              href="https://rovr.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-primary group"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px hsl(var(--primary) / 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-primary-foreground font-bold">RoVR</span>
              <span className="text-primary-foreground/70 text-sm">MicroSaaS & Apps</span>
              <ExternalLink className="w-4 h-4 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors" />
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold mb-4">
              {language === 'pt' ? 'Links Rápidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.a 
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold mb-4">
              {language === 'pt' ? 'Legal' : 'Legal'}
            </h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>

            <h4 className="font-heading font-semibold mb-4">
              {language === 'pt' ? 'Redes Sociais' : 'Social'}
            </h4>
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/in/roger-varela-4b768a189/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/ChokiTheProo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Roger Varela.</span>
              <span>{t('footer.rights')}</span>
            </div>
            
            <motion.div 
              className="flex items-center gap-2 text-sm text-muted-foreground"
              whileHover={{ scale: 1.02 }}
            >
              <span>{t('footer.brand')}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <a 
                href="https://rovr.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gradient font-semibold hover:opacity-80 transition-opacity"
              >
                RoVR
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}