import React from "react";
import classes from "./styles.module.css";

const HeroServices: React.FC = () => {
  return (
    <div className={`${classes.heroServices} hero mb-8`}>
      <div className="mx-auto">
        <div className="heroServices mx-4">
          <h1 className="titleServices mx-auto md:ml-12 lg:ml-20 text-xl md:text-3xl text-[#fff] mb-6">
            Practice Areas
          </h1>
          <div className="max-w-[700px] descriptionServices">
            <p className="mt-4 mx-auto md:ml-12 lg:ml-20 text-[#fff]">
              Full service means full service. We have the expertise ranging
              from banking and finance, corporate to litigation. We also have
              deep local experience navigating multiple industries from
              agribusiness to technology. Our clients find this full breadth of
              services and in-depth knowledge indispensable as they grow and
              operate in Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
