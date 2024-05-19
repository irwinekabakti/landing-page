import React from "react";
import Image from "next/image";
import GridComponent from "@/app/(shared)/_Grid/GridComponent";
import HistoryImage from "@/assets/history.webp";
import OverviewImage from "@/assets/slide1-conv.webp";

const OverviewHome = () => {
  return (
    <>
      <GridComponent className="mb-4 lg:mb-12">
        <div className="overviewHome mx-4 my-auto lg:mx-16">
          <h2 className="text-2xl my-4 text-[#144b51]">
            Navigating Your Legal Path with Excellence
          </h2>
          <p className="overviewHome text-[#555555]">
            Founded in 2016, Hilink Kinthill Law Firm is a premier legal
            services firm dedicated to providing exceptional counsel and
            representation. With a team of highly experienced attorneys and
            legal professionals, our firm has consistently achieved favorable
            outcomes for our clients, ranging from individuals to multinational
            corporations. Our expertise spans various legal areas, including
            corporate law, litigation, intellectual property, and family law.
          </p>
        </div>

        <div className="overviewImage hidden lg:block mx-4 my-auto lg:mx-16">
          <Image src={OverviewImage} alt="overview-image" />
        </div>
      </GridComponent>

      <GridComponent className="mb-4 lg:mb-12">
        <div className="historyImage hidden lg:block mx-4 my-auto lg:mx-16">
          <Image src={HistoryImage} alt="history-image" />
        </div>

        <div className="historyHome mx-4 my-auto lg:mx-16">
          <h2 className="text-2xl my-4 text-[#144b51] lg:text-end">
            Pioneering Legal Excellence Since 2016
          </h2>
          <p className="history text-[#555555] lg:text-end">
            Hilink Kinthill Law Firm was established in 2016 by Johnathan Reed
            and Emily Clarke, two seasoned attorneys with a vision to create a
            law firm that delivers top-tier legal services with a personal
            touch. Starting with a modest office and a handful of clients, the
            firm quickly gained a reputation for its unwavering commitment to
            excellence and integrity. Over the years, we have expanded its team
            and services, marking significant milestones such as opening offices
            in three major cities, receiving numerous industry awards, and
            representing high-profile clients in landmark cases.
          </p>
        </div>
      </GridComponent>
    </>
  );
};

export default OverviewHome;
