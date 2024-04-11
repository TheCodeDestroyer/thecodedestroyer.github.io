import { clsx } from 'clsx';
import type { AnchorHTMLAttributes, FC } from 'react';

export interface ButtonLinkProps {
  children?: AnchorHTMLAttributes<HTMLAnchorElement>['children'];
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];

  className?: AnchorHTMLAttributes<HTMLAnchorElement>['className'];
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  href,
  className
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        'h-11 select-none rounded-xl border-none bg-accent fill-current',
        'px-2.5 py-2.5 text-center font-plus-jakarta-sans',
        'font-semibold tracking-button text-black',
        'transition-colors hover:bg-white hover:text-black',
        className
      )}
    >
      {children}
    </a>
  );
};
