import type { FC, PropsWithChildren } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import type { Person, WithContext } from 'schema-dts';

import { links } from '@shared/constants/link.types';
import {
  AUTHOR_NAME,
  JOB_TITLE,
  META_DESCRIPTION,
  META_TITLE,
  PROFILE_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from '@shared/constants/meta.constants';

import './globals.css';

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
  metadataBase: new URL(SITE_URL),
  title: META_TITLE,
  description: META_DESCRIPTION,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [
      {
        url: PROFILE_IMAGE_PATH,
        width: 650,
        height: 650,
        alt: `${AUTHOR_NAME}, ${JOB_TITLE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [PROFILE_IMAGE_PATH],
  },
};

const personJsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE_IMAGE_PATH}`,
  jobTitle: JOB_TITLE,
  description: META_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Slovenia',
  },
  sameAs: [links.github, links.linkedin],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'Frontend Engineering',
  ],
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Static, hardcoded JSON-LD (no user input). Rendered as a text child
            rather than via dangerouslySetInnerHTML. */}
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
      </head>
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
