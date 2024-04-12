import { clsx } from 'clsx';
import type { FC } from 'react';

interface TailwindIconProps {
  className?: string;
}

export const TailwindIcon: FC<TailwindIconProps> = ({ className }) => (
  <a
    href="https://tailwindcss.com"
    target="_blank"
    rel="noreferrer"
    className="group"
    title="Tailwind CSS"
  >
    <svg
      width="93px"
      height="93px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'fill-current text-[#44a8b3] group-hover:text-accent',
        className
      )}
    >
      <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
    </svg>
  </a>
);
