'use client';

import type { FC, PropsWithChildren, RefObject } from 'react';
import {
  useDeferredValue,
  useEffect,
  useRef,
  useSyncExternalStore,
} from 'react';

import { clsx } from 'clsx';
import { motion, useAnimation, useInView } from 'motion/react';
import type { Variants } from 'motion/react';

import type { Section } from '@shared/types/section.types';

import { useSectionSpy } from '@client/currentSection';

/**
 * When the entrance animation is worth running: the exact complement of the
 * `static-entrance` variant in globals.css. That variant pins the resting state
 * with `!important`, so below 48rem or under reduced motion every frame this
 * component animates is discarded before it paints — the observer and the
 * animation loop should not start there at all.
 */
const ENTRANCE_ANIMATION_QUERY =
  '(width >= 48rem) and (prefers-reduced-motion: no-preference)';

/** Never populated — handing this to `useInView` is how a section opts out. */
const UNOBSERVED: RefObject<Element | null> = { current: null };

/*
 * One `MediaQueryList` for the page, the way `@client/currentSection` keeps one
 * observer: the answer is global, so every section reads the same object rather
 * than minting a fresh one per subscribe and per `getSnapshot` — and
 * `getSnapshot` runs on every render of every section. Lazy because `window`
 * does not exist when this module is first imported on the server.
 */
let entranceQuery: MediaQueryList | undefined;

const getEntranceQuery = (): MediaQueryList =>
  (entranceQuery ??= window.matchMedia(ENTRANCE_ANIMATION_QUERY));

const subscribeToEntranceAnimation = (onChange: () => void): (() => void) => {
  const query = getEntranceQuery();

  query.addEventListener('change', onChange);

  return () => query.removeEventListener('change', onChange);
};

const useEntranceAnimation = (): boolean =>
  useSyncExternalStore(
    subscribeToEntranceAnimation,
    () => getEntranceQuery().matches,
    () => true,
  );

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
  /**
   * How much of the section must be on screen before it animates in. Purely an
   * entrance-animation knob: which section the navbar highlights is decided by
   * `@client/currentSection` against its own probe band, not by this.
   */
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
  const containerRef = useRef<HTMLDivElement>(null);
  const control = useAnimation();

  const entranceAnimation = useEntranceAnimation();

  const isInView = useInView(entranceAnimation ? containerRef : UNOBSERVED, {
    amount,
  });

  const deferredIsInView = useDeferredValue(isInView);

  /* Being the current section is a global, exclusive decision, so it is made
     once in one module rather than six times over from in here. */
  useSectionSpy(id, containerRef);

  useEffect(() => {
    if (!entranceAnimation) return;

    void control.start(deferredIsInView ? 'visible' : 'hidden');
  }, [control, deferredIsInView, entranceAnimation]);

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
