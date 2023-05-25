import React, { ReactElement, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contacts = () => {
  interface IContacts {
    id: number;
    logo: ReactElement;
    title: string;
    link: string;
    linkForRedirect: string;
  }
  const contactsData = [
    {
      id: 1,
      logo: <AiOutlineMail className="mb-2.5 mx-auto text-xl" />,
      title: "Email",
      link: "nastya.igntchk@gmail.com",
      linkForRedirect: "mailto:nastya.igntchk@gmail.com",
    },
    {
      id: 2,
      logo: <RiMessengerLine className="mb-2.5 mx-auto text-xl" />,
      title: "Messenger",
      link: "facebook",
      linkForRedirect: "https://m.me/nastya.ignatchik",
    },
    {
      id: 3,
      logo: <FaTelegramPlane className="mb-2.5 mx-auto text-xl" />,
      title: "Telegram",
      link: "@nastya.igntchk",
      linkForRedirect: "https://t.me/nastya.igntchk",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_co45b9o",
        "template_nlssgj9",
        form.current,
        "K7wHASJ2S3xl07AdY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contacts"
      className=" mx-auto flex flex-col items-stretch md:mt-28 mt-14 mainScale"
    >
      <h5 className="text-color-light text-center">Get In Touch</h5>
      <h2 className="text-color-primary text-center mb-8 md:mb-12">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[30%,58%] md:gap-[12%]  ">
        <div className="flex flex-col gap-4  ">
          {contactsData.map((element: IContacts) => {
            return (
              <article
                className="bg-color-bg-variant p-4 rounded-xl text-center border-2 border-solid border-[transparent]*/}
                   duration-200 hover:border-color-primary-variant hover:bg-[transparent] "
                key={element.id}
              >
                {element.logo}
                <h4>{element.title}</h4>
                <h5 className="break-all font-light ">{element.link}</h5>
                <a
                  className="mt-2.5 inline-block text-md"
                  target="_blank"
                  rel="nofollow"
                  href={element.linkForRedirect}
                >
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        <form
          ref={form}
          className="flex flex-col gap-4 items-stretch "
          onSubmit={sendEmail}
        >
          <input
            className=" inputsAndTextarea"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className=" inputsAndTextarea"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className=" inputsAndTextarea"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary mt-3.5">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
