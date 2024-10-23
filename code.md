<!-- navbar.jsx -->
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 lg:px-40 py-6">
      <img src={logo} alt="logo" className="h-14" />

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
          menuOpen ? 'right-0' : '-right-full'
        } fixed top-0 w-[300px] h-full bg-gray-800 flex flex-col items-end gap-6 px-8 py-20 transition-transform duration-500 lg:flex lg:flex-row lg:relative lg:right-auto lg:w-auto lg:h-auto lg:gap-12 lg:px-0 lg:py-0 lg:bg-transparent`}
      >
        {['home', 'about', 'services', 'work', 'contact'].map(item => (
          <li key={item} className="relative w-full">
            <AnchorLink
              href={`#${item}`}
              offset={50}
              className="text-white text-lg lg:text-base transition-colors duration-300 hover:text-purple-400 w-full text-right" 
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

      {/* Connect With Me Button */}
      {!menuOpen && ( // Render the button only if the menu is not open
        <div className="hidden lg:block w-44 py-3 bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform text-center">
          <AnchorLink href="#contact" offset={50} className="text-white text-lg">
            Connect With Me
          </AnchorLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

<!--hero.jsx -->
import React from "react";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="flex flex-col items-center gap-6 md:gap-9 px-4">
      <img
        src={profile_img}
        alt="Profile"
        className="w-32 h-32 md:w-64 md:h-64 lg:mt-24 mt-14 rounded-full"
      />
      <h1 className="text-center text-4xl md:text-6xl font-semibold">
        <span className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
          I'm Bibek Bhandari,
        </span>{" "}
        front-end developer.
      </h1>
      <p className="text-center w-full md:w-2/4 text-lg leading-8">
        I am a front-end developer with 2 years of experience using React and
        NodeJS. I am passionate about using technology to solve real-world
        problems and aim to become a full-stack developer. Reach out if you'd
        like to learn more!
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6 text-lg font-medium mb-12">
        <div className="w-44 py-3 bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform text-center">
          <AnchorLink className="text-white" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="px-8 py-3 rounded-full border-2 border-white cursor-pointer hover:border-purple-500 transition-colors duration-300">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;

<!--service.jsx-->
import React from 'react';
import Services_Data from '../../assets/services_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className='flex flex-col items-start lg:items-center lg:gap-20 justify-center gap-10 mx-4 md:mx-10 lg:mx-40 my-20'>
      <div className="relative">
        <h1 className='px-4 md:px-8 text-4xl md:text-5xl font-medium'>My Services</h1>
      </div>
      {/* Adjusted grid configuration */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-9 mb-20">
        {Services_Data.map((service, index) => (
          <div key={index} className='flex flex-col justify-center gap-4 p-6 sm:p-8 md:p-10 border-2 border-white rounded-lg transition-all cursor-pointer hover:scale-105 hover:border-purple-500 hover:bg-gradient-to-br from-purple-900 via-red-800 to-yellow-900'>
            <h3 className='text-xl font-semibold'>{service.s_no}</h3>
            <h2 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>{service.s_name}</h2>
            <p className='text-gray-400 text-base md:text-lg leading-6 md:leading-8 max-w-[300px]'>{service.s_desc}</p>
            <div className="flex items-center gap-3 mt-4">
              <p className='text-base md:text-lg'>Read More</p>
              <img src={arrow_icon} alt="Arrow" className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

<!-- mywork.jsx -->
import React from 'react';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='flex flex-col items-start lg:items-center justify-center gap-10 lg:gap-20 mx-4 md:mx-20 lg:mx-40 my-20'>
      <div className="relative">
        <h1 className='text-5xl font-medium px-8 text-start'>My Latest Work</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt={`Work ${index + 1}`} // More descriptive alt text
            className='w-full h-auto max-w-[410px] cursor-pointer transition-transform hover:scale-110 hover:border-4 hover:border-purple-500 hover:rounded-lg'
          />
        ))}
      </div>
      <div className="flex items-center gap-4 border-2 border-white rounded-full px-6 py-4 font-medium text-lg cursor-pointer transition-all hover:gap-6 hover:bg-gray-800">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow pointing right" className='w-4 h-4' /> {/* Ensure arrow size is consistent */}
      </div>
    </div>
  );
};

export default MyWork;

<!-- contact.jsx -->
import React from "react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0d0817fe-fb5a-462a-922d-049db623bdd0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-10 lg:gap-20 mx-40 my-20"
    >
      <div className="relative">
        <h1 className="text-5xl font-semibold px-6 w-80">Get in touch</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-24">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-transparent bg-clip-text">
            Let's talk
          </h1>
          <p className="max-w-lg text-gray-300 text-lg leading-relaxed">
            I’m always excited to work on new projects, whether it’s building a
            dynamic web app or exploring new tech innovations. If you’re looking
            for a passionate developer to collaborate with, or if you just want
            to talk about coding or gaming, feel free to reach out!
          </p>
          <div className="flex flex-col gap-8 text-gray-300 text-xl">
            <div className="flex items-center gap-4">
              <img src={mail_icon} alt="Email" className="w-6 h-6" />
              <p>narutobibek000@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call_icon} alt="Call" className="w-6 h-6" />
              <p>9810121270</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="Location" className="w-6 h-6" />
              <p>Sunakothi, Lalitpur</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <label className="text-gray-300 text-lg font-medium">Your Name</label>
          <input
            type="text" required="true"
            placeholder="Enter your name"
            name="name"
            className="w-full md:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
          />
          <label className="text-gray-300 text-lg font-medium">
            Your Email
          </label>
          <input
            type="email" required="true"
            placeholder="Enter your email"
            name="email"
            className="w-full md:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
          />
          <label className="text-gray-300 text-lg font-medium">
            Write your message here
          </label>
          <textarea
            name="message" required="true"
            rows="8"
            placeholder="Enter your message"
            className="w-full md:w-[650px] p-6 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-48 py-3 bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

<!-- footer.jsx -->
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

<!-- app.jsx -->
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './index.css';  // Assuming this file contains Tailwind directives


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App