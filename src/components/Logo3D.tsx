import { motion } from 'framer-motion';

interface Logo3DProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo3D({ size = 'md', className = '' }: Logo3DProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  };

  const containerSizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <motion.div
      className={`relative ${containerSizes[size]} ${className}`}
      style={{ perspective: '1000px' }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* 3D Rotating Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: [0, 10, -10, 0],
          rotateX: [0, -5, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Glow Effect Behind */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-xl blur-xl opacity-60" />
        
        {/* Main Logo Container */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-full h-full rounded-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-primary/30"
          style={{
            boxShadow: `
              0 0 20px hsl(var(--primary) / 0.3),
              0 0 40px hsl(var(--primary) / 0.1),
              inset 0 1px 0 hsl(var(--primary) / 0.2)
            `,
          }}
        >
          {/* R Letter */}
          <motion.span
            className={`${sizeClasses[size]} font-heading font-black bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent`}
            style={{
              textShadow: '0 0 20px hsl(var(--primary) / 0.5)',
              filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.4))',
            }}
            animate={{
              textShadow: [
                '0 0 20px hsl(var(--primary) / 0.5)',
                '0 0 30px hsl(var(--primary) / 0.7)',
                '0 0 20px hsl(var(--primary) / 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            R
          </motion.span>
          
          {/* V Letter */}
          <motion.span
            className={`${sizeClasses[size]} font-heading font-black text-foreground`}
            style={{
              filter: 'drop-shadow(0 0 4px hsl(var(--foreground) / 0.3))',
            }}
          >
            V
          </motion.span>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
