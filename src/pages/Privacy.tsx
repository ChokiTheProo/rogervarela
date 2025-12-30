import { motion } from 'framer-motion';
import { ArrowLeft, Eye, Database, Cookie, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

export default function Privacy() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Política de Privacidade',
      subtitle: 'Última atualização: Dezembro 2025',
      intro: 'Sua privacidade é importante. Este documento explica como tratamos suas informações.',
      sections: [
        {
          icon: Eye,
          title: 'Coleta de Dados',
          content: 'Este portfólio não coleta dados pessoais automaticamente. Apenas as informações enviadas voluntariamente através do formulário de contato são armazenadas para fins de comunicação.',
        },
        {
          icon: Database,
          title: 'Uso das Informações',
          content: 'As informações coletadas são usadas exclusivamente para responder às suas mensagens e estabelecer contato profissional. Não compartilhamos seus dados com terceiros.',
        },
        {
          icon: Cookie,
          title: 'Cookies e Armazenamento Local',
          content: 'Utilizamos localStorage apenas para salvar sua preferência de idioma (PT/EN). Não usamos cookies de rastreamento ou publicidade.',
        },
        {
          icon: Mail,
          title: 'Contato',
          content: 'Para questões sobre privacidade ou solicitação de remoção de dados, entre em contato através do e-mail disponível na página de contato.',
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      subtitle: 'Last updated: December 2025',
      intro: 'Your privacy matters. This document explains how we handle your information.',
      sections: [
        {
          icon: Eye,
          title: 'Data Collection',
          content: 'This portfolio does not automatically collect personal data. Only information voluntarily submitted through the contact form is stored for communication purposes.',
        },
        {
          icon: Database,
          title: 'Use of Information',
          content: 'The information collected is used exclusively to respond to your messages and establish professional contact. We do not share your data with third parties.',
        },
        {
          icon: Cookie,
          title: 'Cookies and Local Storage',
          content: 'We use localStorage only to save your language preference (PT/EN). We do not use tracking or advertising cookies.',
        },
        {
          icon: Mail,
          title: 'Contact',
          content: 'For privacy questions or data removal requests, please contact us via the email available on the contact page.',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Button variant="ghost" asChild className="mb-6 hover:bg-primary/10 transition-colors">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Voltar' : 'Back'}
                </Link>
              </Button>

              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                  <span className="text-gradient">{t.title}</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-4">{t.intro}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {t.subtitle}
                </div>
              </div>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid gap-6 md:gap-8 max-w-4xl">
              {t.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-start gap-4 md:gap-6">
                    <motion.div 
                      className="p-3 md:p-4 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <section.icon className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 max-w-4xl"
            >
              <div className="p-4 rounded-xl bg-muted/50 border border-border/30">
                <p className="text-sm text-muted-foreground text-center">
                  {language === 'pt' 
                    ? 'Este documento pode ser atualizado periodicamente. Recomendamos que você o revise regularmente.'
                    : 'This document may be updated periodically. We recommend reviewing it regularly.'}
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
