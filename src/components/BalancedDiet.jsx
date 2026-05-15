// BalancedDiet.jsx
import React from "react";
import Section from "./Section";
import Container from "./Container";
import WorkImage from "../assets/work.png";

const BalancedDiet = ({ image = WorkImage }) => {
  return (
    <Section className="py-20 md:py-28 bg-[#F9F9F9] overflow-hidden">
      <Container className="max-w-[1560px]">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          {/* Left Side Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[650px]">
              <img
                src={image}
                alt="Food Plate"
                className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="max-w-[650px]">
            <p className="text-[#F97316] text-sm md:text-base font-semibold mb-4">
              How to work
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] leading-tight mb-8">
              Food Is An Important Part Of A Balanced Diet.
            </h2>

            <p className="text-[#666] text-base md:text-lg leading-relaxed mb-10 max-w-[580px]">
              Lorem ipsum dolor sit amet consectetur. Urna eu amet laoreet nisl.
              Amet pellentesque quam lobortis metus et. Consequat at mauris
              lacus sed blandit purus proin. Nunc lacus vivamus tortor bibendum
              est habitant ut mattis vivamus.
            </p>

            {/* Button */}
            <button className="group inline-flex items-center gap-4 bg-[#F97316] cursor-pointer text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition duration-300">
              Learn More

              <span className="w-8 h-8 rounded-full bg-white text-[#F97316] flex items-center justify-center group-hover:translate-x-1 transition">
                →
              </span>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BalancedDiet;