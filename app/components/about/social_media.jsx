import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

import SocialMediaItem from "./social_media__item";

const links = {
    email: "mailto: hi@vitormanoel.com",
    github: "https://github.com/vitormnoel",
    linkedin: "https://linkedin.com/in/vitormanoel",
};


function socialMediaOptions() {
  return (
    <div className="flex justify-center gap-8" id="social-media">
      <SocialMediaItem icon={<MdOutlineAlternateEmail size="32" aria-labelledby="email"/>} link={links.email} name="email" aria="link to send me an e-mail" />
      <SocialMediaItem icon={<IoLogoGithub size="32" aria-labelledby="github"/>} link={links.github} name="github" aria="link to my github profile" />
      <SocialMediaItem icon={<FaLinkedinIn size="32" aria-labelledby="linkedin"/>} link={links.linkedin} name="linkedin" aria="link to my linkedin profile" />
    </div>
  );
}

export default socialMediaOptions;
