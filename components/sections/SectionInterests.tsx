'use client';

import { interests } from '@constants/interest.constant';
import type { FC } from 'react';

import { Sections } from '@utils/types/section.enum';

import { InterestCard } from '@components/card/InterestCard';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionInterests: FC = () => (
  <SectionWrapper
    id={Sections.Hobbies}
    className="overflow-hidden bg-pattern-1 bg-position-interests bg-no-repeat"
    heightClassName="h-auto"
    amount={0.007}
  >
    <h1 className="px-6 text-2xl text-white md:text-center md:text-8xl xl:text-10xl">
      Interests
    </h1>
    <div className="mt-4 grid grid-cols-1 gap-y-4 px-12 md:grid-cols-2 md:gap-4 lg:grid-cols-4 xl:mt-8">
      {interests.map(({ title, description }) => (
        <InterestCard key={title} title={title} description={description} />
      ))}
    </div>
  </SectionWrapper>
);
