'use client';

import { clsx } from 'clsx';
import {
  type Variants,
  motion,
  useAnimation,
  useInView,
  useMotionValue
} from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const animationVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' }
  }
};

interface SectionWrapperProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  id,
  className
}) => {
  const isMounted = useMotionValue(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const control = useAnimation();

  const isInView = useInView(containerRef, { amount: 0.9 });

  useEffect(() => {
    if (isInView) {
      void control.start('visible');
    } else {
      void control.start('hidden');
    }
  }, [control, id, isInView, isMounted]);

  return (
    <motion.section
      id={id}
      className={clsx(
        'max-supported-width navbar-padding relative mx-auto h-screen',
        'snap-center snap-always overflow-hidden',
        className
      )}
      ref={containerRef}
      variants={animationVariants}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.section>
  );
};
