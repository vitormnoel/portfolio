import { MdOutlineErrorOutline } from "react-icons/md";

function socialMediaItem({ icon, link, ...props }) {
  return (
    <a href={link ? link : "/"} target="_blank" title={props.title} aria-label={props.aria} className="text-3xl hover:text-green-pastel duration-300">
      {icon ? icon : <MdOutlineErrorOutline/>}
    </a>
  );
}

export default socialMediaItem;
