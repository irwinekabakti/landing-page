"use client";

import React from "react";
// import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service from "@/assets/_services/index";
import GridComponent from "@/app/(shared)/_Grid/GridComponent";
import classes from "./style.module.css";

const Services = () => {
  // const [isHovered, setIsHovered] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

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
    <>
      <GridComponent id="services" className="my-8 lg:my-20">
        <div className="servicesDescription mx-4 mt-0 lg:mx-16">
          <h2 className="titleServicesUs text-2xl my-4 text-[#144b51]">
            SERVICES
          </h2>
        </div>

        <div className="servicesImage mx-4 mt-0 lg:mx-16">
          <p className="descriptionAboutUs text-[#555555]">
            Hilink Kinthill Law Firm is equipped to handle your legal needs in
            the rapidly developing Southeast Asian market. Our team of seasoned
            attorneys and deep understanding of the local legal landscape enable
            us to provide the support and guidance necessary for success in this
            dynamic region. Let us help you navigate the complexities of
            Southeast Asian law and achieve your business goals.
          </p>
        </div>
      </GridComponent>

      <div className="sliderContainer mx-4 mt-0 lg:mx-16 py-6">
        <Slider {...settings}>
          {service.map((data) => (
            <div className="w-[full] sm:w-1/2 p-4" key={data.id}>
              <div className="bg-[#144b51] shadow-md ">
                <Image src={data.img} alt={data.name} />
                <div className="p-4 ">
                  <Link
                    href="/services"
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    className="inline-block mt-4 px-4 py-2 text-white font-semibold rounded-md">
                    {data.name}
                  </Link>
                  <hr className="bg-blue-600 ml-[10px] w-[200px]" />
                  {/* <hr
                    className={`bg-blue-600 ml-[10px] w-${
                      isHovered ? "150" : "90"
                    }px`}
                  /> */}

                  {/* <hr
                  className={`bg-red-600 w-[${isHovered ? "150px" : "80px"}]`}
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="detailServices mt-4 flex justify-center sm:justify-start">
          <Link
            href="/services"
            className={`${classes.btnServices} btn px-6 py-2 text-sm`}>
            See Our Practices Area
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
