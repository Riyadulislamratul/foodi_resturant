import React from "react";
import Section from "./Section";
import Container from "./Container";

const AboutUs = () => {
  return (
    <Section>
      <Container className="max-w-360 ">
        <div>
          <div className="flex items-center justify-between gap-33">
            <div className="pt-27 pl-30">
              <p className="text-yellow font-inter font-semibold text-lg mb-2">
                PIZZA DELIVERY
              </p>
              <h3 className="text-heading text-[55px] font-semibold mb-8 font-inter">
                Get Started Today!
              </h3>
              <h5 className="text-heading text-[26px] font-inter mb-4 font-semibold">
                Everything you need to build an amazing food restaurant
                responsive website.
              </h5>
              <p className="text-heading font-inter text-lg">
                Hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis.
              </p>
            </div>
            <div className="pt-44.75 pr-20">
              <p className="mb-2 font-inter text-lg text-green">About Us _______</p>
              <h3 className="text-[48px] font-bold font-roboto mb-8 text-[#333333]">
                Food is an important part Of a balanced Diet
              </h3>
              <p className="text-[#4f4f4f] font-roboto text-[16px] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit
                eu velit in consequat.
              </p>
              <Button text="Show more" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;



const Button = ({ text }) => {
  return (
    <button className="bg-green text-white cursor-pointer font-inter font-medium text-lg px-6 py-3 rounded-md hover:bg-green/90 transition">
      {text}
    </button>
  );
};