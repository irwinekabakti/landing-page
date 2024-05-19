import React from "react";
import Link from "next/link";
import GridComponent from "@/app/(shared)/_Grid/GridComponent";
import SliderService from "./SliderService";
import classes from "./style.module.css";

const Services: React.FC = () => {
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
        <SliderService />

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
