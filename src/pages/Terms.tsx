import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Shield, Lock, Scale, Sparkles } from 'lucide-react';
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
      subtitle: 'Última atualização',
      date: 'Dezembro 2025',
      intro: 'Leia atentamente os termos que regem o uso deste portfólio.',
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
      footerNote: 'Dúvidas sobre os termos? Entre em contato.',
    },
    en: {
      title: 'Terms of Use',
      subtitle: 'Last updated',
      date: 'December 2025',
      intro: 'Please read carefully the terms governing the use of this portfolio.',
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
      footerNote: 'Questions about the terms? Get in touch.',
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
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button variant="ghost" asChild className="mb-6 group">
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    {language === 'pt' ? 'Voltar' : 'Back'}
                  </Link>
                </Button>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-gradient">{t.title}</span>
              </h1>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-muted-foreground">{t.subtitle}:</span>
                <motion.span 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                  animate={{ 
                    boxShadow: ['0 0 0 0 hsl(var(--primary) / 0.4)', '0 0 0 8px hsl(var(--primary) / 0)', '0 0 0 0 hsl(var(--primary) / 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.date}
                </motion.span>
              </div>
              
              <p className="text-muted-foreground max-w-2xl">{t.intro}</p>
            </motion.div>

            <div className="grid gap-6 max-w-4xl">
              {t.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: '0 20px 40px -20px hsl(var(--primary) / 0.3)'
                  }}
                  className="p-6 rounded-2xl bg-gradient-card border border-border/50 transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-primary/10 text-primary"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <section.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h2 className="text-xl font-heading font-semibold mb-2">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 max-w-4xl"
            >
              <p className="text-sm text-muted-foreground/70 text-center italic">
                {t.footerNote}
              </p>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
