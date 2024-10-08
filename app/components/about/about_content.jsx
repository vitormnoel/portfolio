import Title from "../ui/title.jsx";

function aboutContent() {
  return (
    <article className="w-full">
      <Title text="about"/>
      <p className="pt-2">
        Over the past four years, I have gained extensive{" "}
        <span className="">
          experience with a diverse array of technologies
        </span>{" "}
        in my role as a developer. My self-motivation drives me to continually
        learn and improve, enabling me to{" "}
        <span className="">
          work effectively both independently and as part of a team.
        </span>
      </p>
      <p className="pt-4">
        I am passionate about designing visually appealing interfaces,
        developing web applications, and everything in between. Outside of work,
        I enjoy traveling, playing video games, and listening to music.
      </p>
      <p className="pt-4">
        Currently, I am living in Spain, and{" "}
        <span className="bg-yellow-100 dark:bg-green-dark dark:text-slate-900 cursor-pointer">I am available for work.</span> If
        you have an open position or a project you would like to discuss, feel
        free to contact me.
      </p>
    </article>
  );
}

export default aboutContent;
