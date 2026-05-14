import React from "react";
import Section from "./Section";
import Container from "./Container";
import PartofFoodiImg from "../assets/partoffoodi.png";
import { ArrowRight } from "lucide-react";

const PartofFoodi = () => {
  return (
    <Section className="py-12 px-3 sm:py-16 lg:py-20">
      <Container className="max-w-310.25">
        
        {/* Banner */}
        <div
          className="
            w-full rounded-[24px] sm:rounded-[35px] lg:rounded-[50px]
            shadow-lg flex items-end justify-center
            min-h-[320px] sm:min-h-[450px] md:min-h-[600px] lg:min-h-[760px]
            px-4 sm:px-8
          "
          style={{
            background: `url(${PartofFoodiImg}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          
          {/* Content */}
          <div className="text-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 max-w-[90%] sm:max-w-[80%]">
            <h3 className="font-inter font-bold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] mb-3 sm:mb-4 lg:mb-5 leading-tight">
              Want to be a part of Foodtime?
            </h3>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-semibold text-[#ededed] mb-4 sm:mb-5">
              List your restaurant or shop on foodtime.
            </p>

            <Button text="Join Us" className="mx-auto" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PartofFoodi;

const Button = ({ text, className }) => {
  return (
    <button
      className={`
        bg-[#FF8B00] flex items-center gap-3 sm:gap-4 lg:gap-6
        text-white cursor-pointer font-inter font-medium
        text-sm sm:text-base lg:text-lg
        px-5 sm:px-6 lg:px-7
        py-3 sm:py-3.5
        rounded-md
        hover:bg-[#e67d00]
        hover:scale-105
        transition duration-300
        ${className}
      `}
    >
      {text}
      <ArrowRight className="size-4 sm:size-5 text-white" />
    </button>
  );
};