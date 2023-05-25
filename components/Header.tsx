import React, { useState } from "react";
import CTA from "./CTA";
import Image from "next/image";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);

  function rabbitMemEnter() {
    setIsMouseEnter(true);
  }
  function rabbitMemLeave() {
    setIsMouseEnter(false);
  }

  return (
    <div className="mx-auto my-auto flex flex-col items-center gap-y-4 w-9/12 relative pt-7">
      <h5>Hello I'm </h5>
      <h1 className="text-3xl">Nastya Ignatchik</h1>
      <h5 className="text-color-light">Frontend Developer</h5>
      <CTA />

      <div
        className="  gradient rounded-t-full mt-3.5 relative"
        onMouseEnter={rabbitMemEnter}
        onMouseLeave={rabbitMemLeave}
      >
        <Image
          src="/ME.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <Image
          className={` absolute bottom-20 left-20  duration-700 ${
            isMouseEnter === true ? "opacity-70" : "opacity-0"
          }`}
          src="/banniBax.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
      <a
        className="absolute hidden -right-9 rotate-90 bottom-7 text-color-primary hover:text-color-white md:block "
        href="#contacts"
      >
        Scroll Down
      </a>
      <HeaderSocials />
    </div>
  );
};

export default Header;
