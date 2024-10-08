import Title from "../ui/title.jsx";
import Projects from "./projects_list.jsx";
import Work from "./work_list.jsx";

function projects() {
  return (
    <div className="md:p-8 grid gap-6 mt-[10vh] py-4 m-auto items-center">
      <section id={"projects"} className="">
        <Title text="projects" />
        {/* <Projects /> */}
        <div className="h-[40vh] flex items-center justify-center text-neutral-400 cursor-default"><p>no projects added yet</p></div>
      </section>

      <section id={"experience"} className="">
        <Title text="xp" />
        <Work />
      </section>
    </div>
  );
}

export default projects;
