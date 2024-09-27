import React from 'react';
import banner from './assets/banner2.jpg';

const Banner = () => {
  return (
    <div className="relative h-screen w-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3, // Lower image opacity for a darker effect
        }}
      ></div>
      <div className="flex flex-col items-center  h-full sm:px-10 bg-black bg-opacity-90"> {/* Darker overlay */}
        <div className='mt-[350px]'>
        <h1 className="text-white  ml-7 font-medium uppercase text-4xl md:text-5xl w-[75%]  lg:text-6xl fade-in leading-snug">
      Buildings too, are the children of Earth and Sun
    </h1>
    <div >
    <button className='fade-in ml-12 mt-10 text-yellow-100 hover:opacity-20 duration-300 font-thin border-white rounded-md px-9 py-3 bg-black opacity-50'>Contact us</button>

    </div>

        </div>
    
      </div>
      
     
    </div>
  );
};

export default Banner;
