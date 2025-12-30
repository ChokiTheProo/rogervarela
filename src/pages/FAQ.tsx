import { motion } from 'framer-motion';
import { ArrowLeft, HelpCircle, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageTransition } from '@/components/PageTransition';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Perguntas Frequentes',
      subtitle: 'Respostas para as dúvidas mais comuns',
      intro: 'Encontre aqui as respostas para as perguntas mais frequentes sobre meus serviços, processos de trabalho e formas de contato.',
      lastUpdated: 'Última atualização: Dezembro 2025',
      backButton: 'Voltar',
      footerNote: 'Não encontrou sua resposta? Entre em contato diretamente.',
      faqs: [
        {
          question: 'Quais serviços você oferece?',
          answer: 'Ofereço serviços de desenvolvimento Full Stack, incluindo criação de aplicações web, mobile, sistemas SaaS, APIs, integrações e consultoria técnica. Trabalho com tecnologias modernas como React, TypeScript, Node.js, Python e muito mais.',
        },
        {
          question: 'Como funciona o processo de desenvolvimento?',
          answer: 'O processo começa com uma reunião de briefing para entender suas necessidades. Em seguida, elaboro uma proposta com escopo, prazo e investimento. Após aprovação, início o desenvolvimento com entregas incrementais e comunicação constante.',
        },
        {
          question: 'Qual o prazo médio para um projeto?',
          answer: 'O prazo varia conforme a complexidade do projeto. Projetos simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses. Sempre forneço uma estimativa personalizada após entender os requisitos.',
        },
        {
          question: 'Você trabalha com projetos internacionais?',
          answer: 'Sim! Trabalho com clientes de todo o mundo. A comunicação pode ser feita em português ou inglês, e utilizo ferramentas modernas de colaboração para garantir uma comunicação eficiente independente do fuso horário.',
        },
        {
          question: 'Como é feito o orçamento?',
          answer: 'O orçamento é personalizado para cada projeto. Após uma conversa inicial para entender suas necessidades, elaboro uma proposta detalhada com valores, prazos e entregáveis claros. Ofereço diferentes modelos de contratação.',
        },
        {
          question: 'Você oferece suporte após a entrega?',
          answer: 'Sim, ofereço suporte pós-entrega. Todos os projetos incluem um período de garantia para correção de bugs. Também disponibilizo contratos de manutenção contínua para atualizações e melhorias.',
        },
        {
          question: 'O que é a RoVR?',
          answer: 'A RoVR é minha empresa de tecnologia focada em desenvolvimento de MicroSaaS e aplicações inovadoras. Através dela, desenvolvo produtos próprios e atendo clientes que buscam soluções tecnológicas de alta qualidade.',
        },
        {
          question: 'Como posso entrar em contato?',
          answer: 'Você pode entrar em contato através do formulário na seção de contato do site, pelo LinkedIn, ou diretamente por e-mail. Respondo todas as mensagens em até 24 horas úteis.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions',
      intro: 'Find here the answers to the most frequently asked questions about my services, work processes, and contact methods.',
      lastUpdated: 'Last updated: December 2025',
      backButton: 'Back',
      footerNote: "Didn't find your answer? Contact me directly.",
      faqs: [
        {
          question: 'What services do you offer?',
          answer: 'I offer Full Stack development services, including web and mobile application creation, SaaS systems, APIs, integrations, and technical consulting. I work with modern technologies like React, TypeScript, Node.js, Python, and more.',
        },
        {
          question: 'How does the development process work?',
          answer: 'The process starts with a briefing meeting to understand your needs. Then, I prepare a proposal with scope, timeline, and investment. After approval, I start development with incremental deliveries and constant communication.',
        },
        {
          question: 'What is the average timeline for a project?',
          answer: 'The timeline varies according to project complexity. Simple projects can take 2 to 4 weeks, while more complex projects can take 2 to 6 months. I always provide a personalized estimate after understanding the requirements.',
        },
        {
          question: 'Do you work with international projects?',
          answer: 'Yes! I work with clients from all over the world. Communication can be in Portuguese or English, and I use modern collaboration tools to ensure efficient communication regardless of time zone.',
        },
        {
          question: 'How is the budget calculated?',
          answer: 'The budget is customized for each project. After an initial conversation to understand your needs, I prepare a detailed proposal with clear values, deadlines, and deliverables. I offer different contracting models.',
        },
        {
          question: 'Do you offer support after delivery?',
          answer: 'Yes, I offer post-delivery support. All projects include a warranty period for bug fixes. I also offer continuous maintenance contracts for updates and improvements.',
        },
        {
          question: 'What is RoVR?',
          answer: 'RoVR is my technology company focused on developing MicroSaaS and innovative applications. Through it, I develop my own products and serve clients looking for high-quality technological solutions.',
        },
        {
          question: 'How can I contact you?',
          answer: 'You can contact me through the form in the contact section of the website, via LinkedIn, or directly by email. I respond to all messages within 24 business hours.',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              asChild
              className="group"
            >
              <Link to="/">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ x: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ArrowLeft className="w-4 h-4 group-hover:text-primary transition-colors" />
                  <span>{t.backButton}</span>
                </motion.div>
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              animate={{ 
                boxShadow: ['0 0 20px hsl(var(--primary) / 0.2)', '0 0 40px hsl(var(--primary) / 0.4)', '0 0 20px hsl(var(--primary) / 0.2)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm text-primary font-medium">{t.lastUpdated}</span>
            </motion.div>
            
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <HelpCircle className="w-10 h-10 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
                {t.title}
              </h1>
            </motion.div>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              {t.subtitle}
            </p>
            
            <p className="text-muted-foreground/70 max-w-xl mx-auto">
              {t.intro}
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {t.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5 group-hover:text-primary transition-colors">
                      <span className="font-semibold pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground/60 text-sm">
              {t.footerNote}
            </p>
            <motion.div
              className="mt-4"
              whileHover={{ scale: 1.02 }}
            >
              <Button asChild variant="outline" className="group">
                <Link to="/contact">
                  <span>{language === 'pt' ? 'Entrar em Contato' : 'Contact Me'}</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default FAQ;
