import React from "react";
import SliderComponent from "./SliderComponent";
import clients from "@/assets/_client/index";

const Client: React.FC = () => {
  const commonSettings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const settings = { ...commonSettings, rtl: false };
  const settings2 = { ...commonSettings, rtl: true };

  return (
    <div className="client py-8 mx-8 my-auto lg:mx-16" id="client">
      <h1 className="text-center text-3xl font-bold py-8 text-[#144b51]">
        Our Client
      </h1>

      <SliderComponent
        settings={settings}
        clients={clients}
        className="sm:mb-8 lg:mb-16"
      />

      <SliderComponent
        settings={settings2}
        clients={clients}
        className="mt-4"
      />
    </div>
  );
};

export default Client;
