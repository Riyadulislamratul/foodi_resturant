import React from "react";
import Section from "./Section";
import Container from "./Container";
import Choose from "../assets/choose.png";
import Truck from "../assets/truck.png";
import Burger from "../assets/burger.png";
import Factory from "../assets/factory.png";
import Timer from "../assets/timer.png";

const ChooseUs = () => {
  return (
    <Section className="py-12 sm:py-16 lg:py-20 overflow-hidden px-3">
      <Container className="max-w-330">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-66 items-center">
            
            {/* Left Image */}
            <div className="w-full xl:w-[697px] mx-auto order-1">
              <img
                src={Choose}
                alt="Choose Us"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="pt-0 lg:pt-20 xl:pt-52.5 order-2">
              <p className="font-inter text-green text-base sm:text-lg mb-2 text-center lg:text-left">
                Why Choose Us _______
              </p>

              <h3 className="text-[#333333] text-3xl sm:text-4xl lg:text-5xl font-roboto mb-6 lg:mb-8 font-bold text-center lg:text-left leading-tight">
                Why We are the best?
              </h3>

              <p className="text-[#828282] font-inter mb-4 text-[15px] sm:text-[16px] text-center lg:text-left leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>

              <p className="text-[#828282] font-inter mb-8 text-[15px] sm:text-[16px] text-center lg:text-left leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6.25 bg-[#FCFCFC]">
                <Card title="Fast Delivery" img={Truck} />
                <Card title="Fresh Food" img={Burger} />
                <Card title="Best Quality" img={Factory} />
                <Card title="24/7 Service" img={Timer} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ChooseUs;

const Card = ({ title, img }) => {
  return (
    <div className="group relative bg-[#FDFDFD] py-5 sm:py-6.25 rounded-md flex items-center pl-4 pr-4 sm:pr-8 lg:pr-10 gap-4 sm:gap-5 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md">
      
      {/* Green hover line */}
      <span className="absolute left-0 top-0 h-full w-1 bg-green-600 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>

      {/* Image */}
      <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] flex-shrink-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h4 className="text-[#4f4f4f] font-roboto font-bold text-[17px] sm:text-[18px] lg:text-[20px] transition-colors duration-300 group-hover:text-black leading-snug">
        {title}
      </h4>
    </div>
  );
};