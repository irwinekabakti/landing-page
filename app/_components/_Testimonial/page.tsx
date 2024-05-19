import React from "react";
import SliderTestimonial from "./SliderTestimonial";

const Testimonial: React.FC = () => {
  return (
    <div className="sliderContainer mx-4 mt-0 lg:mx-16 py-6">
      <h1 className="text-center text-3xl text-[#144b51] my-4">Testimonial</h1>
      <SliderTestimonial />
    </div>
  );
};

export default Testimonial;
