import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { ContrastToggle } from './ContrastToggle';
import { Button } from './ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'certifications', href: '#certifications' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  })
};

const logoVariants = {
  initial: { opacity: 0, scale: 0.5, rotate: -180 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  }
};

export function Header() {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass py-3 shadow-lg shadow-primary/5' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
          animate={{
            x: [0, -30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-3 sm:px-4 flex items-center justify-between relative">
        {/* Animated Logo */}
        <motion.a
          href="/"
          onClick={handleLogoClick}
          className="relative group flex-shrink-0"
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <motion.span
            className="text-2xl font-heading font-bold text-gradient relative z-10 block"
          >
            RV
          </motion.span>
          
          {/* Logo glow effect */}
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          {/* Sparkle effect */}
          <motion.div
            className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Sparkles className="w-3 h-3 text-primary" />
          </motion.div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <motion.div 
            className="flex items-center gap-2 px-2 py-1.5 rounded-full bg-card/50 border border-border/30 backdrop-blur-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                custom={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer rounded-full"
              >
                {/* Active/Hover background pill */}
                <motion.span
                  className="absolute inset-0 rounded-full bg-primary/15 border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
                
                {/* Text */}
                <motion.span
                  className="relative z-10 block whitespace-nowrap"
                  animate={{
                    color: hoveredIndex === index ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {t(`nav.${item.key}`)}
                </motion.span>
                
                {/* Subtle glow on hover */}
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary/10 blur-md -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.div>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden sm:block"
          >
            <ContrastToggle />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="hidden sm:block"
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <LanguageToggle />
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden relative overflow-hidden group h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu - Simplified for touch reliability */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-3 sm:mx-4 rounded-xl overflow-hidden border border-primary/10">
          <nav className="flex flex-col p-3 sm:p-4 gap-1">
            {/* Theme and contrast toggle for mobile */}
            <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-border/30 sm:hidden">
              <span className="text-sm text-muted-foreground">{language === 'pt' ? 'Acessibilidade' : language === 'es' ? 'Accesibilidad' : 'Accessibility'}</span>
              <div className="flex items-center gap-2">
                <ContrastToggle />
                <ThemeToggle />
              </div>
            </div>
            {navItems.map((item) => {
              const scrollToSection = () => {
                setIsMobileMenuOpen(false);
                const targetId = item.href;
                
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.querySelector(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 200);
                } else {
                  setTimeout(() => {
                    const element = document.querySelector(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 50);
                }
              };
              
              return (
                <div
                  key={item.key}
                  role="button"
                  tabIndex={0}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground active:text-foreground px-3 sm:px-4 py-3 sm:py-4 rounded-lg transition-colors cursor-pointer active:bg-primary/20 text-left w-full select-none"
                  onClick={scrollToSection}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      scrollToSection();
                    }
                  }}
                >
                  {t(`nav.${item.key}`)}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
