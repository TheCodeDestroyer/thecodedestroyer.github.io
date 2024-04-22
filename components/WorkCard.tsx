import { clsx } from 'clsx';
import type { MotionStyle, MotionValue } from 'framer-motion';
import { useMotionTemplate, useMotionValue } from 'framer-motion';
import { motion } from 'framer-motion';
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
        'relative flex min-h-full min-w-75 select-none flex-col shadow-2lg md:min-w-1/3',
        'rounded-2xl border border-white border-opacity-10',
        'overflow-hidden bg-white bg-opacity-10 p-6',
        'text-sm md:text-lg',
        'before:absolute before:left-0 before:top-0 before:z-200 before:h-full before:w-full before:rounded-inherit',
        'before:bg-halo before:opacity-0 before:hover:opacity-100'
      )}
    >
      <h5 className="text-2xl">{company}</h5>
      <span className="mt-1 text-subtext">
        {to ? `${from} - ${to}` : 'Current'}
      </span>
      <span className="mt-3 text-accent">{position}</span>
      <ul className="list-disc space-y-3 pl-5 marker:text-[1.125rem] marker:text-accent ">
        {tasks.map((task) => (
          <li className="last:hidden" key={task}>
            {task}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};
