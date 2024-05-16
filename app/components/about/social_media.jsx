import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

import SocialMediaItem from "./social_media__item";

const links = {
    email: "mailto: hello@vitormanoel.com",
    github: "https://github.com/vitormnoel",
    linkedin: "https://linkedin.com/in/vitormnoel",
};


function socialMediaOptions() {
  return (
    <div className="flex justify-center gap-4" id="social-media">
      <SocialMediaItem icon={<MdOutlineAlternateEmail size="32" aria-labelledby="email"/>} link={links.email} />
      <SocialMediaItem icon={<IoLogoGithub size="32" aria-labelledby="github"/>} link={links.github} />
      <SocialMediaItem icon={<FaLinkedinIn size="32" aria-labelledby="linkedin"/>} link={links.linkedin} />
    </div>
  );
}

export default socialMediaOptions;
