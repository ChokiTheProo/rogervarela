import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  category: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
}

const projects: Project[] = [
  {
    category: 'SaaS · Precificação',
    title: 'PreçoCerto',
    tagline:
      'A IA que calcula em 2 minutos quanto o autônomo brasileiro deveria estar cobrando.',
    description:
      'SaaS de precificação pra autônomos. Em 6 perguntas e 2 minutos, a IA devolve o preço ideal, com faixa mínima, faixa ideal e justificativa pronta pra mandar pro cliente. Modelo híbrido: plano único, assinatura PRO e Studio sob consulta.',
    stack: ['Low-code', 'Supabase', 'Claude', 'Abacate Pay', 'Hotmart'],
    href: 'https://preco-certo-magico.lovable.app',
  },
  {
    category: 'SaaS · Design com IA',
    title: 'Llavero.ai',
    tagline:
      'Chaveiros personalizados com IA pro mercado hispano, prontos pra imprimir em 60 segundos.',
    description:
      'O usuário conversa com a IA, descreve pra quem é o chaveiro — presente, devocional, pet, marca — e baixa o PDF em 300 DPI pronto pra imprimir. Monetização híbrida: assinatura mensal por tokens + packs avulsos que não expiram.',
    stack: ['Lovable', 'IA generativa', 'Hotmart'],
    href: 'https://llaveroai.lovable.app',
  },
  {
    category: 'Infoproduto · Gamer',
    title: 'Rx Otimização',
    tagline:
      'Scripts que tiram até +240 FPS de PCs de gamer sem trocar hardware.',
    description:
      'Infoproduto pra gamer brasileiro que joga em PC mediano. Pacote com scripts e tutorial em vídeo, executa como admin e em 5 minutos o PC roda como novo. Três planos com upsell claro: Básico, Pro e Elite vitalício.',
    stack: ['Low-code', 'HTML/CSS/JS', 'ChatGPT', 'Wiapy'],
    href: 'https://rxotimizacao.lovable.app',
  },
  {
    category: 'SaaS · Jurídico pra freelancer',
    title: 'ContratoZero',
    tagline:
      'Contrato profissional pra freelancer em 90 segundos, com cláusulas anti-calote.',
    description:
      'O freelancer responde 4 perguntas, a IA monta o contrato com multa, juros e prazo já blindados, gera link e o cliente assina pelo celular com validade jurídica via ICP-Brasil. Pagamento único, acesso vitalício.',
    stack: ['Lovable', 'IA de contratos', 'ICP-Brasil'],
    href: 'https://contratozero.lovable.app',
  },
  {
    category: 'SaaS · Contabilidade',
    title: 'RovrCont',
    tagline:
      'Plataforma fiscal, tributária e de DP pra contadores e PMEs brasileiras.',
    description:
      'Cálculo de ICMS, DIFAL, PIS, COFINS, IRPJ, CSLL, Simples Nacional com Fator R, folha de pagamento, controle de ponto, férias, rescisão e assistente NF-e — num só lugar. Inclui assistente fiscal por IA pra dúvida em tempo real.',
    stack: ['Low-code', 'Motor fiscal', 'IA fiscal', 'Stripe', 'Mercado Pago'],
    href: 'https://rovrcont.com.br',
  },
  {
    category: 'SaaS · Gestão de Clínica',
    title: 'DentFlow',
    tagline:
      'Gestão de clínica odontológica feita pra auxiliar e recepcionista, não pro dentista.',
    description:
      'Dashboard, agenda por procedimento, checklist diário de esterilização, pacientes com histórico dental, caixa, prescrições e notificações — num só sistema, com permissão por perfil e suporte a três idiomas.',
    stack: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Lovable Cloud'],
    href: 'https://dentflowbr.lovable.app',
  },
  {
    category: 'SaaS · Gestão de Empréstimos',
    title: 'Fluxen',
    tagline:
      'Controle profissional de empréstimos pra autônomo e pequeno negócio brasileiro.',
    description:
      'Cadastro de clientes, parcelas automáticas, dashboard em tempo real e controle de inadimplência num só sistema. Assinatura mensal acessível, sem taxa de adesão, com acesso em qualquer dispositivo.',
    stack: ['Lovable', 'Dashboard responsivo', 'Marca RoVR'],
    href: 'https://fluxenvenda.lovable.app/',
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

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 sm:py-24 bg-secondary/20 relative overflow-hidden"
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
            <span className="text-gradient">Projetos que construí sozinho</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-80">
            Sete produtos digitais reais, do papel ao checkout, usando low-code
            + IA como sócio técnico.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="h-full"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver projeto ${project.title}: ${project.tagline}`}
                className="glow-card group block h-full"
              >
                <div className="glow-card-inner p-5 sm:p-6 flex flex-col h-full">
                  {/* Category chip */}
                  <span className="inline-block self-start mb-4 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] rounded-full bg-primary/10 text-primary border border-primary/20">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3 leading-[1.15] tracking-tight">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-[15px] sm:text-base text-foreground/85 font-medium mb-4 leading-[1.45] tracking-[-0.01em]">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-sm text-muted-foreground leading-[1.65] line-clamp-5 mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-[10.5px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md border-border/60 text-muted-foreground/90 hover:border-primary/40 hover:text-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-border/30 flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-primary group-hover:text-accent transition-colors">
                    Ver projeto
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
