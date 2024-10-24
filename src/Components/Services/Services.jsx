import React from "react";
import checkmarkIcon from "../../assets/checkmark.png"; // Import checkmark icon

const Services = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-start lg:items-center lg:gap-20 justify-center gap-10 mx-10 md:mx-10 lg:mx-40 my-10"
    >
      <div className="flex flex-col">
        <p className="text-lg lg:text-xl font-semibold text-gray-500 text-center">Explore My</p>
        <h1 className="text-4xl lg:text-5xl font-bold">Experience</h1>
      </div>
      <section id="experience" className="relative w-full">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Frontend Development */}
            <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-50 p-10 px-20 rounded-3xl">
              <h2 className="text-gray-300 font-semibold text-xl lg:text-3xl mb-6 text-center">
                Frontend Development
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-20">
                {['HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'Material UI'].map((tech, index) => (
                  <article key={index} className="flex items-center gap-2 p-2 rounded-md shadow-md">
                    <img
                      src={checkmarkIcon}
                      alt="Experience icon"
                      className="w-8 h-8 cursor-default"
                    />
                    <div className="text-left">
                      <h3 className="text-lg lg:text-xl">{tech}</h3>
                      <p className="text-base lg:text-base text-gray-400">{index < 2 ? 'Experienced' : index < 4 ? 'Intermediate' : 'Basic'}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Backend Development */}
            <div className="flex flex-col items-center border-solid border-2 border-gray-50 p-10 px-20 rounded-3xl">
              <h2 className="text-gray-300 font-semibold text-xl lg:text-3xl mb-6 text-center">
                Backend Development
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-20">
                {['PostgreSQL', 'Node JS', 'Express JS', 'Git'].map((tech, index) => (
                  <article key={index} className="flex items-center gap-2 p-2 rounded-md shadow-md">
                    <img
                      src={checkmarkIcon}
                      alt="Experience icon"
                      className="w-8 h-8 cursor-default"
                    />
                    <div className="text-left">
                      <h3 className="text-lg lg:text-xl">{tech}</h3>
                      <p className="text-base lg:text-base text-gray-400">{index < 2 ? 'Intermediate' : 'Basic'}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
