import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search");

  // Array of placeholder texts
  const placeholders = [
    "Search for t shirt",
    "Search for shorts",
    "Search for accessories",
    "Search for deals",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to cycle through placeholders
    const changePlaceholder = () => {
      setPlaceholder((prev) => {
        const currentIndex = placeholders.indexOf(prev);
        return placeholders[(currentIndex + 1) % placeholders.length];
      });
    };

    // Change placeholder every 3 seconds
    const intervalId = setInterval(changePlaceholder, 3000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [placeholders]);

  return (
    <header
      className={`fixed text-white top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="../logo.png"
              alt="Logo"
              className={`h-8 transition-all duration-300 ${
                isScrolled ? "h-6" : "h-8"
              }`}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex md:items-center space-x-8 text-sm font-semibold transition-all duration-300">
          <Link to="/men" className="hover:text-gray-700">
            MEN
          </Link>
          <Link to="/women" className="hover:text-gray-700">
            WOMEN
          </Link>
          <Link to="/kids" className="hover:text-gray-700">
            KIDS
          </Link>
          <Link to="/lifestyle" className="hover:text-gray-700">
            LIFESTYLE
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder={placeholder}
              className="bg-gray-100 pl-4 pr-8 py-2 rounded-full text-sm focus:outline-none transition-all duration-300"
            />
            <HiOutlineSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <Link to="/profile" className="relative hover:text-gray-700">
            <FaUserCircle className="text-xl transition-all duration-300" />
          </Link>

          <Link to="/wishlist" className="hover:text-gray-700">
            <FaRegHeart className="text-xl transition-all duration-300" />
          </Link>

          <Link to="/cart" className="relative hover:text-gray-700">
            <IoCartOutline className="text-xl transition-all duration-300" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </Link>
        </div>
      </div>

      {/* Small Screen Menu */}
      <nav className="md:hidden flex justify-between items-center mt-4 text-sm font-semibold transition-all duration-300 pl-3 pr-3">
        <div className="flex space-x-4">
          <Link to="/men" className="hover:text-gray-700">
            MEN
          </Link>
          <Link to="/women" className="hover:text-gray-700">
            WOMEN
          </Link>
          <Link to="/kids" className="hover:text-gray-700">
            KIDS
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/lifestyle" className="hover:text-gray-700">
            LIFESTYLE
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
