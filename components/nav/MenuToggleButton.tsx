import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import type { FC } from 'react';

interface MenuToggleButtonProps {
  isOpen: boolean;
}

export const MenuToggleButton: FC<MenuToggleButtonProps> = ({ isOpen }) => (
  <Disclosure.Button
    className={clsx(
      'relative inline-flex items-center justify-center rounded-md p-2 text-white',
      'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
    )}
  >
    <span className="absolute -inset-0.5" />
    <span className="sr-only">Open main menu</span>
    {isOpen ? (
      <XMarkIcon className="block size-6" aria-hidden="true" />
    ) : (
      <Bars3Icon className="block size-6" aria-hidden="true" />
    )}
  </Disclosure.Button>
);
