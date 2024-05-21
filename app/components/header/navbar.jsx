"use client";

import Link from "next/link";
import { useState } from "react";

import { CiMenuFries } from "react-icons/ci";

function navBar() {
  const [navbar, setNavbar] = useState(true);

  function handleNavbar(e) {
    e.preventDefault();
    setTimeout(() => {
      setNavbar(!navbar);
    }, 400);
  }

  return (
    <div className="pt-8 pb-2 sticky top-0 right-0 lefet-0 z-10 w-full text-slate-700 bg-white drop-shadow-sm">
      <div className="flex place-content-between mx-auto px-8 lg:w-2/3">
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

        <Link
          href="/lets-talk"
          className="underline underline-offset-4 hover:bg-slate-100 px-3 duration-300 hidden md:block"
        >
          /let's talk
        </Link>

        <div
          className="md:hidden text-center"
          onClick={() => handleNavbar(event)}
        >
          <CiMenuFries size={22} className="cursor-pointer" />
          {navbar ? (
            <div className="bg-white  absolute left-0 right-0">
              <div className="flex flex-col items-center justify-center pt-16 gap-2 h-full">
                <Link
                  href="/about"
                  className="hover:bg-sky-100 w-full p-4"
                >
                  about
                </Link>
                <Link
                  href="/skills"
                  className="hover:bg-green-pastel w-full p-4"
                >
                  skills
                </Link>
                <Link
                  href="/projects"
                  className="hover:bg-green-pastel w-full p-4"
                >
                  work
                </Link>
                <Link
                  href="/lets-talk"
                  className="hover:bg-green-pastel w-full p-4"
                >
                  /let's talk
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default navBar;
