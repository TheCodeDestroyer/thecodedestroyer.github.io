import type { Section } from '@shared/types/section.types';

export interface ProbedSection {
  id: Section;
  top: number;
}

/**
 * The rule, stated once: of the sections covering the probe band, the topmost
 * one is current.
 *
 * Sections are stacked and gapless, so exactly one covers the band once the
 * scroll settles; `top` only breaks the one-frame tie while a section is
 * leaving and its successor is arriving. An empty probe keeps whatever was
 * current rather than blanking the navbar — that happens during overscroll,
 * and permanently on a page that mounts no sections at all (`not-found.tsx`),
 * where `null` is the honest answer and is what `previous` already holds.
 */
export const pickCurrent = (
  probed: readonly ProbedSection[],
  previous: Section | null,
): Section | null =>
  probed.reduce<ProbedSection | null>(
    (topmost, section) =>
      !topmost || section.top < topmost.top ? section : topmost,
    null,
  )?.id ?? previous;
