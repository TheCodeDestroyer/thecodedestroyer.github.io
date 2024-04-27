import { clsx } from 'clsx';
import type {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  RefCallback,
  RefObject
} from 'react';

export interface InputProps {
  name?: string;
  id?: string;
  type?: HTMLInputTypeAttribute | undefined;
  value?: string | number;
  fwRef?: RefObject<HTMLInputElement> | RefCallback<HTMLInputElement>;
  placeholder?: string;
  autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete'];
  invalid?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  className?: InputHTMLAttributes<HTMLInputElement>['className'];
}

export const Input: FC<InputProps> = ({
  id,
  name,
  type,
  fwRef,
  autoComplete = 'off',
  invalid = false,
  className,
  ...props
}) => (
  <input
    {...props}
    id={id || name}
    type={type}
    ref={fwRef}
    autoComplete={autoComplete}
    className={clsx(
      className,
      'block w-full rounded-md border-0 bg-black py-3 text-accent shadow-sm',
      'ring-1 ring-inset placeholder:text-gray-400',
      'focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
      {
        'ring-red-400 focus:ring-red-400': invalid,
        'ring-karry-100 focus:ring-accent': !invalid
      }
    )}
  />
);
