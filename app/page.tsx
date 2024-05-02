import dynamic from 'next/dynamic';
import type { FC } from 'react';

import { NavBar } from '@components/nav/NavBar';
import SectionMe from '@components/sections/SectionMe';

const SectionAbout = dynamic(() => import('@components/sections/SectionAbout'));
const SectionContactMe = dynamic(
  () => import('@components/sections/SectionContactMe')
);
const SectionExperience = dynamic(
  () => import('@components/sections/SectionExperience')
);
const SectionInterests = dynamic(
  () => import('@components/sections/SectionInterests')
);
const SectionTechnologies = dynamic(
  () => import('@components/sections/SectionTechnologies')
);

const Home: FC = () => (
  <main className="h-screen w-full overflow-y-scroll md:snap-y md:snap-mandatory">
    <NavBar />
    <SectionMe />
    <SectionAbout />
    <SectionTechnologies />
    <SectionExperience />
    <SectionInterests />
    <SectionContactMe />
  </main>
);

export default Home;
