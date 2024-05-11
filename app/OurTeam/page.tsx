"use client";

import React from "react";
import HeroOurTeam from "../(shared)/_HeroOurTeam/page";
import ReduxProvider from "@/store/redux-provider";
import CardOurTeam from "../(shared)/_Card_OurTeam/page";

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

  // const { dataUser } = useSelector((state) => state.dataStore);

  // console.log(dataUser.results);

  return (
    <ReduxProvider>
      <main>
        <HeroOurTeam />
        <CardOurTeam />
      </main>
    </ReduxProvider>
  );
};

export default OurTeam;
