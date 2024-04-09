import type { FC } from 'react';

import { BackgroundPatternImage } from '@components/img/BackgroundPatternImage';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionAbout: FC = () => (
  <SectionWrapper>
    <div className="relative block h-screen w-full overflow-hidden">
      <BackgroundPatternImage className="absolute -left-[18rem] -top-[13rem]" />
    </div>
    <div className="absolute inset-0 grid place-items-center">
      <p className="text-accent mx-6 text-4xl md:mx-32 md:text-9xl">
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
