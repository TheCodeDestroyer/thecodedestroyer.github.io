'use client';

import type { FC } from 'react';
import { Fragment } from 'react';

import { Disclosure, DisclosurePanel } from '@headlessui/react';
import Link from 'next/link';

import { links } from '@shared/constants/link.constants';
import { AUTHOR_NAME } from '@shared/constants/meta.constants';
import { navSections } from '@shared/constants/section.constants';

import { ButtonLink } from '@components/ButtonLink';
import { DisclosureAnchor } from '@components/nav/DisclosureAnchor';
import { MenuToggleButton } from '@components/nav/MenuToggleButton';
import { NavLink } from '@components/nav/NavLink';

export const NavBar: FC = () => (
  <Disclosure
    as="nav"
    className="fixed inset-x-0 top-0 z-200 h-16 bg-black lg:h-25"
  >
    {({ open }) => (
      <Fragment>
        <div className="mx-auto h-full max-supported-width p-4 sm:p-8">
          <div className="flex justify-between">
            <div className="flex">
              <Link
                href="/"
                className="flex shrink-0 items-center text-4xl font-medium text-accent"
              >
                {AUTHOR_NAME}
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden md:ml-4 md:items-center lg:flex lg:shrink-0">
                {navSections.map((section) => (
                  <NavLink
                    key={section.id}
                    section={section}
                    component={Link}
                    className="px-5 text-2xl font-medium hover:text-accent"
                  />
                ))}
              </div>
              <div className="hidden items-center lg:flex">
                <ButtonLink href={links.linkedin} color="secondary">
                  Contact me
                </ButtonLink>
              </div>
              <div className="mx-2 flex items-center lg:hidden">
                <MenuToggleButton isOpen={open} />
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="z-200 bg-black shadow-2lg shadow-black lg:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navSections.map((section) => (
              <NavLink
                key={section.id}
                section={section}
                component={DisclosureAnchor}
                className="block rounded-md px-3 py-2 text-base font-medium hover:text-accent"
              />
            ))}
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5 sm:px-6">
                <ButtonLink href={links.linkedin}>Contact me</ButtonLink>
              </div>
            </div>
          </div>
        </DisclosurePanel>
      </Fragment>
    )}
  </Disclosure>
);
