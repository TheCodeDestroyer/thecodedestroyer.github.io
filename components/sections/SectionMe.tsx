'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Button } from '@components/Button';
import { GitHubIcon } from '@components/icon/GitHubIcon';
import { LinkedInIcon } from '@components/icon/LinkedInIcon';
import { BackgroundPatternImage } from '@components/img/BackgroundPatternImage';

import image from '@public/profile.png';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

export const SectionMe: FC = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.section
      className="relative h-screen snap-center snap-always overflow-hidden pt-[80px]"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="relative hidden h-screen w-full overflow-hidden md:block">
        <BackgroundPatternImage className="absolute bottom-0 right-0" />
      </div>
      <div className="z-100 relative ml-6 mt-20 flex flex-col md:absolute md:bottom-32 md:left-32 md:m-0">
        <div className="text-9xl">
          <h1>{`Hi, I'm`}</h1>
          <h1 className="text-accent">Nace Logar!</h1>
        </div>
        <div className="mt-8 flex flex-col text-2xl">
          <span>from</span>
          <span>Tržič, Slovenia</span>
        </div>
        <div className="mt-8 flex flex-row space-x-5">
          <Button size="sm">
            <GitHubIcon />
          </Button>
          <Button size="sm">
            <LinkedInIcon />
          </Button>
        </div>
      </div>
      <div className="z-100 absolute bottom-0 right-0 hidden xl:block">
        <Image
          src={image}
          quality={70}
          alt="profile picture"
          height={856}
          className="z-100 scale-x-[-1] object-fill"
          priority
        />
      </div>
      <div className="elipsis elipsis-1 absolute z-30 hidden md:block" />
      <div className="elipsis elipsis-2 absolute z-10 hidden md:block" />
    </motion.section>
  );
};
