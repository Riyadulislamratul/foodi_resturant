import React from "react";
import Section from "./Section";
import Container from "./Container";
import Symbol from "../assets/icons/arrow.png";
import TasteGallery from "../assets/gallery.png";
import FooterTop from "../assets/footertop.png";
import FooterBottom from "../assets/footerbottom.png";

const Footer = () => {
  return (
    <Section className="bg-[#E5EBE3] mt-30 overflow-hidden">
      <Container className="max-w-331.25 px-3">
        <div className="py-12 sm:py-16 lg:py-25">
          
          {/* ================= DESKTOP / TABLET ================= */}
          <div className="hidden lg:grid grid-cols-[auto_1fr_1fr_1fr] gap-20 xl:gap-40 relative">
            <div className="absolute -top-30 -left-80">
              <img src={FooterTop} alt="" />
            </div>

            <div className="absolute -bottom-42 -right-73">
              <img src={FooterBottom} alt="" />
            </div>

            {/* Info Box */}
            <div className="bg-[#195A00] rounded-3xl pr-10 hover:scale-[1.02] transition duration-300">
              <div className="w-32.5 h-15 pt-5 pl-6 pb-22">
                <img src="./logo.png" alt="" className="w-full" />
              </div>

              <h3 className="text-white text-[18px] font-bold pb-8.5 pl-6 text-nowrap">
                Tuesday – Saturday: 12:00pm – 23:00pm
              </h3>

              <h3 className="text-white text-[18px] font-bold pl-6 pb-15 text-nowrap">
                Closed on Sunday
              </h3>

              <h3 className="text-white text-[18px] font-bold pl-6 pb-10 text-nowrap">
                Visit Today and have a great time with us!
              </h3>
            </div>

            {/* Quick Links */}
            <div className="text-nowrap pt-8">
              <h3 className="font-roboto font-bold text-[20px]">
                Quick Links
              </h3>

              {["Home", "Menu", "About Us", "Contact", "Cart"].map(
                (item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index === 0 ? "mt-6" : "mt-4"
                    } cursor-pointer font-inter text-lg group`}
                  >
                    <img
                      src={Symbol}
                      alt=""
                      className="group-hover:translate-x-1 transition duration-300"
                    />
                    <span className="pl-2 group-hover:text-[#195A00] transition duration-300">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Menus */}
            <div className="text-nowrap pt-8">
              <h3 className="font-roboto font-bold text-[20px]">Menus</h3>

              {["Steaks", "Burgers", "BBQ", "Desserts", "Biriyani"].map(
                (item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index === 0 ? "mt-6" : "mt-4"
                    } cursor-pointer font-inter text-lg group`}
                  >
                    <img
                      src={Symbol}
                      alt=""
                      className="group-hover:translate-x-1 transition duration-300"
                    />
                    <span className="pl-2 group-hover:text-[#195A00] transition duration-300">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Gallery */}
            <div className="pt-8">
              <h3 className="font-roboto font-bold text-[20px]">
                Taste Gallery
              </h3>

              <div className="w-89 h-50 mt-5 overflow-hidden rounded-xl">
                <img
                  src={TasteGallery}
                  alt="Taste Gallery"
                  className="w-full rounded-xl hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="lg:hidden flex flex-col gap-8">
            
            {/* Logo + Info */}
            <div className="bg-[#195A00] rounded-3xl px-6 py-8 text-center">
              <div className="w-28 mx-auto mb-6">
                <img src="./logo.png" alt="" className="w-full" />
              </div>

              <h3 className="text-white text-base font-bold leading-relaxed">
                Tuesday – Saturday: 12:00pm – 23:00pm
              </h3>

              <h3 className="text-white text-base font-bold mt-4">
                Closed on Sunday
              </h3>

              <h3 className="text-white text-base font-bold mt-4 leading-relaxed">
                Visit Today and have a great time with us!
              </h3>
            </div>

            {/* Links + Menu */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Quick Links */}
              <div>
                <h3 className="font-roboto font-bold text-[20px] mb-4">
                  Quick Links
                </h3>

                <div className="space-y-3">
                  {["Home", "Menu", "About Us", "Contact", "Cart"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-center cursor-pointer font-inter text-base group"
                      >
                        <img
                          src={Symbol}
                          alt=""
                          className="group-hover:translate-x-1 transition duration-300"
                        />
                        <span className="pl-2 group-hover:text-[#195A00] transition duration-300">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Menus */}
              <div>
                <h3 className="font-roboto font-bold text-[20px] mb-4">
                  Menus
                </h3>

                <div className="space-y-3">
                  {["Steaks", "Burgers", "BBQ", "Desserts", "Biriyani"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-center cursor-pointer font-inter text-base group"
                      >
                        <img
                          src={Symbol}
                          alt=""
                          className="group-hover:translate-x-1 transition duration-300"
                        />
                        <span className="pl-2 group-hover:text-[#195A00] transition duration-300">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Gallery */}
            <div>
              <h3 className="font-roboto font-bold text-[20px] mb-4 text-center">
                Taste Gallery
              </h3>

              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={TasteGallery}
                  alt="Taste Gallery"
                  className="w-full rounded-2xl hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="bg-[#195A00] w-full">
        <div className="max-w-331.25 mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6">
          <p className="text-white text-sm font-inter py-3 md:py-5 text-center">
            &copy; 2026 Foodi. All rights reserved.
          </p>

          <p className="text-white text-sm font-inter pb-3 md:pb-5 md:pt-5 text-center">
            Developed by Md Riyadul Islam Ratul
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;