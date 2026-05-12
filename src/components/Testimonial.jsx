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
    <Section className="py-30 overflow-hidden">
      <Container className="max-w-[1560px]">
        <div className="text-center mb-16">
            <p className="text-green font-nunito text-lg font-medium">Testimonials</p>
        <h3 className="text-black font-nunito text-[36px] font-bold mt-2">
            Our Happy Client Says
        </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side Slider */}
          <div className="w-full max-w-[760px] h-[420px] bg-gray-100 rounded-3xl shadow-lg">
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
          <div className="flex justify-center lg:justify-end">
            <img
              src={Review}
              alt="Review"
              className="w-full max-w-[650px] object-contain"
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
    <div className="bg-white  shadow-xl p-8 md:p-12 h-full">
      <div className="flex items-center gap-5 mb-8">
        {/* Avatar */}
        <div className="shrink-0">
          <img
            src={img}
            alt={name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
        </div>

        {/* User Info */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-black">{name}</h3>
          <p className="text-sm md:text-base text-gray-500">{position}</p>
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
        “{review}”
      </p>
    </div>
  );
};
