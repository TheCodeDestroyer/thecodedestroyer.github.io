import type { FC } from 'react';

import { Sections } from '@utils/types/section.enum';

import { Button } from '@components/Button';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionContactMe: FC = () => (
  <SectionWrapper
    id={Sections.ContactMe}
    className="w-full bg-pattern-1 bg-position-about bg-no-repeat transition"
  >
    <div className="flex h-full items-end justify-center">
      <div className="flex flex-col pb-29">
        <p className=" text-center text-8xl text-white">
          Want to work with me?
        </p>
        <div className="mt-8 flex justify-center">
          <Button text="Contact me" />
        </div>
      </div>
    </div>
  </SectionWrapper>
);
