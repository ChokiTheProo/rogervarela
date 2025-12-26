import { motion } from 'framer-motion';
import { memo } from 'react';

export const LoadingScreen = memo(function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Simple animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Single rotating ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -ml-[200px] -mt-[200px] rounded-full border border-primary/20"
          animate={{ rotate: 360, scale: [1, 1.02, 1] }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        />
        
        {/* Minimal floating particles - reduced to 8 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 4) * 15}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Logo Container */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Simplified 3D Logo */}
        <motion.div
          className="relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-2xl blur-2xl"
            animate={{ opacity: [0.4, 0.6, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Logo Box */}
          <motion.div
            className="relative w-28 h-28 rounded-2xl bg-gradient-card border border-primary/30 flex items-center justify-center"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
              boxShadow: '0 0 40px hsl(var(--primary) / 0.3)',
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.span
              className="text-4xl font-heading font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
            >
              RV
            </motion.span>
          </motion.div>

          {/* Orbiting dots - reduced to 3 */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-accent"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-5px',
                marginLeft: '-5px',
                boxShadow: '0 0 8px hsl(var(--primary) / 0.5)',
              }}
              animate={{
                x: [
                  Math.cos((i * 2 * Math.PI) / 3) * 70,
                  Math.cos((i * 2 * Math.PI) / 3 + Math.PI) * 70,
                  Math.cos((i * 2 * Math.PI) / 3) * 70,
                ],
                y: [
                  Math.sin((i * 2 * Math.PI) / 3) * 70,
                  Math.sin((i * 2 * Math.PI) / 3 + Math.PI) * 70,
                  Math.sin((i * 2 * Math.PI) / 3) * 70,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-3">
          <motion.p
            className="text-lg font-heading font-semibold text-foreground"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Roger Varela
          </motion.p>

          {/* Simplified loading bar */}
          <div className="w-40 h-1 bg-muted/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Loading dots */}
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [-3, 3, -3], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});
