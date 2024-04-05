'use client';

import { Disclosure } from '@headlessui/react';
import { clsx } from 'clsx';
import type { FC } from 'react';
import { Fragment } from 'react';

import { Button } from '@components/Button';
import { MenuToggleButton } from '@components/nav/MenuToggleButton';

const navigation = [
  { name: 'Me', href: '#', current: true },
  { name: 'Technologies', href: '#', current: false },
  { name: 'Previous work', href: '#', current: false }
];

export const NavBar: FC = () => (
  <Disclosure as="nav" className="fixed inset-x-0 top-0 h-25 bg-black">
    {({ open }) => (
      <Fragment>
        <div className="mx-auto max-w-10xl p-4 sm:p-8">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center text-3xl font-medium text-accent">
                Nace Logar
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:ml-4 md:items-center lg:flex lg:flex-shrink-0">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      'px-5 text-2xl font-medium hover:text-accent',
                      {
                        'text-white': !item.current,
                        'text-accent': item.current
                      }
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden items-center lg:flex">
                <Button text="Contact me" color="primaryOutlined" />
              </div>
              <div className="mx-2 flex items-center lg:hidden">
                <MenuToggleButton isOpen={open} />
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    'block rounded-md px-3 py-2 text-base font-medium hover:text-accent',
                    {
                      'text-white': !item.current,
                      'text-accent': item.current
                    }
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5 sm:px-6">
                <Button text="Contact me" />
              </div>
            </div>
          </div>
        </Disclosure.Panel>
      </Fragment>
    )}
  </Disclosure>
);
