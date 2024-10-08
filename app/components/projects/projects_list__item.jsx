import { IoMdLink } from "react-icons/io";

function projectsItem({ title, description, link, ...props }) {
  return (
    <li className="group hover:bg-neutral-100 dark:hover:bg-neutral-700 duration-300 rounded-lg lg:max-w-[26vw]">
      <a href={`https://` + link} target="_blank" className="p-4 inline-block h-full">
        <div className="bg-stone-50 h-[100px] rounded-sm" />

        <article className="mb-2">
          <p className="mt-4 mb-1 capitalize font-medium ">{title}</p>
          <p className="text-sm">{description}</p>
        </article>

        <span className="flex gap-1 items-center group-hover:text-green-dark duration-300 text-slate-400 dark:text-neutral-400">
          <IoMdLink />
          <p className="text-sm font-semibold">
            {props.linkText}
          </p>
        </span>
      </a>
    </li>
  );
}

export default projectsItem;
