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
        <span className="bg-gradient-to-r from-yellow-500 via-purple-500 to-purple-700 bg-clip-text text-transparent">
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
        <div className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-purple-700 cursor-pointer">
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