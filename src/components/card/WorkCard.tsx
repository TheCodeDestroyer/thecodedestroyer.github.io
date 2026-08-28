import type { FC, MouseEvent } from 'react';

import { clsx } from 'clsx';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import type { MotionStyle, MotionValue } from 'motion/react';

import type { Work } from '@shared/types/work.types';

interface Style extends MotionStyle {
  '--mouse-x'?: MotionValue<string>;
  '--mouse-y'?: MotionValue<string>;
}

export const WorkCard: FC<Work> = ({ company, position, from, to, tasks }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();
    const rectX = e.clientX - rect.left;
    const rectY = e.clientY - rect.top;

    mouseX.set(rectX);
    mouseY.set(rectY);
  };

  const style: Style = {
    '--mouse-x': useMotionTemplate`${mouseX}px`,
    '--mouse-y': useMotionTemplate`${mouseY}px`,
  };

  return (
    <motion.article
      onMouseMove={handleOnMouseMove}
      style={style}
      className={clsx(
        'relative flex max-h-full min-w-75 flex-col shadow-2lg select-none lg:min-w-1/2 xl:min-w-1/3 2xl:min-w-1/4',
        'rounded-2xl border border-white/10',
        'overflow-hidden bg-white/10 p-4 md:p-5',
        'text-xs md:text-sm lg:text-base',
        'before:absolute before:top-0 before:left-0 before:z-50 before:h-full before:w-full before:rounded-inherit before:content-[""]',
        'before:halo-effect-gradient',
        'before:pointer-events-none before:opacity-0 hover:before:opacity-100',
        // The halo only reads as a halo while it follows the cursor, so it
        // stays hidden rather than frozen in a corner when motion is reduced.
        'motion-reduce:hover:before:opacity-0!',
      )}
    >
      <h3 className="text-lg md:text-xl lg:text-2xl">{company}</h3>
      <span className="mt-1 text-subtext">
        {to ? `${from} - ${to}` : 'Current'}
      </span>
      <span className="mt-2 text-accent">{position}</span>
      <ul className="group mt-2 list-disc space-y-2 pl-5 marker:text-[1.125rem] marker:text-accent">
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </motion.article>
  );
};
