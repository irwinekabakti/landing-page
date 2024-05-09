import React from "react";
import Link from "next/link";
import HeroWrapper from "./HeroWrapper";
import ImageHero from "@/assets/Img.jpg";
import classes from "./style.module.css";

const Hero = () => {
  return (
    <HeroWrapper imageSrc={ImageHero}>
      <div className={`heroDetail ${classes.heroDetail}`}>
        <h1
          className={`${classes.titleDetail} titleDetail xl:text-3xl text-[#c9c6c6] mb-6`}>
          PRECISE AND PERSONALIZED
        </h1>
        <Link
          href="/about"
          className={`${classes.btnHero} btnHero py-5 px-12 bg-transparent rounded-lg text-[#c9c6c6] text-xl hover:text-[#fff]`}>
          Learn More
        </Link>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
