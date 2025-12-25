import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

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
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor Full Stack & Especialista em TI',
    'hero.subtitle': 'Transformando desafios tecnológicos em soluções inovadoras. Especializado em desenvolvimento de sistemas, suporte técnico e infraestrutura de redes.',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.github': 'GitHub',
    'hero.cta.contact': 'Contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Profissional de tecnologia apaixonado por resolver problemas complexos e criar soluções que fazem a diferença. Com experiência em desenvolvimento de aplicações, suporte técnico e administração de sistemas, busco constantemente aprimorar minhas habilidades e entregar resultados excepcionais.',
    'about.highlight1.title': 'Aprendizado Contínuo',
    'about.highlight1.desc': 'Sempre em busca de novas tecnologias e metodologias para entregar as melhores soluções.',
    'about.highlight2.title': 'Foco em Resultados',
    'about.highlight2.desc': 'Comprometido com a entrega de projetos de alta qualidade dentro dos prazos estabelecidos.',
    'about.highlight3.title': 'Trabalho em Equipe',
    'about.highlight3.desc': 'Colaboração efetiva e comunicação clara para alcançar objetivos em conjunto.',
    
    // Certifications
    'certs.title': 'Certificações & Cursos',
    'certs.subtitle': 'Trajetória acadêmica e qualificações profissionais que sustentam minha atuação no mercado.',
    
    // Experience
    'exp.title': 'Experiência Profissional',
    'exp.subtitle': 'Trajetória profissional focada em tecnologia, desenvolvimento e suporte técnico.',
    
    // Projects
    'projects.title': 'Projetos Desenvolvidos',
    'projects.subtitle': 'Uma seleção de projetos que demonstram minhas habilidades técnicas e capacidade de resolução de problemas.',
    'projects.viewGithub': 'Ver no GitHub',
    'projects.viewDemo': 'Demo',
    
    // GitHub
    'github.title': 'GitHub & Open Source',
    'github.subtitle': 'Contribuições e projetos públicos que refletem meu compromisso com a comunidade de desenvolvimento.',
    'github.repos': 'Repositórios',
    'github.followers': 'Seguidores',
    'github.following': 'Seguindo',
    'github.viewProfile': 'Ver Perfil Completo',
    
    // Awards
    'awards.title': 'Premiações & Reconhecimentos',
    'awards.subtitle': 'Reconhecimentos que validam meu compromisso com a excelência profissional.',
    
    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Conjunto de competências técnicas e interpessoais desenvolvidas ao longo da minha carreira.',
    'skills.hard': 'Hard Skills',
    'skills.soft': 'Soft Skills',
    
    // Contact
    'contact.title': 'Vamos Construir Algo Incrível Juntos?',
    'contact.subtitle': 'Estou disponível para novos projetos, oportunidades de trabalho e colaborações. Entre em contato!',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.info.email': 'E-mail',
    'contact.info.location': 'Localização',
    'contact.info.availability': 'Disponibilidade',
    'contact.info.available': 'Disponível para novas oportunidades',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.brand': 'Desenvolvido com',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.certifications': 'Certifications',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.title': 'Full Stack Developer & IT Specialist',
    'hero.subtitle': 'Transforming technological challenges into innovative solutions. Specialized in systems development, technical support, and network infrastructure.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.github': 'GitHub',
    'hero.cta.contact': 'Contact',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Technology professional passionate about solving complex problems and creating solutions that make a difference. With experience in application development, technical support, and system administration, I constantly seek to improve my skills and deliver exceptional results.',
    'about.highlight1.title': 'Continuous Learning',
    'about.highlight1.desc': 'Always seeking new technologies and methodologies to deliver the best solutions.',
    'about.highlight2.title': 'Results-Oriented',
    'about.highlight2.desc': 'Committed to delivering high-quality projects within established deadlines.',
    'about.highlight3.title': 'Team Collaboration',
    'about.highlight3.desc': 'Effective collaboration and clear communication to achieve goals together.',
    
    // Certifications
    'certs.title': 'Certifications & Courses',
    'certs.subtitle': 'Academic background and professional certifications that underpin my technical expertise.',
    
    // Experience
    'exp.title': 'Professional Experience',
    'exp.subtitle': 'Professional journey focused on technology, development, and technical support.',
    
    // Projects
    'projects.title': 'Developed Projects',
    'projects.subtitle': 'A selection of projects that demonstrate my technical skills and problem-solving abilities.',
    'projects.viewGithub': 'View on GitHub',
    'projects.viewDemo': 'Demo',
    
    // GitHub
    'github.title': 'GitHub & Open Source',
    'github.subtitle': 'Contributions and public projects that reflect my commitment to the development community.',
    'github.repos': 'Repositories',
    'github.followers': 'Followers',
    'github.following': 'Following',
    'github.viewProfile': 'View Full Profile',
    
    // Awards
    'awards.title': 'Awards & Recognition',
    'awards.subtitle': 'Recognitions that validate my commitment to professional excellence.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Set of technical and interpersonal competencies developed throughout my career.',
    'skills.hard': 'Hard Skills',
    'skills.soft': 'Soft Skills',
    
    // Contact
    'contact.title': "Let's Build Something Amazing Together?",
    'contact.subtitle': "I'm available for new projects, job opportunities, and collaborations. Get in touch!",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.info.availability': 'Availability',
    'contact.info.available': 'Available for new opportunities',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.brand': 'Built with',
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
