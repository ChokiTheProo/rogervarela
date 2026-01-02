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
        className={`relative z-10 px-2 py-1.5 text-lg rounded-full transition-all duration-200 ${
          language === 'pt' ? 'scale-110' : 'opacity-60 hover:opacity-100'
        }`}
        title="Português"
      >
        🇧🇷
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-2 py-1.5 text-lg rounded-full transition-all duration-200 ${
          language === 'en' ? 'scale-110' : 'opacity-60 hover:opacity-100'
        }`}
        title="English"
      >
        🇺🇸
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`relative z-10 px-2 py-1.5 text-lg rounded-full transition-all duration-200 ${
          language === 'es' ? 'scale-110' : 'opacity-60 hover:opacity-100'
        }`}
        title="Español"
      >
        🇪🇸
      </button>
    </div>
  );
}
