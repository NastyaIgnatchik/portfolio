import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  const arrayForCount = [1, 2, 3, 4, 5, 6];

  interface IServices {
    service: string;
  }

  const services = [
    {
      service: "UI/UX Design",
    },
    {
      service: "Web Development",
    },
    {
      service: "Content Creation",
    },
  ];

  return (
    <div
      id="services"
      className="mainScale mx-auto flex flex-col items-center md:mt-32 mt-16 "
    >
      <h5 className="text-color-light">What I Offer</h5>
      <h2 className="text-color-primary mb-8 md:mb-12">Services</h2>
      <div className="grid  md:grid-cols-2 md:gap-6 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-3  w-full ">
        {services.map((element: IServices) => {
          return (
            <article
              className="bg-color-bg-variant rounded-b-2xl border-2 border-solid border-color-primary h-fit duration-200
                hover:border-[transparent] hover:bg-color-primary-variant cursor-default"
            >
              <div className="bg-color-primary p-6 rounded-b-2xl shadow-[0rem_2rem_1rem_rgba(0,0,0,0.1)] ">
                <h3 className="text-color-bg text-center text-lg">
                  {element.service}
                </h3>
              </div>
              <ul className="m-6">
                {arrayForCount.map((num: number) => {
                  return (
                    <li className="grid grid-cols-[1fr,9fr]" key={num}>
                      <BsCheck2 className="mt-2 text-color-primary" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.{" "}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
