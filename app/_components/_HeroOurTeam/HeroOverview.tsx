import React from "react";

interface OurTeamOverviewProps {
  title: string;
  content: string[];
}

const OurTeamOverview: React.FC<OurTeamOverviewProps> = ({
  title,
  content,
}) => {
  return (
    <div className="col-span-12 mx-4 lg:mx-16 my-6">
      <div className="OurTeam-content">
        <div className="section-title">
          <h1 className="text-2xl font-bold text-[#144B51]">{title}</h1>
          <div className="section-content">
            {content.map((paragraph, index) => (
              <p key={index} className="mt-4 text-[#555555]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamOverview;
