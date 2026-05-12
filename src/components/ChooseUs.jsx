import React from "react";
import Section from "./Section";
import Container from "./Container";
import Choose from "../assets/choose.png";
import Truck from "../assets/truck.png";
import Burger from "../assets/burger.png";
import Factory from "../assets/factory.png"
import Timer from "../assets/timer.png"

const ChooseUs = () => {
  return (
    <Section className="py-20">
      <Container className="max-w-330">
        <div>
          <div className="grid grid-cols-2 gap-21">
            <div className="">
              <img src={Choose} alt="Choose Us"  className="w-full h-full" />
            </div>
            <div className="pt-52.5">
              <p className="font-inter text-green text-lg mb-2">
                Why Choose Us _______
              </p>
              <h3 className="text-[#333333] text-5xl font-roboto mb-8 font-bold">
                Why We are the best?
              </h3>
              <p className="text-[#828282] font-inter mb-4 text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>
              <p className="text-[#828282] font-inter mb-8 text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>
              <div className="grid grid-cols-2 gap-6.25 bg-[#FCFCFC]">
                <Card title="Fast Delivery" img={Truck} />
                <Card title="Fresh Food" img={Burger} className="mt-6.25" />
                <Card title="Best Quality" img={Factory} className="mt-6.25" />
                <Card title="24/7 Service" img={Timer} className="mt-6.25" />
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
    <div className="group relative bg-[#FDFDFD] py-6.25 rounded-md flex items-center pl-4 pr-10 gap-5 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md">
      
      {/* Green hover line */}
      <span className="absolute left-0 top-0 h-full w-1 bg-green-600 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>

      {/* Image */}
      <div className="size-[55px]">
        <img src={img} alt={title} />
      </div>

      {/* Title */}
      <h4 className="text-[#4f4f4f] font-roboto font-bold text-[20px] transition-colors duration-300 group-hover:text-black">
        {title}
      </h4>
    </div>
  );
};