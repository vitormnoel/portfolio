import { FaGithub, FaLinkedin } from "react-icons/fa";

import ListItem from "./list_item.jsx";

function contactList() {
  return (
    <ul className="text-center">
      <li className="cursor-pointer mt-6 flex justify-center border-2 flex-col md:flex-row border-slate-200 hover:border-green-pastel p-4 rounded">
        <span className="pr-2">📆</span>
        <p className="px-2">
          Currently available for new opportunities
        </p>
      </li>
      <ListItem
        emoji="📬"
        description="for questions"
        link="mailto: hi@vitormanoel.com ?subject=Hi, I have a question!"
        color="hover:text-slate-700 bg-slate-300"
        
        title="hi@vitormanoel.com"
      />
      <ListItem
        emoji="💾"
        description="for coding projects"
        link="https://github.com/vitormnoel"
        color="bg-slate-git text-white hover:text-slate-git"
        icon={<FaGithub />}
        title="/vitormnoel"
      />
      <ListItem
        emoji="👤"
        description="for career opportunities"
        link="https://linkedin.com/in/vitormnoel"
        color="bg-blue-linkedin text-white hover:text-blue-linkedin"
        icon={<FaLinkedin />}
        title="/vitormnoel"
      />
    </ul>
  );
}

export default contactList;
