// ==============================
// src/pages/SignupPage.jsx
// ==============================
import React from "react";
import { Link } from "react-router";
import AuthImage from "../assets/auth-food.png";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center py-10 px-4">
      <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-2 bg-[#EEF0E8] shadow-lg overflow-hidden">
        
        {/* Left Image */}
        <div className="hidden lg:block">
          <img
            src={AuthImage}
            alt="Food"
            className="w-full h-full min-h-[750px] object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex items-center justify-center px-8 md:px-16 py-16">
          <div className="w-full max-w-[500px]">
            
            {/* Logo */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-[#3D6B00] italic">
                Foodi
              </h1>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-[#3D6B00] mb-3">
                Sign Up
              </h2>
              <p className="text-[#666] text-lg">
                Please, fill in this form to sign up
              </p>
            </div>

            <form className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-5 py-4 bg-white border border-[#E5E5E5] rounded-sm outline-none"
                />

                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-5 py-4 bg-white border border-[#E5E5E5] rounded-sm outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 bg-white border border-[#E5E5E5] rounded-sm outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-5 py-4 bg-white border border-[#E5E5E5] rounded-sm outline-none"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-5 py-4 bg-white border border-[#E5E5E5] rounded-sm outline-none"
              />

              <label className="flex items-center gap-2 text-sm text-[#666] cursor-pointer">
                <input type="checkbox" />
                I accept the Terms of use & privacy policy
              </label>

              <button
                type="submit"
                className="w-full bg-[#3D6B00] text-white py-4 text-xl font-semibold hover:bg-[#2F5200] transition"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-8 text-center text-[#666]">
              Already have an account?
              <Link
                to="/login"
                className="ml-2 text-[#3D6B00] font-semibold hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;