"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import serviceData from "@/assets/_services/index";

const SliderService: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease",
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
      {serviceData.map((data) => (
        <div className="w-[full] sm:w-1/2 p-4" aria-hidden="true" key={data.id}>
          <div className="bg-[#144b51] shadow-md ">
            <Image src={data.img} alt={data.name} />
            <div className="p-4 " aria-hidden="true">
              <Link
                href={`/services/${data.route}`}
                className="inline-block relative mt-4 px-2 py-2 text-white rounded-md custom-underline">
                {data.name}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderService;
