import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Github, MapPin, Clock, ExternalLink, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Entre em Contato',
      subtitle: 'Tem um projeto em mente? Vamos conversar!',
      form: {
        name: 'Seu Nome',
        email: 'Seu E-mail',
        subject: 'Assunto',
        message: 'Sua Mensagem',
        send: 'Enviar Mensagem',
      },
      info: {
        title: 'Informações de Contato',
        email: 'E-mail',
        location: 'Localização',
        locationValue: 'Caxias do Sul, RS - Brasil',
        availability: 'Disponibilidade',
        availabilityValue: 'Disponível para novos projetos',
      },
      social: 'Redes Sociais',
      rovr: 'Conheça minha startup',
    },
    en: {
      title: 'Get in Touch',
      subtitle: 'Have a project in mind? Let\'s talk!',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        location: 'Location',
        locationValue: 'Caxias do Sul, RS - Brazil',
        availability: 'Availability',
        availabilityValue: 'Available for new projects',
      },
      social: 'Social Networks',
      rovr: 'Check out my startup',
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
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
            <p className="text-muted-foreground text-lg">{t.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.form.name}</label>
                    <Input placeholder="Roger Varela" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.form.email}</label>
                    <Input type="email" placeholder="email@exemplo.com" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.form.subject}</label>
                  <Input placeholder={language === 'pt' ? 'Proposta de projeto' : 'Project proposal'} className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.form.message}</label>
                  <Textarea 
                    placeholder={language === 'pt' ? 'Descreva seu projeto ou ideia...' : 'Describe your project or idea...'} 
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  {t.form.send}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-2xl bg-gradient-card border border-border/50">
                <h3 className="text-xl font-heading font-semibold mb-6">{t.info.title}</h3>
                
                <div className="space-y-4">

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.info.location}</p>
                      <p className="text-foreground">{t.info.locationValue}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.info.availability}</p>
                      <p className="text-accent font-medium">{t.info.availabilityValue}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rovr Promo */}
              <motion.a
                href="https://revyera.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block p-6 rounded-2xl bg-gradient-primary border border-primary/30 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-primary-foreground/80 mb-1">{t.rovr}</p>
                    <h4 className="text-2xl font-heading font-bold text-primary-foreground">Rovr</h4>
                    <p className="text-sm text-primary-foreground/70 mt-1">MicroSaaS & Web Apps</p>
                  </div>
                  <ExternalLink className="w-6 h-6 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors" />
                </div>
              </motion.a>

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-gradient-card border border-border/50">
                <h3 className="text-lg font-heading font-semibold mb-4">{t.social}</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/roger-varela-4b768a189/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/ChokiTheProo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
