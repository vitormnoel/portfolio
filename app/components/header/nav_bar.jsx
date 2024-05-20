import Link from "next/link";

function navBar() {
  return (
    <div className="pt-8 pb-2 sticky top-0  right-0 w-[100vw] text-slate-700 bg-white drop-shadow-sm">
      <div className="flex items-center place-content-between mx-auto px-8 lg:w-2/3">
        <h1 className="font-medium">
          <Link href="/">Vitor Manoel</Link>
        </h1>

        <nav className="text-base lowercase hidden md:block">
          <ul className="flex gap-20">
            <Link href="/about">about</Link>
            <Link href="/skills">skills</Link>
            <Link href="/projects">work</Link>
          </ul>
        </nav>

        <Link href="/lets-talk" className="underline underline-offset-4 hover:bg-slate-100 px-3 duration-300">/let's talk</Link>
      </div>
    </div>
  );
}

export default navBar;
