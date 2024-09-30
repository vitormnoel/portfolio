import { MdOutlineErrorOutline } from "react-icons/md";

function socialMediaItem({ icon, link, name, ...props }) {
  return (
    <a
      href={link ? link : "/"}
      target="_blank"
      title={props.title}
      aria-label={props.aria}
      className="hover:text-green-dark duration-300"
    >
      <p className="text-sm flex flex-col items-center">
        <span>{icon ? icon : <MdOutlineErrorOutline />}</span>
        {name ? name : "null"}
      </p>
    </a>
  );
}

export default socialMediaItem;
