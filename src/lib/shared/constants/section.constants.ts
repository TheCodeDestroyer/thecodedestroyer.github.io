import type { Section } from '@shared/types/section.types';
import { Sections } from '@shared/types/section.types';

export interface NavSection {
  id: Section;
  label: string;
}

/**
 * The sections the navbar names, in the order it lists them. A deliberate
 * subset: `about`, `hobbies` and `contact` are reachable by scrolling but are
 * not link targets.
 *
 * Page order itself stays as literal JSX in `app/page.tsx` — with six sections
 * that reads better than a manifest, and it is the one place the order should
 * be obvious at a glance.
 */
export const navSections: readonly NavSection[] = [
  { id: Sections.Me, label: 'Me' },
  { id: Sections.Technologies, label: 'Technologies' },
  { id: Sections.Career, label: 'Career' },
];
