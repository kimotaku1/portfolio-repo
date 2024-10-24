import React from "react";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { BiCode, BiLogoGithub } from "react-icons/bi";

const MyWork = () => {
  return (
    <div
      id="project"
      className="flex flex-col items-start lg:items-center justify-center gap-10 lg:gap-20 mx-4 md:mx-20 lg:mx-40 my-20"
    >
      <div className="relative">
        <h1 className="text-4xl md:text-5xl font-medium px-8 text-start">
          My Latest Work
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mx-5">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-4 p-6 sm:p-8 md:p-10 border-2 border-white rounded-lg transition-all hover:scale-105 hover:border-purple-300 hover:bg-gradient-to-r from-[#4B0082] to-[#8A2BE2]"
          >
            <img
              src={work.w_img}
              alt={`Work ${index + 1}`} // Descriptive alt text
              className="w-full h-auto rounded-lg max-w-[410px] transition-transform hover:scale-105 hover:border-2 hover:border-purple-500 hover:rounded-lg"
            />
            <h2 className="text-xl">{work.w_name}</h2>
            <p className="text-gray-400">{work.w_description}</p>
            <div className="flex-row w-2/4 justify-center items-center gap-2 border-2 border-solid px-5 py-3 rounded-full transition-all hover:scale-105 text-center">
              <a
                href={work.w_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Link"
                className="flex flex-row"
              >
                <BiCode size={25} />
                <span className="text-center">Github</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 border-2 border-white rounded-full px-6 py-4 font-medium text-base cursor-pointer transition-all hover:gap-6 hover:bg-gray-800 mx-8">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow pointing right" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default MyWork;
