"use client";

import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "How long is shipping?",
      answer: "Shipping is between 5-10 business days",
    },
    {
      id: 2,
      question: "What if I want a refund?",
      answer: "Moonlamps.com does 100% refund if you are not satisfied",
    },
    {
      id: 3,
      question: "Can I just purchase the stand?",
      answer:
        "Unfortunately, we are only selling the bundle which includes the stand",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer: "You can go to your dashboard and view all of your orders",
    },
    {
      id: 5,
      question: "How many years does this lamp last?",
      answer: "We would hope a lifetime, but you never know what could happen.",
    },
  ];

  return (
    <div id="faq" className="w-full py-6">
      <div className="p-4 md:p-8 rounded-lg w-full lg:w-[80%] max-w-[1400px] mx-auto my-4">
        <h2 className="text-3xl mb-6 font-bold text-center text-[#144b51]">
          Frequently Asked Questions
        </h2>

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
      </div>
    </div>
  );
};

export default Faq;

// "use client";

// import React, { useState } from "react";
// import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { nanoid } from "nanoid";

// interface Question {
//   id: string;
//   question: string;
//   answer: string;
// }

// const Faq = () => {
//   const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

//   const questions: Question[] = [
//     {
//       id: nanoid(),
//       question: "How long is shipping?",
//       answer: "Shipping is between 5-10 business days",
//     },
//     {
//       id: nanoid(),
//       question: "What if I want a refund?",
//       answer: "Moonlamps.com does 100% refund if you are not satisfied",
//     },
//     {
//       id: nanoid(),
//       question: "Can I just purchase the stand?",
//       answer:
//         "Unfortunately, we are only selling the bundle which includes the stand",
//     },
//     {
//       id: nanoid(),
//       question: "How can I track my order?",
//       answer: "You can go to your dashboard and view all of your orders",
//     },
//     {
//       id: nanoid(),
//       question: "How many years does this lamp last?",
//       answer: "We would hope a lifetime, but you never know what could happen.",
//     },
//   ];

//   return (
//     <div id="faq" className="w-full py-6">
//       <div className=" p-8 rounded-lg w-[89%] max-w-[1400px] mx-auto my-4">
//         <h2 className="text-2xl mb-6 font-semibold text-center text-[#144b51]">
//           Frequently Asked Questions
//         </h2>

//         {questions.map((data) => (
//           <div key={data.id} className="mb-4 last:mb-0">
//             <button
//               className="faq-question w-full text-left text-lg focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
//               onClick={() =>
//                 setActiveQuestion(activeQuestion === data.id ? null : data.id)
//               }>
//               {data.question}
//               {activeQuestion === data.id ? (
//                 <FaMinusCircle className="text-xl text-primary" />
//               ) : (
//                 <FaPlusCircle className="text-xl text-primary" />
//               )}
//             </button>
//             <AnimatePresence>
//               {activeQuestion === data.id && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="mt-2 text-gray-600 ml-4">
//                   <p>{data.answer}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faq;
