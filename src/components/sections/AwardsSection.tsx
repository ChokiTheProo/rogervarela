import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, ExternalLink, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ImageZoom } from '@/components/ui/image-zoom';
import { useIsMobile } from '@/hooks/use-mobile';
import qitecProject from '@/assets/qitec-project.png';
import qitecAward from '@/assets/qitec-award.png';

export function AwardsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Desativar animações de parallax no mobile para evitar layout "torto"
  const imageLeftX = useTransform(scrollYProgress, [0, 0.5, 1], isMobile ? [0, 0, 0] : [-50, 0, 50]);
  const imageRightX = useTransform(scrollYProgress, [0, 0.5, 1], isMobile ? [0, 0, 0] : [50, 0, -50]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], isMobile ? [0, 0, 0] : [2, 0, -2]);

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
          <div className="relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-card border-2 border-primary/30 overflow-hidden">
            {/* Badge */}
            <div className="flex justify-center sm:absolute sm:top-4 sm:right-4 z-10 mb-4 sm:mb-0">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-500/20 border border-amber-500/40">
                <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <span className="text-amber-400 font-bold text-xs sm:text-sm">
                  {language === 'pt' ? 'Medalha de Bronze' : language === 'es' ? 'Medalla de Bronce' : 'Bronze Medal'}
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
                  {language === 'pt' ? 'Apresentação do projeto na QITEC 2023' : language === 'es' ? 'Presentación del proyecto en QITEC 2023' : 'Project presentation at QITEC 2023'}
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
                  {language === 'pt' ? 'Cerimônia de premiação - Medalha de Bronze' : language === 'es' ? 'Ceremonia de premiación - Medalla de Bronce' : 'Award ceremony - Bronze Medal'}
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
              
              {/* Problema */}
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  {language === 'pt' ? 'Problema' : language === 'es' ? 'Problema' : 'Problem'}
                </h4>
                <p className="text-muted-foreground max-w-3xl mx-auto text-sm">
                  {language === 'pt' 
                    ? 'O óleo de cozinha é um grave problema ambiental: 1 litro descartado incorretamente contamina até 25 mil litros de água. Hoje, estes óleos usados têm valor comercial e podem ser transformados em produtos de limpeza e biocombustível. Porém, são poucos pontos de coleta nas cidades e as pessoas não têm conhecimento sobre eles.'
                    : language === 'es'
                    ? 'El aceite de cocina es un grave problema ambiental: 1 litro desechado incorrectamente contamina hasta 25 mil litros de agua. Hoy, estos aceites usados tienen valor comercial y pueden transformarse en productos de limpieza y biocombustible. Sin embargo, hay pocos puntos de recolección en las ciudades y las personas desconocen su existencia.'
                    : 'Cooking oil is a serious environmental problem: 1 liter improperly disposed of contaminates up to 25,000 liters of water. Today, these used oils have commercial value and can be transformed into cleaning products and biofuel. However, there are few collection points in cities and people are unaware of them.'}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  {language === 'pt' ? 'Relevância' : language === 'es' ? 'Relevancia' : 'Relevance'}
                </h4>
                <p className="text-muted-foreground max-w-3xl mx-auto text-sm">
                  {language === 'pt' 
                    ? 'A quantidade de água contaminada por apenas 1 litro de óleo seria suficiente para o uso de uma pessoa por 6 meses. Dos 3,9 bilhões de litros de óleo vegetal utilizado no Brasil por ano, apenas 30 milhões são reciclados (menos de 0,1%), implicando que 99,99% é descartado de formas não ideais.'
                    : language === 'es'
                    ? 'La cantidad de agua contaminada por solo 1 litro de aceite sería suficiente para el uso de una persona durante 6 meses. De los 3,9 mil millones de litros de aceite vegetal utilizado en Brasil por año, solo 30 millones son reciclados (menos del 0,1%), lo que implica que el 99,99% se desecha de formas no ideales.'
                    : 'The amount of water contaminated by just 1 liter of oil would be enough for one person to use for 6 months. Of the 3.9 billion liters of vegetable oil used in Brazil per year, only 30 million are recycled (less than 0.1%), implying that 99.99% is disposed of in non-ideal ways.'}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  {language === 'pt' ? 'Solução' : language === 'es' ? 'Solución' : 'Solution'}
                </h4>
                <p className="text-muted-foreground max-w-3xl mx-auto text-sm">
                  {language === 'pt' 
                    ? 'Desenvolvimento de um tonel de recolhimento de óleo equipado com componentes eletrônicos de baixo custo: sensor de nível sem contato para identificar quando o recipiente está cheio, comunicação via rede LoRa para avisar a empresa coletora, e funcionamento garantido por Arduino alimentado por placa solar e bateria recarregável.'
                    : language === 'es'
                    ? 'Desarrollo de un barril de recolección de aceite equipado con componentes electrónicos de bajo costo: sensor de nivel sin contacto para identificar cuándo el recipiente está lleno, comunicación vía red LoRa para avisar a la empresa recolectora, y funcionamiento garantizado por Arduino alimentado por panel solar y batería recargable.'
                    : 'Development of an oil collection barrel equipped with low-cost electronic components: non-contact level sensor to identify when the container is full, LoRa network communication to notify the collection company, and operation guaranteed by Arduino powered by solar panel and rechargeable battery.'}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  {language === 'pt' ? 'Trabalhos Futuros' : language === 'es' ? 'Trabajos Futuros' : 'Future Work'}
                </h4>
                <p className="text-muted-foreground max-w-3xl mx-auto text-sm">
                  {language === 'pt' 
                    ? 'Adaptar o sistema para containers, lixeiras de material sólido e ralos/bueiros. Assim, impactamos em logística e ambientalmente, evitando acúmulo de lixo e enchentes provocadas por entupimentos não identificados.'
                    : language === 'es'
                    ? 'Adaptar el sistema para contenedores, basureros de material sólido y desagües/alcantarillas. Así, impactamos en logística y ambientalmente, evitando acumulación de basura e inundaciones provocadas por obstrucciones no identificadas.'
                    : 'Adapt the system for containers, solid waste bins and drains/manholes. This way, we impact logistics and the environment, avoiding waste accumulation and floods caused by unidentified blockages.'}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">IoT</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">Arduino</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">LoRa</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  {language === 'pt' ? 'Energia Solar' : language === 'es' ? 'Energía Solar' : 'Solar Power'}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  {language === 'pt' ? 'Sensores' : language === 'es' ? 'Sensores' : 'Sensors'}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  {language === 'pt' ? 'Sustentabilidade' : language === 'es' ? 'Sostenibilidad' : 'Sustainability'}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">SOLACYT</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">MOSTRATEC</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
                <Button variant="heroOutline" size="default" className="w-full sm:w-auto" asChild>
                  <a href="https://qi.edu.br/qitec-2023/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {language === 'pt' ? 'Ver Evento QITEC' : language === 'es' ? 'Ver Evento QITEC' : 'View QITEC Event'}
                  </a>
                </Button>
                <Button variant="glass" size="default" className="w-full sm:w-auto" asChild>
                  <a href="/downloads/modelo-qitec.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    {language === 'pt' ? 'Baixar Poster do Projeto' : language === 'es' ? 'Descargar Póster del Proyecto' : 'Download Project Poster'}
                  </a>
                </Button>
                <Button variant="glass" size="default" className="w-full sm:w-auto" asChild>
                  <a href="/downloads/certificado-qitec.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    {language === 'pt' ? 'Baixar Certificado' : language === 'es' ? 'Descargar Certificado' : 'Download Certificate'}
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
