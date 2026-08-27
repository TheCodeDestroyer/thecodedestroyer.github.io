import type { FC } from 'react';

import { Sections } from '@shared/types/section.types';

import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionAbout: FC = () => (
  <SectionWrapper
    id={Sections.About}
    className="w-full pattern-top-left"
    animationDuration={0.5}
  >
    <div className="grid h-full place-items-center">
      <p className="mx-6 text-2xl text-accent sm:text-4xl md:mx-32 lg:text-9xl xl:px-20">
        <em className="text-white">As a Senior Frontend Engineer,</em> I excel
        in creating pixel perfect digital experiences that meet user needs with
        precision.
        <br />
        My passion for detail and technology drives me to over-deliver, crafting
        intuitive and responsive websites and web applications.
      </p>
    </div>
    <div className="absolute top-100 left-40 -z-10 block h-91 w-124.5 ellipsis bg-anakiwa-300" />
    <div className="absolute top-100 left-164 -z-10 block h-91 w-124.5 ellipsis bg-accent" />
  </SectionWrapper>
);

export default SectionAbout;
