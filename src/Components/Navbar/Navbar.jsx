import React, { useState } from "react";
import logo1 from "../../assets/logo1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      id="navbar"
      className="relative flex items-center justify-between px-4 lg:px-20 py-6 mx-1"
    >
      <AnchorLink href="#navbar">
        <img src={logo1} alt="logo" />
      </AnchorLink>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden focus:outline-none z-40"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          // Close icon
          <svg
            width="30"
            height="29"
            viewBox="0 0 36 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="4" rx="2" fill="white" />
            <rect y="12.5" width="36" height="4" rx="2" fill="white" />
            <rect y="25.5" width="36" height="4" rx="2" fill="white" />
          </svg>
        ) : (
          // Open icon (hamburger)
          <svg
            width="30"
            height="29"
            viewBox="0 0 36 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="4" rx="2" fill="white" />
            <rect y="12.5" width="36" height="4" rx="2" fill="white" />
            <rect y="25.5" width="36" height="4" rx="2" fill="white" />
          </svg>
        )}
      </button>

      {/* Navigation Menu */}
      <ul
        className={`fixed top-0 w-[200px] h-full bg-gray-800 z-50 flex flex-col items-start gap-6 pl-16 py-20 transition-transform duration-500 ${
          menuOpen ? "right-0" : "-right-full"
        } lg:flex lg:flex-row lg:relative lg:right-auto lg:w-auto lg:h-auto lg:gap-12 lg:px-0 lg:py-0 lg:bg-transparent`}
      >
        {["home", "about", "experience", "project", "contact"].map((item) => (
          <li key={item} className="w-full">
            <AnchorLink
              href={`#${item}`}
              offset={50}
              className="text-white text-lg lg:text-lg transition-colors duration-300 hover:text-purple-400 w-full text-right"
              onClick={() => {
                setActiveMenu(item);
                setMenuOpen(false); // Close the menu on item click
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Connect With Me Button (Desktop Only) */}
      <div
        className="hidden lg:block w-44 py-3 bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform text-center"
      >
        <AnchorLink href="#contact" offset={50} className="text-white text-lg">
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
