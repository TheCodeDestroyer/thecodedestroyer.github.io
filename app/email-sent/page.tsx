import { NavBar } from '@components/nav/NavBar';

const EmailSentPage = () => {
  return (
    <main className="navbar-padding relative grid h-screen w-full place-items-center overflow-hidden bg-pattern-1 bg-position-contact">
      <NavBar />
      <div className="flex w-full flex-col items-center justify-center space-y-8 px-8 md:w-2/5">
        <div className="flex w-full flex-col rounded-2xl border border-karry-100 border-opacity-50 bg-white bg-opacity-5 px-8 py-10 shadow-2lg md:px-16 md:py-20">
          <h2 className="w-full text-center text-4xl text-accent">
            Thanks for reaching out!
          </h2>
          <p className="mt-8 text-accent">
            I have received your message and will get back to you as soon as I
            can.
          </p>
        </div>
      </div>
      <div className="elipsis absolute right-[8rem] top-[55rem] -z-10 block h-[40rem] w-[31.125rem] bg-accent" />
      <div className="elipsis absolute  -top-[5rem] left-0 -z-10 block h-[41rem] w-[44rem] bg-anakiwa-300" />
    </main>
  );
};

export default EmailSentPage;
