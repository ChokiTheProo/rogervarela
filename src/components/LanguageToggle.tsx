import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const getXPosition = () => {
    switch (language) {
      case 'pt': return 0;
      case 'en': return '100%';
      case 'es': return '200%';
      default: return 0;
    }
  };

  return (
    <div className="relative flex items-center gap-0.5 rounded-full bg-secondary/50 p-1 backdrop-blur-sm border border-border/50">
      <motion.div
        className="absolute top-1 bottom-1 bg-gradient-primary rounded-full"
        initial={false}
        animate={{
          x: getXPosition(),
          width: '36px',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <button
        onClick={() => setLanguage('pt')}
        className={`relative z-10 px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
          language === 'pt' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        title="Português"
      >
        <span className="text-[10px]">🇧🇷</span>
        BR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
          language === 'en' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        title="English"
      >
        <span className="text-[10px]">🇺🇸</span>
        US
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`relative z-10 px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
          language === 'es' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        title="Español"
      >
        <span className="text-[10px]">🇪🇸</span>
        ES
      </button>
    </div>
  );
}
