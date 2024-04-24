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
    className="flex flex-row justify-between bg-pattern-1 bg-position-me bg-no-repeat"
  >
    <div className="ml-6 flex h-full flex-col items-start justify-center pb-10 md:ml-32 md:justify-end md:pb-32">
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
        <ButtonLink href="https://linkedin.com/in/thecodedestroyer">
          <LinkedInIcon />
        </ButtonLink>
      </div>
    </div>
    <div className="hidden h-full items-end xl:z-10 xl:flex">
      <Image
        src={image}
        quality={70}
        alt="profile picture"
        height={650}
        className="scale-x-[-1] transform-gpu object-fill"
        priority
      />
    </div>
    <div className="elipsis absolute bottom-60 left-2 -z-10 block h-[22.5rem] w-[42rem] rotate-[24deg] bg-accent" />
    <div className="elipsis absolute bottom-24 left-80 -z-10 block h-[19.5rem] w-[42rem] rotate-[24deg] bg-karry-100" />
  </SectionWrapper>
);
