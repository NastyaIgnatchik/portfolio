import React from "react";
import Image from "next/image";
import { dataPortfolio } from "../data/dataPortfolio";

const Portfolio = () => {
  interface IData {
    id: number;
    image: string;
    title: string;
    github: string;
    demo: string;
  }
  return (
    <div
      id="portfolio"
      className="mainScale mx-auto flex flex-col items-stretch md:mt-32 mt-16 text-center"
    >
      <h5 className="text-color-light">My Recent Work</h5>
      <h2 className="text-color-primary mb-8 md:mb-12">Portfolio</h2>

      <div className="grid md:grid-cols-2  grid-cols-1 items-stretch lg:grid-cols-3 gap-x-4 gap-y-4  ">
        {dataPortfolio.map((element: IData) => {
          return (
            <article
              className="flex flex-col justify-around bg-color-bg-variant px-4 py-4 rounded-2xl border-2 border-solid border-solid border-[transparent]
        duration-200 hover:border-color-primary-variant hover:bg-[transparent] "
              key={element.id}
            >
              <Image
                className="rounded-xl mb-1.5 object-cover  self-stretch"
                src={element.image}
                width={600}
                height={500}
                alt="portfolioCards"
              />

              <div className="self-start ">
                <h3 className="text-start ">{element.title}</h3>
                <div className="mt-2 flex items-start">
                  <a
                    className={`btn  mr-2.5 ${
                      element.github ? "" : "pointer-events-none"
                    }`}
                    href={element?.github}
                  >
                    Github
                  </a>
                  <a
                    className={`btn btn-primary ${
                      element.demo ? "" : "pointer-events-none"
                    }`}
                    href={element?.demo}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
