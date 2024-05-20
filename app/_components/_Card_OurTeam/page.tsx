import React from "react";
import CardTeam from "./CardTeam";

const CardOurTeam: React.FC = () => {
  return (
    <div className="mx-4 mt-0 lg:mx-16 py-6 mb-12">
      <h1 className="text-center text-3xl text-[#144b51] my-4">Our Team</h1>
      <CardTeam />
    </div>
  );
};

export default CardOurTeam;
