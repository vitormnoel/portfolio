import Item from "./item.jsx";

import { FaHtml5, FaCss3, FaNodeJs, FaAngular } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiFlutterFill,
} from "react-icons/ri";
import { SiFirebase, SiAdobexd, SiCypress } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { DiGithubAlt } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

function skills() {
  return (
    <ul className="w-2/3 grid grid-cols-3 md:grid-cols-5 gap-8 m-auto text-center">
      <Item icon={<FaHtml5 size="32" />} name="HTML 5" />
      <Item icon={<FaCss3 size="32" />} name="CSS 3" />
      <Item icon={<RiTailwindCssFill size="32" />} name="tailwind CSS" />
      <Item icon={<RiJavascriptFill size="32" />} name="javaScript" />
      <Item icon={<RiNextjsFill size="32" />} name="next.js" />
      <Item icon={<FaNodeJs size="32" />} name="node.js" />
      <Item icon={<RiFlutterFill size="32" />} name="flutter" />
      <Item icon={<FaAngular size="32" />} name="angular" />
      <Item icon={<SiCypress size="32" />} name="cypress" />
      <Item icon={<GrMysql size="32" />} name="mySQL" />
      <Item icon={<SiFirebase size="32" />} name="firebase" />
      <Item icon={<FiFigma size="32" />} name="figma" />
      <Item icon={<SiAdobexd size="32" />} name="adobeXD" />
      <Item icon={<DiGithubAlt size="32" />} name="github" />
    </ul>
  );
}

export default skills;
