import { useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export default function AnimatedSection({ children, delay = 0, direction = 'up' }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 32 : 0,
        x: direction === 'left' ? -32 : direction === 'right' ? 32 : 0,
      }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
