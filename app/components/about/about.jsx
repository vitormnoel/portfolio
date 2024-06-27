import Image from "next/image";

import Profile from "../../../public/images/profile.jpg";

import SocialMediaOptions from "./social_media.jsx";
import AboutContent from "./about_content.jsx";

function about() {
  return (
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
  );
}

export default about;
