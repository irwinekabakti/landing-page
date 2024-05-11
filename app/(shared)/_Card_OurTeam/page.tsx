"use client";

import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/store";
import { FaStar } from "react-icons/fa6";

const CardOurTeam = () => {
  const { dataUser } = useAppSelector((state) => state.dataStore);
  const dataTeam = dataUser.results;

  console.log(dataTeam);
  return (
    <div className="mx-4 mt-0 lg:mx-16 py-6 mb-12">
      <h1 className="text-center text-3xl text-[#144b51] my-4">Our Team</h1>
      <div className="OurTeamContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {dataTeam.map((data) => (
          <div
            key={data.login.uuid}
            className="bg-white w-[full] p-4 text-black rounded-xl">
            <div className="h-56 bg-[#144b51] flex justify-center items-center rounded-t-xl">
              <Image
                src={data.picture.large}
                width={30}
                height={30}
                alt={`image-${data.name.first}`}
                className="h-44 w-44 rounded-full"
              />
            </div>

            <div className="flex flex-col items-center bg-[#144b51] justify-center rounded-b-xl gap-4 p-4">
              <p className="text-xl font-semibold text-[#fff]">
                {data.name.title} {data.name.first} {data.name.last}
              </p>
              <p className="text-sm font-semibold text-[#fff]">
                {data.location.city}, {data.location.state},{" "}
                {data.location.country}
              </p>
              <p className="text-sm font-semibold text-[#fff]">{data.phone}</p>
              <p className="text-sm font-semibold text-[#fff]">{data.cell}</p>
              <p className="text-center text-[#fff]">{data.email}</p>
              <div className="star my-2 flex gap-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOurTeam;
