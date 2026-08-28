'use client';

import type { FC, PropsWithChildren } from 'react';
import { useDeferredValue, useEffect, useRef } from 'react';

import { clsx } from 'clsx';
import { motion, useAnimation, useInView } from 'motion/react';
import type { Variants } from 'motion/react';

import type { Section } from '@shared/types/section.types';

import { useCurrentSectionStore } from '@client/store/common.store';

const getAnimationVariants = (duration: number): Variants => ({
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration, ease: 'easeOut' },
  },
});

interface SectionWrapperProps extends PropsWithChildren {
  id: Section;
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
  animationDuration = 0.35,
}) => {
  const setCurrentSection = useCurrentSectionStore(
    (state) => state.setCurrentSection,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const control = useAnimation();

  const isInView = useInView(containerRef, { amount });

  const deferredIsInView = useDeferredValue(isInView);

  useEffect(() => {
    void control.start(deferredIsInView ? 'visible' : 'hidden');

    if (deferredIsInView) {
      setCurrentSection(id);
    }
  }, [control, id, deferredIsInView, setCurrentSection]);

  return (
    <motion.section
      id={id}
      className={clsx(
        'relative mx-auto max-supported-width md:navbar-padding',
        'snap-always overflow-hidden md:snap-center',
        // The single definition of "no entrance animation here" lives in the
        // `static-entrance` variant: `!important` beats motion's inline styles,
        // on the first paint, with no JS.
        'static-entrance:transform-none! static-entrance:opacity-100!',
        className,
        heightClassName,
      )}
      ref={containerRef}
      variants={getAnimationVariants(animationDuration)}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.section>
  );
};
