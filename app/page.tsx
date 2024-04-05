import type { FC } from 'react';

import { NavBar } from '@components/nav/NavBar';

const Home: FC = () => {
  return (
    <main className="min-h-screen">
      <NavBar />
    </main>
  );
};

export default Home;
