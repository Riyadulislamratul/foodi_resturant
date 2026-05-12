import React from "react";
import Section from "./Section";
import Container from "./Container";
import HowWorksImg from "../assets/howtowork.png";

const HowWorks = () => {
  return (
    <Section className="py-12 sm:py-16 md:py-20 lg:py-25 px-3 overflow-hidden">
      <Container className="max-w-401.25">
        <div className="w-full flex justify-center">
          
          {/* Responsive Image Wrapper */}
          <div className="w-full max-w-[1605px]">
            <img
              src={HowWorksImg}
              alt="How It Works"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default HowWorks;