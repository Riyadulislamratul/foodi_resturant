import React from "react";
import Section from "./Section";
import Container from "./Container";

const AboutUs = () => {
  return (
    <Section className="py-12 sm:py-16 lg:py-24 overflow-hidden px-3">
      <Container className="max-w-360">
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 xl:gap-33">
            
            {/* Left Content */}
            <div className="pt-0 lg:pt-27 pl-0 lg:pl-12 xl:pl-30 w-full text-center lg:text-left">
              <p className="text-yellow font-inter font-semibold text-base sm:text-lg mb-2">
                PIZZA DELIVERY
              </p>

              <h3 className="text-heading text-[34px] sm:text-[42px] lg:text-[55px] font-semibold mb-6 lg:mb-8 font-inter leading-tight">
                Get Started Today!
              </h3>

              <h5 className="text-heading text-[20px] sm:text-[22px] lg:text-[26px] font-inter mb-4 font-semibold leading-relaxed">
                Everything you need to build an amazing food restaurant
                responsive website.
              </h5>

              <p className="text-heading font-inter text-base sm:text-lg leading-relaxed max-w-[700px] mx-auto lg:mx-0">
                Hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis.
              </p>
            </div>

            {/* Right Content */}
            <div className="pt-0 lg:pt-32 xl:pt-44.75 pr-0 lg:pr-8 xl:pr-20 w-full text-center lg:text-left">
              <p className="mb-2 font-inter text-base sm:text-lg text-green">
                About Us _______
              </p>

              <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold font-roboto mb-6 lg:mb-8 text-[#333333] leading-tight">
                Food is an important part Of a balanced Diet
              </h3>

              <p className="text-[#4f4f4f] font-roboto text-[15px] sm:text-[16px] mb-6 lg:mb-8 leading-relaxed max-w-[700px] mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit
                eu velit in consequat.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button text="Show more" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;

const Button = ({ text }) => {
  return (
    <button className="bg-green text-white cursor-pointer font-inter font-medium text-base sm:text-lg px-5 sm:px-6 py-3 rounded-md hover:bg-green/90 hover:scale-105 transition duration-300">
      {text}
    </button>
  );
};