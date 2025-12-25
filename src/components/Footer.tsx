import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Roger Varela.</span>
            <span>{t('footer.rights')}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{t('footer.brand')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-gradient font-semibold">REVYRA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
