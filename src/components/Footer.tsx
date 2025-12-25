import { Heart, Github, Linkedin, Mail, ExternalLink, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickLinks = [
    { href: '#about', label: language === 'pt' ? 'Sobre' : 'About' },
    { href: '#experience', label: language === 'pt' ? 'Experiência' : 'Experience' },
    { href: '#projects', label: language === 'pt' ? 'Projetos' : 'Projects' },
    { href: '#skills', label: language === 'pt' ? 'Habilidades' : 'Skills' },
    { href: '#contact', label: language === 'pt' ? 'Contato' : 'Contact' },
  ];

  const legalLinks = [
    { href: '/terms', label: language === 'pt' ? 'Termos de Uso' : 'Terms of Use' },
    { href: '/privacy', label: language === 'pt' ? 'Privacidade' : 'Privacy' },
    { href: '/contact', label: language === 'pt' ? 'Contato' : 'Contact' },
  ];

  return (
    <footer className="border-t border-border/50 bg-gradient-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Roger <span className="text-gradient">Varela</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              {language === 'pt' 
                ? 'Desenvolvedor Full Stack apaixonado por criar soluções inovadoras. CEO & Co-fundador da REVYERA.'
                : 'Full Stack Developer passionate about creating innovative solutions. CEO & Co-founder of REVYERA.'
              }
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Brasil</span>
            </div>
            
            {/* REVYERA Banner */}
            <a
              href="https://revyera.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-primary hover:opacity-90 transition-opacity group"
            >
              <span className="text-primary-foreground font-bold">REVYERA</span>
              <span className="text-primary-foreground/70 text-sm">MicroSaaS & Apps</span>
              <ExternalLink className="w-4 h-4 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">
              {language === 'pt' ? 'Links Rápidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">
              {language === 'pt' ? 'Legal' : 'Legal'}
            </h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-heading font-semibold mb-4">
              {language === 'pt' ? 'Redes Sociais' : 'Social'}
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/roger-varela-4b768a189/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ChokiTheProo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:rogervarelav@gmail.com"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Roger Varela.</span>
              <span>{t('footer.rights')}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{t('footer.brand')}</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <a 
                href="https://revyera.lovable.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gradient font-semibold hover:opacity-80 transition-opacity"
              >
                REVYERA
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}