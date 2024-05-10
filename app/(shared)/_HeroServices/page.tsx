import React from "react";
// import Image from "next/image";
import HeroWrapper from "../_Hero/HeroWrapper";
import ImageHero from "@/assets/patrick-tomasso-3.jpg";
// import ImageServices from "@/assets/careers-pic.jpeg";
// import ImageServices from "@/assets/about.png";
// import GridComponent from "../_Grid/GridComponent";
import Image from "next/image";
import Link from "next/link";
import service from "@/assets/_services";

const HeroServices: React.FC = () => {
  return (
    <HeroWrapper imageSrc={ImageHero} className="opacity-80 mb-12">
      <div className="aboutDescription mx-4 my-auto lg:mx-16">
        <h3 className="titleAboutUs text-2xl text-[#144b51]">Practice Areas</h3>
        <p className="descriptionAboutUs my-4 text-[#555555]">
          Full service means full service. We have the expertise ranging from
          banking and finance, corporate to litigation. We also have deep local
          experience navigating multiple industries from agribusiness to
          technology. Our clients find this full breadth of services and
          in-depth knowledge indispensable as they grow and operate in
          Indonesia.
        </p>
      </div>
    </HeroWrapper>
  );
};

export default HeroServices;
