import type { FC } from 'react';

import { NavBar } from '@components/nav/NavBar';
import { SectionAbout } from '@components/sections/SectionAbout';
import { SectionMe } from '@components/sections/SectionMe';
import { SectionTechnologies } from '@components/sections/SectionTechnologies';

const Home: FC = () => {
  return (
    <main className="h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <NavBar />
      <SectionMe />
      <SectionAbout />
      <SectionTechnologies />
    </main>
  );
};

export default Home;
