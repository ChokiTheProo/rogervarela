import { motion } from 'framer-motion';
import { memo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const LoadingScreen = memo(function LoadingScreen() {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Aurora gradient sweep */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] rounded-full"
          style={{
            background:
              'radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] rounded-full"
          style={{
            background:
              'radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      {/* Subtle grid - desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
        />
      )}

      {/* Floating particles - reduced */}
      {[...Array(isMobile ? 4 : 8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary pointer-events-none"
          style={{
            left: `${15 + (i * 17) % 70}%`,
            top: `${20 + (i * 23) % 60}%`,
            boxShadow: '0 0 10px hsl(var(--primary))',
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: 3 + (i % 3) * 0.6,
            repeat: Infinity,
            delay: i * 0.25,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative flex flex-col items-center gap-7 sm:gap-9 z-10 px-6">
        {/* Logo container */}
        <motion.div
          className="relative"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Soft pulsing aura */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                'linear-gradient(135deg, hsl(var(--primary) / 0.5), hsl(var(--accent) / 0.5))',
              filter: 'blur(40px)',
            }}
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Gradient border logo */}
          <div
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[1.5px]"
            style={{
              background:
                'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
              boxShadow: '0 0 60px hsl(var(--primary) / 0.35)',
            }}
          >
            <div className="w-full h-full rounded-[14px] bg-background/95 backdrop-blur-md flex items-center justify-center">
              <motion.span
                className="text-3xl sm:text-4xl font-heading font-black bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent tracking-tighter"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                RV
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-[1px] overflow-hidden">
            {'Roger Varela'.split('').map((char, i) => (
              <motion.span
                key={i}
                className="text-base sm:text-lg font-heading font-semibold text-foreground/90 inline-block tracking-wide"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.035, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: isMobile ? 140 : 200 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="h-[2px] bg-foreground/10 rounded-full overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-1/3 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)',
                boxShadow: '0 0 12px hsl(var(--primary) / 0.8)',
              }}
              animate={{ x: ['-100%', '400%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Loading label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-muted-foreground/80"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              Loading
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
});
