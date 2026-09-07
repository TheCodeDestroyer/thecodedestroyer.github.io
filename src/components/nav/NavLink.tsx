'use client';

import type { ComponentType, FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import type { NavSection } from '@shared/constants/section.constants';

import { useCurrentSection } from '@client/currentSection';

/** What both nav renderers accept: `next/link` and a `DisclosureButton as="a"`. */
export interface NavAnchorProps {
  href: string;
  className: string;
  'aria-current'?: 'page';
  children: ReactNode;
}

interface NavLinkProps {
  section: NavSection;
  /** `next/link` on the desktop bar, the disclosure anchor in the mobile panel. */
  component: ComponentType<NavAnchorProps>;
  className: string;
}

/**
 * One nav link, and the only thing that knows what being the highlighted
 * section looks like. It reads the highlight itself rather than taking it as a
 * prop, so scrolling across a section boundary re-renders the three links
 * instead of the whole navbar. Only the base classes differ between the two
 * renderers; the target, the accent and `aria-current` are shared.
 */
export const NavLink: FC<NavLinkProps> = ({
  section: { id, label },
  component: Component,
  className,
}) => {
  const isCurrent = useCurrentSection() === id;

  return (
    <Component
      href={`/#${id}`}
      aria-current={isCurrent ? 'page' : undefined}
      className={clsx(className, {
        'text-white': !isCurrent,
        'text-accent': isCurrent,
      })}
    >
      {label}
    </Component>
  );
};
