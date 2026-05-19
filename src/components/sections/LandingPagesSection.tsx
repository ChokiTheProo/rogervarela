import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface LandingPage {
  category: string;
  title: string;
  tagline: string;
  description: string;
  tools: string[];
  href: string;
}

const landingPages: LandingPage[] = [
  {
    category: 'LANDING PAGE · SAÚDE',
    title: 'Integrare Odontologia',
    tagline:
      'Landing pra clínica odontológica em Rolante/RS, com agendamento direto pelo WhatsApp.',
    description:
      'Site institucional com foco em conversão por WhatsApp, prova social do Google (4.9 / 316 avaliações), galeria da estrutura, serviços e localização. Visual clínico-humanizado, mobile-first.',
    tools: ['Lovable', 'WhatsApp Integration', 'Google Reviews'],
    href: 'https://integare-web-care.lovable.app',
  },
  {
    category: 'LANDING PAGE · INFOPRODUTO (EN)',
    title: 'Mamba Journal',
    tagline:
      'Landing em inglês pra infoproduto de mentalidade esportiva — PDF de 30 dias inspirado no Kobe Bryant.',
    description:
      'Página editorial-cinematográfica em estilo revista, com tipografia forte, marcas serializadas (Season 04, Edition N° 008) e checkout via Hotmart por US$ 9.90. Mira público de atletas e leitores fora do Brasil.',
    tools: ['Lovable', 'Hotmart', 'Copy em inglês'],
    href: 'https://mamba-journal.lovable.app',
  },
  {
    category: 'LANDING PAGE · EDTECH',
    title: 'DevStart',
    tagline:
      'Landing pra curso online de HTML, CSS e JavaScript pra iniciantes — pagamento único, acesso vitalício.',
    description:
      'Página de venda com currículo do curso, professor em destaque, prova social, oferta com gatilho de preço (R$ 297 → R$ 27,90), bônus de certificado e garantia de 7 dias.',
    tools: ['Lovable', 'checkout integrado', 'copy de oferta'],
    href: 'https://devstart.lovable.app',
  },
  {
    category: 'LANDING PAGE · BELEZA',
    title: 'Elda Souza · Espaço Beauty',
    tagline:
      'Landing pra salão de beleza em Araranguá/SC com agendamento online e WhatsApp.',
    description:
      'Site com serviços categorizados (cabelo, estética, sobrancelha, make, unha), formulário de agendamento com horários disponíveis, portfólio, avaliações verificadas e integração com WhatsApp pra fechar atendimento. Visual elegante e feminino.',
    tools: ['Lovable', 'formulário de agendamento', 'WhatsApp Integration'],
    href: 'https://eldabeauty.lovable.app',
  },
  {
    category: 'SITE INSTITUCIONAL · AGÊNCIA',
    title: 'RoVR',
    tagline:
      'Site institucional da minha marca — sites, blogs, micro-SaaS, agentes de IA e serviços internos.',
    description:
      'Apresenta o portfólio da RoVR, modelos de serviço, diferenciais (preview grátis, paga depois de aprovar) e tem multi-idioma (PT, EN, ES). É a vitrine que conecta tudo que venho construindo.',
    tools: ['Lovable', 'Multi-idioma', 'Portfólio integrado'],
    href: 'https://rovr.site',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function LandingPagesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="landing-pages"
      ref={ref}
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">Landing Pages & Sites</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-80">
            Páginas que projetei, escrevi e publiquei do zero — clínicas,
            infoprodutos, cursos, serviços locais e marca própria.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {landingPages.map((page, index) => (
            <motion.div
              key={page.title}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="h-full"
            >
              <a
                href={page.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver Landing Page do ${page.title}`}
                className="glow-card group block h-full"
              >
                <div className="glow-card-inner p-5 sm:p-6 flex flex-col h-full">
                  {/* Category chip */}
                  <span className="inline-block self-start mb-4 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] rounded-full bg-primary/10 text-primary border border-primary/20">
                    {page.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3 leading-[1.15] tracking-tight">
                    {page.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-[15px] sm:text-base text-foreground/85 font-medium mb-4 leading-[1.45] tracking-[-0.01em]">
                    {page.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-sm text-muted-foreground leading-[1.65] line-clamp-5 mb-5 flex-grow">
                    {page.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {page.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="text-[10.5px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md border-border/60 text-muted-foreground/90 hover:border-primary/40 hover:text-foreground transition-colors"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-border/30 flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-primary group-hover:text-accent transition-colors">
                    Ver página
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.2}
                    />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
