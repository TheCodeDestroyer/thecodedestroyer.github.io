import type { Variants } from 'framer-motion';

export const sectionAnimation: Variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 } }
};

export const sectionAnimationThreshold = 0.01;
