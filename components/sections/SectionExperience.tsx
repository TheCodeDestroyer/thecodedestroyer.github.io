'use client';

import { previousWork } from '@constants/work.constant';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import { WorkCard } from '@components/WorkCard';
import { SecondaryBackgroundPatternImage } from '@components/img/SecondaryBackgroundPatternImage';
import { SectionWrapper } from '@components/sections/SectionWrapper';

export const SectionExperience: FC = () => {
  const carousel = useRef<HTMLDivElement>(null);

  const [leftDragConstraint, setLeftDragConstraint] = useState<number>(0);

  useEffect(() => {
    if (!carousel.current) return;
    setLeftDragConstraint(
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
  }, []);

  return (
    <SectionWrapper id="experience" className="overflow-hidden">
      <div className="absolute z-[-1] block h-screen w-full overflow-hidden">
        <SecondaryBackgroundPatternImage className="absolute -bottom-[25rem] -right-[20rem] -z-[-3] rotate-[-27deg]" />
      </div>
      <h1 className="px-6 text-8xl text-white md:px-20 md:text-10xl">
        Experience
      </h1>
      <motion.div
        drag="x"
        ref={carousel}
        style={{ touchAction: 'none' }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        dragConstraints={{ right: 0, left: -leftDragConstraint }}
        className="mr-6 mt-10 flex cursor-grab flex-row items-stretch space-x-5 pl-6 active:cursor-grabbing md:mr-20 md:mt-20 md:pl-20"
      >
        {previousWork.map((work) => (
          <WorkCard key={work.company} {...work} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
