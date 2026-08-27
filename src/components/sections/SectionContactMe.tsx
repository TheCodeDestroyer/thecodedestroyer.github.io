'use client';

import type { FC } from 'react';

import { links } from '@shared/constants/link.types';
import { Sections } from '@shared/types/section.types';

import { ButtonLink } from '@components/ButtonLink';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionContactMe: FC = () => (
  <SectionWrapper
    id={Sections.ContactMe}
    className="w-full pattern-top-left transition"
  >
    <div className="nmd:w-3/5 absolute inset-0 -z-10 mx-auto h-full w-full">
      <div className="absolute -bottom-[35%] -z-10 mx-auto h-full w-full rounded-full bg-contact blur-[8rem] sm:-bottom-[60%] sm:blur-[15.625rem]" />
    </div>
    <div className="flex h-full items-end justify-center">
      <div className="flex flex-col pb-14 md:pb-29">
        <h2 className="text-center text-8xl text-black">
          Want to work with me?
        </h2>
        <div className="mt-8 flex justify-center">
          <ButtonLink href={links.linkedin} color="secondaryAlt">
            Contact me
          </ButtonLink>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default SectionContactMe;
