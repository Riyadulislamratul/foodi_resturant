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
    <Section className="relative overflow-hidden">
      <Container>
        {/* Background Shape Right Side */}
        <img
          src={Shape}
          alt=""
          className="
            absolute top-0 right-0 
            h-[60%] sm:h-[70%] md:h-[85%] lg:h-full 
            w-auto 
            pointer-events-none
          "
        />

        {/* Floating Decorative Images */}

        {/* Left leaves */}
        <FloatingImage
          src={Leaf2}
          className="
          top-20 
            lg:top-16 xl:top-4 left-2
            w-24 sm:w-25 lg:w-20 xl:w-53.5
          "
          duration={2}
          delay={0.5}
        />

        {/* Top lemon */}
        <FloatingImage
          src={Lemon2}
          className="
            -top-8 sm:-top-12 md:-top-16 lg:-top-20
            right-[-15%] sm:right-[-8%] md:right-[2%] lg:right-[10%]
            w-32 sm:w-48 md:w-72 lg:w-190
            rotate-35  hidden xl:block
          "
          duration={5}
          delay={0.3}
        />

        {/* Strawberry */}
        <FloatingImage
          src={Strawberry}
          className="
            bottom-[42%] sm:bottom-[40%] md:bottom-[45%] lg:bottom-62
            left-[55%] sm:left-[52%] md:left-[48%] lg:left-[42%]
            w-12 sm:w-16 md:w-24 lg:w-20
            rotate-[350deg]  hidden lg:block
          "
          duration={4}
        />

        {/* Main Hero Content */}
        <div
          className="
            relative z-20 max-w-7xl mx-auto
            min-h-screen
            grid grid-cols-1 lg:grid-cols-2
            items-center
            px-4 sm:px-6 md:px-8
            pt-24 sm:pt-28 md:pt-32
          "
        >
          {/* Left Side */}
          <div className="z-30 text-center lg:text-left order-2 lg:order-1">
            <p
              className="
                text-red-500 font-semibold
                text-sm sm:text-base md:text-lg
                mb-3 sm:mb-4
              "
            >
              CHEF’S SPECIAL
            </p>

            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-bold leading-tight text-black
              "
            >
              Freshness <br />
              in every bite
            </h1>

            <p
              className="
                text-gray-600
                text-base sm:text-lg
                mt-4 sm:mt-6
                max-w-md
                mx-auto lg:mx-0
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo
              studio.
            </p>

            <button
              className="
                mt-6 sm:mt-8 md:mt-10
                bg-black text-white
                px-6 sm:px-8 md:px-10
                py-3 sm:py-4 md:py-5
                rounded-3xl
                text-base sm:text-lg
                font-medium
                hover:scale-105 transition
              "
            >
              Download Recipe
            </button>
          </div>

          {/* Right Side Dish */}
          <div
            className="
              relative flex justify-center items-center
              order-1 lg:order-2
              mb-10 lg:mb-0
            "
          >
            {/* Hero image overlaps header */}
            <div
              className="
                relative
                -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-28
                mr-0 sm:mr-0 md:mr-0 xl:-mr-100
                z-30
              "
            >
              <img
                src={Dish}
                alt="Dish"
                className="
                  w-[240px]
                  sm:w-[320px]
                  md:w-[400px]
                  lg:w-[420px]
                  xl:w-[550px]
                  drop-shadow-2xl
                "
              />

              {/* Bottom leaf */}
              <FloatingImage
                src={Leaf1}
                className="
                  absolute
                  top-[75%] sm:top-[78%] md:top-[82%] lg:top-110
                  left-[65%] sm:left-[68%] md:left-[72%] lg:left-80
                  w-16 sm:w-20 md:w-28 lg:w-53
                  rotate-44  hidden lg:block
                "
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