import { LiaExternalLinkAltSolid } from "react-icons/lia";

function workItem({ title, description, link, ...props }) {
  return (
    <li className="cursor-default group p-4 duration-300 rounded-lg lg:max-w-[26vw]">
      
      <article>
        <p className="capitalize font-medium">{title}</p>
        <p className="text-sm">{description}</p>
      </article>

      <a
        href={`https://www.` + link}
        target="_blank"
        className="flex items-start gap-1 text-slate-400 dark:text-neutral-400 hover:text-green-dark duration-300 mt-2"
      >
        <LiaExternalLinkAltSolid size={18} />
        <p className="text-sm font-semibold">{link}</p>
      </a>
    </li>
  );
}

export default workItem;
