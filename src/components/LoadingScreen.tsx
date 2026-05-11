import { motion } from 'framer-motion';
import { memo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const LoadingScreen = memo(function LoadingScreen() {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[260px] sm:w-[450px] h-[260px] sm:h-[450px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, -25, 0], y: [0, 25, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      {/* Grid pattern - desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
      )}

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full border border-primary/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[200px] sm:w-[320px] h-[200px] sm:h-[320px] rounded-full border border-accent/15 border-dashed"
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(isMobile ? 6 : 14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            left: `${10 + (i * 13) % 80}%`,
            top: `${15 + (i * 17) % 70}%`,
            boxShadow: '0 0 8px hsl(var(--primary))',
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2.5 + (i % 3) * 0.5,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative flex flex-col items-center gap-8 z-10">
        {/* Logo container */}
        <motion.div
          className="relative"
          initial={{ scale: 0.7, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary) / 0.6), hsl(var(--accent) / 0.6))',
              filter: 'blur(30px)',
            }}
            animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.15, 0.95] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Logo Box */}
          <motion.div
            className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))',
              border: '1px solid hsl(var(--primary) / 0.3)',
              boxShadow:
                '0 0 60px hsl(var(--primary) / 0.4), inset 0 1px 0 hsl(var(--primary) / 0.2)',
              transformStyle: 'preserve-3d',
            }}
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            <span className="text-4xl sm:text-5xl font-heading font-black bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
              RV
            </span>

            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary/50 rounded-tl" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent/50 rounded-tr" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent/50 rounded-bl" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary/50 rounded-br" />
          </motion.div>

          {/* Orbiting dots */}
          {[0, 1, 2, 3].map((i) => {
            const radius = isMobile ? 75 : 95;
            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                style={{
                  marginTop: -4,
                  marginLeft: -4,
                  background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                  boxShadow: `0 0 12px ${i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))'}`,
                }}
                animate={{
                  x: [
                    Math.cos((i * Math.PI) / 2) * radius,
                    Math.cos((i * Math.PI) / 2 + Math.PI * 2) * radius,
                  ],
                  y: [
                    Math.sin((i * Math.PI) / 2) * radius,
                    Math.sin((i * Math.PI) / 2 + Math.PI * 2) * radius,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            );
          })}
        </motion.div>

        {/* Name with stagger */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-1 overflow-hidden">
            {'Roger Varela'.split('').map((char, i) => (
              <motion.span
                key={i}
                className="text-lg sm:text-xl font-heading font-bold text-foreground inline-block"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.04, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: isMobile ? 160 : 220 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="h-[2px] bg-muted/30 rounded-full overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-1/3 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)',
                boxShadow: '0 0 10px hsl(var(--primary))',
              }}
              animate={{ x: ['-100%', '400%'] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Loading label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
});
