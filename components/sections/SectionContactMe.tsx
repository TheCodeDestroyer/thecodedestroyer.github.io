'use client';

import type { FC } from 'react';

import { Sections } from '@utils/types/section.enum';

import { Button } from '@components/Button';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionContactMe: FC = () => (
  <SectionWrapper
    id={Sections.ContactMe}
    className="w-full  bg-pattern-1 bg-position-about bg-no-repeat transition"
  >
    <div className="nmd:w-3/5 absolute inset-0 -z-10 mx-auto h-full w-full">
      <div className="absolute -bottom-[35%] -z-10 mx-auto h-full w-full rounded-full bg-contact blur-[8rem] sm:-bottom-[60%] sm:blur-[15.625rem]" />
    </div>
    <div className="flex h-full items-end justify-center ">
      <div className="flex flex-col pb-14 md:pb-29">
        <p className=" text-center text-8xl text-black">
          Want to work with me?
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            text="Contact me"
            color="secondaryAlt"
            onClick={() => {
              if (typeof window !== 'undefined') {
                // eslint-disable-next-line no-alert
                window.alert(
                  'Heads up!\n\n My contact form is under construction at the moment.\n In the meantime, please connect with me on LinkedIn.\n\n I look forward to hearing from you!'
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  </SectionWrapper>
);
