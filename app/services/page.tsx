import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroServices from "../_components/_HeroServices/page";
import service from "@/assets/_services";

const Services: React.FC = () => {
  return (
    <main className="mainServices overflow-x-hidden">
      <HeroServices />
      <div className="serviceContainer mx-4 mt-0 lg:mx-16 pt-6 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {service.map((data) => (
          <div className="py-2 md:p-4" key={data.id}>
            <div className="bg-[#144b51] shadow-md">
              <Image src={data.img} alt={data.name} />
              <div className="p-4">
                <Link
                  href="/services"
                  className="inline-block mt-4 px-4 py-2 text-white font-semibold rounded-md">
                  {data.name}
                </Link>
                <hr className="bg-blue-600 ml-[10px] w-[200px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
