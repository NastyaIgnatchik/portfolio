import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BiBookAlt, BiUser } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Navigation = () => {
  const [isActive, setIsActive] = useState<string>("#");
  return (
    <div className="w-full fixed left-0 bottom-3 z-30">
      <div className="bg-[rgba(0,0,0,0.3)] w-[50%] flex flex-row justify-center px-3 py-3  max-w-[250px] mx-auto gap-1.5 rounded-3xl">
        <a
          href="#"
          onClick={() => setIsActive("#")}
          className={` navigationLink ${
            isActive === "#" ? "navigationActiveLink" : ""
          }`}
        >
          <AiOutlineHome className="w-full" />
        </a>
        <a
          href="#about"
          onClick={() => setIsActive("#about")}
          className={` navigationLink ${
            isActive === "#about" ? "navigationActiveLink" : ""
          }`}
        >
          <BiUser className="w-full" />
        </a>
        <a
          href="#experience"
          onClick={() => setIsActive("#experiense")}
          className={` navigationLink ${
            isActive === "#experiense" ? "navigationActiveLink" : ""
          }`}
        >
          <BiBookAlt className="w-full" />
        </a>
        <a
          href="#services"
          onClick={() => setIsActive("#services")}
          className={` navigationLink ${
            isActive === "#services" ? "navigationActiveLink" : ""
          }`}
        >
          <RiServiceLine className="w-full" />
        </a>
        <a
          href="#contacts"
          onClick={() => setIsActive("#contact")}
          className={` navigationLink ${
            isActive === "#contact" ? "navigationActiveLink" : ""
          }`}
        >
          <AiOutlineMessage className="w-full" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
