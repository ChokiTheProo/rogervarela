import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.certifications': 'Certificações',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.sites': 'Blogs & Sites',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',

    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor Low-Code & No-Code',
    'hero.subtitle': 'Desenvolvo sites, landing pages e Micro-SaaS sob medida com Low-Code, No-Code e IA. Do MVP à versão de mercado — entrega ágil, código sustentável e foco em conversão.',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.github': 'GitHub',
    'hero.cta.contact': 'Contato',

    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Desenvolvo produtos digitais sob medida — de landing pages de alta conversão a Micro-SaaS completos. Combino Low-Code, No-Code e IA para entregar soluções funcionais em prazos curtos, com qualidade técnica e foco no resultado de negócio.',
    'about.highlight1.title': 'Entrega Ágil',
    'about.highlight1.desc': 'MVPs em produção em poucos dias. Ciclos curtos de iteração e validação contínua até o primeiro resultado mensurável.',
    'about.highlight2.title': 'Foco em Resultado',
    'about.highlight2.desc': 'Cada projeto parte de um objetivo de negócio claro e termina em uma solução que vende, converte ou otimiza operações.',
    'about.highlight3.title': 'Stack Moderna + IA',
    'about.highlight3.desc': 'React, TypeScript, Lovable, Supabase e IA aplicada — tecnologia atual, arquitetura escalável e zero complexidade desnecessária.',

    // Certifications
    'certs.title': 'Certificações & Cursos',
    'certs.subtitle': 'Base técnica que sustenta cada projeto entregue — formação contínua, não diploma de parede.',

    // Experience
    'exp.title': 'Experiência Profissional',
    'exp.subtitle': 'Trajetória prática em tecnologia, desenvolvimento e suporte — sempre com mão na massa.',

    // Projects
    'projects.title': 'Projetos no Ar',
    'projects.subtitle': 'Soluções em produção: SaaS, landing pages e ferramentas operando para clientes reais. Clique em qualquer projeto para acessar.',
    'projects.viewGithub': 'Ver no GitHub',
    'projects.viewDemo': 'Ver ao Vivo',

    // GitHub
    'github.title': 'GitHub',
    'github.subtitle': 'Código aberto, projetos públicos e o que aprendo construindo.',
    'github.repos': 'Repositórios',
    'github.followers': 'Seguidores',
    'github.following': 'Seguindo',
    'github.viewProfile': 'Ver Perfil Completo',

    // Awards
    'awards.title': 'Premiações',
    'awards.subtitle': 'Reconhecimentos que vieram do trabalho — não da auto-promoção.',

    // Skills
    'skills.title': 'Stack & Habilidades',
    'skills.subtitle': 'Ferramentas que uso pra entregar produto pronto, rápido e estável.',
    'skills.hard': 'Hard Skills',
    'skills.soft': 'Soft Skills',

    // Contact
    'contact.title': 'Tem uma ideia? Vamos colocar no ar.',
    'contact.subtitle': 'Sites, landing pages, Micro-SaaS ou automação com IA — me conta o que precisa e eu volto com proposta no mesmo dia.',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.info.email': 'E-mail',
    'contact.info.location': 'Localização',
    'contact.info.availability': 'Disponibilidade',
    'contact.info.available': 'Aceitando novos projetos',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.brand': 'Construído com',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.certifications': 'Certifications',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.sites': 'Blogs & Sites',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.title': 'Low-Code & No-Code Developer',
    'hero.subtitle': 'I design and develop tailored websites, landing pages and Micro-SaaS using Low-Code, No-Code and AI. From MVP to market-ready — agile delivery, maintainable code, conversion-focused.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.github': 'GitHub',
    'hero.cta.contact': 'Contact',

    // About
    'about.title': 'About Me',
    'about.description': 'I build tailored digital products — from high-conversion landing pages to full Micro-SaaS platforms. I combine Low-Code, No-Code and AI to deliver functional solutions on short timelines, with technical quality and a clear focus on business outcomes.',
    'about.highlight1.title': 'Agile Delivery',
    'about.highlight1.desc': 'MVPs in production within days. Short iteration cycles and continuous validation until the first measurable result.',
    'about.highlight2.title': 'Outcome-Driven',
    'about.highlight2.desc': 'Every project starts from a clear business goal and ends with a solution that sells, converts or streamlines operations.',
    'about.highlight3.title': 'Modern Stack + AI',
    'about.highlight3.desc': 'React, TypeScript, Lovable, Supabase and applied AI — current tech, scalable architecture and zero unnecessary complexity.',

    // Certifications
    'certs.title': 'Certifications & Courses',
    'certs.subtitle': 'Technical foundation behind every project I ship — continuous learning, not wall decoration.',

    // Experience
    'exp.title': 'Professional Experience',
    'exp.subtitle': 'Hands-on track record in technology, development and technical support.',

    // Projects
    'projects.title': 'Projects Live',
    'projects.subtitle': 'Live solutions: SaaS, landing pages and tools running for real clients. Click any project to open it.',
    'projects.viewGithub': 'View on GitHub',
    'projects.viewDemo': 'View Live',

    // GitHub
    'github.title': 'GitHub',
    'github.subtitle': 'Open source, public projects and what I learn while building.',
    'github.repos': 'Repositories',
    'github.followers': 'Followers',
    'github.following': 'Following',
    'github.viewProfile': 'View Full Profile',

    // Awards
    'awards.title': 'Awards',
    'awards.subtitle': 'Recognition earned from the work — not from self-promotion.',

    // Skills
    'skills.title': 'Stack & Skills',
    'skills.subtitle': 'The tools I use to ship product fast and keep it stable.',
    'skills.hard': 'Hard Skills',
    'skills.soft': 'Soft Skills',

    // Contact
    'contact.title': "Got an idea? Let's ship it.",
    'contact.subtitle': 'Sites, landing pages, Micro-SaaS or AI automation — tell me what you need and I come back with a proposal the same day.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.info.availability': 'Availability',
    'contact.info.available': 'Taking on new projects',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.brand': 'Built with',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.certifications': 'Certificaciones',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.sites': 'Blogs y Sitios',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Desarrollador Low-Code & No-Code',
    'hero.subtitle': 'Desarrollo sitios, landing pages y Micro-SaaS a medida con Low-Code, No-Code e IA. Del MVP a la versión de mercado — entrega ágil, código sostenible y enfoque en conversión.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.github': 'GitHub',
    'hero.cta.contact': 'Contacto',

    // About
    'about.title': 'Sobre Mí',
    'about.description': 'Construyo productos digitales que resuelven dolor real — sin gastar semanas en código boilerplate. Foco en entregar MVP funcional, página que convierte y SaaS en producción en días, no meses. Stack moderno, decisión rápida, resultado medible.',
    'about.highlight1.title': 'Velocidad de Ejecución',
    'about.highlight1.desc': 'MVP en producción en días. Iteración rápida, validación real, ciclo corto hasta el primer usuario que paga.',
    'about.highlight2.title': 'Enfoque en Resultado',
    'about.highlight2.desc': 'Cada proyecto empieza con un problema claro y termina con algo que vende, convierte o ahorra tiempo.',
    'about.highlight3.title': 'Stack Low-Code + IA',
    'about.highlight3.desc': 'React, TypeScript, Lovable, Supabase e IA aplicada. Tecnología moderna sin complicación innecesaria.',

    // Certifications
    'certs.title': 'Certificaciones & Cursos',
    'certs.subtitle': 'Base técnica detrás de cada proyecto entregado — formación continua, no diploma de pared.',

    // Experience
    'exp.title': 'Experiencia Profesional',
    'exp.subtitle': 'Trayectoria práctica en tecnología, desarrollo y soporte técnico.',

    // Projects
    'projects.title': 'Proyectos en Producción',
    'projects.subtitle': 'SaaS, landing pages y herramientas que ya están corriendo — haz clic y míralos funcionando.',
    'projects.viewGithub': 'Ver en GitHub',
    'projects.viewDemo': 'Ver en Vivo',

    // GitHub
    'github.title': 'GitHub',
    'github.subtitle': 'Código abierto, proyectos públicos y lo que aprendo construyendo.',
    'github.repos': 'Repositorios',
    'github.followers': 'Seguidores',
    'github.following': 'Siguiendo',
    'github.viewProfile': 'Ver Perfil Completo',

    // Awards
    'awards.title': 'Premios',
    'awards.subtitle': 'Reconocimientos que vinieron del trabajo — no de la auto-promoción.',

    // Skills
    'skills.title': 'Stack & Habilidades',
    'skills.subtitle': 'Las herramientas que uso para entregar producto rápido y estable.',
    'skills.hard': 'Hard Skills',
    'skills.soft': 'Soft Skills',

    // Contact
    'contact.title': '¿Tienes una idea? Vamos a lanzarla.',
    'contact.subtitle': 'Sitios, landing pages, Micro-SaaS o automatización con IA — cuéntame qué necesitas y vuelvo con propuesta el mismo día.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.info.email': 'Correo',
    'contact.info.location': 'Ubicación',
    'contact.info.availability': 'Disponibilidad',
    'contact.info.available': 'Aceptando nuevos proyectos',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.brand': 'Construido con',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-language');
      return (saved as Language) || 'pt';
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
