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
      subtitle: 'Última atualização: Dezembro 2024',
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
      subtitle: 'Last updated: December 2024',
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Button variant="ghost" asChild className="mb-6">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Voltar' : 'Back'}
                </Link>
              </Button>

              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-gradient">{t.title}</span>
              </h1>
              <p className="text-muted-foreground">{t.subtitle}</p>
            </motion.div>

            <div className="grid gap-6 max-w-4xl">
              {t.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-card border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-heading font-semibold mb-2">{section.title}</h2>
                      <p className="text-muted-foreground">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
