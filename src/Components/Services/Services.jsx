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
