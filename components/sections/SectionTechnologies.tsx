import { clsx } from 'clsx';
import type { FC } from 'react';

import { CypressIcon } from '@components/icon/technologies/CypressIcon';
import { DockerIcon } from '@components/icon/technologies/DockerIcon';
import { GitIcon } from '@components/icon/technologies/GitIcon';
import { NextIcon } from '@components/icon/technologies/NextIcon';
import { NodeIcon } from '@components/icon/technologies/NodeIcon';
import { ReactIcon } from '@components/icon/technologies/ReactIcon';
import { ReduxIcon } from '@components/icon/technologies/ReduxIcon';
import { StorybookIcon } from '@components/icon/technologies/StorybookIcon';
import { TailwindIcon } from '@components/icon/technologies/TailwindIcon';
import { BackgroundPatternImage } from '@components/img/BackgroundPatternImage';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionTechnologies: FC = () => (
  <SectionWrapper id="technologies">
    <div className="relative block h-screen w-full overflow-hidden">
      <BackgroundPatternImage className="absolute -bottom-[25rem] -right-[30rem] rotate-[-27deg]" />
    </div>
    <div className="absolute right-[14rem] top-1/3 z-10 flex flex-row items-center justify-center space-x-12">
      <h3 className="text-4xl text-white">I work with</h3>
      <div
        className={clsx(
          'relative h-[28rem] w-[33rem] overflow-hidden rounded p-1',
          'before:absolute before:left-[-30%] before:top-[-30%] before:z-10',
          'before:block before:h-[160%] before:w-[160%]',
          'before:bg-[conic-gradient(#B6F09C_0deg,transparent_60deg)]',
          'before:animate-border-spin'
        )}
      >
        <div className="absolute inset-1 z-20 grid grid-cols-3 grid-rows-3 gap-x-20 gap-y-12 rounded bg-black p-9">
          <ReactIcon />
          <NextIcon />
          <TailwindIcon />
          <ReduxIcon />
          <CypressIcon />
          <StorybookIcon />
          <NodeIcon />
          <GitIcon />
          <DockerIcon />
        </div>
      </div>
    </div>
  </SectionWrapper>
);
