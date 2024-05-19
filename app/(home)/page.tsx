import React from "react";
import Hero from "../_components/_HeroHome/page";
import OverviewHome from "../_components/_OverviewHome/page";
import About from "../_components/_About/page";
import Services from "../_components/_Services/page";
import Client from "../_components/_Client/page";
import Faq from "../_components/_FAQ/page";
import Testimonial from "../_components/_Testimonial/page";

const Home: React.FC = () => {
  return (
    <main className="mainHome overflow-x-hidden">
      <Hero />
      <OverviewHome />
      <About />
      <Client />
      <Services />
      <Testimonial />
      <Faq />
    </main>
  );
};

export default Home;
