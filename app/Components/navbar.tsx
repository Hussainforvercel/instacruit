"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">InstaCruit</div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </div>

        {/* Menu Items */}
        <ul
          className={`fixed top-0 left-0 h-full px-5 w-64 bg-black transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:flex md:flex-row md:items-center md:space-x-8 transition-transform duration-300 ease-in-out z-10 md:ml-auto`}
        >
          <li className="my-4 md:my-0">
            <a href="/" className="block text-lg hover:text-lime-300">
              Home
            </a>
          </li>
          <li className="my-4 md:my-0">
            <a href="/about" className="block text-lg hover:text-lime-300">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
