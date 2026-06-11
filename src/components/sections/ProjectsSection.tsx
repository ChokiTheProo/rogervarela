import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

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
      'IA que calcula em 2 minutos quanto o autônomo deve cobrar.',
    description:
      'SaaS de precificação pra autônomos. Em 6 perguntas e 2 minutos, a IA devolve o preço ideal, com faixa mínima, faixa ideal e justificativa pronta pra mandar pro cliente. Modelo híbrido: plano único, assinatura PRO e Studio sob consulta.',
    stack: ['Low-code', 'Supabase', 'Claude', 'Abacate Pay', 'Hotmart'],
    href: 'https://preco-certo-magico.lovable.app',
  },
  {
    category: 'SaaS · Design com IA',
    title: 'Llavero.ai',
    tagline:
      'Design de chaveiros com IA pro mercado hispano, cobrando em dólar.',
    description:
      'O usuário conversa com a IA, descreve pra quem é o chaveiro — presente, devocional, pet, marca — e baixa o PDF em 300 DPI pronto pra imprimir. Monetização híbrida: assinatura mensal por tokens + packs avulsos que não expiram.',
    stack: ['Lovable', 'IA generativa', 'Hotmart'],
    href: 'https://llaveroai.lovable.app',
  },
  {
    category: 'Infoproduto · Gamer',
    title: 'Rx Otimização',
    tagline:
      'Scripts que entregam até +240 FPS sem trocar hardware.',
    description:
      'Infoproduto pra gamer brasileiro que joga em PC mediano. Pacote com scripts e tutorial em vídeo, executa como admin e em 5 minutos o PC roda como novo. Três planos com upsell claro: Básico, Pro e Elite vitalício.',
    stack: ['Low-code', 'HTML/CSS/JS', 'ChatGPT', 'Wiapy'],
    href: 'https://rxotimizacao.lovable.app',
  },
  {
    category: 'SaaS · Jurídico pra freelancer',
    title: 'ContratoZero',
    tagline:
      'Contrato com IA pra freelancer, assinado pelo celular com validade ICP-Brasil.',
    description:
      'O freelancer responde 4 perguntas, a IA monta o contrato com multa, juros e prazo já blindados, gera link e o cliente assina pelo celular com validade jurídica via ICP-Brasil. Pagamento único, acesso vitalício.',
    stack: ['Lovable', 'IA de contratos', 'ICP-Brasil'],
    href: 'https://contratozero.lovable.app',
  },
  {
    category: 'SaaS · Contabilidade',
    title: 'RovrCont',
    tagline:
      'SaaS fiscal com motor de cálculo de tributos e simulador da Reforma (CBS/IBS).',
    description:
      'Cálculo de ICMS, DIFAL, PIS, COFINS, IRPJ, CSLL, Simples Nacional com Fator R, folha de pagamento, controle de ponto, férias, rescisão e assistente NF-e — num só lugar. Inclui assistente fiscal por IA pra dúvida em tempo real.',
    stack: ['Low-code', 'Motor fiscal', 'IA fiscal', 'Stripe', 'Mercado Pago'],
    href: 'https://rovrcont.com.br',
  },
  {
    category: 'SaaS · Gestão de Clínica',
    title: 'DentFlow',
    tagline:
      'Gestão de clínica odontológica focada em auxiliar e recepcionista.',
    description:
      'Dashboard, agenda por procedimento, checklist diário de esterilização, pacientes com histórico dental, caixa, prescrições e notificações — num só sistema, com permissão por perfil e suporte a três idiomas.',
    stack: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Lovable Cloud'],
    href: 'https://dentflowbr.lovable.app',
  },
  {
    category: 'SaaS · Gestão de Empréstimos',
    title: 'Fluxen',
    tagline:
      'Controle de empréstimos e inadimplência pra quem ainda usa caderno.',
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
            7 produtos digitais reais, do papel ao checkout, usando low-code
            + IA como sócio técnico.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="h-full"
            >
              <ProjectCard
                category={project.category}
                title={project.title}
                tagline={project.tagline}
                description={project.description}
                tags={project.stack}
                href={project.href}
                ctaLabel="Ver projeto"
                ariaLabel={`Ver projeto ${project.title}: ${project.tagline}`}
                showLive
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
