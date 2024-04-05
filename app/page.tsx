import type { FC } from 'react';

import { NavBar } from '@components/nav/NavBar';
import { SectionMe } from '@components/sections/SectionMe';

const Home: FC = () => {
  return (
    <main className="max-w-10xl mx-auto h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <NavBar />
      <SectionMe />
      <SectionMe />
      <SectionMe />
    </main>
  );
};

export default Home;
