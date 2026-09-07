'use client';

import type { FC } from 'react';

import { DisclosureButton } from '@headlessui/react';

import type { NavAnchorProps } from '@components/nav/NavLink';

/**
 * The mobile panel's nav link: an anchor that also closes the panel on click.
 * Its own file only because the desktop bar renders `next/link` here instead,
 * and `NavLink` takes whichever of the two as a component.
 */
export const DisclosureAnchor: FC<NavAnchorProps> = (props) => (
  <DisclosureButton as="a" {...props} />
);
