// ==============================
// TeamMember.jsx (FIXED)
// ==============================
import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Facebook, Twitter, Instagram } from "lucide-react";

// Team Images
import Team1 from "../assets/team1.png";

const teamData = [
  {
    id: 1,
    img: Team1,
    name: "Mark Henry",
    role: "Owner",
  },
  {
    id: 2,
    img: Team1,
    name: "Lucky Helen",
    role: "Chef",
  },
  {
    id: 3,
    img: Team1,
    name: "Moon Henry",
    role: "Founder",
  },
  {
    id: 4,
    img: Team1,
    name: "Tom Monroe",
    role: "Specialist",
  },
];

const TeamMember = () => {
  return (
    <Section className="py-24 bg-[#3E6B00]">
      <Container className="max-w-[1600px]">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#B8E986] text-lg mb-3">👨‍🍳 Team</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Team Member
          </h2>

          <p className="max-w-[650px] mx-auto text-[#D8E8C7] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-md overflow-hidden group shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] object-cover"
                />

                {/* Social Hover Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    type="button"
                    className="w-9 h-9 bg-white flex items-center justify-center rounded-sm hover:bg-[#F97316] hover:text-white transition cursor-pointer"
                  >
                    <Facebook size={16} />
                  </button>

                  <button
                    type="button"
                    className="w-9 h-9 bg-white flex items-center justify-center rounded-sm hover:bg-[#F97316] hover:text-white transition cursor-pointer"
                  >
                    <Twitter size={16} />
                  </button>

                  <button
                    type="button"
                    className="w-9 h-9 bg-white flex items-center justify-center rounded-sm hover:bg-[#F97316] hover:text-white transition cursor-pointer"
                  >
                    <Instagram size={16} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="py-5 px-4 text-center">
                <h3 className="text-xl font-bold text-[#1E1E1E]">
                  {member.name}
                </h3>

                <p className="text-[#777] mt-2">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TeamMember;