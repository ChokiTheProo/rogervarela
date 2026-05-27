import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ParallaxStarsBackgroundProps {
  className?: string;
  speed?: number;
}

const generateBoxShadows = (n: number) => {
  const parts: string[] = [];
  for (let i = 0; i < n; i++) {
    parts.push(
      `${Math.floor(Math.random() * 2000)}px ${Math.floor(
        Math.random() * 2000
      )}px #FFF`
    );
  }
  return parts.join(', ');
};

export function ParallaxStarsBackground({
  className,
  speed = 1,
}: ParallaxStarsBackgroundProps) {
  const isMobile = useIsMobile();
  // Drastically reduce star count on mobile for perf (1000 → 220)
  const counts = isMobile ? { s: 150, m: 50, b: 20 } : { s: 700, m: 200, b: 100 };
  const shadowsSmall = useMemo(() => generateBoxShadows(counts.s), [counts.s]);
  const shadowsMedium = useMemo(() => generateBoxShadows(counts.m), [counts.m]);
  const shadowsBig = useMemo(() => generateBoxShadows(counts.b), [counts.b]);

  const dSmall = 50 / speed;
  const dMedium = 100 / speed;
  const dBig = 150 / speed;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'fixed inset-0 -z-10 overflow-hidden pointer-events-none',
        className
      )}
    >
      <style>{`
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
        .ps-stars-1, .ps-stars-1::after { width: 1px; height: 1px; background: transparent; }
        .ps-stars-2, .ps-stars-2::after { width: 2px; height: 2px; background: transparent; }
        .ps-stars-3, .ps-stars-3::after { width: 3px; height: 3px; background: transparent; }
        .ps-stars-1::after, .ps-stars-2::after, .ps-stars-3::after {
          content: " ";
          position: absolute;
          top: 2000px;
        }
      `}</style>

      {/* Deep space radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
        }}
      />

      {/* Small stars */}
      <div
        className="ps-stars-1 absolute top-0 left-0"
        style={{
          boxShadow: shadowsSmall,
          animation: `animStar ${dSmall}s linear infinite`,
        }}
      >
        <div className="ps-stars-1" style={{ boxShadow: shadowsSmall }} />
      </div>

      {/* Medium stars */}
      <div
        className="ps-stars-2 absolute top-0 left-0"
        style={{
          boxShadow: shadowsMedium,
          animation: `animStar ${dMedium}s linear infinite`,
        }}
      >
        <div className="ps-stars-2" style={{ boxShadow: shadowsMedium }} />
      </div>

      {/* Big stars */}
      <div
        className="ps-stars-3 absolute top-0 left-0"
        style={{
          boxShadow: shadowsBig,
          animation: `animStar ${dBig}s linear infinite`,
        }}
      >
        <div className="ps-stars-3" style={{ boxShadow: shadowsBig }} />
      </div>
    </div>
  );
}

export default ParallaxStarsBackground;
