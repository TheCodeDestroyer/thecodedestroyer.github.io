import { clsx } from 'clsx';
import { type MotionStyle, type MotionValue, motion } from 'framer-motion';
import { useMotionTemplate, useMotionValue } from 'framer-motion';
import type { FC, MouseEvent } from 'react';

import type { Work } from '@utils/types/work.interface';

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
    '--mouse-y': useMotionTemplate`${mouseY}px`
  };

  return (
    <motion.article
      onMouseMove={handleOnMouseMove}
      style={style}
      className={clsx(
        'relative flex max-h-full min-w-75 select-none flex-col shadow-2lg lg:min-w-1/2 xl:min-w-1/3',
        'rounded-2xl border border-white border-opacity-10',
        'overflow-hidden bg-white bg-opacity-10 p-6',
        'text-sm lg:text-lg',
        'before:absolute before:left-0 before:top-0 before:z-50 before:h-full before:w-full before:rounded-inherit',
        'before:bg-halo before:opacity-0 before:xl:hover:opacity-100'
      )}
    >
      <h2 className="text-2xl">{company}</h2>
      <span className="mt-1 text-subtext">
        {to ? `${from} - ${to}` : 'Current'}
      </span>
      <span className="mt-3 text-accent">{position}</span>
      <ul className="group mt-3 list-disc space-y-3 pl-5 marker:text-[1.125rem] marker:text-accent">
        {tasks.map((task) => (
          <li key={task} className={clsx({})}>
            {task}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};
