import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useContrast } from '@/contexts/ContrastContext';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';

const translations = {
  pt: {
    enable: 'Ativar alto contraste',
    disable: 'Desativar alto contraste',
  },
  en: {
    enable: 'Enable high contrast',
    disable: 'Disable high contrast',
  },
  es: {
    enable: 'Activar alto contraste',
    disable: 'Desactivar alto contraste',
  },
};

export function ContrastToggle() {
  const { highContrast, toggleContrast } = useContrast();
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const t = translations[language];

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleContrast();
  };

  const button = (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      onTouchEnd={handleClick}
      className="relative overflow-hidden touch-manipulation"
      aria-label={highContrast ? t.disable : t.enable}
    >
      <motion.div
        initial={false}
        animate={{
          scale: highContrast ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {highContrast ? (
          <Eye className="h-5 w-5" />
        ) : (
          <EyeOff className="h-5 w-5" />
        )}
      </motion.div>
      <span className="sr-only">{highContrast ? t.disable : t.enable}</span>
    </Button>
  );

  // On mobile, render without tooltip to avoid touch issues
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
        className="animate-in fade-in-0 zoom-in-95"
      >
        <p>{highContrast ? t.disable : t.enable}</p>
      </TooltipContent>
    </Tooltip>
  );
}
