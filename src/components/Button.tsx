/* eslint-disable react/button-has-type */
import type { ButtonHTMLAttributes, FC } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';

export const buttonVariants = cva(
  'rounded-xl fill-current text-center font-plus-jakarta-sans font-semibold tracking-button transition-colors select-none disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      color: {
        primary: [
          'border-none',
          'text-black',
          'bg-accent',
          'hover:bg-white',
          'hover:text-black',
        ],
        secondary: [
          'border-none',
          'text-accent',
          'bg-black',
          'ring-1',
          'ring-accent',
          'hover:bg-accent',
          'hover:text-black',
        ],
        secondaryAlt: [
          'border-none',
          'text-accent',
          'bg-black',
          'ring-1',
          'ring-accent',
          'hover:bg-white',
          'hover:text-black',
          'hover:ring-0',
        ],
      },
      size: {
        sm: 'h-11 px-2.5 py-0',
        md: 'h-12 px-6 py-2',
      },
    },
  },
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children?: ButtonHTMLAttributes<HTMLButtonElement>['children'];
  text?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
  title?: ButtonHTMLAttributes<HTMLButtonElement>['title'];
  loading?: boolean;
  className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
}

export const Button: FC<ButtonProps> = ({
  children,
  text,
  onClick,
  type = 'button',
  disabled = false,
  color = 'primary',
  size = 'md',
  title,
  loading,
  className,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled || loading}
    title={title}
    className={clsx(buttonVariants({ color, size }), className)}
  >
    {children ? children : text}
  </button>
);
