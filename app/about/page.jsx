import { IoIosArrowDown } from "react-icons/io";

import AboutSection from "../components/about/about.jsx";
import SkillsSection from "../components/skills/skills.jsx";

export const metadata = {
  title: "About",
};

function AboutPage() {
  return (
    <>
      <AboutSection />

      <IoIosArrowDown
        size={30}
        className="invisible md:visible absolute bottom-4 right-0 left-0 m-auto z-50 text-center hover:text-green-dark animate-bounce"
      />

      <SkillsSection />
    </>
  );
}

export default AboutPage;
