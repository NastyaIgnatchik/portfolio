import React from "react";
import Image from "next/image";
import { clientsData } from "../data/clients";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  interface IClients {
    avatar: string;
    name: string;
    review: string;
    id: number;
  }
  return (
    <div
      id="testimonials"
      className="lg:w-[50%] sm:w-[70%] w-[80%] md:w-[80%] mx-auto flex flex-col items-stretch  md:mt-32 mt-16 "
    >
      <h5 className="text-color-light text-center">Review from clients </h5>
      <h2 className="text-color-primary text-center mb-8 md:mb-12">
        Testimonials
      </h2>

      <Swiper
        className="w-full mx-auto  "
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clientsData.map((element: IClients) => {
          return (
            <SwiperSlide
              className="bg-color-bg-variant text-center pt-8 pb-10 rounded-2xl flex flex-col items-center mb-14 pb-8 "
              key={element.id}
            >
              <Image
                className="w-20 mx-auto rounded-full aspect-square border-4 border-solid border-color-primary mb-3"
                src={element.avatar}
                height={500}
                width={500}
                alt="clients"
              />
              <h5>{element.name}</h5>
              <p className="  font-light text-light block w-[80%] mx-auto mt-3.5 ">
                {element.review}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
