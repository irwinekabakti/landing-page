import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterColumn from "./FooterColumn";
import LogoFooter from "@/assets/hilink-logo.svg";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constant/index";

const Footer: React.FC = () => {
  const date = new Date();
  const getYear = date.getFullYear();

  return (
    <footer className="flexCenter mb-8 mx-2 lg:mx-14">
      <div className="flex w-full flex-col gap-14 pt-8">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-8">
            <Image
              src={LogoFooter}
              alt="logo"
              width={74}
              height={29}
              quality={100}
              rel="preload"
              className="ms-4 lg:ms-12"
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 ms-4 lg:me-20 md:me-8">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.id}>
                <ul className="font-normal flex flex-col gap-4 text-[#3b3b3b]">
                  {columns.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.url} className="hover:text-[#DA1D25]">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <div
                    key={link.id}
                    className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    {link.type === "mail" ? (
                      <Link
                        href={`mailto:${link.value}`}
                        className="hover:text-[#DA1D25]">
                        {link.value}
                      </Link>
                    ) : (
                      <Link
                        href={`tel:${link.value}`}
                        className="hover:text-[#DA1D25]">
                        {link.value}
                      </Link>
                    )}
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="font-normal flex text-[#7B7B7B]">
                  {SOCIALS.social.map((data) => (
                    <li className="px-2" key={data.id}>
                      <Link href={data.url}>
                        {data.name === "Facebook" && (
                          <data.icon
                            size={26}
                            aria-label={data.name}
                            name={data.name}
                            className={`hover:text-blue-600 text-[#144b51]`}
                          />
                        )}
                        {data.name === "Instagram" && (
                          <data.icon
                            size={26}
                            aria-label={data.name}
                            name={data.name}
                            className={`hover:text-pink-600 text-[#144b51]`}
                          />
                        )}
                        {data.name === "Twitter" && (
                          <data.icon
                            size={26}
                            aria-label={data.name}
                            name={data.name}
                            className={`hover:text-gray-900 text-[#144b51]`}
                          />
                        )}
                        {data.name === "Threads" && (
                          <data.icon
                            size={26}
                            aria-label={data.name}
                            name={data.name}
                            className={`hover:text-[#333] text-[#144b51] `}
                          />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border text-[#fff] mx-8" />
        <p className="text-base w-full text-center cursor-pointer">
          {getYear} Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
