import React from "react";
import classes from "./styles.module.css";

const HeroAbout: React.FC = () => {
  return (
    <div className={`${classes.heroAbout} hero mb-8`}>
      <div className="mx-auto">
        <div className="heroDetail mx-4">
          <h1 className="titleDetail mx-auto md:ml-12 lg:ml-20 text-xl md:text-3xl text-[#fff] mb-6">
            About Hilink Kinthill Law Firm
          </h1>
          <div className="max-w-[700px] descriptionAboutUs">
            <p className="mt-4 mx-auto md:ml-12 lg:ml-20 text-[#fff]">
              Hilink Kinthill Law Firm is a leading full-service law firm in
              Indonesia with a team of award-winning attorneys. We handle a
              range of complex legal matters and have regional presence. We
              offer tailored, high-quality legal services at a fair and
              reasonable cost. Our attorneys are approachable and dedicated to
              delivering the best results for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
