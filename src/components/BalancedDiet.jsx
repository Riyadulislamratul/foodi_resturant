// BalancedDiet.jsx
import React from "react";
import Section from "./Section";
import Container from "./Container";
import WorkImage from "../assets/work.png";

const BalancedDiet = ({ image = WorkImage }) => {
  return (
    <Section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#fff] overflow-hidden px-3">
      <Container className="max-w-[1560px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-center">
          
          {/* Left Side Image */}
          <div className="flex justify-center lg:justify-start order-1">
            <div className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[650px]">
              <img
                src={image}
                alt="Food Plate"
                className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] md:drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full max-w-[650px] mx-auto lg:mx-0 text-center lg:text-left order-2">
            <p className="text-[#F97316] text-sm sm:text-base font-semibold mb-3 sm:mb-4">
              How to work
            </p>

            <h2 className="text-[30px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] leading-tight mb-5 sm:mb-6 lg:mb-8">
              Food Is An Important Part Of A Balanced Diet.
            </h2>

            <p className="text-[#666] text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-[580px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur. Urna eu amet laoreet nisl.
              Amet pellentesque quam lobortis metus et. Consequat at mauris
              lacus sed blandit purus proin. Nunc lacus vivamus tortor bibendum
              est habitant ut mattis vivamus.
            </p>

            {/* Button */}
            <button className="group inline-flex items-center gap-3 sm:gap-4 bg-[#F97316] cursor-pointer text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition duration-300">
              Learn More

              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#F97316] flex items-center justify-center group-hover:translate-x-1 transition">
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