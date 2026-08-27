import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'rounded-xl fill-current text-center font-plus-jakarta-sans font-semibold tracking-button transition-colors select-none disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      color: {
        primary: [
          'border-none',
          'text-black',
          'bg-accent',
          'hover:bg-white',
          'hover:text-black',
        ],
        secondary: [
          'border-none',
          'text-accent',
          'bg-black',
          'ring-1',
          'ring-accent',
          'hover:bg-accent',
          'hover:text-black',
        ],
        secondaryAlt: [
          'border-none',
          'text-accent',
          'bg-black',
          'ring-1',
          'ring-accent',
          'hover:bg-white',
          'hover:text-black',
          'hover:ring-0',
        ],
      },
      size: {
        /* Near-square, no text padding — for icon-only links. */
        icon: 'h-11 px-2.5 py-0',
        md: 'h-12 px-6 py-2',
      },
    },
    /* Here rather than in the consuming components, so a bare
       `buttonVariants()` is styled the same as `<ButtonLink />`. */
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  },
);
