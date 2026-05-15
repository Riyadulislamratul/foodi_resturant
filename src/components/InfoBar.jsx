// InfoBar.jsx
import React from "react";
import Section from "./Section";
import Container from "./Container";

import Call from "../assets/icons/call.png";
import Map from "../assets/icons/map.png";
import Clock from "../assets/icons/Clock.png";

const infoData = [
  {
    id: 1,
    icon: Clock,
    title: "Today 10.00am – 09.00pm",
    subtitle: "Working Time",
  },
  {
    id: 2,
    icon: Map,
    title: "Washington, D.C, DC, USA",
    subtitle: "Our Location",
  },
  {
    id: 3,
    icon: Call,
    title: "+17602781253",
    subtitle: "Call online",
  },
];

const InfoBar = () => {
  return (
    <Section className="py-8 sm:py-10 md:py-12 px-3">
      <Container className="max-w-[1560px]">
        <div className="bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[30px] shadow-[0_20px_45px_rgba(0,0,0,0.08)] md:shadow-[0_25px_60px_rgba(0,0,0,0.08)] px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y md:divide-y lg:divide-y-0 lg:divide-x divide-[#E8E8E8]">
            
            {infoData.map((item) => (
              <div
                key={item.id}
                className="
                  flex flex-col items-center justify-center text-center
                  px-4 sm:px-6
                  py-5 sm:py-6 md:py-7
                "
              >
                {/* Icon Circle */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#F97316] flex items-center justify-center mb-3 sm:mb-4">
                  <img
                    src={item.icon}
                    alt={item.subtitle}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1E1E1E] leading-snug break-words max-w-full">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-[#777] mt-1">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default InfoBar;