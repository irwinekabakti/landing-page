"use client";

import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "What types of cases does your law firm handle?",
      answer:
        "Our law firm handles a variety of cases including but not limited to personal injury, family law, criminal defense, and corporate law. We have specialists in each field to provide expert legal advice and representation.",
    },
    {
      id: 2,
      question: "How will I be kept informed about my case?",
      answer:
        "Your case will be handled by one of our experienced attorneys, who will be your primary point of contact. Depending on the complexity of your case, a team of attorneys and paralegals may also be involved to ensure the best possible outcome.",
    },
    {
      id: 3,
      question: "How long will it take to resolve my case?",
      answer:
        "The duration of a case varies widely depending on its nature and complexity. Some cases can be resolved quickly through negotiation or settlement, while others, especially those that go to trial, may take several months or even years. We will provide a more specific timeline after reviewing the details of your case.",
    },
    {
      id: 4,
      question: "Is everything I share with my attorney confidential?",
      answer:
        "Yes, everything you share with your attorney is confidential. We are bound by attorney-client privilege, which means we cannot disclose any information you provide without your explicit consent, except under certain legal circumstances.",
    },
    {
      id: 5,
      question: "What should I bring to my initial consultation?",
      answer:
        "For your initial consultation, please bring any relevant documents related to your case, such as contracts, correspondence, court documents, and any other pertinent information. This will help us better understand your situation and provide accurate legal advice.",
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
