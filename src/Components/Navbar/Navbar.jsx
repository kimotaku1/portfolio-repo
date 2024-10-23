import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex items-center justify-between px-4 lg:px-40 py-6">
      <img src={logo} alt="logo" className="h-16" />

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        {menuOpen ? (
          <img
            src={menu_close}
            onClick={toggleMenu}
            alt="close menu"
            className="cursor-pointer z-20 w-8"
          />
        ) : (
          <img
            src={menu_open}
            onClick={toggleMenu}
            alt="open menu"
            className="cursor-pointer z-20 w-8"
          />
        )}
      </div>

      {/* Navigation Menu */}
      <ul
        className={`${
          menuOpen ? 'right-0' : '-right-full'
        } fixed top-0 w-[300px] h-full bg-gray-800 flex flex-col items-start gap-6 px-8 py-20 transition-all duration-500 lg:flex lg:flex-row lg:relative lg:right-auto lg:w-auto lg:h-auto lg:gap-12 lg:px-0 lg:py-0 lg:bg-transparent`}
      >
        {['home', 'about', 'services', 'work', 'contact'].map((item) => (
          <li key={item} className="relative">
            <AnchorLink
              href={`#${item}`}
              offset={50}
              className="text-white text-lg lg:text-base transition-colors duration-300 hover:text-purple-400"
              onClick={() => {
                setMenu(item);
                setMenuOpen(false); // Close the menu on item click
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Connect With Me Button */}
      <div className="hidden lg:block bg-gradient-to-r from-purple-500 to-yellow-500 px-8 py-4 rounded-full cursor-pointer transition-transform transform hover:scale-105 hover:from-yellow-500 hover:to-purple-500">
        <AnchorLink href="#contact" offset={50} className="text-white text-lg">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
