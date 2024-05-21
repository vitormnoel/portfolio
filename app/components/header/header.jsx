import Link from "next/link";

function headerSection() {
  return (
    <header className="flex flex-col justify-center h-[88vh] items-center text-center">
      <p className="text-8xl cursor-pointer">💻</p>
      <h2 className="capitalize text-4xl md:text-6xl pt-2">Software Engineer</h2>
      <p className="md:w-1/2 pt-8 ">
        a Brazilian developer based in Barcelona, experienced in Full Stack
        Development using React, Next.js, and Flutter for web and mobile
      </p>
      <Link href="/lets-talk" className="block md:invisible mt-8 underline underline-offset-4 hover:bg-slate-100 px-3 duration-300">/let's talk</Link>
    </header>
  );
}

export default headerSection;
