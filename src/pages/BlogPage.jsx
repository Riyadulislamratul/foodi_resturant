// ==============================
// BlogPage.jsx
// ==============================
import React from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import { CalendarDays, User, MessageSquare, Search, ChevronLeft, ChevronRight } from "lucide-react";

// Banner + Blog Images
import BannerImg from "../assets/blog-banner.png";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";

// Sidebar Recent Post Images
import Recent1 from "../assets/recent1.png";
import Recent2 from "../assets/recent2.png";
import Recent3 from "../assets/recent3.png";

const blogPosts = [
  {
    id: 1,
    image: Blog1,
    title: "Greek yogurt breakfast bowls",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquet egestas ac lacus cum nullam eget consequat. Nulla vel velit scelerisque diam sit pharetra suspendisse.",
  },
  {
    id: 2,
    image: Blog2,
    title: "Greek yogurt breakfast bowls",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquet egestas ac lacus cum nullam eget consequat. Nulla vel velit scelerisque diam sit pharetra suspendisse.",
  },
  {
    id: 3,
    image: Blog3,
    title: "Greek yogurt breakfast bowls",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquet egestas ac lacus cum nullam eget consequat. Nulla vel velit scelerisque diam sit pharetra suspendisse.",
  },
];

const recentPosts = [
  { id: 1, img: Recent1, title: "Greek yogurt breakfast bowls", date: "13 Jul" },
  { id: 2, img: Recent2, title: "Greek yogurt breakfast bowls", date: "13 Jul" },
  { id: 3, img: Recent3, title: "Greek yogurt breakfast bowls", date: "14 Jul" },
];

const categories = [
  { name: "All category", count: 16 },
  { name: "Nature", count: 8 },
  { name: "Foods", count: 4 },
  { name: "Travel", count: 10 },
];

const tags = ["Healthy", "Fruit", "Foods", "Sandwich", "Dinner", "Fast", "Vegetable"];

const BlogPage = () => {
  return (
    <Section className="bg-[#F8F8F8] pb-20">
      
      {/* Banner */}
      <div
        className="relative h-[260px] md:h-[320px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <h1 className="relative text-white text-4xl md:text-6xl font-bold z-10">
          Blog
        </h1>
      </div>

      <Container className="max-w-[1600px] pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          
          {/* Left Blog Posts */}
          <div className="space-y-10">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-[#E5E5E5] rounded-md overflow-hidden"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-fit object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  
                  {/* Meta */}
                  <div className="flex flex-wrap gap-5 text-sm text-[#777] mb-4">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      Aug 1, 2024
                    </span>

                    <span className="flex items-center gap-2">
                      <User size={16} />
                      Admin
                    </span>

                    <span className="flex items-center gap-2">
                      <MessageSquare size={16} />
                      Comments
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                    {post.title}
                  </h2>

                  {/* Desc */}
                  <p className="text-[#666] leading-relaxed mb-6">
                    {post.desc}
                  </p>

                  {/* Button */}
                  <button className="px-8 py-3 bg-[#3D6B00] text-white rounded-full hover:bg-[#2E5000] transition cursor-pointer">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-10">
            
            {/* Search */}
            <div className="bg-white p-6 border border-[#E5E5E5] rounded-md">
              <div className="flex items-center border border-[#E5E5E5] rounded-md px-4 py-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full outline-none"
                />
                <Search size={18} className="text-[#999]" />
              </div>
            </div>

            {/* Latest Posts */}
            <div className="bg-white p-6 border border-[#E5E5E5] rounded-md">
              <h3 className="text-2xl font-bold mb-6">Latest Post</h3>

              <div className="space-y-5">
                {recentPosts.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />

                    <div>
                      <p className="text-sm text-[#777] mb-1">{item.date}</p>
                      <h4 className="font-semibold text-[#1E1E1E] leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 border border-[#E5E5E5] rounded-md">
              <h3 className="text-2xl font-bold mb-6">All Category</h3>

              <div className="space-y-4">
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-[#555] border-b pb-3"
                  >
                    <span>{cat.name}</span>
                    <span>({cat.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 border border-[#E5E5E5] rounded-md">
              <h3 className="text-2xl font-bold mb-6">Tags</h3>

              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border border-[#D9D9D9] text-sm hover:bg-[#3D6B00] hover:text-white transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3">
              <button className="w-10 h-10 border flex items-center justify-center hover:bg-[#3D6B00] hover:text-white transition">
                <ChevronLeft size={18} />
              </button>

              <button className="w-10 h-10 border flex items-center justify-center hover:bg-[#3D6B00] hover:text-white transition">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BlogPage;