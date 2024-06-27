import Title from "../ui/title.jsx";
import Skills from "./skills_list.jsx";

function skills() {
  return (
    <section id="skills" className="flex items-center mb-28">
      <div className="bg-slate-50 w-full py-8 rounded-xl dark:bg-neutral-700">
        <div className="md:w-1/2 m-auto">
          <Title txt="skills" style="w-full ml-6 pb-6"/>
          <Skills/>
        </div>
      </div>
    </section>
  );
}

export default skills;