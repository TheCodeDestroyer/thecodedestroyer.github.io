import { clsx } from 'clsx';
import type {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  InputHTMLAttributes,
  RefCallback,
  RefObject
} from 'react';

export interface TextareaProps {
  name?: string;
  id?: string;
  value?: string | number;
  fwRef?: RefObject<HTMLTextAreaElement> | RefCallback<HTMLTextAreaElement>;
  placeholder?: string;
  autoComplete?: InputHTMLAttributes<HTMLTextAreaElement>['autoComplete'];
  invalid?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  className?: InputHTMLAttributes<HTMLTextAreaElement>['className'];
}

export const Textarea: FC<TextareaProps> = ({
  id,
  name,
  fwRef,
  autoComplete = 'off',
  invalid = false,
  className,
  ...props
}) => (
  <textarea
    {...props}
    id={id || name}
    ref={fwRef}
    rows={10}
    autoComplete={autoComplete}
    className={clsx(
      className,
      'block w-full rounded-md border-0 bg-black bg-opacity-40 px-4 py-4',
      'text-accent shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6',
      'ring-1 ring-inset ring-karry-100',
      'focus:ring-2 focus:ring-inset focus:ring-accent',
      {
        'ring-red-400 focus:ring-red-400': invalid,
        'ring-karry-100 focus:ring-accent': !invalid
      }
    )}
  />
);
