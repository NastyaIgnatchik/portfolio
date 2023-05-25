import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { experienceFrontend } from "../data/experience";
import { experienceBackend } from "../data/experience";

const Experience = () => {
  interface IExperience {
    id: number;
    skill: string;
    degree: string;
  }
  return (
    <div
      id="experience"
      className="mainScale mx-auto flex flex-col items-center md:mt-32 mt-16 "
    >
      <h5 className="text-color-light">That Skills I Have</h5>
      <h2 className="text-color-primary mb-8 md:mb-12">My Experience</h2>

      <div className="grid w-full grid-cols-1 gap-y-6 lg:gap-x-10 md:grid-cols-2 md:gap-x-4 ">
        <div className="experienceCard">
          <h3 className="text-center text-color-primary mb-2">
            Frontend Development
          </h3>

          <div className="grid grid-cols-2 gap-y-4 mt-3.5">
            {experienceFrontend.map((element: IExperience) => {
              return (
                <article className="flex gap-1 " key={element.id}>
                  <AiOutlineCheckCircle className="text-color-primary mt-2" />
                  <div>
                    <h4>{element.skill}</h4>
                    <small>{element.degree}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experienceCard ">
          <h3 className="text-center text-color-primary mb-2">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 gap-y-4 mt-3.5">
            {experienceBackend.map((element: IExperience) => {
              return (
                <article className="flex gap-1" key={element.id}>
                  <AiOutlineCheckCircle className="text-color-primary mt-2" />
                  <div>
                    <h4>{element.skill}</h4>
                    <small>{element.degree}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
