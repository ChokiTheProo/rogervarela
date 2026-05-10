import { LucideIcon, Sparkles, Zap, Rocket, ShieldCheck, Layers, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type BentoSize = "1x1" | "2x1" | "1x2" | "2x2";

export interface BentoItem {
  titulo: string;
  descricao: string;
  icone: LucideIcon;
  tamanho: BentoSize;
  accent?: boolean;
}

const sizeClasses: Record<BentoSize, string> = {
  "1x1": "md:col-span-1 md:row-span-1",
  "2x1": "md:col-span-2 md:row-span-1",
  "1x2": "md:col-span-1 md:row-span-2",
  "2x2": "md:col-span-2 md:row-span-2",
};

interface BentoCardProps extends BentoItem {
  className?: string;
}

export function BentoCard({ titulo, descricao, icone: Icon, tamanho, accent, className }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6",
        "backdrop-blur-xl bg-white/[0.03] border border-white/10",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:bg-white/[0.06]",
        "min-h-[180px] flex flex-col justify-between",
        sizeClasses[tamanho],
        accent && [
          "border-[#ccff00]/40 bg-[#ccff00]/[0.04]",
          "shadow-[0_0_30px_-10px_rgba(204,255,0,0.4)]",
          "hover:shadow-[0_0_50px_-5px_rgba(204,255,0,0.6)]",
          "hover:border-[#ccff00]/70",
        ],
        !accent && "hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)]",
        className,
      )}
    >
      {accent && (
        <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#ccff00]/20 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
      )}

      <div className="relative z-10 flex items-start justify-between">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl",
            "bg-white/5 border border-white/10",
            accent && "bg-[#ccff00]/10 border-[#ccff00]/30",
          )}
        >
          <Icon className={cn("h-5 w-5", accent ? "text-[#ccff00]" : "text-white/80")} />
        </div>
      </div>

      <div className="relative z-10 mt-6">
        <h3 className={cn("text-lg font-semibold tracking-tight", accent ? "text-[#ccff00]" : "text-white")}>
          {titulo}
        </h3>
        <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{descricao}</p>
      </div>
    </div>
  );
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("min-h-screen w-full bg-[#0a0a0a] py-16 px-4 md:px-8", className)}>
      <div
        className={cn(
          "mx-auto max-w-6xl grid gap-4",
          "grid-cols-1 md:grid-cols-3 md:auto-rows-[180px]",
        )}
      >
        {items.map((item, i) => (
          <BentoCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export const exemploItens: BentoItem[] = [
  {
    titulo: "Performance extrema",
    descricao: "Renderização otimizada com lazy loading e cache inteligente para experiências fluidas.",
    icone: Zap,
    tamanho: "2x2",
    accent: true,
  },
  {
    titulo: "Design moderno",
    descricao: "Componentes refinados com glassmorphism e microinterações.",
    icone: Sparkles,
    tamanho: "1x1",
  },
  {
    titulo: "Segurança nativa",
    descricao: "RLS, autenticação e criptografia por padrão.",
    icone: ShieldCheck,
    tamanho: "1x1",
  },
  {
    titulo: "Deploy em segundos",
    descricao: "Do código ao ar com um clique. Sem configuração, sem fricção.",
    icone: Rocket,
    tamanho: "2x1",
  },
  {
    titulo: "Arquitetura modular",
    descricao: "Componentes desacoplados que escalam com seu produto.",
    icone: Layers,
    tamanho: "1x1",
  },
  {
    titulo: "IA integrada",
    descricao: "Modelos de ponta prontos para uso, sem chaves de API.",
    icone: Wand2,
    tamanho: "1x1",
  },
];
