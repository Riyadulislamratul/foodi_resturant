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
    <Section className="pt-10">
      <Container className="max-w-[1560px]">
        <div className="bg-white rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.08)] px-6 md:px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E8E8]">
            {infoData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center text-center px-6 py-6"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center mb-4">
                  <img
                    src={item.icon}
                    alt={item.subtitle}
                    className="w-5 h-5 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#1E1E1E]">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm md:text-base text-[#777] mt-1">
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