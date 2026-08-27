import type { FC } from 'react';

import { NavBar } from '@components/nav/NavBar';
import SectionAbout from '@components/sections/SectionAbout';
import SectionCareer from '@components/sections/SectionCareer';
import SectionContactMe from '@components/sections/SectionContactMe';
import SectionInterests from '@components/sections/SectionInterests';
import SectionMe from '@components/sections/SectionMe';
import SectionTechnologies from '@components/sections/SectionTechnologies';

const Home: FC = () => (
  <main className="h-screen w-full overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory">
    <NavBar />
    <SectionMe />
    <SectionAbout />
    <SectionTechnologies />
    <SectionCareer />
    <SectionInterests />
    <SectionContactMe />
  </main>
);

export default Home;
