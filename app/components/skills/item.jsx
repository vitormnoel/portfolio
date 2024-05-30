import { MdOutlineErrorOutline } from "react-icons/md";

function item({ icon, name }) {
  return (
    <li className="flex flex-col items-center hover:text-green-pastel duration-300">
      {icon ? icon : <MdOutlineErrorOutline size="32" />}
      <p className="text-sm font-medium pt-2 capitalize text-slate-700">{name ? name : "blank"}</p>
    </li>
  );
}

export default item;
