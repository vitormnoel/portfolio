import Skills from "../components/skills/skills.jsx";

export const metadata = {
  title: "Skills",
};

function skillsPage() {
  return (
    <section className="h-[88vh] flex items-center">
      <div className="bg-slate-50 w-full py-8 rounded-xl">
        <h2 className="text-start text-xl font-medium w-full ml-6 pb-6">[skills]</h2>
        <Skills />
      </div>
    </section>
  );
}

export default skillsPage;
