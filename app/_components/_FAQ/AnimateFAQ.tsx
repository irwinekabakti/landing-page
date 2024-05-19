"use client";
import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "@/constant";

const AnimateFAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <>
      {questions.map((data) => (
        <div key={data.id} className="mb-4 last:mb-0">
          <button
            className="faq-question w-full text-left text-lg focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
            onClick={() =>
              setActiveQuestion(activeQuestion === data.id ? null : data.id)
            }>
            {data.question}
            {activeQuestion === data.id ? (
              <FaMinusCircle className="text-xl text-[#415a77]" />
            ) : (
              <FaPlusCircle className="text-xl text-[#415a77]" />
            )}
          </button>
          <AnimatePresence>
            {activeQuestion === data.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-600 ml-4">
                <p>{data.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};

export default AnimateFAQ;
