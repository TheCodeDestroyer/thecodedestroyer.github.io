'use client';

import { clsx } from 'clsx';
import { type Variants, motion, useAnimation, useInView } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';
import { useCallback } from 'react';
import { useDeferredValue, useLayoutEffect } from 'react';
import { useRef } from 'react';
import { isMobile } from 'react-device-detect';

import type { Sections } from '@utils/types/section.enum';

import { useCurrentSectionStore } from '@store/common.store';

export const getAnimationVariants = (duration: number): Variants => ({
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration, ease: 'easeOut' }
  }
});

interface SectionWrapperProps extends PropsWithChildren {
  id: Sections;
  className?: string;
  heightClassName?: string;
  amount?: number;
  animationDuration?: number;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  id,
  className,
  heightClassName = 'h-screen',
  amount = 0.5,
  animationDuration = 0.35
}) => {
  const { setCurrentSection } = useCurrentSectionStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const control = useAnimation();

  const isInView = useInView(containerRef, { amount });

  const deferredIsInView = useDeferredValue(isInView);

  const triggerAnimation = useCallback(
    (name: 'visible' | 'hidden'): void => {
      if (isMobile) {
        return;
      }

      void control.start(name);
    },
    [control]
  );

  useLayoutEffect(() => {
    if (deferredIsInView) {
      triggerAnimation('visible');
      setCurrentSection(id);
    } else {
      triggerAnimation('hidden');
    }
  }, [triggerAnimation, id, deferredIsInView, setCurrentSection]);

  return (
    <motion.section
      id={id}
      className={clsx(
        'max-supported-width md:navbar-padding relative mx-auto',
        'snap-always overflow-hidden md:snap-center',
        className,
        heightClassName
      )}
      ref={containerRef}
      variants={getAnimationVariants(animationDuration)}
      initial={isMobile ? 'visible' : 'hidden'}
      animate={control}
    >
      {children}
    </motion.section>
  );
};
