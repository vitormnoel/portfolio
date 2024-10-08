import WorkItem from "./work_list__item.jsx";

function workList() {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <WorkItem
        title={"Full Stack Developer"}
        description={""}
        link={"mantoro.ca"}
      />
      <WorkItem
        title={"Backend Developer"}
        description={""}
        link={"hpeautos.com.br"}
      />
      <WorkItem
        title={"Intern - IT Support Technician"}
        description={""}
        link={"teltelecom.com.br"}
      />
      {/* <WorkItem title={"Researcher"} description={""} link={"gov.br/cnpq"} /> */}
    </ul>
  );
}

export default workList;
