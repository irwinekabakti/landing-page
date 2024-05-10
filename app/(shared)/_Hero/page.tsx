import React from "react";
import Link from "next/link";
import classes from "./style.module.css";

const Hero = () => {
  return (
    <div className={`${classes.heroHome} heroHome mb-8`}>
      <div className="heroDetail">
        <h1 className="titleDetail ml-8 md:ml-12 lg:ml-20 text-xl md:text-3xl text-[#fff] mb-6">
          PRECISE AND PERSONALIZED
        </h1>
        <Link
          href="/about"
          className="btnHero border border-white ml-8 md:ml-12 lg:ml-20 px-12 py-4 bg-transparent text-[#fff] text-xl hover:text-[#c9c6c6]">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
