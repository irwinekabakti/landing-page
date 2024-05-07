import React from "react";

const Services = () => {
  return (
    <div
      className="about grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 pt-16"
      id="#about">
      <div className="aboutDescription mx-8 mt-0 lg:mx-16">
        <h2 className="titleAboutUs text-2xl my-4 text-[#144b51]">SERVICES</h2>
      </div>

      <div className="aboutImage mx-8 mt-0 lg:mx-16">
        <p className="descriptionAboutUs text-[#555555]">
          GHP Law Firm is equipped to handle your legal needs in the rapidly
          developing Southeast Asian market. Our team of seasoned attorneys and
          deep understanding of the local legal landscape enable us to provide
          the support and guidance necessary for success in this dynamic region.
          Let us help you navigate the complexities of Southeast Asian law and
          achieve your business goals.
        </p>
      </div>
    </div>
  );
};

export default Services;
