// PopularFoods.jsx
import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Heart, ShoppingCart } from "lucide-react";

// Import your food images here
import Food1 from "../assets/food1.png";
import Food2 from "../assets/food2.png";
import Food3 from "../assets/food3.png";
import Food4 from "../assets/food4.png";
import Food5 from "../assets/food5.png";
import Food6 from "../assets/food6.png";
import Food7 from "../assets/food7.png";
import Food8 from "../assets/food8.png";

const foodData = [
  {
    id: 1,
    img: Food1,
    title: "Delicious Burger",
    discount: "-25%",
    oldPrice: "60.00$",
    newPrice: "45.00$",
  },
  {
    id: 2,
    img: Food2,
    title: "Grilled Chicken",
    discount: "-7%",
    oldPrice: "42.00$",
    newPrice: "39.00$",
  },
  {
    id: 3,
    img: Food3,
    title: "Ruti With Chicken",
    discount: "-10%",
    oldPrice: "29.00$",
    newPrice: "26.00$",
  },
  {
    id: 4,
    img: Food4,
    title: "Fast Food Combo",
    discount: "-18%",
    oldPrice: "34.00$",
    newPrice: "28.00$",
  },
  {
    id: 5,
    img: Food5,
    title: "Chicago Deep Pizza",
    discount: "-21%",
    oldPrice: "28.00$",
    newPrice: "22.00$",
  },
  {
    id: 6,
    img: Food6,
    title: "Chinese Pasta",
    discount: "-15%",
    oldPrice: "40.00$",
    newPrice: "34.00$",
  },
  {
    id: 7,
    img: Food7,
    title: "Whopper Burger King",
    discount: "-13%",
    oldPrice: "30.00$",
    newPrice: "26.00$",
  },
  {
    id: 8,
    img: Food8,
    title: "Ruti With Beef Slice",
    discount: "-7%",
    oldPrice: "30.52$",
    newPrice: "28.52$",
  },
];

const PopularFoods = () => {
  return (
    <Section className="py-20 bg-[#F5F6F7] px-3">
      <Container className="max-w-[1560px]">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#2E8B57] font-semibold text-sm md:text-base mb-3">
            Crispy, Every Bite Taste
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1E1E1E]">
            Popular Fast Foods
          </h2>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {foodData.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="group bg-green cursor-pointer hover:scale-105 transition-all duration-300 text-white font-semibold px-10 py-4 rounded-lg flex items-center gap-3 shadow-lg">
            <ShoppingCart size={18} />
            View More
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default PopularFoods;

// Food Card Component
const FoodCard = ({ item }) => {
  return (
    <div className="group">
      
      {/* Image Box */}
      <div className="relative bg-white rounded-2xl p-6 min-h-[250px] flex items-center justify-center hover:shadow-xl transition-all duration-300">
        
        {/* Wishlist Button */}
        <button className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-[#1E1E1E] text-white flex items-center justify-center hover:bg-[#F72C5B] transition">
          <Heart size={18} fill="currentColor" />
        </button>

        {/* Food Image */}
        <img
          src={item.img}
          alt={item.title}
          className="w-full max-w-[190px] h-auto object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 mt-5">
        <span className="bg-[#FFC107] text-black text-sm font-bold px-2 py-1 rounded">
          {item.discount}
        </span>

        <span className="text-[#888] line-through text-sm">
          {item.oldPrice}
        </span>

        <span className="text-[#1E1E1E] font-bold text-sm">
          {item.newPrice}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#1E1E1E] mt-4">
        {item.title}
      </h3>
    </div>
  );
};