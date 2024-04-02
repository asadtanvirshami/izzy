import React, { useState } from "react";
import Button from "./Button";

const faqs = [
  {
    question:
      "Is the Victorium AI model custom-built from scratch for design generation?",
    answer:
      "Custom-built specifically for innovative shoe and apparel design, leveraging advanced AI for creative, trend-aligned designs.",
  },
  {
    question:
      "How does VictorAI incorporate real-time fashion trends into its designs?",
    answer:
      "Integrates real-time fashion trends into the design process, aligning generated designs with current market demands.",
  },
  {
    question:
      "Can VictorAI be integrated into existing design and marketing platforms?",
    answer:
      "Offers an API for easy integration into existing design and marketing platforms, enhancing them with AI-driven capabilities.",
  },
  {
    question: "Who can benefit from using VictorAI?",
    answer:
      "Ideal for shoe designers, creatives, product teams, brand strategists, marketers, and decision-makers, suitable for both design and market analysis.",
  },
  {
    question:
      "Can VictorAI modify a generated image or change the design according to an input prompt?",
    answer:
      "Capable of modifying designs based on input prompts, allowing for high customization and precise design adjustments.",
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-[#212A31] dark:border-[#212A31] rounded-md">
      <button
        className="flex justify-between items-center w-full py-5 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#111920] dark:text-white text-[20px] md:text-[24px] font-medium">
          {faq.question}
        </span>
        <span>
          {isOpen ? (
            <svg
              width="16"
              height="2"
              viewBox="0 0 16 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0.80127L0 0.80127"
                stroke="url(#paint0_linear_100_7)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_100_7"
                  x1="0.369372"
                  y1="0.831098"
                  x2="0.493293"
                  y2="2.78581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0CC8E8" />
                  <stop offset="1" stopColor="#2DEEAA" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              className="stroke-[#111920] dark:stroke-white"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.80127V16.8013"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M0 8.80127H16"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 px-6 text-[16px] text-[#111920] dark:text-white">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqComponent = () => {
  return (
    <div className="">
      <div className=" p-6">
        <div className="mb-[32px] md:flex justify-between items-center">
          <h2 className="text-[40px] leading-[40px] text-[#111920] dark:text-white font-semibold ">
            Frequently Asked Questions
          </h2>
          <Button>All FAQs</Button>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
