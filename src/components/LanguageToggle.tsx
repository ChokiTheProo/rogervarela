import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const BrazilFlag = () => (
  <svg viewBox="0 0 512 512" className="w-5 h-5 rounded-sm shadow-sm">
    <rect fill="#009739" width="512" height="512"/>
    <polygon fill="#FEDD00" points="256,64 488,256 256,448 24,256"/>
    <circle fill="#002776" cx="256" cy="256" r="96"/>
    <path d="M160,256 Q256,208 352,256" stroke="#FFFFFF" strokeWidth="12" fill="none"/>
  </svg>
);

const USAFlag = () => (
  <svg viewBox="0 0 512 512" className="w-5 h-5 rounded-sm shadow-sm">
    <rect fill="#B22234" width="512" height="512"/>
    <g fill="#FFFFFF">
      <rect y="39" width="512" height="39"/>
      <rect y="117" width="512" height="39"/>
      <rect y="195" width="512" height="39"/>
      <rect y="273" width="512" height="39"/>
      <rect y="351" width="512" height="39"/>
      <rect y="429" width="512" height="39"/>
    </g>
    <rect fill="#3C3B6E" width="205" height="273"/>
    <g fill="#FFFFFF">
      <circle cx="25" cy="20" r="8"/>
      <circle cx="65" cy="20" r="8"/>
      <circle cx="105" cy="20" r="8"/>
      <circle cx="145" cy="20" r="8"/>
      <circle cx="185" cy="20" r="8"/>
      <circle cx="45" cy="45" r="8"/>
      <circle cx="85" cy="45" r="8"/>
      <circle cx="125" cy="45" r="8"/>
      <circle cx="165" cy="45" r="8"/>
      <circle cx="25" cy="70" r="8"/>
      <circle cx="65" cy="70" r="8"/>
      <circle cx="105" cy="70" r="8"/>
      <circle cx="145" cy="70" r="8"/>
      <circle cx="185" cy="70" r="8"/>
      <circle cx="45" cy="95" r="8"/>
      <circle cx="85" cy="95" r="8"/>
      <circle cx="125" cy="95" r="8"/>
      <circle cx="165" cy="95" r="8"/>
      <circle cx="25" cy="120" r="8"/>
      <circle cx="65" cy="120" r="8"/>
      <circle cx="105" cy="120" r="8"/>
      <circle cx="145" cy="120" r="8"/>
      <circle cx="185" cy="120" r="8"/>
      <circle cx="45" cy="145" r="8"/>
      <circle cx="85" cy="145" r="8"/>
      <circle cx="125" cy="145" r="8"/>
      <circle cx="165" cy="145" r="8"/>
      <circle cx="25" cy="170" r="8"/>
      <circle cx="65" cy="170" r="8"/>
      <circle cx="105" cy="170" r="8"/>
      <circle cx="145" cy="170" r="8"/>
      <circle cx="185" cy="170" r="8"/>
      <circle cx="45" cy="195" r="8"/>
      <circle cx="85" cy="195" r="8"/>
      <circle cx="125" cy="195" r="8"/>
      <circle cx="165" cy="195" r="8"/>
      <circle cx="25" cy="220" r="8"/>
      <circle cx="65" cy="220" r="8"/>
      <circle cx="105" cy="220" r="8"/>
      <circle cx="145" cy="220" r="8"/>
      <circle cx="185" cy="220" r="8"/>
      <circle cx="45" cy="245" r="8"/>
      <circle cx="85" cy="245" r="8"/>
      <circle cx="125" cy="245" r="8"/>
      <circle cx="165" cy="245" r="8"/>
    </g>
  </svg>
);

const SpainFlag = () => (
  <svg viewBox="0 0 512 512" className="w-5 h-5 rounded-sm shadow-sm">
    <rect fill="#AA151B" width="512" height="512"/>
    <rect fill="#F1BF00" y="128" width="512" height="256"/>
  </svg>
);

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
      <motion.button
        onClick={() => setLanguage('pt')}
        className={`relative z-10 flex flex-col items-center justify-center w-[52px] py-1.5 rounded-full transition-colors duration-200 ${
          language === 'pt' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Português"
      >
        <BrazilFlag />
        <span className="text-[9px] font-semibold mt-1">PT</span>
      </motion.button>
      <motion.button
        onClick={() => setLanguage('en')}
        className={`relative z-10 flex flex-col items-center justify-center w-[52px] py-1.5 rounded-full transition-colors duration-200 ${
          language === 'en' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="English"
      >
        <USAFlag />
        <span className="text-[9px] font-semibold mt-1">EN</span>
      </motion.button>
      <motion.button
        onClick={() => setLanguage('es')}
        className={`relative z-10 flex flex-col items-center justify-center w-[52px] py-1.5 rounded-full transition-colors duration-200 ${
          language === 'es' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Español"
      >
        <SpainFlag />
        <span className="text-[9px] font-semibold mt-1">ES</span>
      </motion.button>
    </div>
  );
}
