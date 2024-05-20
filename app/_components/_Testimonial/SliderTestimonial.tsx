"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import testimonialData from "@/assets/_testimonial/index";
import { FaStar } from "react-icons/fa6";

const SliderTestimonial: React.FC = () => {
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
    <Slider {...settings} aria-hidden="true">
      {testimonialData.map((data) => (
        <div
          key={data.id}
          aria-hidden="true"
          className="bg-white w-[full] sm:w-1/2 p-4 text-black rounded-xl">
          <div className="h-56 bg-[#144b51] flex justify-center items-center">
            <Image
              src={data.img}
              alt={`image-${data.name}`}
              height={176}
              width={176}
              className="rounded-full bg-[#fff]"
              quality={100}
              rel="preload"
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
  );
};

export default SliderTestimonial;
