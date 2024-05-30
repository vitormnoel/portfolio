import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

import Profile from "../../public/images/profile.jpg";

import SocialMediaOptions from "../components/about/social_media.jsx";
import AboutContent from "../components/about/about_content.jsx";
import Skills from "../components/skills/skills.jsx";

export const metadata = {
  title: "About",
};

function About() {
  return (
    <>
      <section
        id="about"
        className="grid gap-10 md:grid-cols-2 mt-[10vh] md:mt-[0] md:h-[100vh]"
      >
        <div className="bg-yellow-10 mt-6 md:mt-0 flex flex-col gap-4 justify-center items-center">
          <Image
            src={Profile}
            alt="Vitor's picture"
            className="rounded-full w-[250px] border-4 border-green-dark transition delay-150 hover:ease-in-out"
            priority
          />

          <SocialMediaOptions />
        </div>
        <div className="bg-yellow-10 flex flex-col justify-center items-center">
          <AboutContent />
          <a
            href="/vitor_manoel-resume.pdf"
            target="_blank"
            className="mb-10 underline underline-offset-2 mt-4 px-3 font-normal hover:text-green-dark duration-300"
          >
            /resume
          </a>
        </div>
      </section>

      <IoIosArrowDown size={30} className="invisible md:visible absolute bottom-4 right-0 left-0 m-auto z-50 text-center hover:text-green-dark animate-bounce" />

      <section id="skills" className="flex items-center mb-28">
        <div className="bg-slate-50 w-full py-8 rounded-xl">
          <div className="md:w-1/2 m-auto">
          <h2 className="text-start text-xl font-medium w-full ml-6 pb-6 text-slate-700">
              [skills]
            </h2>
            <Skills />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
