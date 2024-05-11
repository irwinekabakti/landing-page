"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "@/store/action/user-slice";
import classes from "./style.module.css";
import OurTeamOverview from "./HeroOverview";

const HeroOurTeam = () => {
  const dispatch = useDispatch();

  const getData = (dispatch: any) => {
    dispatch(fetchUserData());
  };

  useEffect(() => {
    getData(dispatch);
  }, []);

  const contentOverview = [
    "At GHP Law Firm, we are dedicated to attracting and retaining the best legal talent in the industry. Our team is comprised of experienced attorneys who are highly skilled and knowledgeable in their areas of practice.",
    "We take pride in the diversity of our team and the range of perspectives and experiences that they bring to the table. This allows us to approach legal challenges from multiple angles and provide our clients with the most comprehensive and effective representation possible.",
    "Our attorneys are also committed to ongoing professional development and staying current with the latest legal trends and developments. This ensures that we are able to provide our clients with the most up-to-date and relevant advice and counsel.",
    "Overall, our team at GHP Law Firm is unparalleled in their expertise and dedication to providing top-quality legal services to our clients. We are confident that our attorneys are the best in the business and are committed to maintaining this high standard of excellence.",
  ];

  return (
    <>
      <div className={`${classes.heroOurTeam} heroOurTeam mb-8`}>
        <div className="mx-auto">
          <div className="heroDetail mx-4">
            <h1 className="titleDetail md:ml-12 lg:ml-20 text-xl md:text-3xl text-[#fff] mb-6">
              Team
            </h1>
            <p className="mt-4 mx-auto md:ml-12 lg:ml-20 text-[#fff]">
              Hilin Kinthill Law Firm covers an extensive range of expertise and
              disciplines
            </p>
          </div>
        </div>
      </div>

      <OurTeamOverview
        title="Hilink kinthill Law Firm Teams Overview
"
        content={contentOverview}
      />
    </>
  );
};

export default HeroOurTeam;
