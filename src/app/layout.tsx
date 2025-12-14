import type { FC, PropsWithChildren } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

import { META_DESCRIPTION, META_TITLE } from '@shared/constants/meta.constants';

import '@global-style';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space_grotesk',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus_jakarta_sans',
});

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={clsx(
          spaceGrotesk.variable,
          plusJakartaSans.variable,
          'min-w-[375px] scroll-smooth bg-black font-space-grotesk text-white selection:bg-accent selection:text-black',
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
