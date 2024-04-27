import { clsx } from 'clsx';
import type { FC, PropsWithChildren } from 'react';

interface FieldWrapperProps extends PropsWithChildren {
  name: string;
  label: string;
  className?: string | undefined;
}

export const FieldWrapper: FC<FieldWrapperProps> = ({
  children,
  name,
  label,
  className
}) => (
  <div>
    <label
      htmlFor={name}
      className={clsx(className, 'block text-base font-medium text-accent')}
    >
      {label}
    </label>
    <div className="mt-2">{children}</div>
  </div>
);
