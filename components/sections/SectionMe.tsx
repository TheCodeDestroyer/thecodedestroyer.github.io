import Image from 'next/image';
import type { FC } from 'react';

import { Sections } from '@utils/types/section.enum';

import { ButtonLink } from '@components/ButtonLink';
import { GitHubIcon } from '@components/icon/GitHubIcon';
import { LinkedInIcon } from '@components/icon/LinkedInIcon';
import { SectionWrapper } from '@components/sections/SectionWrapper';

import image from '@public/profile.png';

export const SectionMe: FC = () => (
  <SectionWrapper
    id={Sections.Me}
    className="bg-pattern-1 bg-position-me flex flex-row justify-between bg-no-repeat"
  >
    <div className="ml-6 flex h-full flex-col items-start justify-end pb-10 md:ml-32 md:pb-32">
      <div className="text-9xl">
        <h1>{`Hi, I'm`}</h1>
        <h1 className="text-accent">Nace Logar!</h1>
      </div>
      <div className="mt-8 flex flex-col text-2xl">
        <span>from</span>
        <span>Slovenia</span>
      </div>
      <div className="mt-8 flex flex-row space-x-5">
        <ButtonLink href="https://github.com/TheCodeDestroyer">
          <GitHubIcon />
        </ButtonLink>
        <ButtonLink href="https://www.linkedin.com/in/thecodedestroyer">
          <LinkedInIcon />
        </ButtonLink>
      </div>
    </div>
    <div className="hidden h-full items-end xl:z-100 xl:flex">
      <Image
        src={image}
        quality={70}
        alt="profile picture"
        height={650}
        className="scale-x-[-1] transform-gpu object-fill"
        priority
      />
    </div>
    <div className="elipsis elipsis-1 absolute -z-10 block" />
    <div className="elipsis elipsis-2 absolute -z-10 block" />
  </SectionWrapper>
);
