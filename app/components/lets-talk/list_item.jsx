function listItem({ emoji, description, link, color, icon, title }) {
  return (
    <li className="mt-6 flex flex-col md:grid grid-cols-1 md:grid-cols-4 gap-2 items-center text-center md:text-start">
      <p className="col-span-2 text-xl">
        <span className="pr-2">{emoji ? emoji : "🌌"}</span>
        {description ? description : "blank"}
      </p>
      <a
        href={link ? link : "/"}
        target="_blank"
        className={`w-full font-semibold col-span-2 flex justify-center gap-2 items-center p-4 rounded col-start-3 hover:bg-slate-100 duration-300 ` + color}
      >
        {icon ? icon : "🔗" }
        {title ? title : "blank"}
      </a>
    </li>
  );
}

export default listItem;
