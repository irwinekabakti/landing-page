import React from "react";
import AboutContent from "./AboutContent";
import CardComponent from "./CardComponent";
import classes from "./styles.module.css";
import { title } from "process";

const AboutOverview = () => {
  const OverviewContent = [
    "Since its inception in 2016, Hilink Kinthill Law Firm has risen to become a leading force in the Indonesian legal landscape. Our team of more than 50 attorneys is comprised of award-winning professionals who have garnered a reputation for excellence and success.",
    "As a full-service law firm with capabilities spanning from litigation to corporate transactions, we have the expertise and resources to handle the most complex and challenging legal matters. Our attorneys are approachable, hardworking, and punctual, always striving to deliver the best possible results for our clients, and we are dedicated to serving as a reliable and trusted partner for our clients. With our unwavering commitment to excellence and our focus on delivering results, we are proud to be one of the largest and fastest-growing law firms in Indonesia.",
    "In addition to our strong local expertise, we have a regional presence that allows us to provide our clients with a comprehensive range of legal services. Our attorneys are equipped to handle complex legal matters with a commercial approach that speaks your language in business.",
    "At Hilink Kinthill Law Firm, we pride ourselves on being friendly and flexible with our fees, tailoring our services to fit the needs and budget of each individual client. Despite our premier offering, we remain committed to providing high-quality legal counsel at a fair and reasonable cost.",
  ];

  const RegionalCapabilitiesContent = [
    "The South East Asia region is experiencing a period of rapid economic growth and development. As international businesses look to tap into this lucrative market, the demand for high-quality legal services has never been greater.",
  ];

  /*
  const detailValues = [
    {
      title: "Key values that define our culture include:",
    },
    {
      value: [
        "Integrity: We uphold the highest ethical standards in all our dealings. Client-Centered",
        "Service: Our clients' needs and interests are at the forefront of everything we do.",
        "Excellence: We are committed to delivering the highest quality of legal services.",
        "Innovation: We embrace new ideas and technologies to provide cutting-edge solutions.Community",
        "Engagement: We believe in giving back to the community and are actively involved in various pro bono initiatives.",
      ],
    },
    {
      explanation:
        "Working at Hilink Kinthill Law Group means being part of a dynamic and forward-thinking team where your contributions make a real difference. Our open-door policy ensures that every voice is heard, and our comprehensive professional development programs provide continuous learning opportunities. Join us and be part of a firm that not only values your skills but also your aspirations and well-being.",
    },
  ];
  */
  const cultureValues = [
    "At Hilink Kinthill Law Group, our culture is built on a foundation of integrity, collaboration, and continuous improvement. We believe that the best legal solutions are achieved through a team-oriented approach that leverages diverse perspectives and expertise. Our firm fosters a supportive and inclusive environment where every team member is valued and encouraged to grow professionally and personally.",
  ];

  const titleValues = "Key values that define our culture include:";
  const itemValues = [
    "Integrity: We uphold the highest ethical standards in all our dealings. Client-Centered",
    "Service: Our client's needs and interests are at the forefront of everything we do.",
    "Excellence: We are committed to delivering the highest quality of legal services.",
    "Innovation: We embrace new ideas and technologies to provide cutting-edge solutions.Community",
    "Engagement: We believe in giving back to the community and are actively involved in various pro bono initiatives.",
  ];
  const expValues =
    "Working at Hilink Kinthill Law Group means being part of a dynamic and forward-thinking team where your contributions make a real difference. Our open-door policy ensures that every voice is heard, and our comprehensive professional development programs provide continuous learning opportunities. Join us and be part of a firm that not only values your skills but also your aspirations and well-being.";

  return (
    <>
      <AboutContent title="OVERVIEW" content={OverviewContent} />
      <AboutContent
        title="CULTURE AND VALUE"
        content={cultureValues}
        titleValue={titleValues}
        itemValues={itemValues}
        expValues={expValues}
      />

      <AboutContent
        title="REGIONAL CAPABILITIES"
        content={RegionalCapabilitiesContent}
      />

      <div className={`${classes.bgAboutService} py-[50px] my-[50px]`}>
        <div className="mx-2 lg:mx-16">
          <div className="flex flex-wrap justify-center">
            <CardComponent
              title="Full Service Means Full Service"
              description="Our team has the local know-how and expertise to service our clients in emerging and established companies in matters ranging from banking and finance to litigation to restructuring."
              linkHref="/services"
              buttonText="See Full Service"
              buttonClasses={classes.btnAboutServices}
            />

            <CardComponent
              title="Local On-the-Ground Teams with International Outlook"
              description="Indonesia has become not only a hub for fast-growing industries and sectors but also a center for cross-border and international deals. Our team’s deep local and cross-border experience has translated to helping our clients find the best solutions that make the most practical commercial sense."
              linkHref="/OurTeam"
              buttonText="See Our Team"
              buttonClasses={classes.btnAboutServices}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOverview;
