'use client';

import {
  sectionAnimation,
  sectionAnimationThreshold
} from '@constants/section-animation.constant';
import { clsx } from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className,
  id
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: sectionAnimationThreshold });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.section
      id={id}
      className={clsx(
        'max-supported-width navbar-padding relative mx-auto h-screen snap-center snap-always overflow-hidden',
        className
      )}
      ref={ref}
      variants={sectionAnimation}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.section>
  );
};
