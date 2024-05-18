import React from "react";

interface AboutOverviewProps {
  title: string;
  content: string[];
}

const AboutContent: React.FC<AboutOverviewProps> = ({ title, content }) => {
  return (
    <div className="col-span-12 mx-4 lg:mx-16 my-6">
      <div className="about-container">
        <div className="section-title">
          <h3 className="text-2xl font-bold text-[#144B51]">{title}</h3>
          <div className="section-content">
            {content.map((paragraph, index) => (
              <p key={index} className="mt-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
