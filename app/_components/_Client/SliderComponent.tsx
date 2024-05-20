"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface clientData {
  id: string;
  name: string;
  img: StaticImageData;
}

interface SliderProps {
  settings?: any;
  clients: clientData[];
  className?: string;
}

const SliderComponent: React.FC<SliderProps> = ({
  settings,
  clients,
  className,
}) => {
  return (
    <Slider {...settings} className={`slider ${className}`}>
      {clients.map((data) => (
        <div key={data.id}>
          <Image
            src={data.img.src}
            width={120}
            height={120}
            alt={data.name}
            rel="preload"
            quality={100}
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
