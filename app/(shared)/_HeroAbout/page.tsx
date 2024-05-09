import React from "react";
import Link from "next/link";
import ImageHero from "@/assets/henry copy.jpg";
import HeroWrapper from "../_Hero/HeroWrapper";
import CardComponent from "./CardComponent";
import AboutOverview from "./AboutOverview";
import classes from "./styles.module.css";

const HeroAbout = () => {
  const OverviewContent = [
    "Since its inception in 2016, GHP Law Firm has risen to become a leading force in the Indonesian legal landscape. Our team of more than 50 attorneys is comprised of award-winning professionals who have garnered a reputation for excellence and success.",
    "As a full-service law firm with capabilities spanning from litigation to corporate transactions, we have the expertise and resources to handle the most complex and challenging legal matters. Our attorneys are approachable, hardworking, and punctual, always striving to deliver the best possible results for our clients, and we are dedicated to serving as a reliable and trusted partner for our clients. With our unwavering commitment to excellence and our focus on delivering results, we are proud to be one of the largest and fastest-growing law firms in Indonesia.",
    "In addition to our strong local expertise, we have a regional presence that allows us to provide our clients with a comprehensive range of legal services. Our attorneys are equipped to handle complex legal matters with a commercial approach that speaks your language in business.",
    "At GHP Law Firm, we pride ourselves on being friendly and flexible with our fees, tailoring our services to fit the needs and budget of each individual client. Despite our premier offering, we remain committed to providing high-quality legal counsel at a fair and reasonable cost.",
  ];

  const RegionalCapabilitiesContent = [
    "The South East Asia region is experiencing a period of rapid economic growth and development. As international businesses look to tap into this lucrative market, the demand for high-quality legal services has never been greater.",
  ];

  return (
    <HeroWrapper imageSrc={ImageHero} className="opacity-80 mb-16">
      {/* <div className="AboutUsTitle">
      <h1
        className="AboutUsTitle text-2xl"
        style={{ position: "relative", top: "-300px", marginLeft: "80px" }}>
        About Hilink Kinthil
      </h1>
      </div> */}
      <AboutOverview title="OVERVIEW" content={OverviewContent} />
      <AboutOverview
        title="REGIONAL CAPABILITIES"
        content={RegionalCapabilitiesContent}
      />

      <div className={`${classes.bgAboutService} py-[50px] my-[50px]`}>
        <div className="mx-8 lg:mx-16">
          <div className="flex flex-wrap justify-center">
            {/* <div className="w-[full] sm:w-1/2 p-4">
              <div className="bg-white shadow-md p-8 mb-4">
                <h2 className="text-[#144B51] text-2xl font-bold mb-4">
                  Full Service Means Full Service
                </h2>
                <p className="text-[#555555] mb-4">
                  Our team has the local know-how and expertise to service our
                  clients in emerging and established companies in matters
                  ranging from banking and finance to litigation to
                  restructuring.
                </p>
                <div className="mt-4 md:mt-6 lg:mt-8 ">
                  <Link
                    href="/services"
                    className={`${classes.btnAboutServices} w-full px-4 py-2 my-4`}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[full] sm:w-1/2 p-4">
              <div className="bg-white shadow-md p-8 mb-4">
                <h2 className="text-[#144B51] text-2xl font-bold mb-4">
                  Local On-the-Ground Teams with International Outlook
                </h2>
                <p className="text-[#555555] mb-4">
                  Indonesia has become not only a hub for fast-growing
                  industries and sectors but also a center for cross-border and
                  international deals. Our team’s deep local and cross-border
                  experience has translated to helping our clients find the best
                  solutions that make the most practical commercial sense.
                </p>
                <div className="mt-4 md:mt-6 lg:mt-8 ">
                  <Link
                    href="/project"
                    className={`${classes.btnAboutServices} w-full text-center px-6 py-2 mt-8`}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div> */}

            <CardComponent
              title="Full Service Means Full Service"
              description="Our team has the local know-how and expertise to service our clients in emerging and established companies in matters ranging from banking and finance to litigation to restructuring."
              linkHref="/services"
              buttonText="Learn More"
              buttonClasses={classes.btnAboutServices}
            />

            <CardComponent
              title="Local On-the-Ground Teams with International Outlook"
              description="Indonesia has become not only a hub for fast-growing industries and sectors but also a center for cross-border and international deals. Our team’s deep local and cross-border experience has translated to helping our clients find the best solutions that make the most practical commercial sense."
              linkHref="/project"
              buttonText="Learn More"
              buttonClasses={classes.btnAboutServices}
            />
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default HeroAbout;
