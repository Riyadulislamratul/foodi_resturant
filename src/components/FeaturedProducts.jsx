// FIXES:
// 1. Rounded corner black edge issue = add swiper slide padding + card border-transparent
// 2. Progress bar = real swiper progress using onSlideChange
// 3. Cleaner card layout matching your design

import React, { useRef, useState } from "react";
import Section from "./Section";
import Container from "./Container";
import { ChevronLeft, ChevronRight, ShoppingBasket } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

// Product Images
import Product1 from "../assets/food1.png";
import Product2 from "../assets/food2.png";
import Product3 from "../assets/food3.png";
import Product4 from "../assets/food4.png";
import Product5 from "../assets/food5.png";

const products = [
  {
    id: 1,
    img: Product1,
    title: "Kiwi New Zealand",
    price: "$23.00",
    oldPrice: "",
  },
  {
    id: 2,
    img: Product2,
    title: "Organic Diced Peaches",
    price: "$11.00",
    oldPrice: "$13.00",
    sale: "-12%",
  },
  {
    id: 3,
    img: Product3,
    title: "Orange Valencia Organic",
    price: "$13.00",
    oldPrice: "$15.00",
    sale: "-12%",
  },
  {
    id: 4,
    img: Product4,
    title: "Fresh Blueberry",
    price: "$15.00",
    oldPrice: "$19.00",
    sale: "-21%",
  },
  {
    id: 5,
    img: Product5,
    title: "Yellow Lemon Organic",
    price: "$18.00",
    oldPrice: "",
  },
  {
    id: 6,
    img: Product1,
    title: "Yellow Lemon Organic",
    price: "$18.00",
    oldPrice: "",
  },
  {
    id: 7,
    img: Product2,
    title: "Yellow Lemon Organic",
    price: "$18.00",
    oldPrice: "",
  },
];

const FeaturedProducts = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = (swiper) => {
    const totalSlides = swiper.slides.length - swiper.params.slidesPerView;
    const current = swiper.realIndex;
    const percentage = (current / totalSlides) * 100;
    setProgress(Math.min(percentage, 100));
  };

  return (
    <Section className="py-20 bg-[#f5f5f5] px-3">
      <Container className="max-w-[1600px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] uppercase">
            Featured Products
          </h2>

          <div className="flex gap-3">
            <button className="featured-prev w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-[#F72C5B] hover:text-white transition cursor-pointer">
              <ChevronLeft size={20} />
            </button>

            <button className="featured-next w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-[#F72C5B] hover:text-white transition cursor-pointer">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={1.2}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateProgress(swiper);
          }}
          onSlideChange={(swiper) => updateProgress(swiper)}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".featured-prev";
            swiper.params.navigation.nextEl = ".featured-next";
          }}
          navigation={{
            prevEl: ".featured-prev",
            nextEl: ".featured-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
          }}
          className="pb-10"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} className="py rounded-3xl">
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Real Progress Bar */}
        <div className="w-full h-[4px] bg-[#E3E3E3] rounded-full mt-8 overflow-hidden">
          <div
            className="h-full bg-[#F72C5B] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedProducts;

// Product Card
const ProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-md border border-transparent overflow-hidden group h-[420px] w-full flex flex-col">
      {/* Image Area */}
      <div className="relative h-[230px] w-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden rounded-t-[20px]">
        {/* Sale Badge */}
        {item.sale && (
          <span className="absolute top-4 left-4 bg-[#A3E635] text-black text-xs font-bold px-3 py-1 rounded-full z-10">
            {item.sale}
          </span>
        )}

        {/* Image */}
        <img
          src={item.img}
          alt={item.title}
          className="max-h-[180px] max-w-[180px] object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Stars */}
        <div className="text-[#CFCFCF] text-sm mb-3 tracking-[3px]">
          ★★★★★
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#1E1E1E] leading-7 min-h-[56px] mb-6">
          {item.title}
        </h3>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-[#16A34A] font-bold text-lg">
              {item.price}
            </span>

            {item.oldPrice && (
              <span className="text-[#999] line-through text-sm">
                {item.oldPrice}
              </span>
            )}
          </div>

          <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#F72C5B] hover:text-white transition cursor-pointer">
            <ShoppingBasket size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};