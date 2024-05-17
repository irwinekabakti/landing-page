import React from "react";
import HeroAbout from "../_components/_HeroAbout/page";
import AboutOverview from "../_components/_AboutOverview/page";
// import Achievement from "../(shared)/_Achievement/page";

const About: React.FC = () => {
  return (
    <main className="mainAbout overflow-x-hidden">
      <HeroAbout />
      <AboutOverview />
    </main>
  );
};

export default About;
