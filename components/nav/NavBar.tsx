'use client';

import { Disclosure } from '@headlessui/react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { Fragment } from 'react';

import type { NabBarNavigation } from '@utils/types/navbar.interface';
import { Sections } from '@utils/types/section.enum';

import { useCurrentSectionStore } from '@store/common.store';

import { Button } from '@components/Button';
import { MenuToggleButton } from '@components/nav/MenuToggleButton';

const navigation: NabBarNavigation[] = [
  { name: 'Me', sectionId: Sections.Me },
  { name: 'Technologies', sectionId: Sections.Technologies },
  { name: 'My experience', sectionId: Sections.Experience }
];

export const NavBar: FC = () => {
  const { currentSection } = useCurrentSectionStore();
  const { push } = useRouter();

  return (
    <Disclosure
      as="nav"
      className="fixed inset-x-0 top-0 z-200 h-16 bg-black lg:h-25"
    >
      {({ open }) => (
        <Fragment>
          <div className="max-supported-width mx-auto h-full p-4 sm:p-8">
            <div className="flex justify-between">
              <div className="flex">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center text-4xl font-medium text-accent"
                >
                  Nace Logar
                </Link>
              </div>
              <div className="flex items-center">
                <div className="hidden md:ml-4 md:items-center lg:flex lg:flex-shrink-0">
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
                            'text-accent': isCurrent
                          }
                        )}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="hidden items-center lg:flex">
                  <Button
                    text="Contact me"
                    color="secondary"
                    onClick={(): void => {
                      push('/contact');
                    }}
                  />
                </div>
                <div className="mx-2 flex items-center lg:hidden">
                  <MenuToggleButton isOpen={open} />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="z-200 bg-black shadow-2lg shadow-black lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => {
                  const isCurrent = item.sectionId === currentSection;

                  return (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={`#${item.sectionId}`}
                      className={clsx(
                        'block rounded-md px-3 py-2 text-base font-medium hover:text-accent',
                        {
                          'text-white': !isCurrent,
                          'text-accent': isCurrent
                        }
                      )}
                      aria-current={isCurrent ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                })}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5 sm:px-6">
                  <Button
                    text="Contact me"
                    onClick={() => {
                      push('/contact');
                    }}
                  />
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
};
