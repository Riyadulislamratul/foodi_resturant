// Hero.jsx
import React from "react";
import Header from "./Header";
import FloatingImage from "./FloatingImage";

// Decorative images
import Leaf1 from "../assets/leafs.png";
import Leaf2 from "../assets/leafs.png";
import Lemon1 from "../assets/lemons.png";
import Lemon2 from "../assets/lemons.png";
import Strawberry from "../assets/strawberry.png";
import Dish from "../assets/dish.png";
import Shape from "../assets/shape.png";
import Section from "./Section";
import Container from "./Container";

const Hero = () => {
  return (
    <Section className="relative">
      <Container>
        {/* Background Shape Right Side */}
        <img
          src={Shape}
          alt=""
          className="absolute top-0 right-0 h-full w-auto"
        />
        {/* Floating Decorative Images */}
        {/* Left leaves */}

        <FloatingImage
          src={Leaf2}
          className="top-6 left-6 w-40"
          duration={5}
          delay={0.5}
        />
        <FloatingImage
          src={Lemon2}
          className="-top-17 right-[13%] w-182 rotate-35"
          duration={5}
          delay={0.3}
        />

        {/* Strawberry */}
        <FloatingImage
          src={Strawberry}
          className="bottom-62 left-[45%] w-16 md:w-24"
          duration={4}
        />

        {/* Main Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 items-center px-6 pt-28">
          {/* Left Side */}
          <div className="z-30">
            <p className="text-red-500 font-semibold text-lg mb-4">
              CHEF’S SPECIAL
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black">
              Freshness <br />
              in every bite
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo
              studio.
            </p>

            <button className="mt-10 bg-black text-white px-10 py-5 rounded-3xl text-lg font-medium hover:scale-105 transition">
              Download Recipe
            </button>
          </div>

          {/* Right Side Dish */}
          <div className="relative flex justify-center items-center">
            {/* Hero image overlaps header */}
            <div className="relative -mt-20 md:-mt-28 -mr-100 z-30">
              <img
                src={Dish}
                alt="Dish"
                className="w-[320px] md:w-[550px] drop-shadow-2xl"
              />
              <FloatingImage
                src={Leaf1}
                className="top-125 left-78 w-30 md:w-32 lg:w-40 rotate-44"
                duration={4}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
