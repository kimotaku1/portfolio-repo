import React from 'react';
import profile_img2 from '../../assets/profile_img2.jpg';

const About = () => {
  return (
    <div id='about' className='flex flex-col items-start lg:items-center justify-center lg:gap-20 gap-10 mx-4 md:mx-10 lg:mx-40 my-20'>
      <div className="relative">
        <h1 className='px-4 md:px-8 text-4xl md:text-5xl font-semibold'>About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-1">
        <div className="lg:w-1/3 hidden lg:block">
          <img src={profile_img2} alt="Profile" className='w-[250px] h-[400px] rounded-lg' />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-10 mx-6">
          <div className='flex flex-col gap-5 text-lg font-medium'>
            <p>Hi, I'm Bibek Bhandari, a BIM student with a passion for web development and technology innovation. I'm focused on building dynamic, user-centric web applications using modern frameworks like React and Vite. I enjoy solving complex problems and am always eager to learn new technologies.</p>
            <p>I have experience working with both front-end and back-end technologies, and I’m constantly exploring how I can make a positive impact through tech. Currently, I’m working on a YouTube-like web app that enhances my skills in full-stack development.</p>
          </div>
          <div className="flex flex-col gap-5">
            {['HTML & CSS', 'React JS', 'JavaScript', 'Next JS'].map((skill, index) => (
              <div key={index} className="flex items-center">
                <p className='min-w-[150px] text-xl font-medium'>{skill}</p>
                <hr className={`h-2 rounded-full bg-gradient-to-r from-[#4B0082] to-[#8A2BE2]
                  ${index === 0 ? 'w-2/3' : index === 1 ? 'w-1/2' : index === 2 ? 'w-3/4' : 'w-1/2'} ml-4`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around w-full mb-20">
        <div className="flex flex-col items-center gap-2 hover:scale-110 transition-all">
          <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] bg-clip-text text-transparent'>2+</h1>
          <p className='text-lg font-medium'>YEARS OF EXPERIENCE</p>
        </div>
        {/* Vertical line using a div */}
        <div className='hidden lg:block w-1 border-l border-gray-300 h-20 mx-4'></div>
        <div className="flex flex-col items-center gap-2 hover:scale-110 transition-all">
          <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] bg-clip-text text-transparent'>10+</h1>
          <p className='text-lg font-medium'>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
