import type { FC } from 'react';

import type { Interest } from '@shared/types/interest.types';

export const InterestCard: FC<Interest> = ({ title, description }) => {
  return (
    <div className="min-w-80 py-8 md:min-w-1/4 lg:py-16">
      <h3 className="text-4xl text-accent">{title}</h3>
      <p className="mt-4 text-sm text-white md:text-lg">{description}</p>
    </div>
  );
};
