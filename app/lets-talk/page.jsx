import Contact from "../components/lets-talk/contact_list.jsx";

export const metadata = {
  title: "Contact",
};

function letsTalkPage() {
  return (
    <section className="h-[88vh] flex flex-col justify-center items-center">
      <div className="w-2/3">
        <h2 className="text-start text-xl font-medium">[contact]</h2>
        <Contact />
      </div>
    </section>
  );
}

export default letsTalkPage;
