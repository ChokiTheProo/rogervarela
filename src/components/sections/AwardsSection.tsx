import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, ExternalLink, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ImageZoom } from '@/components/ui/image-zoom';
import qitecProject from '@/assets/qitec-project.png';
import qitecAward from '@/assets/qitec-award.png';

export function AwardsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageLeftX = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 50]);
  const imageRightX = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);

  return (
    <section id="awards" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('awards.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t('awards.subtitle')}</p>
        </motion.div>

        {/* Main Award - QITEC Bronze Medal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto mb-12"
          style={{ rotate: cardRotate }}
        >
          <div className="relative p-8 rounded-3xl bg-gradient-card border-2 border-primary/30 overflow-hidden">
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40">
                <Medal className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-bold text-sm">
                  {language === 'pt' ? 'Medalha de Bronze' : 'Bronze Medal'}
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                style={{ x: imageLeftX }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-border/50">
                  <ImageZoom 
                    src={qitecProject} 
                    alt="QITEC 2023 Project Presentation"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  {language === 'pt' ? 'Apresentação do projeto na QITEC 2023' : 'Project presentation at QITEC 2023'}
                </p>
              </motion.div>

              {/* Award Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                style={{ x: imageRightX }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-border/50">
                  <ImageZoom 
                    src={qitecAward} 
                    alt="QITEC 2023 Bronze Medal Award Ceremony"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  {language === 'pt' ? 'Cerimônia de premiação - Medalha de Bronze' : 'Award ceremony - Bronze Medal'}
                </p>
              </motion.div>
            </div>

            {/* Award Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-amber-400" />
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  QITEC 2023
                </h3>
              </div>
              
              <p className="text-primary font-medium text-lg mb-2">
                QI Faculdade e Escola Técnica
              </p>
              
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                {language === 'pt' 
                  ? 'Premiação de Bronze na feira de tecnologia QITEC 2023 pelo desenvolvimento de projeto inovador de IoT: "Tone para Coleta de Óleo com Alerta Automático de Nível para Condições Seguras". Solução criativa para automação e monitoramento em tempo real.'
                  : 'Bronze Award at the QITEC 2023 technology fair for developing an innovative IoT project: "Oil Collection Tank with Automatic Level Alert for Safe Conditions". Creative solution for automation and real-time monitoring.'}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">IoT</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">Arduino</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  {language === 'pt' ? 'Sensores' : 'Sensors'}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  {language === 'pt' ? 'Automação' : 'Automation'}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">SOLACYT</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">MOSTRATEC</span>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="https://qi.edu.br/qitec-2023/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {language === 'pt' ? 'Ver Evento QITEC' : 'View QITEC Event'}
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="/downloads/certificado-qitec.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    {language === 'pt' ? 'Baixar Certificado' : 'Download Certificate'}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
