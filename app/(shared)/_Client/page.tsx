"use client";

import React from "react";
// import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clients from "@/assets/_client/index";

const Client: React.FC = () => {
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 768);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    rtl: false,
  };

  const settings2 = {
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    rtl: true,
  };

  return (
    <div className="client pt-8 mx-8 my-auto lg:mx-16" id="#client">
      <h1 className="text-center text-3xl font-bold py-8 text-[#144b51]">
        Our Client
      </h1>
      <Slider {...settings} className="slider1">
        {clients.map((data) => (
          <div key={data.id}>
            <Image
              src={data.img}
              alt={data.name}
              style={{
                marginTop:
                  data.name === "Jago" || data.name === "Taco" ? "20px" : "0",
              }}
              // style={{
              //   marginTop:
              //     isSmallScreen &&
              //     (data.name === "Jago" || data.name === "Taco")
              //       ? "20px"
              //       : "-20px",
              // }}
            />
          </div>
        ))}
      </Slider>

      <Slider {...settings2} className="pt-16 pb-10">
        {clients.map((data) => (
          <div key={data.id}>
            <Image
              src={data.img}
              alt={data.name}
              style={{
                marginTop:
                  data.name === "Jago" || data.name === "Taco" ? "20px" : "0",
              }}
              // style={{
              //   marginTop:
              //     isSmallScreen &&
              //     (data.name === "Jago" || data.name === "Taco")
              //       ? "20px"
              //       : "-20px",
              // }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Client;
