'use client';

import { sectionAnimation } from '@constants/section-animation.constant';
import { clsx } from 'clsx';
import { motion, useAnimation, useInView } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

interface SectionWrapperProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  id,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const control = useAnimation();

  const isInView = useInView(containerRef);

  useEffect(() => {
    if (isInView) {
      void control.start('visible');
    } else {
      void control.start('hidden');
    }
  }, [control, isInView]);

  return (
    <motion.section
      id={id}
      className={clsx(
        'max-supported-width navbar-padding relative mx-auto h-screen snap-center snap-always overflow-hidden',
        className
      )}
      ref={containerRef}
      variants={sectionAnimation}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.section>
  );
};
