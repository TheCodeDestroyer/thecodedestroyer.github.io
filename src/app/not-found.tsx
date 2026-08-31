import type { FC } from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import { buttonVariants } from '@components/buttonVariants';
import { Ellipsis } from '@components/Ellipsis';
import { NavBar } from '@components/nav/NavBar';

export const metadata: Metadata = {
  title: '404 — Page not found',
  robots: { index: false, follow: true },
  // Drop the root layout's `canonical: '/'`; this page is not the home page.
  alternates: { canonical: null },
};

const NotFound: FC = () => (
  <main className="relative h-screen w-full overflow-hidden pattern-top-left">
    <NavBar />
    <div className="mx-auto flex h-full max-supported-width flex-col items-center justify-center px-6 text-center md:navbar-padding">
      <p className="text-9xl text-accent lg:text-10xl">404</p>
      <h1 className="mt-4 text-4xl sm:text-8xl">This page went missing.</h1>
      <p className="mt-6 max-w-2xl text-lg text-subtext sm:text-2xl">
        The link is broken or the page has moved. Everything else is still a
        scroll away on the home page.
      </p>
      <div className="mt-10">
        <Link href="/" className={buttonVariants()}>
          Back to home
        </Link>
      </div>
    </div>
    <Ellipsis className="-bottom-40 left-2 h-90 w-2xl rotate-24 bg-accent" />
    <Ellipsis className="-top-40 right-2 h-90 w-2xl rotate-24 bg-anakiwa-300" />
  </main>
);

export default NotFound;
