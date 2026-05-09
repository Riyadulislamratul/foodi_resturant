// Header.jsx
import React, { useState } from "react";
import MenuIcon from "../assets/menu1.png"; 
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold z-50">
          <span className="bg-black text-white px-2 rounded">F</span>OODI
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 font-medium text-lg">
          <Link to="/" className="hover:opacity-70 transition">
            Home
          </Link>
          <Link to="/menu" className="hover:opacity-70 transition">
            Menu
          </Link>
          <Link to="/services" className="hover:opacity-70 transition">
            Services
          </Link>
          <Link to="/offers" className="hover:opacity-70 transition">
            Offers
          </Link>
        </nav>

        {/* Desktop Contact */}
        <button className="hidden lg:block font-medium hover:opacity-70 transition text-lg">
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={MenuIcon}
            alt="Menu"
            className="w-6 sm:w-8 h-6 sm:h-8 object-contain"
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            fixed top-0 right-0 h-screen w-[75%] sm:w-[60%]
            bg-white shadow-2xl
            transform transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            lg:hidden
            flex flex-col
            pt-24 px-8
          `}
        >
          <nav className="flex flex-col gap-8 text-lg font-medium">
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Menu
            </a>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Offers
            </a>
            <button className="text-left font-medium">Contact</button>
          </nav>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/30 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;