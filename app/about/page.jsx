import Image from "next/image";
import Profile from "../../public/images/profile.jpg";

import SocialMediaOptions from "../components/about/social_media.jsx";
import AboutContent from "../components/about/about_content.jsx";

export const metadata = {
  title: "About",
};

function About() {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:h-[88vh]">
      <div className="bg-yellow-10 mt-6 md:mt-0 flex flex-col gap-4 justify-center items-center">
        <Image
          src={Profile}
          alt="Vitor's picture"
          className="rounded-full w-[250px] border-4 border-green-pastel"
          priority
        />

        <SocialMediaOptions />
      </div>
      <div className="bg-yellow-10 flex flex-col justify-center items-center">
        <AboutContent />
        <a
          href="https://drive.google.com/file/d/15Mfy5dPntlFNuxelUoPgdV25vLobFETZ/view?usp=sharing"
          target="_blank"
          className="mb-10 underline underline-offset-2 mt-4 hover:bg-slate-100 px-3 duration-300"
        >
          /resume
        </a>
      </div>
    </section>
  );
}

export default About;
