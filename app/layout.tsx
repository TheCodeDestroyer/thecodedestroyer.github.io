import { META_DESCRIPTION, META_TITLE } from '@constants/meta.constant';
import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import type { FC, PropsWithChildren } from 'react';

import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space_grotesk'
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus_jakarta_sans'
});

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={clsx(spaceGrotesk.variable, plusJakartaSans.variable)}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
