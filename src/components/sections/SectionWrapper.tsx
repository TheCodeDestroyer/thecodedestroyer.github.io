'use client';

import type { FC, PropsWithChildren } from 'react';
import { useCallback, useDeferredValue, useEffect, useRef } from 'react';

import { clsx } from 'clsx';
import { motion, useAnimation, useInView } from 'motion/react';
import type { Variants } from 'motion/react';

import type { Sections } from '@shared/types/section.types';

import { useCurrentSectionStore } from '@client/store/common.store';

/**
 * The only condition under which the entrance animation runs. This is the exact
 * complement of the `static-entrance` variant in globals.css, which pins the
 * section to its resting state.
 */
const ENTRANCE_ANIMATION_QUERY =
  '(width >= 48rem) and (prefers-reduced-motion: no-preference)';

const getAnimationVariants = (duration: number): Variants => ({
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration, ease: 'easeOut' },
  },
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
  animationDuration = 0.35,
}) => {
  const setCurrentSection = useCurrentSectionStore(
    (state) => state.setCurrentSection,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const control = useAnimation();

  const isInView = useInView(containerRef, { amount });

  const deferredIsInView = useDeferredValue(isInView);

  const triggerAnimation = useCallback(
    (name: 'visible' | 'hidden'): void => {
      if (!window.matchMedia(ENTRANCE_ANIMATION_QUERY).matches) return;

      void control.start(name);
    },
    [control],
  );

  useEffect(() => {
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
        'relative mx-auto max-supported-width md:navbar-padding',
        'snap-always overflow-hidden md:snap-center',
        // What actually makes the resting state correct: `!important` here beats
        // motion's inline styles, on the first paint, with no JS. The guard in
        // triggerAnimation only saves the frames.
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
