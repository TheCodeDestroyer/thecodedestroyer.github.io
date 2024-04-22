import type { FC } from 'react';

import { NavBar } from '@components/nav/NavBar';
import { SectionAbout } from '@components/sections/SectionAbout';
import { SectionContactMe } from '@components/sections/SectionContactMe';
import { SectionExperience } from '@components/sections/SectionExperience';
import { SectionInterests } from '@components/sections/SectionInterests';
import { SectionMe } from '@components/sections/SectionMe';
import { SectionTechnologies } from '@components/sections/SectionTechnologies';

const Home: FC = () => {
  return (
    <main>
      <div className="h-screen w-full overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory">
        <NavBar />
        <SectionMe />
        <SectionAbout />
        <SectionTechnologies />
        <SectionExperience />
        <SectionInterests />
        <SectionContactMe />
      </div>
    </main>
  );
};

export default Home;
