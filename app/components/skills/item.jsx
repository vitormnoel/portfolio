import { MdOutlineErrorOutline } from "react-icons/md";

function item({ icon, name }) {
  return (
    <li className="cursor-default flex flex-col items-center hover:text-green-dark duration-300">
      {icon ? icon : <MdOutlineErrorOutline size="32" />}
      <p className="text-sm font-medium pt-2 capitalize">{name ? name : "blank"}</p>
    </li>
  );
}

export default item;
