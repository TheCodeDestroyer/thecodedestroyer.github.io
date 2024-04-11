import Image from 'next/image';
import type { FC } from 'react';

import { ButtonLink } from '@components/ButtonLink';
import { GitHubIcon } from '@components/icon/GitHubIcon';
import { LinkedInIcon } from '@components/icon/LinkedInIcon';
import { BackgroundPatternImage } from '@components/img/BackgroundPatternImage';
import { SectionWrapper } from '@components/sections/SectionWrapper';

import image from '@public/profile.png';

export const SectionMe: FC = () => (
  <SectionWrapper id="me">
    <div className="relative block h-screen w-full overflow-hidden">
      <BackgroundPatternImage className="absolute bottom-0 right-0" />
    </div>
    <div className="absolute bottom-10 left-6 z-100 m-0 md:bottom-32 md:left-32">
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
    <div className="absolute bottom-0 right-0 z-100 hidden xl:block">
      <Image
        src={image}
        quality={70}
        alt="profile picture"
        height={650}
        className="z-100 scale-x-[-1] transform-gpu object-fill"
        priority
      />
    </div>
    <div className="elipsis elipsis-1 absolute z-30 block" />
    <div className="elipsis elipsis-2 absolute z-10 block" />
  </SectionWrapper>
);
