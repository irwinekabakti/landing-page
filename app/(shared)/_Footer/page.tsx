"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 ms-4 lg:me-20 md:me-8">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-14 flex flex-col gap-4 text-[#7B7B7B]">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
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
                  {/* {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                      <FaFacebook width={30} />
                    </Link>
                  ))} */}

                  <Link
                    href="https://www.facebook.com/"
                    className="text-blue-600">
                    <FaFacebook size={26} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    className="text-pink-600">
                    <FaInstagram size={26} />
                  </Link>
                  <Link href="https://twitter.com/" className="text-gray-900">
                    <FaTwitter size={26} />
                  </Link>
                  <Link href="https://www.threads.net/" className="text-[#333]">
                    <FaThreads size={26} />
                  </Link>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
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

// <footer className="bg-wh-900 text-wh-50 py-10 px-10">
//   <div className="justify-between mx-auto gap-16 sm:flex">
//     {/* COLOMN 1 */}
//     <div className="mt-16 basis-1/2 sm:mt-0">
//       <h4 className="font-bold">BLOG OF THE FUTURE</h4>
//       <p className="my-5">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
//         pariatur?
//       </p>
//       <p>c Blog of the Future All Right Reserved</p>
//     </div>
//     {/* COLOMN 2 */}
//     <div className="mt-16 basis-1/4 sm:mt-0">
//       <h4 className="font-bold">Links</h4>
//       <p className="my-5">Massa orci senectur</p>
//       <p className="my-5">some random link</p>
//       <p>Ullamor vivamus</p>
//     </div>
//     {/* COLOMN 3 */}
//     <div className="mt-16 basis-1/4 sm:mt-0">
//       <h4 className="font-bold">Contact Us</h4>
//       <p className="my-5">Tempus metus mattis risus volutpat egestas</p>
//       <p>+1(646)-8328219</p>
//     </div>
//   </div>
// </footer>
