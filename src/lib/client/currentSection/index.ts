'use client';

import type { RefObject } from 'react';
import { useEffect } from 'react';

import { create } from 'zustand';

import type { Section } from '@shared/types/section.types';

import type { ProbedSection } from '@client/currentSection/pickCurrent';
import { pickCurrent } from '@client/currentSection/pickCurrent';

/**
 * A 1%-tall probe band a quarter of the way down the viewport, expressed as a
 * `rootMargin` that collapses the root box down to that band.
 *
 * A quarter down is low enough to clear the fixed navbar (6.25rem at its
 * tallest — 25% of even a 500px-tall viewport is 125px) and high enough that
 * the section being read owns it. Deliberately not an intersection-ratio rule:
 * `SectionInterests` is `min-h-screen h-auto` and can be taller than the
 * viewport, so its ratio never reaches what a screen-sized section hits. That
 * mismatch is what the old per-section `amount={0.007}` was working around.
 */
const PROBE_BAND_ROOT_MARGIN = '-25% 0px -74% 0px';

/*
 * Everything below is implementation. Nothing outside this module touches the
 * store, the registry or the observer — callers get `useSectionSpy` and
 * `useCurrentSection` and nothing else. The registry and the single observer
 * sit at module scope so they outlive any one section mounting.
 */
const useCurrentSectionStore = create<{ currentSection: Section | null }>()(
  () => ({ currentSection: null }),
);

const registered = new Map<Element, Section>();
const probed = new Map<Section, number>();

let observer: IntersectionObserver | undefined;

const publish = () => {
  const { currentSection } = useCurrentSectionStore.getState();

  const next = pickCurrent(
    [...probed].map(([id, top]): ProbedSection => ({ id, top })),
    currentSection,
  );

  if (next !== currentSection)
    useCurrentSectionStore.setState({ currentSection: next });
};

const handleIntersect: IntersectionObserverCallback = (entries) => {
  for (const entry of entries) {
    const id = registered.get(entry.target);

    if (!id) continue;

    if (entry.isIntersecting) {
      probed.set(id, entry.boundingClientRect.top);
    } else {
      probed.delete(id);
    }
  }

  publish();
};

const getObserver = (): IntersectionObserver => {
  observer ??= new IntersectionObserver(handleIntersect, {
    rootMargin: PROBE_BAND_ROOT_MARGIN,
  });

  return observer;
};

/**
 * Registers a section with the observer for as long as it is mounted. Takes
 * the caller's own ref rather than handing one back, so a section can keep
 * using the same element for its entrance animation.
 */
export const useSectionSpy = (
  id: Section,
  ref: RefObject<Element | null>,
): void => {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    registered.set(element, id);
    getObserver().observe(element);

    return () => {
      getObserver().unobserve(element);
      registered.delete(element);
      probed.delete(id);
      publish();
    };
  }, [id, ref]);
};

export const useCurrentSection = (): Section | null =>
  useCurrentSectionStore((state) => state.currentSection);
