"use client";

import Link from "next/link";
import { useState } from "react";

import { CiMenuFries } from "react-icons/ci";

function navBar() {
  const [navbar, setNavbar] = useState(false);

  function handleNavbar(e) {
    e.preventDefault();
    setTimeout(() => {
      setNavbar(!navbar);
    }, 300);
  }

  return (
    <div className="pt-8 pb-2 sticky top-0 right-0 lefet-0 z-10 w-full bg-white drop-shadow-sm dark:bg-neutral-800">
      <div className="flex place-content-between mx-auto px-8 lg:w-2/3">
        <h1 className="font-medium">
          <Link href="/">Vitor Manoel</Link>
        </h1>

        <nav className="text-base lowercase hidden md:block">
          <ul className="flex gap-12">
            <li key={"about"}>
              <Link
                href="/about"
                className="hover:text-green-dark duration-300"
              >
                about
              </Link>
            </li>
            <li key={"projects"}>
              <Link
                href="/projects"
                className="hover:text-green-dark duration-300"
              >
                work
              </Link>
            </li>
            <li key={"lets-talk"}>
              <Link
                href="/lets-talk"
                className="underline underline-offset-4 hover:text-green-dark rounded duration-300 hidden md:block"
              >
                let's talk
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className="md:hidden text-center"
          onClick={() => handleNavbar(event)}
        >
          <CiMenuFries size={22} className="cursor-pointer" />
          {navbar ? (
            <div className="bg-white absolute left-0 right-0 dark:bg-neutral-800 dark:text-slate-200">
              <div className="flex flex-col items-center justify-center pt-16 gap-2 h-full">
                <Link
                  href="/about"
                  className="hover:bg-green-dark w-full p-4"
                >
                  about
                </Link>
                <Link
                  href="/projects"
                  className="hover:bg-green-dark w-full p-4"
                >
                  work
                </Link>
                <Link
                  href="/lets-talk"
                  className="hover:bg-green-dark w-full p-4"
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
