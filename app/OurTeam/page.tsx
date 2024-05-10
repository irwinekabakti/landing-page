"use client";

import React, { useEffect } from "react";
import HeroOurTeam from "../(shared)/_HeroOurTeam/page";
import axios from "axios";

const OurTeam = () => {
  // const getData = async () => {
  //   try {
  //     const { data } = await axios.get("https://randomuser.me/api/", {
  //       params: {
  //         results: 12,
  //       },
  //     });

  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <main>
      <HeroOurTeam />
    </main>
  );
};

export default OurTeam;
