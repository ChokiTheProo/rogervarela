import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Shield, Lock, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

export default function Terms() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Termos de Uso',
      subtitle: 'Última atualização: Dezembro 2024',
      sections: [
        {
          icon: FileText,
          title: 'Aceitação dos Termos',
          content: 'Ao acessar e usar este portfólio, você concorda com estes termos de uso. Este site é apenas para fins informativos e de apresentação profissional.',
        },
        {
          icon: Shield,
          title: 'Propriedade Intelectual',
          content: 'Todo o conteúdo deste site, incluindo textos, imagens, código e design, é de propriedade de Roger Varela. O uso não autorizado é proibido.',
        },
        {
          icon: Lock,
          title: 'Privacidade',
          content: 'Respeitamos sua privacidade. Não coletamos dados pessoais sem seu consentimento. Formulários de contato são usados apenas para comunicação direta.',
        },
        {
          icon: Scale,
          title: 'Limitação de Responsabilidade',
          content: 'As informações são fornecidas "como estão". Não nos responsabilizamos por decisões tomadas com base no conteúdo apresentado.',
        },
      ],
    },
    en: {
      title: 'Terms of Use',
      subtitle: 'Last updated: December 2024',
      sections: [
        {
          icon: FileText,
          title: 'Acceptance of Terms',
          content: 'By accessing and using this portfolio, you agree to these terms of use. This site is for informational and professional presentation purposes only.',
        },
        {
          icon: Shield,
          title: 'Intellectual Property',
          content: 'All content on this site, including text, images, code, and design, is the property of Roger Varela. Unauthorized use is prohibited.',
        },
        {
          icon: Lock,
          title: 'Privacy',
          content: 'We respect your privacy. We do not collect personal data without your consent. Contact forms are used only for direct communication.',
        },
        {
          icon: Scale,
          title: 'Limitation of Liability',
          content: 'Information is provided "as is". We are not responsible for decisions made based on the content presented.',
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
