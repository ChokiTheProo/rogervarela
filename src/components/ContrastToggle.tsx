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
  const t = translations[language];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleContrast}
          className="relative overflow-hidden"
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
