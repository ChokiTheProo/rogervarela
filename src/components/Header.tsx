import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Button } from './ui/button';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'certifications', href: '#certifications' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
];

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-heading font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          RV
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {t(`nav.${item.key}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 px-4 py-3 rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
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
