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
    <div className="relative flex items-center gap-1 rounded-full bg-secondary/50 p-1.5 backdrop-blur-sm border border-border/50">
      <motion.div
        className="absolute top-1.5 bottom-1.5 bg-gradient-primary rounded-full"
        initial={false}
        animate={{
          x: getXPosition(),
          width: '52px',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <button
        onClick={() => setLanguage('pt')}
        className={`relative z-10 flex flex-col items-center justify-center w-[52px] py-1 rounded-full transition-all duration-200 ${
          language === 'pt' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        title="Português"
      >
        <span className="text-lg leading-none">🇧🇷</span>
        <span className="text-[9px] font-semibold mt-0.5">PT</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 flex flex-col items-center justify-center w-[52px] py-1 rounded-full transition-all duration-200 ${
          language === 'en' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        title="English"
      >
        <span className="text-lg leading-none">🇺🇸</span>
        <span className="text-[9px] font-semibold mt-0.5">EN</span>
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`relative z-10 flex flex-col items-center justify-center w-[52px] py-1 rounded-full transition-all duration-200 ${
          language === 'es' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        title="Español"
      >
        <span className="text-lg leading-none">🇪🇸</span>
        <span className="text-[9px] font-semibold mt-0.5">ES</span>
      </button>
    </div>
  );
}
