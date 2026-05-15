// PromoFeatures.jsx
import React from "react";
import Section from "./Section";
import Container from "./Container";
import { ArrowRight } from "lucide-react";

// Banner Image
import PromoImage from "../assets/promo-banner.png";

// Feature Icons
import DeliveryIcon from "../assets/icons/delivery.png";
import FreshIcon from "../assets/icons/fresh.png";
import QualityIcon from "../assets/icons/quality.png";

const features = [
  {
    id: 1,
    icon: DeliveryIcon,
    title: "Free Delivery",
    subtitle: "On all $50+ orders",
  },
  {
    id: 2,
    icon: FreshIcon,
    title: "Always Fresh",
    subtitle: "Fresh city order or above $20",
  },
  {
    id: 3,
    icon: QualityIcon,
    title: "Premium Quality",
    subtitle: "Fresh & healthy products",
  },
];

const PromoFeatures = () => {
  return (
    <Section className="py-24 bg-[#F8F8F8] px-3">
      <Container className="max-w-[1600px]">
        
        {/* Promo Banner */}
        <div className="bg-[#F1F1F1] rounded-[30px] px-8 md:px-16 py-10 md:py-14 mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left */}
            <div>
              <img
                src={PromoImage}
                alt="Organic Products"
                className="w-full max-w-[650px] object-contain"
              />
            </div>

            {/* Right */}
            <div>
              <p className="text-[#F72C5B] text-lg italic mb-4">wow</p>

              <h2 className="text-5xl md:text-6xl font-light text-[#166534] mb-6">
                Available
              </h2>

              <p className="text-[#555] leading-relaxed text-lg mb-8 max-w-[500px]">
                Treat yourself to dishes made up of exotic vegetables and cherish
                the authentic taste of fresh veggies.
              </p>

              <button className="group bg-[#15803D] text-white cursor-pointer px-8 py-4 rounded-full flex items-center gap-4 hover:scale-105 transition">
                Learn More

                <span className="w-9 h-9 rounded-full bg-white text-[#15803D] flex items-center justify-center group-hover:translate-x-1 transition">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="border border-dashed border-[#D8D8D8] rounded-2xl bg-white p-8 flex items-center gap-5 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 object-contain group-hover:translate-x-1 transition"
              />

              <div>
                <h3 className="text-lg font-bold text-[#1E1E1E] mb-2">
                  {item.title}
                </h3>

                <p className="text-[#777] text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PromoFeatures;