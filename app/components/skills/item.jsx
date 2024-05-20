import { MdOutlineErrorOutline } from "react-icons/md";

function item({ icon, name }) {
  return (
    <li className="flex flex-col items-center hover:text-green-pastel duration-300">
      {icon ? icon : <MdOutlineErrorOutline size="32" />}
      <p className="text-sm font-normal pt-1 capitalize text-black">{name ? name : "blank"}</p>
    </li>
  );
}

export default item;
