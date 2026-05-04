// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="bg-black text-white px-2 rounded">F</span>OODI
        </div>

        {/* Nav */}
        <nav className="hidden lg:flex gap-10 font-medium">
          <a href="/">Home</a>
          <a href="/">Menu</a>
          <a href="/">Services</a>
          <a href="/">Offers</a>
        </nav>

        {/* Contact */}
        <button className="font-medium">Contact</button>
      </div>
    </header>
  );
};

export default Header;