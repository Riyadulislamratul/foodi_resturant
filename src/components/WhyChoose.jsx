// ==============================
// WhyChoose.jsx
// ==============================
import React from "react";
import Section from "./Section";
import Container from "./Container";
import { ChefHat, Coffee, Flower2 } from "lucide-react";

// Main Image
import WhyFood from "../assets/whychooseus.png";

const whyChooseData = [
  {
    id: 1,
    icon: ChefHat,
    title: "Best Chef",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
  },
  {
    id: 2,
    icon: Coffee,
    title: "120 Item food",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
  },
  {
    id: 3,
    icon: Flower2,
    title: "Clean Environment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
  },
];

const WhyChoose = () => {
  return (
    <Section className="py-40 bg-white">
      <Container className="max-w-[1600px]">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Why Choose us
          </h2>

          <p className="max-w-[650px] mx-auto text-[#666] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
        </div>

        {/* Image */}
        <div className="mb-16 rounded-md overflow-hidden">
          <img
            src={WhyFood}
            alt="Why Choose Us"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {whyChooseData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="text-center flex flex-col items-center"
              >
                <div className="mb-5">
                  <Icon
                    size={42}
                    strokeWidth={1.5}
                    className="text-[#1E1E1E]"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#666] leading-relaxed max-w-[320px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default WhyChoose;