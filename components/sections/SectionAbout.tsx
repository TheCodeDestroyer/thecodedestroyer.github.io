import type { FC } from 'react';

import { Sections } from '@utils/types/section.enum';

import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionAbout: FC = () => (
  <SectionWrapper
    id={Sections.About}
    className="w-full bg-pattern-1 bg-position-about bg-no-repeat"
    animationDuration={0.5}
  >
    <div className="grid h-full place-items-start md:place-items-center">
      <p className="mx-6 text-4xl text-accent md:mx-32 md:text-9xl">
        <em className="text-white">As a Senior Frontend Developer,</em> I excel
        in creating pixel-perfect digital experiences that meet user needs with
        precision.
        <br />
        My passion for detail and technology drives me to over-deliver, crafting
        intuitive and responsive websites and web applications.
      </p>
    </div>
  </SectionWrapper>
);
