"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LogoNavbar from "@/assets/hilink-logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };

  // const router = useRouter();

  // const backHome = () => {
  //   router.push("services");
  // };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full h-[80px] z-50 flex justify-between  items-center px-4 ${
        isScroll ? "bg-[#fff] shadow-lg" : "bg-transparent "
      }`}>
      <div className="lg:mx-16 sm:mx-12">
        <Image
          src={LogoNavbar}
          alt="logoNavbar"
          className="cursor-pointer w-[50px]"
          // onClick={backHome}
        />
      </div>

      {/* Menus */}
      <ul className="md:flex hidden lg:mx-16 sm:mx-12">
        <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#144b51]`}>
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#144b51]`}>
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#144b51]`}>
          <Link href="/project">Project</Link>
        </li>
        <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#144b51]`}>
          <Link href="/OurTeam">Our Team</Link>
        </li>
        <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#144b51]`}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNavbar} className="md:hidden z-10">
        {!nav ? (
          <FaBars
            className={`${isScroll ? "text-[#144b51]" : "text-[#fff]"} `}
          />
        ) : (
          <FaTimes className="text-[#fff]" />
        )}
      </div>

      {/* Mobile Menus */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center"
        }>
        <li className="py-3 text-1xl uppercase font-semibold text-[#fff]">
          <Link href="/">Home</Link>
        </li>
        <li className="py-3 text-1xl uppercase font-semibold text-[#fff]">
          <Link href="/about">About</Link>
        </li>
        <li className="py-3 text-1xl uppercase font-semibold text-[#fff]">
          <Link href="/project">Project</Link>
        </li>
        <li className="py-3 text-1xl uppercase font-semibold text-[#fff]">
          <Link href="/OurTeam">Our Team</Link>
        </li>
        <li className="py-3 text-1xl uppercase font-semibold text-[#fff]">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Social Icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-full rounded-l-none">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300">
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600 rounded-full rounded-l-none mt-2">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300">
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333] rounded-full rounded-l-none mt-2">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 rounded-full rounded-l-none mt-2">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300">
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
