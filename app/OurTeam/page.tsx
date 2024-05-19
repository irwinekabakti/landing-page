"use client";

import React from "react";
import HeroOurTeam from "../_components/_HeroOurTeam/page";
import ReduxProvider from "@/store/redux-provider";
import CardOurTeam from "../_components/_Card_OurTeam/page";

const OurTeam: React.FC = () => {
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
