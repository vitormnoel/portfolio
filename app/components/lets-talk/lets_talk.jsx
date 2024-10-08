import Title from "../ui/title.jsx";
import Contact from "./contact_list.jsx";

function letsTalk() {
  return (
    <section className="h-[95vh] p-8 flex flex-col justify-center m-auto lg:w-1/2 ">
      <Title text="contact" />
      <Contact />
    </section>
  );
}

export default letsTalk;
