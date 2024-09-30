import { MdOutlineErrorOutline } from "react-icons/md";

function item({ icon, name }) {
  return (
    <li className="cursor-default flex flex-col items-center">
      {icon ? icon : <MdOutlineErrorOutline size="32" />}
      <p className="text-sm text-center font-medium pt-2 capitalize">{name ? name : "blank"}</p>
    </li>
  );
}

export default item;
