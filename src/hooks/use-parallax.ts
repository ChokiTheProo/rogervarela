import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface UseParallaxOptions {
  offset?: [string, string];
  inputRange?: [number, number];
  outputRange?: [number, number];
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: (options.offset as ["start end", "end start"]) || ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    options.inputRange || [0, 1],
    options.outputRange || [100, -100]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return { ref, y, opacity, scale, scrollYProgress };
};

export const useParallaxLayer = (
  scrollYProgress: MotionValue<number>,
  speed: number = 1
) => {
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  return y;
};
