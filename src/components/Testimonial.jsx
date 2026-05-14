import React from "react";
import Section from "./Section";
import Container from "./Container";
import Review from "../assets/review.png";
import Avatar from "../assets/avatar.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    img: Avatar,
    name: "John Doe",
    position: "CEO, Company",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc.",
  },
  {
    id: 2,
    img: Avatar,
    name: "Sarah Smith",
    position: "Marketing Head",
    review:
      "Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.",
  },
];

const Testimonial = () => {
  return (
    <Section className="px-3 py-14 sm:py-18 md:py-24 lg:py-30 overflow-hidden">
      <Container className="max-w-[1560px]">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-4">
          <p className="text-green font-nunito text-base sm:text-lg font-medium">
            Testimonials
          </p>

          <h3 className="text-black font-nunito text-[28px] sm:text-[32px] lg:text-[36px] font-bold mt-2 leading-tight">
            Our Happy Client Says
          </h3>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
          
          {/* Left Side Slider */}
          <div className="w-full max-w-[760px] mx-auto h-auto min-h-[320px] sm:min-h-[380px] md:min-h-[420px] rounded-3xl shadow-lg overflow-hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="w-full h-full rounded-3xl"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="h-full">
                  <TestimonialCard
                    img={item.img}
                    name={item.name}
                    position={item.position}
                    review={item.review}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <img
              src={Review}
              alt="Review"
              className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] object-contain"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonial;

// Card Component
const TestimonialCard = ({ img, name, position, review }) => {
  return (
    <div className="bg-white shadow-xl p-5 sm:p-8 md:p-12 h-full flex flex-col justify-center">
      
      {/* User Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-4 sm:gap-5 mb-6 sm:mb-8">
        
        {/* Avatar */}
        <div className="shrink-0">
          <img
            src={img}
            alt={name}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
        </div>

        {/* Name + Position */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
            {name}
          </h3>

          <p className="text-sm sm:text-base text-gray-500">
            {position}
          </p>
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg font-medium text-center sm:text-left">
        “{review}”
      </p>
    </div>
  );
};