import React from "react";
import Image from "next/image";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiAwardLine } from "react-icons/ri";

const About = () => {
  return (
    <div
      id="about"
      className="mainScale mx-auto flex flex-col items-center md:mt-32 mt-16 "
    >
      <h5 className="text-color-light">Get to know</h5>
      <h2 className="text-color-primary mb-8 md:mb-12">About Me</h2>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[30%,55%]  lg:gap-x-[15%]  ">
        <div className="lg:w-full md:w-[50%] w-9/12 mx-auto  aspect-square rounded-2xl gradientAbout grid place-items-center ">
          <Image
            className="rounded-2xl w-full h-full rotate-12 duration-200 hover:rotate-0 "
            src="/about.jpg"
            height={400}
            width={450}
            alt="about"
          />
        </div>
        <div>
          <div className="grid  grid-cols-2 gap-4 md:grid-cols-3 mt-4 md:mt-0">
            <article className="aboutCards ">
              <RiAwardLine className="aboutIcons" />
              <h1>Experience</h1>
              <small>No Experience</small>
            </article>
            <article className="aboutCards">
              <FiUsers className="aboutIcons" />
              <h1>Clients</h1>
              <small>No Clients</small>
            </article>
            <article className="aboutCards">
              <AiOutlineFolderOpen className="aboutIcons" />
              <h1>Projects</h1>
              <small>No Projects</small>
            </article>
          </div>
          <p className="mx-0.5 my-2.5 text-color-light leading-6 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur cum, dicta eius nobis placeat praesentium quo! Ab
            accusamus consectetur, dolore, eaque id ipsum molestiae nemo quae
            quidem quo, sequi vel?
          </p>
          <a href="#contacts" className="btn btn-primary mt-3.5">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
