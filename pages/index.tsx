import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default Index;
