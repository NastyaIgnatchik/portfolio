import React from "react";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-color-primary px-12 pt-12 text-center text-sm mt-20 md:mt-28">
      <ul className="flex flex-col md:flex-row gap-6 flex-wrap justify-center mg:gap-8 mt-0 mx-auto mb-12">
        <li>
          <a className="text-color-bg" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="text-color-bg" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="text-color-bg" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="text-color-bg" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="text-color-bg" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="text-color-bg" href="#testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a className="text-color-bg" href="#contacts">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex justify-center gap-4 mb-16">
        <a className="footerLinks pointer-events-none" href="">
          <FaTelegramPlane />
        </a>
        <a className="footerLinks pointer-events-none" href="">
          <FaFacebookF />
        </a>
        <a className="footerLinks pointer-events-none" href="">
          <BsInstagram />
        </a>
      </div>
      <div>
        <small className="mb-16 text-color-bg">&copy;Made by Nastya </small>
      </div>
    </div>
  );
};

export default Footer;
