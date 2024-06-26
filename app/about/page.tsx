import React from "react";
import HeroAbout from "../_components/_HeroAbout/page";
import AboutOverview from "../_components/_AboutOverview/page";

const About: React.FC = () => {
  return (
    <main className="mainAbout overflow-x-hidden">
      <HeroAbout />
      <AboutOverview />
    </main>
  );
};

export default About;
