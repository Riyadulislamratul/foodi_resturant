// MAIN FIXES:
// 1. Removed Swiper (your design needs 8 visible cards in 2 rows)
// 2. Added proper category filtering
// 3. Grid = 4 cards per row on desktop
// 4. 2 rows = 8 products
// 5. Each category shows its own products
// 6. Fully responsive

import React, { useState } from "react";
import Section from "./Section";
import Container from "./Container";
import { ShoppingBasket } from "lucide-react";

// Product Images
import Product1 from "../assets/food1.png";
import Product2 from "../assets/food2.png";
import Product3 from "../assets/food3.png";
import Product4 from "../assets/food4.png";
import Product5 from "../assets/food5.png";
import Product6 from "../assets/food6.png";
import Product7 from "../assets/food7.png";
import Product8 from "../assets/food8.png";

// Category Icons
import VegIcon from "../assets/food8.png";
import FruitIcon from "../assets/food8.png";
import DrinkIcon from "../assets/food8.png";
import BreadIcon from "../assets/food8.png";

const categories = [
  { id: "all", name: "All" },
  { id: "vegetable", name: "Vegetable" },
  { id: "fruits", name: "Fruits" },
  { id: "drinks", name: "Drinks" },
];
// PRODUCTS WITH CATEGORY
const products = [
  {
    id: 1,
    category: "vegetable",
    img: Product1,
    title: "Green Broccoli",
    price: "$8.00",
    oldPrice: "$10.00",
    sale: "-12%",
  },
  {
    id: 2,
    category: "vegetable",
    img: Product2,
    title: "Purple Onion",
    price: "$9.00",
    oldPrice: "$11.00",
    sale: "-21%",
    timer: true,
  },
  {
    id: 3,
    category: "vegetable",
    img: Product3,
    title: "Chili Bell Pepper",
    price: "$24.00",
  },
  {
    id: 4,
    category: "vegetable",
    img: Product4,
    title: "Green Cabbage",
    price: "$15.00",
  },
  {
    id: 5,
    category: "fruits",
    img: Product5,
    title: "Fresh Apple",
    price: "$15.00",
    sale: "-12%",
  },
  {
    id: 6,
    category: "fruits",
    img: Product6,
    title: "Organic Orange",
    price: "$16.00",
    oldPrice: "$19.00",
  },
  {
    id: 7,
    category: "drinks",
    img: Product7,
    title: "Fresh Juice",
    price: "$23.00",
  },
  {
    id: 8,
    category: "drinks",
    img: Product8,
    title: "Cherry Smoothie",
    price: "$14.00",
  },
];


const FreshProducts = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // FILTER PRODUCTS
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((item) => item.category === activeCategory);

  return (
    <Section className="py-20 bg-[#FDECEF] relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute left-0 top-20 opacity-10 hidden lg:block">
        <img src={VegIcon} alt="" className="w-40" />
      </div>

      <Container className="max-w-[1600px]">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-8">
            Farm Fresh Products
          </h2>

          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-8">
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveCategory(item.id)}
                className="flex flex-col items-center gap-2 cursor-pointer transition"
              >
                <span
                  className={`text-base font-semibold transition ${
                    activeCategory === item.id
                      ? "text-[#3C7D0A]"
                      : "text-[#555]"
                  }`}
                >
                  {item.name}
                </span>

                <div
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    activeCategory === item.id
                      ? "w-8 bg-[#3C7D0A]"
                      : "w-0 bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default FreshProducts;

// Product Card
const ProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group h-[390px] flex flex-col">
      {/* Image */}
      <div className="relative h-[220px] bg-[#FAFAFA] flex items-center justify-center overflow-hidden">
        {/* Sale Badge */}
        {item.sale && (
          <span className="absolute top-4 left-4 bg-[#A3E635] text-black text-xs font-bold px-3 py-1 rounded-full z-10">
            {item.sale}
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute top-4 right-4 text-[#D3D3D3] hover:text-red-500 cursor-pointer">
          ♥
        </button>

        {/* Product Image */}
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Timer */}
        {item.timer && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex bg-white rounded-lg shadow-md overflow-hidden">
            {["130", "04", "57", "55"].map((num, i) => (
              <div
                key={i}
                className="px-3 py-2 text-center border-r last:border-r-0"
              >
                <h4 className="text-sm font-bold">{num}</h4>
                <p className="text-[10px] text-[#777]">
                  {["Day", "Hour", "Min", "Sec"][i]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-[#CFCFCF] text-sm mb-3 tracking-[3px]">
          ★★★★★
        </div>

        <h3 className="text-lg font-semibold text-[#1E1E1E] min-h-[50px]">
          {item.title}
        </h3>

        <div className="flex items-center justify-between mt-auto pt-4">
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