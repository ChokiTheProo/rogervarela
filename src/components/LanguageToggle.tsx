import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-0.5 rounded-full bg-secondary/50 p-1 backdrop-blur-sm border border-border/50">
      <motion.div
        className="absolute top-1 bottom-1 bg-gradient-primary rounded-full"
        initial={false}
        animate={{
          x: language === 'pt' ? 0 : '100%',
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
    </div>
  );
}
