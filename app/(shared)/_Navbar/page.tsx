"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

  const closeNavbar = () => {
    setNav(false);
  };

  const router = useRouter();

  const backHome = () => {
    router.push("/");
  };

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
          onClick={backHome}
        />
      </div>

      {/* Menus */}
      <ul className="md:flex hidden lg:mx-16 sm:mx-12">
        <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#DA1D25]`}>
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#DA1D25]`}>
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#DA1D25]`}>
          <Link href="/services">Services</Link>
        </li>
        <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#DA1D25]`}>
          <Link href="/OurTeam">Our Team</Link>
        </li>
        {/* <li
          className={`${
            isScroll ? "text-[#000]" : "text-[#fff]"
          } hover:text-[#DA1D25]`}>
          <Link href="/contact">Contact</Link>
        </li> */}
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
        <li className="py-3 text-1xl uppercase font-semibold text-[#fff] hover:text-[#DA1D25]">
          <Link onClick={closeNavbar} href="/">
            Home
          </Link>
        </li>
        <li className="py-3 text-1xl uppercase font-semibold text-[#fff] hover:text-[#DA1D25]">
          <Link onClick={closeNavbar} href="/about">
            About
          </Link>
        </li>
        <li className="py-3 text-1xl uppercase font-semibold text-[#fff] hover:text-[#DA1D25]">
          <Link onClick={closeNavbar} href="/services">
            Services
          </Link>
        </li>
        <li className="py-3 text-1xl uppercase font-semibold text-[#fff] hover:text-[#DA1D25]">
          <Link onClick={closeNavbar} href="/OurTeam">
            Our Team
          </Link>
        </li>
        {/* <li className="py-3 text-1xl uppercase font-semibold text-[#fff] hover:text-[#DA1D25]">
          <Link onClick={closeNavbar} href="/contact">
            Contact
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
