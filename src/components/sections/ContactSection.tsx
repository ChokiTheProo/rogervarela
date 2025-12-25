import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Clock, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export function ContactSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = language === 'pt' ? 'Nome é obrigatório' : 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length > 100) {
      newErrors.name = language === 'pt' ? 'Nome muito longo (máx 100 caracteres)' : 'Name too long (max 100 characters)';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'pt' ? 'Email é obrigatório' : 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'pt' ? 'Email inválido' : 'Invalid email';
      isValid = false;
    } else if (formData.email.trim().length > 255) {
      newErrors.email = language === 'pt' ? 'Email muito longo' : 'Email too long';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'pt' ? 'Mensagem é obrigatória' : 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === 'pt' ? 'Mensagem muito curta (mínimo 10 caracteres)' : 'Message too short (min 10 characters)';
      isValid = false;
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = language === 'pt' ? 'Mensagem muito longa (máx 1000 caracteres)' : 'Message too long (max 1000 characters)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }
      });

      if (error) {
        throw error;
      }
      
      setIsSuccess(true);
      toast({
        title: language === 'pt' ? '✅ Mensagem enviada com sucesso!' : '✅ Message sent successfully!',
        description: language === 'pt' 
          ? 'Obrigado pelo contato. Retornarei em breve!' 
          : 'Thank you for reaching out. I will get back to you soon!',
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: language === 'pt' ? '❌ Erro ao enviar mensagem' : '❌ Error sending message',
        description: language === 'pt' 
          ? 'Tente novamente mais tarde ou entre em contato por email.' 
          : 'Please try again later or contact via email.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'rogervarelav@gmail.com',
      href: 'mailto:rogervarelav@gmail.com',
    },
    {
      icon: MapPin,
      label: t('contact.info.location'),
      value: 'Brasil',
    },
    {
      icon: Clock,
      label: t('contact.info.availability'),
      value: t('contact.info.available'),
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/roger-varela-4b768a189/',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ChokiTheProo',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('contact.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-gradient-card border border-border/50"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {language === 'pt' ? 'Mensagem Enviada!' : 'Message Sent!'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'pt' 
                    ? 'Obrigado pelo contato. Retornarei em breve!' 
                    : 'Thank you for reaching out. I will get back to you soon!'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={language === 'pt' ? 'Seu nome completo' : 'Your full name'}
                    className={`bg-secondary/50 border-border/50 focus:border-primary ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={language === 'pt' ? 'seu@email.com' : 'your@email.com'}
                    className={`bg-secondary/50 border-border/50 focus:border-primary ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder={language === 'pt' ? 'Sua mensagem... (mínimo 10 caracteres)' : 'Your message... (min 10 characters)'}
                    className={`bg-secondary/50 border-border/50 focus:border-primary resize-none ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {language === 'pt' ? 'Enviando...' : 'Sending...'}
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.send')}
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="p-6 rounded-xl bg-gradient-card border border-border/50"
            >
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'pt' ? 'Me encontre nas redes' : 'Find me on social media'}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary hover:bg-primary/20 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
