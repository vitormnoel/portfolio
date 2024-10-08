
import Skills from "../skills/skills.jsx";
import SocialMedia from "./social_media.jsx";
import About from "./about_content.jsx";

function about() {
  return (
    <div
      id="about"
      className="grid gap-10 lg:grid-cols-2 lg:h-[100vh] mt-24 mb-[4vh] lg:m-auto items-center"
    >
      <section id="about" className="md:p-8 md:min-h-[65vh] ">
        <About />

        <div className="flex gap-6 flex-col md:flex-row md:items-end justify-between items-start mt-10 w-full">
          <a
            href="/resume.pdf"
            target="_blank"
            className="underline underline-offset-2 mt-4 font-normal hover:text-green-dark duration-300"
          >
            /resume
          </a>

          <SocialMedia />
        </div>
      </section>

      <Skills />
    </div>
  );
}

export default about;

{
  /* <Image
  src={Profile}
  alt="Vitor's picture"
  className="rounded-full w-[250px] border-4 border-green-dark transition delay-150 hover:ease-in-out"
  priority
/>; */
}
