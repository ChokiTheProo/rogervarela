import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
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
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

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

      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Animated Logo */}
        <motion.a
          href="/"
          onClick={handleLogoClick}
          className="relative group"
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
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
            >
              {/* Hover background */}
              <motion.span
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8
                }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Text with animation */}
              <motion.span
                className="relative z-10 block"
                animate={{
                  y: hoveredIndex === index ? -2 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {t(`nav.${item.key}`)}
              </motion.span>
              
              {/* Animated underline */}
              <motion.span
                className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-primary rounded-full"
                initial={{ width: 0, x: '-50%' }}
                animate={{
                  width: hoveredIndex === index ? '60%' : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Floating particles on hover */}
              {hoveredIndex === index && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute w-1 h-1 bg-primary/60 rounded-full"
                      initial={{
                        opacity: 0,
                        x: '50%',
                        y: 0
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        x: `${50 + (i - 1) * 30}%`,
                        y: -20 - i * 5
                      }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </>
              )}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
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
              className="lg:hidden relative overflow-hidden group"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden border border-primary/10"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.9 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{
                    x: 10,
                    backgroundColor: 'hsl(var(--primary) / 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg transition-colors cursor-pointer relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary rounded-r-full"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {t(`nav.${item.key}`)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
