import type { FC } from 'react';

import { NavBar } from '@components/nav/NavBar';
import { SectionMe } from '@components/sections/SectionMe';

const Home: FC = () => (
  <main className="mx-auto min-h-screen max-w-10xl overflow-auto">
    <NavBar />
    <SectionMe />
  </main>
);

export default Home;
