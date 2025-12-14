'use client';

import type { FC } from 'react';

import Image from 'next/image';

import { links } from '@shared/constants/link.types';
import { Sections } from '@shared/types/section.types';

import { ButtonLink } from '@components/ButtonLink';
import { GitHubIcon } from '@components/icon/GitHubIcon';
import { LinkedInIcon } from '@components/icon/LinkedInIcon';
import { SectionWrapper } from '@components/sections/SectionWrapper';

import image from '@public/profile.png';

export const SectionMe: FC = () => (
  <SectionWrapper
    id={Sections.Me}
    className="flex flex-row justify-between bg-pattern-1 bg-position-[bottom_-6rem_right_0rem] bg-no-repeat"
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
        <ButtonLink ariaLabel="Visit GitHub profile" href={links.github}>
          <GitHubIcon />
        </ButtonLink>
        <ButtonLink ariaLabel="Visit LinkedIn profile" href={links.linkedin}>
          <LinkedInIcon />
        </ButtonLink>
      </div>
    </div>
    <div className="hidden h-full items-end xl:z-10 xl:flex">
      <Image
        src={image}
        quality={70}
        alt="profile"
        height={650}
        className="scale-x-[-1] transform-gpu object-fill"
        priority
      />
    </div>
    <div className="absolute bottom-60 left-2 -z-10 block h-90 w-2xl rotate-24 ellipsis bg-accent" />
    <div className="absolute bottom-24 left-80 -z-10 block h-19.5 w-2xl rotate-24 ellipsis bg-karry-100" />
  </SectionWrapper>
);

export default SectionMe;
