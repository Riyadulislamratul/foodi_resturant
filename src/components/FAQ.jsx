import React, { useState } from "react";
import Section from "./Section";
import Container from "./Container";
import { Plus, Minus } from "lucide-react";

const faqData = {
  general: [
    {
      question: "What do I need to apply for the account?",
      answer:
        "You’ll typically need a valid email address, phone number, and basic personal details to create your account. Some services may also require identity verification.",
    },
    {
      question: "How the subscription process works?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.\n\nDui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription anytime from your dashboard settings without additional charges.",
    },
    {
      question: "Are there any hidden fees included?",
      answer:
        "No, pricing is transparent and there are no hidden fees beyond your selected plan.",
    },
  ],

  business: [
    {
      question: "What do I need to apply for the business account?",
      answer:
        "Business accounts require company registration details, owner verification, and payment setup.",
    },
    {
      question: "Is foodtime available 24 hours?",
      answer:
        "Availability depends on your area and restaurant partners, though many operate 24/7.",
    },
    {
      question: "Do you provide enterprise solutions?",
      answer:
        "Yes, custom enterprise plans are available for large-scale business needs.",
    },
    {
      question: "Is there any hidden fee included?",
      answer:
        "No, all business pricing is clearly outlined before purchase.",
    },
  ],
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");
const [openIndex, setOpenIndex] = useState(null);

  const currentFaqs = faqData[activeTab];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="py-20 bg-[#f9f9f9]">
      <Container className="max-w-[1600px]">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-8">
            Frequently asked questions
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
            // ALSO FIX THIS GENERAL BUTTON:
onClick={() => {
  setActiveTab("general");
  setOpenIndex(null); // NOT 1
}}
              className={`px-10 py-4 rounded-full border text-lg font-medium transition-all duration-300 ${
                activeTab === "general"
                  ? "bg-[#3C7D0A] text-white border-[#3C7D0A]"
                  : "bg-transparent text-[#3C7D0A] border-[#3C7D0A]"
              }`}
            >
              General
            </button>

            <button
              onClick={() => {
                setActiveTab("business");
                setOpenIndex(null);
              }}
              className={`px-10 py-4 rounded-full border text-lg font-medium transition-all duration-300 ${
                activeTab === "business"
                  ? "bg-[#3C7D0A] text-white border-[#3C7D0A]"
                  : "bg-transparent text-[#3C7D0A] border-[#3C7D0A]"
              }`}
            >
              For business
            </button>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {currentFaqs
              .filter((_, i) => i % 2 === 0)
              .map((item, index) => {
                const realIndex = index * 2;

                return (
                  <FAQItem
                    key={realIndex}
                    item={item}
                    isOpen={openIndex === realIndex}
                    onClick={() => toggleFAQ(realIndex)}
                  />
                );
              })}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {currentFaqs
              .filter((_, i) => i % 2 !== 0)
              .map((item, index) => {
                const realIndex = index * 2 + 1;

                return (
                  <FAQItem
                    key={realIndex}
                    item={item}
                    isOpen={openIndex === realIndex}
                    onClick={() => toggleFAQ(realIndex)}
                  />
                );
              })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;

// FAQ Item Component
const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`border border-[#D9D9D9] rounded-2xl transition-all duration-300 bg-white ${
        isOpen ? "p-8" : "p-6"
      }`}
    >
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-start text-left gap-4"
      >
        <h3 className="text-lg md:text-xl font-semibold text-[#2D2D2D]">
          {item.question}
        </h3>

        <span className="shrink-0 mt-1 border border-[#CFCFCF] rounded-full p-1">
          {isOpen ? (
            <Minus size={18} className="text-[#6B6B6B]" />
          ) : (
            <Plus size={18} className="text-[#6B6B6B]" />
          )}
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] mt-6" : "max-h-0"
        }`}
      >
        <p className="text-[#555] leading-relaxed text-base md:text-lg whitespace-pre-line">
          {item.answer}
        </p>
      </div>
    </div>
  );
};