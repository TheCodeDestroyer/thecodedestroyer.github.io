import type { FC } from 'react';

import { clsx } from 'clsx';

import type { FeaturedTechnologyName } from '@shared/constants/technology.constants';
import { featuredTechnologyOrder } from '@shared/constants/technology.constants';
import { Sections } from '@shared/types/section.types';

import { Ellipsis } from '@components/Ellipsis';
import { ClaudeCodeIcon } from '@components/icon/technologies/ClaudeCodeIcon';
import { ConvexIcon } from '@components/icon/technologies/ConvexIcon';
import { CypressIcon } from '@components/icon/technologies/CypressIcon';
import { DockerIcon } from '@components/icon/technologies/DockerIcon';
import { GitIcon } from '@components/icon/technologies/GitIcon';
import { NextIcon } from '@components/icon/technologies/NextIcon';
import { NodeIcon } from '@components/icon/technologies/NodeIcon';
import { OpenAIIcon } from '@components/icon/technologies/OpenAIIcon';
import { ReactIcon } from '@components/icon/technologies/ReactIcon';
import { StorybookIcon } from '@components/icon/technologies/StorybookIcon';
import { SupabaseIcon } from '@components/icon/technologies/SupabaseIcon';
import { TailwindIcon } from '@components/icon/technologies/TailwindIcon';
import { SectionWrapper } from '@components/sections/SectionWrapper';

/**
 * The grid's only knowledge of its own contents. Keying by
 * `FeaturedTechnologyName` is what stops this drifting from
 * `featuredTechnologyOrder`: a name listed there with no icon here is a compile
 * error, and an icon here for something not listed there is too.
 */
const icons: Record<FeaturedTechnologyName, FC<{ className?: string }>> = {
  React: ReactIcon,
  'Next.js': NextIcon,
  TailwindCSS: TailwindIcon,
  Cypress: CypressIcon,
  Storybook: StorybookIcon,
  'Node.js': NodeIcon,
  Convex: ConvexIcon,
  Supabase: SupabaseIcon,
  'Claude Code': ClaudeCodeIcon,
  'OpenAI API': OpenAIIcon,
  Git: GitIcon,
  Docker: DockerIcon,
};

export const SectionTechnologies: FC = () => {
  const iconClassName = 'size-12 sm:size-16 md:size-20';

  return (
    <SectionWrapper
      id={Sections.Technologies}
      className={clsx(
        'h-full bg-pattern-1 bg-position-[bottom_-26rem_right_-28rem] bg-no-repeat',
        'flex flex-col items-center justify-center space-y-12',
        'xl:flex-row xl:space-y-0 xl:space-x-12',
      )}
    >
      <h2 className="px-10 text-center text-4xl text-white md:text-left">
        I have the most experience with
      </h2>
      <div
        className={clsx(
          'relative mx-4 overflow-hidden rounded p-1 drop-shadow-lg xl:m-0',
          'before:absolute before:top-[-30%] before:left-[-30%] before:-z-10',
          'before:block before:h-[160%] before:w-[160%]',
          'before:bg-[conic-gradient(#B6F09C_0deg,transparent_60deg)]',
          'before:animate-border-spin',
        )}
      >
        <div className="grid grid-cols-3 gap-x-20 gap-y-10 rounded bg-black p-9 md:gap-y-12">
          {featuredTechnologyOrder.map((name) => {
            const Icon = icons[name];

            return <Icon key={name} className={iconClassName} />;
          })}
        </div>
      </div>
      <Ellipsis className="-top-20 left-32 h-160 w-124.5 bg-anakiwa-300" />
      <Ellipsis className="top-220 right-0 h-164 w-176 bg-accent" />
    </SectionWrapper>
  );
};

export default SectionTechnologies;
