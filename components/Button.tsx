/* eslint-disable react/button-has-type */
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import type { ButtonHTMLAttributes, FC } from 'react';

export const buttonVariants = cva(
  'rounded-xl select-none ring-1 h-12 px-6 py-2 transition-colors text-center font-semibold tracking-button font-plus-jakarta-sans fill-current',
  {
    variants: {
      color: {
        primary: [
          'border-none',
          'text-accent',
          'ring-accent',
          'hover:bg-accent',
          'hover:text-black'
        ]
      }
    }
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  text?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
  title?: ButtonHTMLAttributes<HTMLButtonElement>['title'];
  loading?: boolean;
  className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
}

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
  color = 'primary',
  title,
  loading,
  className
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      title={title}
      className={clsx(buttonVariants({ color }), className)}
    >
      {text}
    </button>
  );
};
