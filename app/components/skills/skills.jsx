import Title from "../ui/title.jsx";
import Skills from "./skills_list.jsx";

function skills() {
  return (
    <section id="skills" className="bg-neutral-100 rounded-3xl dark:bg-neutral-700 p-8 md:min-h-[65vh]">
      <Title text="tech" style="text-start"/>
      <Skills />
    </section>
  );
}

export default skills;
