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
    <div className="group relative h-full [perspective:1000px]">
      {/* Outer halo glow */}
      <div
        aria-hidden
        className="absolute -inset-4 bg-gradient-to-r from-primary/25 to-accent/25 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[32px]"
      />

      {/* Rotating conic border wrapper */}
      <div className="relative h-full p-[1.5px] overflow-hidden rounded-[26px] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/25">
        {/* Conic gradient spinning border */}
        <div
          aria-hidden
          className="absolute inset-[-100%] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-500 pointer-events-none"
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
          className="relative flex flex-col h-full bg-card/85 backdrop-blur-xl border border-white/10 rounded-[24px] sm:rounded-[25px] p-6 sm:p-7 overflow-hidden shadow-2xl transition-colors duration-500 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
        {/* Top glass reflection */}
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

        {/* Tags */}
        <div className="relative flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-[10.5px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.03] border-white/10 text-muted-foreground/90 transition-colors hover:bg-white/[0.08] hover:border-primary/30 hover:text-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA footer */}
        <div className="relative mt-auto flex items-center justify-between border-t border-white/5 pt-5 transition-colors duration-500 group-hover:border-primary/20">
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
          className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-br from-transparent via-transparent to-accent/10 rounded-br-[24px] sm:rounded-br-[26px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </a>
      </div>
    </div>
  );
}
