'use client';

import {
  sectionAnimation,
  sectionAnimationThreshold
} from '@constants/section-animation.constant';
import { motion, useAnimation } from 'framer-motion';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { BackgroundPatternImage } from '@components/img/BackgroundPatternImage';

export const SectionAbout: FC = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: sectionAnimationThreshold });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.section
      className="relative h-screen snap-center snap-always overflow-hidden"
      ref={ref}
      variants={sectionAnimation}
      initial="hidden"
      animate={control}
    >
      <div className="relative block h-screen w-full overflow-hidden">
        <BackgroundPatternImage className="absolute -left-[18rem] -top-[19rem]" />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <p className="text-accent mx-6 text-3xl md:mx-32 md:text-9xl">
          <em className="text-white">As a Senior Frontend Developer,</em> I
          excel in creating pixel-perfect digital experiences that meet user
          needs with precision.
          <br />
          My passion for detail and technology drives me to over-deliver,
          crafting intuitive and responsive websites and web applications.
        </p>
      </div>
    </motion.section>
  );
};
