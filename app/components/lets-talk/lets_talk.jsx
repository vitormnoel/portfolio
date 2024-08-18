import Title from "../ui/title.jsx";
import Contact from "./contact_list.jsx";


function letsTalk() {
  return (
    <section className="h-[86vh] flex flex-col justify-center items-center">
      <div className="w-2/3">
        <Title txt="contact"/>
        <Contact />
      </div>
    </section>
  );
}

export default letsTalk;