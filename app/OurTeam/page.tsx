"use client";

import React from "react";
import HeroOurTeam from "../_components/_HeroOurTeam/page";
import ReduxProvider from "@/store/redux-provider";
import CardOurTeam from "../_components/_Card_OurTeam/page";

const OurTeam: React.FC = () => {
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
      <main className="overflow-x-hidden">
        <HeroOurTeam />
        <CardOurTeam />
      </main>
    </ReduxProvider>
  );
};

export default OurTeam;
