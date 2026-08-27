'use client';

import type { FC } from 'react';
import { Fragment } from 'react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { clsx } from 'clsx';
import Link from 'next/link';

import { links } from '@shared/constants/link.types';
import type { NabBarNavigation } from '@shared/types/navbar.types';
import { Sections } from '@shared/types/section.types';

import { useCurrentSectionStore } from '@client/store/common.store';

import { ButtonLink } from '@components/ButtonLink';
import { MenuToggleButton } from '@components/nav/MenuToggleButton';

const navigation: NabBarNavigation[] = [
  { name: 'Me', sectionId: Sections.Me },
  { name: 'Technologies', sectionId: Sections.Technologies },
  { name: 'Career', sectionId: Sections.Career },
];

export const NavBar: FC = () => {
  const currentSection = useCurrentSectionStore(
    (state) => state.currentSection,
  );

  return (
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
                  Nace Logar
                </Link>
              </div>
              <div className="flex items-center">
                <div className="hidden md:ml-4 md:items-center lg:flex lg:shrink-0">
                  {navigation.map((item) => {
                    const isCurrent = item.sectionId === currentSection;

                    return (
                      <Link
                        key={item.name}
                        href={`/#${item.sectionId}`}
                        className={clsx(
                          'px-5 text-2xl font-medium hover:text-accent',
                          {
                            'text-white': !isCurrent,
                            'text-accent': isCurrent,
                          },
                        )}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
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
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => {
                  const isCurrent = item.sectionId === currentSection;

                  return (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={`/#${item.sectionId}`}
                      className={clsx(
                        'block rounded-md px-3 py-2 text-base font-medium hover:text-accent',
                        {
                          'text-white': !isCurrent,
                          'text-accent': isCurrent,
                        },
                      )}
                      aria-current={isCurrent ? 'page' : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  );
                })}
              </div>
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
};
