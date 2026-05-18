// ==============================
// ContactPage.jsx
// Using real Google Maps iframe
// ==============================
import React from "react";
import Section from "../components/Section";
import Container from "../components/Container";

// Images
import MainImage from "../assets/contact-food.png";
import Gallery1 from "../assets/gallery1.png";
import Gallery2 from "../assets/gallery2.png";
import Gallery3 from "../assets/gallery3.png";
import Gallery4 from "../assets/gallery4.png";

const galleryData = [Gallery1, Gallery2, Gallery3, Gallery4];

const ContactPage = () => {
  return (
    <Section className="py-16 bg-white">
      <Container className="max-w-[1600px]">
        
        {/* Top Real Map Section */}
        <div className="w-full rounded-md overflow-hidden mb-10 shadow-md">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Washington,DC,USA&output=embed"
            className="w-full h-[350px] md:h-[450px] border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Middle Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
          
          {/* Left Content */}
          <div className="bg-[#F5F5F5] px-8 md:px-14 py-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
              Us On The Map
            </h2>

            <p className="text-[#666] leading-relaxed mb-10 max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur. Aliquet egestas ac lacus
              cum nullam commodo eget consequat. Nulla vel velit scelerisque
              diam sit pharellus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Customer Support */}
              <div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">
                  Customer Support
                </h3>

                <p className="text-[#666] mb-2">(+880) 1787014044</p>

                <p className="text-[#666]">foodtime@gmail.com</p>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">
                  Address
                </h3>

                <p className="text-[#666] leading-relaxed">
                  2118 Thornridge Cir. Syracuse,
                  <br />
                  Connecticut 35624
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden">
            <img
              src={MainImage}
              alt="Food Photography"
              className="w-full h-full min-h-[450px] object-cover"
            />
          </div>
        </div>

        {/* Bottom Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryData.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden group rounded-md"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[180px] md:h-[250px] object-cover group-hover:scale-110 transition duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ContactPage;