import { motion, Transition } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition: Transition = {
  type: 'tween',
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  duration: 0.4,
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen"
    >
      {/* Animated overlay for extra visual effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: 'top' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
      </motion.div>
      
      {/* Secondary overlay sliding from bottom */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        style={{ transformOrigin: 'bottom' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
      </motion.div>

      {children}
    </motion.div>
  );
};
