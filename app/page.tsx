import type { FC } from 'react';

import { NavBar } from '@components/nav/NavBar';
import { SectionAbout } from '@components/sections/SectionAbout';
import { SectionMe } from '@components/sections/SectionMe';

const Home: FC = () => {
  return (
    <main className="max-w-10xl mx-auto ">
      <NavBar />
      <div className="h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth pt-[80px]">
        <SectionMe />
        <SectionAbout />
      </div>
    </main>
  );
};

export default Home;
