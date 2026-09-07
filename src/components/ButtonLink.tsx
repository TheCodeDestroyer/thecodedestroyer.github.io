import type { AnchorHTMLAttributes, FC } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

import { buttonVariants } from '@components/buttonVariants';

/** A button-styled link to somewhere off-site. Internal links use `next/link`. */
export interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  children?: AnchorHTMLAttributes<HTMLAnchorElement>['children'];
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  className?: AnchorHTMLAttributes<HTMLAnchorElement>['className'];
  ariaLabel?: AnchorHTMLAttributes<HTMLAnchorElement>['aria-label'];
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  href,
  className,
  ariaLabel,
  color,
  size,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={ariaLabel}
    className={clsx(buttonVariants({ color, size }), className)}
  >
    {children}
  </a>
);
