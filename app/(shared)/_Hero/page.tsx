import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageHero from "../../../assets/Img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <Image src={ImageHero} alt="image-hero" />
      <div className="heroDetail">
        <h1 className="titleDetail xl:text-3xl text-[#c9c6c6] mb-6">
          PRECISE AND PERSONALIZED
        </h1>

        {/* <button className="btnHero py-4 px-12 bg-transparent rounded-lg text-[#c9c6c6] text-xl hover:text-[#fff]">
          Learn More
        </button> */}

        <Link
          href="/about"
          className="btnHero py-5 px-12 bg-transparent rounded-lg text-[#c9c6c6] text-xl hover:text-[#fff]">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
