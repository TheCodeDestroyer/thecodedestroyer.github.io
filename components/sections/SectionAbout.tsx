import type { FC } from 'react';

import { Sections } from '@utils/types/section.enum';

import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionAbout: FC = () => (
  <SectionWrapper
    id={Sections.About}
    className="w-full bg-pattern-1 bg-position-about bg-no-repeat"
    animationDuration={0.5}
  >
    <div className="grid h-full place-items-center">
      <p className="mx-6 text-2xl text-accent sm:text-4xl md:mx-32 md:text-9xl xl:px-20">
        <em className="text-white">As a Senior Frontend Engineer,</em> I excel
        in creating pixel-perfect digital experiences that meet user needs with
        precision.
        <br />
        My passion for detail and technology drives me to over-deliver, crafting
        intuitive and responsive websites and web applications.
      </p>
    </div>
    <div className="elipsis absolute left-[10rem] top-[25rem] -z-10 block h-[22.75rem] w-[31.125rem] bg-anakiwa-300" />
    <div className="elipsis absolute left-[41rem] top-[25rem] -z-10 block h-[22.75rem] w-[31.125rem] bg-accent" />
  </SectionWrapper>
);

export default SectionAbout;
