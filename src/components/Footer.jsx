import React from "react";
import Section from "./Section";
import Container from "./Container";
import Symbol from "../assets/icons/arrow.png";
import TasteGallery from "../assets/gallery.png";
import FooterTop from "../assets/footertop.png";
import FooterBottom from "../assets/footerbottom.png";

const Footer = () => {
  return (
    <Section className="bg-[#E5EBE3] mt-30">
      <Container className="max-w-331.25">
        <div className="py-25">
          <div className="grid grid-cols-[auto_1fr_1fr_1fr] gap-40 relative">
            <div className="absolute -top-81 -left-73">
              <img src={FooterTop} alt="" />
            </div>
            <div className="absolute -bottom-42 -right-73">
              <img src={FooterBottom} alt="" />
            </div>
            <div className="bg-[#195A00] rounded-3xl pr-10">
              <div className="w-32.5 h-15 pt-5 pl-6 pb-22">
                <img src="./logo.png" alt="" className="w-full" />
              </div>
              <h3 className="text-white text-[18px] font-bold pb-8.5 pl-6 text-nowrap">
                Tuesday – Saturday: 12:00pm – 23:00pm
              </h3>
              <h3 className="text-white text-[18px] font-bold pl-6 pb-15 text-nowrap">
                Closed on Sunday
              </h3>
              <h3 className="text-white text-[18px] font-bold  pl-6 pb-10 text-nowrap">
                Visit Today and have a great time with us!
              </h3>
            </div>
            <div className="text-nowrap pt-8">
              <h3 className="font-roboto font-bold text-[20px]">Quick Links</h3>
              <div className="flex items-center mt-6 cursor-pointer font-inter text-lg">
                <img src={Symbol} alt="" />
                <span className="pl-2">Home</span>
              </div>
              <div className="flex items-center mt-4 cursor-pointer font-inter text-lg">
                <img src={Symbol} alt="" />
                <span className="pl-2">Menu</span>
              </div>
              <div className="flex items-center mt-4 cursor-pointer font-inter text-lg">
                <img src={Symbol} alt="" />
                <span className="pl-2">About Us</span>
              </div>
              <div className="flex items-center mt-4 cursor-pointer font-inter text-lg">
                <img src={Symbol} alt="" />
                <span className="pl-2">Contact</span>
              </div>
              <div className="flex items-center mt-4 font-inter text-lg cursor-pointer">
                <img src={Symbol} alt="" />
                <span className="pl-2">Cart</span>
              </div>
            </div>
            <div className="text-nowrap pt-8">
              <h3 className="font-roboto font-bold text-[20px]">Menus</h3>
              <div className="flex items-center mt-6 cursor-pointer font-inter text-lg">
                <img src={Symbol} alt="" />
                <span className="pl-2">Steaks</span>
              </div>
              <div className="flex items-center mt-4 cursor-pointer font-inter text-lg">
                <img src={Symbol} alt="" />
                <span className="pl-2">Burgers</span>
              </div>
              <div className="flex items-center mt-4 cursor-pointer font-inter text-lg">
                <img src={Symbol} alt="" />
                <span className="pl-2">BBQ</span>
              </div>
              <div className="flex items-center mt-4 font-inter text-lg cursor-pointer">
                <img src={Symbol} alt="" />
                <span className="pl-2">Desserts</span>
              </div>
              <div className="flex items-center mt-4 font-inter text-lg cursor-pointer">
                <img src={Symbol} alt="" />
                <span className="pl-2">Biriyani</span>
              </div>
            </div>
            <div className=" pt-8">
              <h3 className="font-roboto font-bold text-[20px]">Taste Gallery</h3>
              <div className="w-89 h-50 mt-5">
                <img src={TasteGallery} alt="Taste Gallery" className="w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-[#195A00] ">
        <div className="max-w-331.25 mx-auto flex justify-between">
          <p className=" text-white  text-sm font-inter py-5">
          &copy; 2026 Foodi. All rights reserved.
        </p>
        <p className=" text-white  text-sm font-inter py-5">
          Developed by Md Riyadul Islam Ratul
        </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
