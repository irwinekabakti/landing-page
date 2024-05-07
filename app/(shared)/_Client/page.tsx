"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clients from "@/assets/client";

const Client: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="client pt-8 mx-8 my-auto lg:mx-16" id="#client">
      <h1 className="text-center text-3xl font-bold py-8 text-[#144b51]">
        Our Client
      </h1>
      <Slider {...settings}>
        {clients.map((data) => (
          <div key={data.id}>
            <Image
              src={data.img}
              alt={data.name}
              style={{
                marginTop: data.id === 12 || data.id === 18 ? "20px" : "0",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Client;
