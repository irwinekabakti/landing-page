"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "@/assets/_testimonial/index";
import { FaStar } from "react-icons/fa6";

const Testimonial: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="sliderContainer mx-4 mt-0 lg:mx-16 py-6">
      <h1 className="text-center text-3xl text-[#144b51] my-4">Testimonial</h1>
      <Slider {...settings}>
        {testimonialData.map((data) => (
          <div
            key={data.id}
            className="bg-white w-[full] sm:w-1/2 p-4 text-black rounded-xl">
            <div className="h-56 bg-[#144b51] flex justify-center items-center">
              <Image
                src={data.img}
                alt={`image-${data.name}`}
                className="h-44 w-44 rounded-full bg-[#fff]"
              />
            </div>

            <div className="flex flex-col items-center bg-[#144b51] justify-center gap-4 p-4">
              <p className="text-xl font-semibold text-[#fff]">{data.name}</p>
              <q className="text-center text-[#fff] text-sm">{data.domain}</q>
              <p className="text-center text-[#fff]">{data.review}</p>
              <div className="star my-2 flex gap-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
