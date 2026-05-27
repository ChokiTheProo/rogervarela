import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  category: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  ctaLabel?: string;
  ariaLabel?: string;
  showLive?: boolean;
}

export function ProjectCard({
  category,
  title,
  tagline,
  description,
  tags,
  href,
  ctaLabel = 'Ver projeto',
  ariaLabel,
  showLive = true,
}: ProjectCardProps) {
  return (
    <div
      className="group relative h-full"
      style={{ contain: 'layout paint' }}
    >
      {/* Outer halo glow — consistent inset/blur across breakpoints */}
      <div
        aria-hidden
        className="absolute -inset-3 bg-gradient-to-r from-primary/25 to-accent/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[28px]"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Pre-rendered hover shadow layer */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: '0 20px 50px -15px hsl(var(--primary) / 0.35)',
        }}
      />

      {/* Wrapper — unified radius so conic border looks identical at all sizes */}
      <div
        className="relative h-full p-[1.5px] overflow-hidden rounded-[24px] transition-transform duration-400 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Conic gradient spinning border */}
        <div
          aria-hidden
          className="absolute inset-[-100%] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-400 pointer-events-none"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 20%, hsl(var(--primary)) 40%, hsl(var(--accent)) 50%, hsl(var(--primary)) 60%, transparent 80%)',
          }}
        />

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel ?? `${ctaLabel} — ${title}: ${tagline}`}
          className="relative flex flex-col h-full min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] bg-card/90 backdrop-blur-md border border-white/10 rounded-[22.5px] p-5 sm:p-6 lg:p-7 overflow-hidden shadow-xl hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          style={{ transition: 'border-color 300ms ease' }}
        >
          {/* Top glass reflection — static */}
          <div
            aria-hidden
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none"
          />

          {/* Category chip */}
          <span className="relative inline-block self-start mb-5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.15em] rounded-full bg-primary/10 text-primary border border-primary/20">
            {category}
          </span>

          {/* Title */}
          <h3 className="relative text-xl sm:text-2xl font-heading font-extrabold text-foreground mb-2 leading-[1.15] tracking-tight transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>

          {/* Tagline */}
          <p className="relative text-[13.5px] sm:text-sm font-semibold text-accent/90 leading-snug mb-5">
            {tagline}
          </p>

          {/* Description */}
          <p className="relative text-[13.5px] sm:text-sm text-muted-foreground leading-[1.65] line-clamp-5 mb-6 flex-grow">
            {description}
          </p>

          {/* Tags — no per-tag transitions to avoid many style recalcs */}
          <div className="relative flex flex-wrap gap-1.5 mb-6">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[10.5px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.03] border-white/10 text-muted-foreground/90"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA footer */}
          <div className="relative mt-auto flex items-center justify-between border-t border-white/5 pt-5">
            <span className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wide text-foreground">
              <span className="relative">
                {ctaLabel}
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowUpRight
                className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.4}
              />
            </span>

            {showLive && (
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_hsl(var(--accent)/0.6)] animate-pulse" />
                <span className="text-[9.5px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground/70">
                  Live
                </span>
              </span>
            )}
          </div>

          {/* Bottom corner highlight on hover */}
          <div
            aria-hidden
            className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-transparent via-transparent to-accent/10 rounded-br-[22.5px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </a>
      </div>
    </div>
  );
}
