import { clsx } from 'clsx';
import type { FC } from 'react';

import { Sections } from '@utils/types/section.enum';

import { CypressIcon } from '@components/icon/technologies/CypressIcon';
import { DockerIcon } from '@components/icon/technologies/DockerIcon';
import { GitIcon } from '@components/icon/technologies/GitIcon';
import { NextIcon } from '@components/icon/technologies/NextIcon';
import { NodeIcon } from '@components/icon/technologies/NodeIcon';
import { ReactIcon } from '@components/icon/technologies/ReactIcon';
import { ReduxIcon } from '@components/icon/technologies/ReduxIcon';
import { StorybookIcon } from '@components/icon/technologies/StorybookIcon';
import { TailwindIcon } from '@components/icon/technologies/TailwindIcon';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionTechnologies: FC = () => {
  const iconClassName = 'h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20';

  return (
    <SectionWrapper
      id={Sections.Technologies}
      className={clsx(
        'h-full bg-pattern-2 bg-position-technologies bg-no-repeat',
        'flex flex-col items-center justify-start space-y-12 md:justify-center',
        'xl:flex-row xl:space-x-12 xl:space-y-0'
      )}
    >
      <h3 className="px-10 text-center text-4xl text-white md:text-left">
        I have the most experience with
      </h3>
      <div
        className={clsx(
          'relative mx-4 overflow-hidden rounded p-1 xl:m-0',
          'before:absolute before:left-[-30%] before:top-[-30%] before:-z-10',
          'before:block before:h-[160%] before:w-[160%]',
          'before:bg-[conic-gradient(#B6F09C_0deg,transparent_60deg)]',
          'before:animate-border-spin'
        )}
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-x-20 gap-y-16 rounded bg-black p-9 md:gap-y-12">
          <ReactIcon className={iconClassName} />
          <NextIcon className={iconClassName} />
          <TailwindIcon className={iconClassName} />
          <ReduxIcon className={iconClassName} />
          <CypressIcon className={iconClassName} />
          <StorybookIcon className={iconClassName} />
          <NodeIcon className={iconClassName} />
          <GitIcon className={iconClassName} />
          <DockerIcon className={iconClassName} />
        </div>
      </div>
    </SectionWrapper>
  );
};
