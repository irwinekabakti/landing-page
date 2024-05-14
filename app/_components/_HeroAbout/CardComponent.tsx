import React from "react";
import Link from "next/link";

interface CardAboutProps {
  title: string;
  description: string;
  linkHref: string;
  buttonText: string;
  buttonClasses: string;
}

const CardComponent: React.FC<CardAboutProps> = ({
  title,
  description,
  linkHref,
  buttonText,
  buttonClasses,
}) => {
  return (
    <div className="w-[full] sm:w-1/2 p-4">
      <div className="bg-white shadow-md p-8 mb-4">
        <h2 className="text-[#144B51] text-2xl font-bold mb-4">{title}</h2>
        <p className="text-[#555555] mb-4">{description}</p>
        <div className="mt-4 md:mt-6 lg:mt-8 ">
          <Link
            href={linkHref}
            className={`${buttonClasses} btn w-full px-4 py-2 my-4`}>
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
