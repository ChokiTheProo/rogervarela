import { motion, MotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { forwardRef, ReactNode, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

/**
 * Reusable card with animated conic-gradient border + hover glow.
 * Used across all sections for visual consistency.
 */
interface GradientCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** HSL/HEX accent color used for border + glow */
  accentColor?: string;
  /** Optional secondary accent for the static border gradient */
  borderGradient?: string;
  /** Disable the rotating animation (perf on mobile) */
  staticBorder?: boolean;
}

export const GradientCard = forwardRef<HTMLDivElement, GradientCardProps>(
  ({ children, className, innerClassName, accentColor = 'hsl(var(--primary) / 0.6)', borderGradient, staticBorder = false, ...motionProps }, ref) => {
    const conic = `conic-gradient(from var(--angle, 0deg) at 50% 50%, ${accentColor}, transparent 35%, ${accentColor} 60%, transparent 85%, ${accentColor})`;
    const fallbackBorder = borderGradient ?? `linear-gradient(135deg, ${accentColor}, transparent 70%)`;

    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -6 }}
        {...motionProps}
        className={cn('group relative rounded-2xl p-[2px] transition-all duration-500', className)}
        style={{
          backgroundImage: staticBorder ? fallbackBorder : conic,
          animation: staticBorder ? undefined : 'spin-border 8s linear infinite',
          ...(motionProps.style as CSSProperties),
        }}
      >
        {/* Outer glow on hover */}
        <div
          className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-700 -z-10"
          style={{ backgroundImage: fallbackBorder }}
        />
        {/* Static gradient overlay for depth */}
        <div
          className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundImage: fallbackBorder }}
        />
        <div className={cn('relative h-full rounded-[14px] bg-card/95 backdrop-blur-md overflow-hidden', innerClassName)}>
          {/* Subtle radial shine on hover */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at 30% 0%, ${accentColor}, transparent 60%)` }}
          />
          {children}
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = 'GradientCard';

/**
 * Reusable icon container with halo glow + glossy highlight.
 */
interface GradientIconProps {
  icon: LucideIcon;
  /** Tailwind gradient or any CSS background-image */
  gradient?: string;
  /** Color for shadow / halo */
  shadowColor?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  rotateOnHover?: boolean;
}

export function GradientIcon({
  icon: Icon,
  gradient = 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
  shadowColor = 'hsl(var(--primary) / 0.5)',
  size = 'md',
  className,
  rotateOnHover = true,
}: GradientIconProps) {
  const sizes = {
    sm: { box: 'w-10 h-10 sm:w-12 sm:h-12', icon: 'w-5 h-5 sm:w-6 sm:h-6' },
    md: { box: 'w-14 h-14 sm:w-16 sm:h-16', icon: 'w-7 h-7 sm:w-8 sm:h-8' },
    lg: { box: 'w-16 h-16 sm:w-20 sm:h-20', icon: 'w-8 h-8 sm:w-10 sm:h-10' },
  }[size];

  return (
    <div className={cn('relative inline-block', className)}>
      <div
        className="absolute -inset-2 rounded-2xl blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-500"
        style={{ backgroundImage: gradient }}
      />
      <div
        className={cn(
          'relative rounded-2xl flex items-center justify-center transition-all duration-500 ring-1 ring-white/20',
          sizes.box,
          rotateOnHover ? 'group-hover:scale-110 group-hover:-rotate-6' : 'group-hover:scale-105'
        )}
        style={{
          backgroundImage: gradient,
          boxShadow: `0 10px 30px -8px ${shadowColor}, inset 0 1px 0 0 rgba(255,255,255,0.25)`,
        }}
      >
        <div className="absolute inset-x-1 top-1 h-1/3 rounded-t-xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
        <Icon className={cn('text-white relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]', sizes.icon)} strokeWidth={2.4} />
      </div>
    </div>
  );
}
