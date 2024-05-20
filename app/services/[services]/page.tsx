import React from "react";
import serviceData from "@/assets/_services";

interface ServiceDetailPageProps {
  params: {
    services: string;
  };
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ params }) => {
  const selectedService = serviceData.find(
    (service) => service.route === params.services
  );

  const backgroundImageStyle = selectedService
    ? {
        backgroundImage: `linear-gradient(rgba(20, 75, 81, 0.5), rgba(20, 75, 81, 0.5)), url(${selectedService.img.src})`,
        backgroundColor: "#144B51",
      }
    : {};

  return (
    <>
      <div
        className={`hero mb-8 pt-[200px] px-0px pb-[120px]`}
        style={backgroundImageStyle}>
        <div className="mx-auto">
          <div className="heroDetailServices mx-4 max-w-[800px]">
            <h3 className="mx-auto md:ml-12 lg:ml-20 text-xl md:text-3xl text-[#fff] mb-6">
              {selectedService?.name}
            </h3>
            <p className="titleServices mx-auto md:ml-12 lg:ml-20 text-[#fff]">
              {selectedService?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-12 mx-4 lg:mx-16 my-6">
        <div className="serviceDetail-container">
          <h3 className="text-2xl font-bold text-[#144B51]">Overview</h3>
          <div className="serviceDetail-content">
            {selectedService?.overview.map((paragraph, index) => (
              <p key={index} className="mt-4 text-[#555555]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="serviceItems">
          <h3 className="text-[#555555] mt-5">
            {selectedService?.ground?.title}
          </h3>
          <ul className="block mb-4">
            {selectedService?.ground?.items.map((item, index) => (
              <li
                key={index}
                className="ms-6 lg:ms-8 my-2 list-disc text-[#555555]">
                {item}
              </li>
            ))}
          </ul>
          <p className="serviceExplanation text-[#555555] mb-12">
            {selectedService?.explanation}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
