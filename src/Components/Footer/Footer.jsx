import React, { useState } from "react";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error on input change
  };

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    alert(`Subscribed with email: ${email}`);
    setEmail(""); // Clear input after subscribing
  };

  return (
    <footer className="flex flex-col gap-8 mt-12 px-8 lg:px-32">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center relative">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <img src={logo} alt="Logo" className="w-16" />
          <p className="text-lg text-gray-400">
            Let's connect and create something amazing together! When I’m not coding, I’m pushing boundaries in Mobile Legends: Bang Bang as a pro player.
            Feel free to reach out to collaborate on coding projects or chat about gaming strategies.
          </p>
        </div>
        <div className="flex items-center gap-4 lg:w-1/2 mt-8 lg:mt-0 justify-end">
          <div className="flex items-center bg-gray-800 rounded-full p-3 pl-5 w-full lg:w-auto">
            <img src={user_icon} alt="User Icon" className="mr-4" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="bg-transparent text-gray-400 focus:outline-none w-full"
            />
          </div>
          <button
            onClick={handleSubscribe}
            className="w-40 py-3 bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform"
          >
            Subscribe
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <hr className="border-gray-600" />
      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-gray-400">
        <div className="flex gap-6">
          <p className="hover:text-[#DF8908] cursor-pointer">Terms of Services</p>
          <p className="hover:text-[#DF8908] cursor-pointer">Privacy Policy</p>
          <p className="hover:text-[#DF89008] cursor-pointer">Connect with me</p>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="flex flex-col lg:flex-row justify-center lg:justify-end gap-8 mt-4 text-white mb-4">
        <div className="flex items-center gap-2">
          <BiLogoGithub size={30} />
          <a href="https://github.com/kimotaku1" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-blue-500">
            github/kimotaku1
          </a>
        </div>
        <div className="flex items-center gap-2">
          <BiLogoInstagram size={30} />
          <a href="https://www.instagram.com/yahallo.02/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="hover:text-blue-500">
            instagram/yahallo.02
          </a>
        </div>
        <div className="flex items-center gap-2">
          <BiLogoLinkedin size={30} />
          <a href="https://www.linkedin.com/in/bibek-841246334/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-blue-500">
            linkedin/bibek
          </a>
        </div>
      </div>
      {/* Copyright Text */}
      <div className="text-gray-400 text-center">
        <p>&copy; 2024 Bibek Bhandari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;