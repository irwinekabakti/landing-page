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

/*
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store";
import { FaHome, FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineWork, MdOutlineWorkspacePremium } from "react-icons/md";
import { skills } from "@/constant";
import { useAppDispatch } from "@/store";
import {
  loadUserDataFromStorage,
  fetchUserData,
  assignSkills,
} from "@/store/action/user-slice";

const CardOurTeam: React.FC = () => {
  const dispatch = useAppDispatch();

  const { dataUser } = useAppSelector((state) => state.dataStore);

  useEffect(() => {
    dispatch(loadUserDataFromStorage());
    dispatch(fetchUserData()).then(() => {
      dispatch(assignSkills());
    });
  }, [dispatch]);

  return (
    <div className="mx-4 mt-0 lg:mx-16 py-6 mb-12">
      <h1 className="text-center text-3xl text-[#144b51] my-4">Our Team</h1>
      <div className="OurTeamContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataUser.results.map((data: any) => (
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
              <div className="flex gap-2 cursor-pointer">
                <FaHome className="text-[#fff]" />
                <p className="text-sm font-semibold text-[#fff]">
                  {data.location.city}, {data.location.country}
                </p>
              </div>

              <div className="flex gap-2 cursor-pointer">
                <FaPhoneAlt className="text-[#fff]" />
                <Link
                  href={`tel:${data.phone}`}
                  className="text-sm font-semibold text-[#fff] hover:text-[#DA1D25]">
                  {data.phone}
                </Link>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <FaMobileAlt className="text-[#fff] " />
                <Link
                  href={`tel:${data.cell}`}
                  className="text-sm font-semibold text-[#fff] hover:text-[#DA1D25]">
                  {data.cell}
                </Link>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <IoMdMail className="my-auto text-[#fff]" />
                <Link
                  href={`mailto:${data.email}`}
                  className="text-sm font-semibold text-[#fff] hover:text-[#DA1D25]">
                  {data.email}
                </Link>
              </div>

              <div className="skill my-2 text-sm font-semibold text-[#fff]">
                {data.skills && data.skills[0] && (
                  <div className="flex gap-2">
                    <MdOutlineWork className="my-auto" />
                    <p className="mx-auto text-center">{data.skills[0]}</p>
                  </div>
                )}
                {data.skills && data.skills[1] && (
                  <div className="flex gap-2">
                    <MdOutlineWorkspacePremium className="my-auto" />
                    <p className="mx-auto text-center">{data.skills[1]}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOurTeam;
*/
