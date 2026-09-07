'use client';

import type { FC } from 'react';
import { useRef, useState } from 'react';

import { clsx } from 'clsx';
import { motion } from 'motion/react';

import { previousWork } from '@shared/constants/work.constants';
import { Sections } from '@shared/types/section.types';

import { useMount } from '@client/hooks/effect.hook';

import { WorkCard } from '@components/card/WorkCard';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionCareer: FC = () => {
  const carousel = useRef<HTMLDivElement>(null);

  const [leftDragConstraint, setLeftDragConstraint] = useState<number>(0);

  useMount(() => {
    if (!carousel.current) return;
    setLeftDragConstraint(
      carousel.current.scrollWidth - carousel.current.offsetWidth,
    );
  });

  return (
    <SectionWrapper
      id={Sections.Career}
      className="overflow-x-hidden bg-pattern-2 bg-position-[bottom_-28rem_right_-10rem] bg-no-repeat"
    >
      <h2 className="3xl:mt-48 3xl:text-10xl mt-4 px-6 text-2xl text-white xl:px-20 xl:text-8xl">
        Career
      </h2>
      <motion.div
        drag="x"
        ref={carousel}
        style={{ touchAction: 'none' }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        dragConstraints={{ right: 0, left: -leftDragConstraint }}
        className={clsx(
          'mt-4 mr-6 flex max-h-4/5 cursor-grab flex-row items-stretch space-x-5 pl-6 active:cursor-grabbing md:mt-10 md:mr-20 md:pl-20',
        )}
      >
        {previousWork.map((work) => (
          <WorkCard key={work.company} {...work} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default SectionCareer;
