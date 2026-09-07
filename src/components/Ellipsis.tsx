import type { FC } from 'react';

import { clsx } from 'clsx';

/**
 * A decorative blur blob. Holds the contract every blob shares — out of the
 * flow, behind the content — so changing the stacking approach is one edit
 * rather than eight. Position, size, rotation and colour stay at the call
 * site; the blur, radius and opacity are the `ellipsis` utility in globals.css.
 */
export interface EllipsisProps {
  className?: string;
}

export const Ellipsis: FC<EllipsisProps> = ({ className }) => (
  <div className={clsx('absolute -z-10 block ellipsis', className)} />
);
