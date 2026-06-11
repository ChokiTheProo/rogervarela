import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Rocket, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LiveProduct {
  name: string;
  category: string;
  href: string;
  taglinePt: string;
  taglineEn: string;
  taglineEs: string;
}

const liveProducts: LiveProduct[] = [
  {
    name: 'PreçoCerto',
    category: 'SaaS · Precificação',
    href: 'https://preco-certo-magico.lovable.app',
    taglinePt: 'IA que calcula o preço ideal do autônomo em 2 minutos.',
    taglineEn: 'AI that calculates the ideal freelancer price in 2 minutes.',
    taglineEs: 'IA que calcula el precio ideal del autónomo en 2 minutos.',
  },
  {
    name: 'Llavero.ai',
    category: 'SaaS · Design com IA',
    href: 'https://llaveroai.lovable.app',
    taglinePt: 'Chaveiros personalizados com IA pro mercado hispano.',
    taglineEn: 'AI-powered custom keychains for the Hispanic market.',
    taglineEs: 'Llaveros personalizados con IA para el mercado hispano.',
  },
  {
    name: 'Rx Otimização',
    category: 'Infoproduto · Gamer',
    href: 'https://rxotimizacao.lovable.app',
    taglinePt: 'Scripts que tiram até +240 FPS sem trocar hardware.',
    taglineEn: 'Scripts that boost up to +240 FPS without new hardware.',
    taglineEs: 'Scripts que sacan hasta +240 FPS sin cambiar hardware.',
  },
  {
    name: 'ContratoZero',
    category: 'SaaS · Jurídico',
    href: 'https://contratozero.lovable.app',
    taglinePt: 'Contrato profissional pra freelancer em 90 segundos.',
    taglineEn: 'Professional freelancer contract in 90 seconds.',
    taglineEs: 'Contrato profesional para freelancer en 90 segundos.',
  },
  {
    name: 'RovrCont',
    category: 'SaaS · Contabilidade',
    href: 'https://rovrcont.com.br',
    taglinePt: 'Plataforma fiscal e de DP pra contadores e PMEs.',
    taglineEn: 'Tax and HR platform for accountants and SMBs.',
    taglineEs: 'Plataforma fiscal y de RRHH para contadores y Pymes.',
  },
  {
    name: 'DentFlow',
    category: 'SaaS · Gestão de Clínica',
    href: 'https://dentflowbr.lovable.app',
    taglinePt: 'Gestão de clínica odontológica completa.',
    taglineEn: 'Complete dental clinic management.',
    taglineEs: 'Gestión completa de clínica odontológica.',
  },
  {
    name: 'Fluxen',
    category: 'SaaS · Empréstimos',
    href: 'https://fluxenvenda.lovable.app/',
    taglinePt: 'Controle profissional de empréstimos pra autônomo.',
    taglineEn: 'Professional loan control for freelancers.',
    taglineEs: 'Control profesional de préstamos para autónomos.',
  },
];

export function LiveProductsSection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const getTagline = (p: LiveProduct) => {
    if (language === 'pt') return p.taglinePt;
    if (language === 'es') return p.taglineEs;
    return p.taglineEn;
  };

  const getTitle = () => {
    if (language === 'pt') return 'Produtos no Ar';
    if (language === 'es') return 'Productos en Vivo';
    return 'Products Live';
  };

  const getSubtitle = () => {
    if (language === 'pt')
      return '7 produtos digitais em produção, com checkout ativo e usuários reais — do MVP ao mercado.';
    if (language === 'es')
      return '7 productos digitales en producción, con checkout activo y usuarios reales — del MVP al mercado.';
    return '7 digital products in production, with active checkout and real users — from MVP to market.';
  };

  const getCta = () => {
    if (language === 'pt') return 'Acessar';
    if (language === 'es') return 'Acceder';
    return 'Open';
  };

  const getCountLabel = () => {
    if (language === 'pt') return 'Produtos ativos';
    if (language === 'es') return 'Productos activos';
    return 'Active products';
  };

  return (
    <section id="live-products" className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{getCountLabel()} — 7</span>
          </div>
          <h2 className="section-title mb-4">
            <span className="text-gradient">{getTitle()}</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-80 max-w-2xl">{getSubtitle()}</p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {liveProducts.map((product, index) => (
            <motion.a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
              className="group relative block p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:bg-card"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </span>
                  <h3 className="font-heading font-bold text-foreground text-base mt-0.5 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Live</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {getTagline(product)}
              </p>
              <div className="flex items-center gap-1.5 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>{getCta()}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
