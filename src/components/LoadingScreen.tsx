import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating gradient rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full border border-primary/20"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              marginLeft: `-${(300 + i * 150) / 2}px`,
              marginTop: `-${(300 + i * 150) / 2}px`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 10 + i * 5,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 2 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Logo Container */}
      <div className="relative flex flex-col items-center gap-8">
        {/* 3D Logo */}
        <motion.div
          className="relative"
          style={{ perspective: '1000px' }}
        >
          {/* Glow effect behind logo */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-3xl blur-3xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* 3D Rotating Container */}
          <motion.div
            className="relative w-32 h-32 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 15, 0, -15, 0],
            }}
            transition={{
              rotateY: {
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              },
              rotateX: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            {/* Logo faces */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm border border-primary/40 flex items-center justify-center"
              style={{
                boxShadow: `
                  0 0 40px hsl(var(--primary) / 0.4),
                  0 0 80px hsl(var(--primary) / 0.2),
                  inset 0 2px 0 hsl(var(--primary) / 0.3)
                `,
                transform: 'translateZ(20px)',
              }}
            >
              <motion.span
                className="text-5xl font-heading font-black bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent"
                style={{
                  filter: 'drop-shadow(0 0 12px hsl(var(--primary) / 0.5))',
                }}
              >
                R
              </motion.span>
              <motion.span
                className="text-5xl font-heading font-black text-foreground"
                style={{
                  filter: 'drop-shadow(0 0 6px hsl(var(--foreground) / 0.3))',
                }}
              >
                V
              </motion.span>
            </motion.div>

            {/* Back face */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20"
              style={{
                transform: 'translateZ(-20px) rotateY(180deg)',
              }}
            />

            {/* Side faces for 3D depth */}
            {[0, 90, 180, 270].map((angle) => (
              <motion.div
                key={angle}
                className="absolute w-10 h-full bg-gradient-to-b from-primary/10 to-accent/10 border-y border-primary/20"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(64px)`,
                  left: '50%',
                  marginLeft: '-20px',
                }}
              />
            ))}
          </motion.div>

          {/* Orbiting elements */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-6px',
                marginLeft: '-6px',
                boxShadow: '0 0 10px hsl(var(--primary) / 0.6)',
              }}
              animate={{
                x: [
                  Math.cos((i * Math.PI) / 2) * 80,
                  Math.cos((i * Math.PI) / 2 + Math.PI / 2) * 80,
                  Math.cos((i * Math.PI) / 2 + Math.PI) * 80,
                  Math.cos((i * Math.PI) / 2 + (3 * Math.PI) / 2) * 80,
                  Math.cos((i * Math.PI) / 2) * 80,
                ],
                y: [
                  Math.sin((i * Math.PI) / 2) * 80,
                  Math.sin((i * Math.PI) / 2 + Math.PI / 2) * 80,
                  Math.sin((i * Math.PI) / 2 + Math.PI) * 80,
                  Math.sin((i * Math.PI) / 2 + (3 * Math.PI) / 2) * 80,
                  Math.sin((i * Math.PI) / 2) * 80,
                ],
                scale: [1, 1.2, 1, 0.8, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <div className="relative flex flex-col items-center gap-3">
          <motion.p
            className="text-xl font-heading font-semibold text-foreground"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Roger Varela
          </motion.p>

          {/* Animated loading bar */}
          <div className="w-48 h-1 bg-muted/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              style={{ backgroundSize: '200% 100%' }}
              animate={{
                x: ['-100%', '100%'],
                backgroundPosition: ['0% 0%', '100% 0%'],
              }}
              transition={{
                x: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                backgroundPosition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            />
          </div>

          {/* Loading dots */}
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{
                  y: [-4, 4, -4],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
