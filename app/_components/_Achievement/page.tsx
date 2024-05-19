import React from "react";
import Image from "next/image";
// import ZoomImage from "@/app/(shared)/_ZoomImage/page";
import awards from "@/assets/_achievements";

const Achievement: React.FC = () => {
  return (
    <div className="serviceContainer mx-4 mt-0 lg:mx-16 pt-6 pb-8">
      <h1 className="text-center text-3xl text-[#144b51] my-4">
        AWARDS & INDUSTRY RECOGNITION
      </h1>
      <div className="contentAwards ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {awards.map((award) => (
            <div key={award.id} className="flex justify-around my-4">
              {/* <ZoomImage canSwipeToUnzoom={true}> */}
              <Image
                src={award.img}
                height={100}
                width={100}
                alt={award.name}
                rel="preload"
                className="cursor-pointer"
              />
              {/* </ZoomImage> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
