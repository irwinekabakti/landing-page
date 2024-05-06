"use client";

import React, { useState } from "react";
// import Logo from "../assets/css.svg";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  };

  return (
    <nav className="sticky w-full h-[80px] flex justify-between items-center px-4 bg-[#08111e] text-gray-300">
      <div>{/* <img src={Logo} alt="" style={{ width: "50px" }} /> */}</div>

      {/* Menus */}
      <ul className="md:flex hidden">
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Our Team</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNavbar} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menus */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center"
        }>
        <li className="py-6 text-1xl uppercase font-semibold">Home</li>
        <li className="py-6 text-1xl uppercase font-semibold">About</li>
        <li className="py-6 text-1xl uppercase font-semibold">Project</li>
        <li className="py-6 text-1xl uppercase font-semibold">Our Team</li>
        <li className="py-6 text-1xl uppercase font-semibold">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
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
      </div>
    </nav>
  );
};

export default Navbar;
