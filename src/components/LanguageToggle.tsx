import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';

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

interface LanguageButtonProps {
  lang: 'pt' | 'en' | 'es';
  currentLang: string;
  onClick: () => void;
  Flag: React.FC;
  label: string;
  tooltipText: string;
  isMobile: boolean;
}

const LanguageButton = ({ lang, currentLang, onClick, Flag, label, tooltipText, isMobile }: LanguageButtonProps) => {
  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  const button = (
    <motion.button
      onClick={handleClick}
      onTouchEnd={handleClick}
      className={`relative z-10 flex flex-col items-center justify-center w-[52px] py-1.5 rounded-full transition-colors duration-200 touch-manipulation ${
        currentLang === lang ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
      }`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <Flag />
      <span className="text-[9px] font-semibold mt-1">{label}</span>
    </motion.button>
  );

  if (isMobile) {
    return button;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {button}
      </TooltipTrigger>
      <TooltipContent 
        side="bottom" 
        className="bg-background/95 backdrop-blur-sm border-border/50 animate-in fade-in-0 zoom-in-95"
      >
        <p className="text-xs font-medium">{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const isMobile = useIsMobile();

  const getXPosition = () => {
    switch (language) {
      case 'pt': return 0;
      case 'en': return '100%';
      case 'es': return '200%';
      default: return 0;
    }
  };

  const content = (
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
      
      <LanguageButton
        lang="pt"
        currentLang={language}
        onClick={() => setLanguage('pt')}
        Flag={BrazilFlag}
        label="PT"
        tooltipText="Português (Brasil)"
        isMobile={isMobile}
      />

      <LanguageButton
        lang="en"
        currentLang={language}
        onClick={() => setLanguage('en')}
        Flag={USAFlag}
        label="EN"
        tooltipText="English (US)"
        isMobile={isMobile}
      />

      <LanguageButton
        lang="es"
        currentLang={language}
        onClick={() => setLanguage('es')}
        Flag={SpainFlag}
        label="ES"
        tooltipText="Español"
        isMobile={isMobile}
      />
    </div>
  );

  if (isMobile) {
    return content;
  }

  return (
    <TooltipProvider delayDuration={200}>
      {content}
    </TooltipProvider>
  );
}
