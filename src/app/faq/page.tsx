"use client"; // Mark as a client component

import { useState } from "react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Rabovel?",
      answer:
        "Rabovel is a Nigerian stockbroker platform offering features trading, options, and tools to maximize investment potential in the local stock market.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Click on the 'Sign Up' button at the top right corner of the website and fill in your details to get started.",
    },
    {
      question: "What is the minimum deposit amount?",
      answer: "The minimum deposit amount is $50 to begin trading on the platform.",
    },
    {
      question: "How secure is my data on Rabovel?",
      answer:
        "Your data is protected with state-of-the-art encryption and security measures to ensure your privacy and safety.",
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer:
        "Yes, you can withdraw your funds at any time through the withdrawal option available on your dashboard.",
    },
  ];

  return (
    <div className="container my-10 mx-auto px-4 py-10 lg:py-20">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600">
          Find answers to the most common questions about Rabovel.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border-b border-gray-200 last:border-b-0"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-4 px-5 text-gray-800 font-medium flex justify-between items-center focus:outline-none"
            >
              <span>{faq.question}</span>
              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQPage;
