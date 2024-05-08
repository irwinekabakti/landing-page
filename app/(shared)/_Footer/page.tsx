"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoFooter from "@/assets/hilink-logo.svg";
import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "../../../constant/index";
import { FaFacebook, FaInstagram, FaTwitter, FaThreads } from "react-icons/fa6";

const Footer: React.FC = () => {
  const date = new Date();
  const getYear = date.getFullYear();

  return (
    <footer className="flexCenter mb-16">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src={LogoFooter}
              alt="logo"
              width={74}
              height={29}
              className="ms-4 lg:ms-12"
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 ms-4 lg:me-20 md:me-8">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-14 flex flex-col gap-4 text-[#7B7B7B]">
                  {columns.links.map((link) => (
                    <Link href="/" key={link} className="hover:text-[#144b51]">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    {/* <Link href={`mailto: ${link.value}`}>{link.value}</Link> */}
                    {/* {link.value.includes("@") ? (
                      <Link href={`mLinkailto:${link.value}`}>
                        {link.value}
                      </Link>
                    ) : (
                      <Link href={`tel:${link.value}`}>{link.value}</Link>
                    )} */}

                    <p className="medium-14 whitespace-nowrap text-[#021639]">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-[#7B7B7B]">
                  <Link
                    href="https://www.facebook.com/"
                    className="text-blue-600 hover:text-[#144b51]">
                    <FaFacebook size={26} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    className="text-pink-600 hover:text-[#144b51]">
                    <FaInstagram size={26} />
                  </Link>
                  <Link
                    href="https://twitter.com/"
                    className="text-gray-900 hover:text-[#144b51]">
                    <FaTwitter size={26} />
                  </Link>
                  <Link
                    href="https://www.threads.net/"
                    className="text-[#333] hover:text-[#144b51]">
                    <FaThreads size={26} />
                  </Link>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border text-[#fff] mx-8" />
        {/* <hr className="border bg-[#fff] mx-8" /> */}
        <p className="text-base w-full text-center cursor-pointer">
          {getYear} Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-lg whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
