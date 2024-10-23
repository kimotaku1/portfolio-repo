import React from 'react';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='flex flex-col items-center justify-center gap-20 mx-4 md:mx-20 lg:mx-40 my-20'>
      <div className="relative">
        <h1 className='text-5xl font-medium px-8 text-center'>My Latest Work</h1>
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
