import type { Work } from '@interface/work.interface';
import { clsx } from 'clsx';
import type { FC } from 'react';

export const WorkCard: FC<Work> = ({ company, position, from, to, tasks }) => {
  return (
    <article
      className={clsx(
        'shadow-2lg min-w-75 md:min-w-1/3 flex min-h-full select-none flex-col',
        'rounded-2xl border border-white border-opacity-10',
        'overflow-hidden bg-white bg-opacity-10 p-6',
        'text-sm md:text-lg'
      )}
    >
      <h5 className="text-2xl">{company}</h5>
      <span className="text-subtext mt-1">
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
    </article>
  );
};
