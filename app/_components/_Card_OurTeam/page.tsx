"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store";
import { FaHome, FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineWork, MdOutlineWorkspacePremium } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

const CardOurTeam: React.FC = () => {
  const { dataUser } = useAppSelector((state) => state.dataStore);
  let skills: string[] = [
    "Banking and Finance",
    "Capital Markets",
    "Commercial Contracts",
    "Compliance and Investigations",
    "Mega Projects and State Owned Enterprises",
    "Corporate and M&A",
    "Dispute Resolution and Litigation",
    "Employment",
    "Intellectual Property",
    "Technology & Data Protection",
    "Restructuring and Insolvency",
    "Government",
  ];

  console.log(dataUser.results);

  let dataTeam = dataUser.results.map((data) => {
    let shuffledSkills = skills.sort(() => Math.random() - 0.5);
    const assignedSkills = shuffledSkills.slice(0, 2);
    return {
      ...data,
      skills: assignedSkills,
    };
  });

  // console.log(dataTeam);

  return (
    <div className="mx-4 mt-0 lg:mx-16 py-6 mb-12">
      <h1 className="text-center text-3xl text-[#144b51] my-4">Our Team</h1>
      <div className="OurTeamContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {dataTeam.map((data) => (
          <div
            key={data.login.uuid}
            className="bg-white w-[full] p-4 text-black rounded-xl">
            <div className="h-56 bg-[#144b51] flex justify-center items-center">
              <Image
                src={data.picture.large}
                width={30}
                height={30}
                alt={`image-${data.name.first}`}
                className="h-44 w-44 rounded-full"
              />
            </div>

            <div className="flex flex-col items-center bg-[#144b51] gap-4 p-4">
              <p className="text-xl font-semibold text-[#fff]">
                {data.name.title} {data.name.first} {data.name.last}
              </p>
              <div className="flex gap-4 cursor-pointer">
                <FaHome className="text-[#fff]" />
                <p className="text-sm font-semibold text-[#fff]">
                  {data.location.city}, {data.location.country}
                </p>
              </div>

              <div className="flex gap-4 cursor-pointer">
                <FaPhoneAlt className="text-[#fff]" />
                <Link
                  href={`tel:${data.phone}`}
                  className="text-sm font-semibold text-[#fff] hover:text-[#DA1D25]">
                  {data.phone}
                </Link>
              </div>
              <div className="flex gap-4 cursor-pointer">
                <FaMobileAlt className="text-[#fff] " />
                <Link
                  href={`tel:${data.cell}`}
                  className="text-sm font-semibold text-[#fff] hover:text-[#DA1D25]">
                  {data.cell}
                </Link>
              </div>
              <div className="flex gap-4 cursor-pointer">
                <IoMdMail className="my-auto text-[#fff]" />
                <Link
                  href={`mailto:${data.email}`}
                  className="text-sm font-semibold text-[#fff] hover:text-[#DA1D25]">
                  {data.email}
                </Link>
              </div>

              <div className="skill my-2 text-sm font-semibold text-[#fff]">
                <p className="mx-auto text-center">{data.skills[0]}</p>
                <p className="mx-auto text-center">{data.skills[1]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOurTeam;
