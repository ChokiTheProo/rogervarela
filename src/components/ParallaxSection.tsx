import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  fadeIn?: boolean;
  scale?: boolean;
}

export const ParallaxSection = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  fadeIn = true,
  scale = false,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], fadeIn ? [0.3, 1, 1, 0.3] : [1, 1, 1, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [0.95, 1, 0.95] : [1, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale: scaleValue }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxLayer = ({ children, speed = 0.3, className = '' }: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

interface ParallaxBackgroundProps {
  className?: string;
  speed?: number;
}

export const ParallaxBackground = ({ className = '', speed = 0.2 }: ParallaxBackgroundProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <motion.div
      style={{ y }}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};
