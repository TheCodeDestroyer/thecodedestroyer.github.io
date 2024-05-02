'use client';

import { previousWork } from '@constants/work.constant';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useRef, useState } from 'react';

import { Sections } from '@utils/types/section.enum';

import { useMount } from '@hooks/effect.hook';

import { WorkCard } from '@components/card/WorkCard';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionExperience: FC = () => {
  const carousel = useRef<HTMLDivElement>(null);

  const [leftDragConstraint, setLeftDragConstraint] = useState<number>(0);

  useMount(() => {
    if (!carousel.current) return;
    setLeftDragConstraint(
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
  });

  return (
    <SectionWrapper
      id={Sections.Experience}
      className="overflow-x-hidden bg-pattern-2 bg-position-experience bg-no-repeat"
    >
      <h1 className="mt-4 px-6 text-2xl text-white md:mt-48 md:text-8xl lg:px-20 lg:text-10xl">
        Experience
      </h1>
      <motion.div
        drag="x"
        ref={carousel}
        style={{ touchAction: 'none' }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        dragConstraints={{ right: 0, left: -leftDragConstraint }}
        className={clsx(
          'mr-6 mt-4 flex max-h-4/5 cursor-grab flex-row items-stretch space-x-5 pl-6 active:cursor-grabbing md:mr-20 md:mt-10 md:mt-20 md:pl-20'
        )}
      >
        {previousWork.map((work) => (
          <WorkCard key={work.company} {...work} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default SectionExperience;
