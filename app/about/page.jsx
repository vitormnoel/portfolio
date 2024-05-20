import SocialMediaOptions from "../components/about/social_media.jsx";
import AboutContent from "../components/about/about_content.jsx";

export const metadata = {
  title: "About",
};

function About() {
  return (
    <section className="h-[90vh] grid gap-4 md:grid-cols-2">
      <div className="bg-yellow-10 mt-6 md:mt-0 flex flex-col gap-4 justify-center items-center">
        <img
          src="/images/2.jpg"
          alt="Vitor Manoel"
          className="rounded-full w-[250px] border-4 border-green-pastel"
        />

        <SocialMediaOptions />
      </div>
      <div className="bg-yellow-10 flex flex-col justify-center items-center">
        <AboutContent />
        <a
          href=""
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
