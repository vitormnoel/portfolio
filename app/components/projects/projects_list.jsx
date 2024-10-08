import ProjectsItem from "./projects_list__item.jsx";

function projectList() {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <ProjectsItem
        title={"first"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at purus id ligula sodales congue sit amet et quam.
                Suspendisse mi mauris, suscipit ac justo et, egestas vehicula
                est.`}
        link={"google.com"}
        linkText={"link"}
      />
      <ProjectsItem
        title={"second"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at purus id ligula sodales congue sit amet et quam.`}
        link={"google.com"}
        linkText={"link"}
      />

      <ProjectsItem
        title={"third"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at purus id ligula sodales congue sit amet et quam.`}
        link={"google.com"}
        linkText={"link"}
      />
    </ul>
  );
}

export default projectList;
