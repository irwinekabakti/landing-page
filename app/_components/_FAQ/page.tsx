import React from "react";
import AnimateFAQ from "./AnimateFAQ";

const Faq: React.FC = () => {
  return (
    <div id="faq" className="w-full py-6">
      <div className="p-4 md:p-8 rounded-lg w-full lg:w-[80%] max-w-[1400px] mx-auto my-4">
        <h2 className="text-3xl mb-6 font-bold text-center text-[#144b51]">
          Frequently Asked Questions
        </h2>

        <AnimateFAQ />
      </div>
    </div>
  );
};

export default Faq;
