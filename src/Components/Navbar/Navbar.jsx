import React, { useState } from "react";
import logo1 from "../../assets/logo1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

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
        className="lg:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <img
          src={menuOpen ? menu_close : menu_open}
          alt={menuOpen ? "Close menu" : "Open menu"}
          className="cursor-pointer z-20 w-8"
        />
      </button>

      {/* Navigation Menu */}
      <ul
        className={`${
          menuOpen ? "right-0 top-0 " : "-right-full"
        } fixed top-0 w-[300px] h-full bg-gray-800 z-50 flex flex-col items-end gap-6 px-8 py-20 transition-transform duration-500 lg:flex lg:flex-row lg:relative lg:right-auto lg:w-auto lg:h-auto lg:gap-12 lg:px-0 lg:py-0 lg:bg-transparent`}
      >
        {["home", "about", "experience", "project", "contact"].map((item) => (
          <li key={item} className="relative w-full">
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
        className="hidden lg:block w-44 py-3 bg-gradient-to-r from-[#4B0082] to-[#8A2BE2]
 text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform text-center"
      >
        <AnchorLink href="#contact" offset={50} className="text-white text-lg">
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
