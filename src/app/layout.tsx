import type { FC, PropsWithChildren } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { clsx } from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import type { Person, WithContext } from 'schema-dts';

import { links } from '@shared/constants/link.types';
import {
  AUTHOR_HEADLINE,
  AUTHOR_NAME,
  JOB_TITLE,
  META_DESCRIPTION,
  META_TITLE,
  PROFILE_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
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
  title: { default: META_TITLE, template: `%s | ${SITE_NAME}` },
  description: META_DESCRIPTION,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
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
        alt: AUTHOR_HEADLINE,
      },
    ],
  },
  // No `creator`/`site` handle: there is no X/Twitter account to point at.
  twitter: {
    card: 'summary_large_image',
    images: [PROFILE_IMAGE_PATH],
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
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
          'min-w-[375px] bg-black font-space-grotesk text-white selection:bg-accent selection:text-black',
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
