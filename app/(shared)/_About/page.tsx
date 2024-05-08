import React from "react";
import Image from "next/image";
import Link from "next/link";
import GridComponent from "../_Grid/page";
import AboutImg from "../../../assets/about.png";
import classes from "./style.module.css";

const About = () => {
  return (
    <GridComponent id="about">
      <div className="aboutDescription mx-8 my-auto lg:mx-16">
        <h2 className="titleAboutUs text-2xl my-4 text-[#144b51]">
          Precise, Personalized Legal Guidance with a Regional Network Of Strong
          Local Expertise
        </h2>
        <p className="descriptionAboutUs text-[#555555]">
          GHP Law Firm is a leading full-service law firm in Indonesia with a
          team of award-winning attorneys. We handle a range of complex legal
          matters and have a regional presence. We offer tailored, high-quality
          legal services at a fair and reasonable cost. Our attorneys are
          approachable and dedicated to delivering the best results for our
          clients.
        </p>
        <div className="my-4">
          <Link
            href="about"
            className={`${classes.btnAbout} btnAbout px-12 py-3`}>
            Learn more
          </Link>
        </div>
      </div>

      <div className="aboutImage hidden lg:block mx-8 my-auto lg:mx-16">
        <Image src={AboutImg} alt="about-image" />
      </div>
    </GridComponent>
  );
};

export default About;
