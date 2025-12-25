import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-1 rounded-full bg-secondary/50 p-1 backdrop-blur-sm border border-border/50">
      <motion.div
        className="absolute top-1 bottom-1 bg-gradient-primary rounded-full"
        initial={false}
        animate={{
          x: language === 'pt' ? 0 : '100%',
          width: language === 'pt' ? '44px' : '40px',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <button
        onClick={() => setLanguage('pt')}
        className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
          language === 'pt' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
          language === 'en' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
}
