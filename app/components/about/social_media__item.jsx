import { MdOutlineErrorOutline } from "react-icons/md";

function socialMediaItem({ icon, link, ...props }) {
  return (
    <a href={link ? link : "/"} target="_blank" title={props.title} className="text-3xl">
      {icon ? icon : <MdOutlineErrorOutline/>}
    </a>
  );
}

export default socialMediaItem;
