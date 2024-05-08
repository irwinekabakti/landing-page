import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImageData } from "next/image";

interface clientsData {
  id: string;
  name: string;
  img: StaticImageData;
}

interface SliderProps {
  settings: any;
  clients: clientsData[];
}

const SliderComponent: React.FC<SliderProps> = ({ settings, clients }) => {
  return (
    <Slider {...settings} className="slider">
      {clients.map((data) => (
        <div key={data.id}>
          <img src={data.img.src} alt={data.name} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
