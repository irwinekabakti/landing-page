import React from "react";
// import HeroWrapper from "../_Hero/HeroWrapper";
import ImageHero from "@/assets/rost.jpg";
import classes from "../_Hero/style.module.css";
// @/assets/heroAbout.webp

const HeroOurTeam = () => {
  return (
    <div className={`${classes.heroHome} heroHome mb-8`}>
      <div className="heroDetail">
        <h1 className="titleDetail ml-8 md:ml-12 lg:ml-20 xl:text-3xl text-[#c9c6c6] mb-6">
          PRECISE AND PERSONALIZED
        </h1>
      </div>
    </div>
  );
};

export default HeroOurTeam;
