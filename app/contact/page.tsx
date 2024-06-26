'use client';

import type { FC } from 'react';

import { useCurrentSectionStore } from '@store/common.store';

import { useMount } from '@hooks/effect.hook';

import { ContactForm } from '@components/ContactForm';
import { NavBar } from '@components/nav/NavBar';
import { BotGuard } from '@components/security/BotGuard';

const ContactPage: FC = () => {
  const { setCurrentSection } = useCurrentSectionStore();

  useMount(() => {
    setCurrentSection(null);
  });

  return (
    <main className="navbar-padding relative grid min-h-screen w-full place-items-start bg-pattern-1 bg-position-contact pb-10 md:place-items-center">
      <NavBar />
      <div className="flex w-full flex-col items-center justify-center space-y-8 px-8 md:w-2/5">
        <h2 className="text-4xl">Send an email</h2>
        <BotGuard>
          <ContactForm />
        </BotGuard>
      </div>
      <div className="absolute -z-10 size-full overflow-hidden">
        <div className="elipsis absolute -top-[5rem] right-[8rem] -z-10 block h-[40rem] w-[31.125rem] bg-anakiwa-300" />
        <div className="elipsis absolute  left-0 top-[55rem] -z-10 block h-[41rem] w-[44rem] bg-accent" />
      </div>
    </main>
  );
};

export default ContactPage;
