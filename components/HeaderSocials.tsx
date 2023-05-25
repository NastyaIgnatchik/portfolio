import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className=" absolute left-0 bottom-0 flex after:text-3xl after:font-light flex-col  items-center  gap-y-4  after:text-color-primary after:content-['|']  hidden md:flex">
      <a href="https://www.linkedin.com/in/nastya-ignatchik-7bb004259/">
        <BsLinkedin />
      </a>
      <a className="https://github.com/NastyaIgnatchik">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
