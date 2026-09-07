import type { FC } from 'react';

import { interests } from '@shared/constants/interest.constants';
import { Sections } from '@shared/types/section.types';

import { InterestCard } from '@components/card/InterestCard';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionInterests: FC = () => (
  <SectionWrapper
    id={Sections.Hobbies}
    className="overflow-hidden bg-pattern-1 bg-position-[left_-25rem_top_-18rem] bg-no-repeat"
    heightClassName="min-h-screen h-auto"
    /* This section is the only one taller than the viewport, so it is the only
       one that cannot reach the default 0.5. Measured worst case is 1192px
       against a 600px viewport at 48rem wide — the narrowest the entrance
       animation is enabled at — which caps the ratio at exactly 0.50. */
    amount={0.3}
  >
    <h2 className="px-6 text-2xl text-white md:mt-52 md:text-center md:text-8xl xl:text-10xl">
      Interests
    </h2>
    <div className="mt-4 grid grid-cols-1 gap-y-4 px-6 md:grid-cols-2 md:gap-4 md:px-12 lg:grid-cols-4 xl:mt-8">
      {interests.map(({ title, description }) => (
        <InterestCard key={title} title={title} description={description} />
      ))}
    </div>
  </SectionWrapper>
);

export default SectionInterests;
