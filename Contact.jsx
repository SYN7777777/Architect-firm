import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import archy from './src/assets/idris.jpeg';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[93px] py-16 px-6 md:px-24 gap-12 items-center justify-between bg-stone-950 p-8 md:p-16 rounded-lg shadow-lg">
      
      {/* Left Content (Image Section with Framer Motion) */}
      <motion.div
        className="w-full md:w-1/3 mt-8 md:mt-0"  // Reduced image width further
        initial={{ opacity: 0, x: -100 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }}    // Final animation state
        transition={{ duration: 0.8 }}     // Animation duration
      >
        <img
          src={archy}
          alt="Architect Idris"
          className="h-auto w-full object-cover rounded shadow-md"
        />
      </motion.div>

      {/* Right Content (Text Section with Framer Motion) */}
      <motion.div
        className="w-full md:w-2/3 text-center  md:text-left"
        initial={{ opacity: 0, y: 100 }}   // Initial animation state
        animate={{ opacity: 1, y: 0 }}     // Final animation state
        transition={{ duration: 0.8, delay: 0.3 }}  // Animation with a slight delay
      >
        <h1 className="text-4xl font-bold uppercase text-black mb-4 font-serif">
          Hello! I am Mohammed Idris
        </h1>
        <p className="text-lg text-gray-600 mb-6 font-thin leading-relaxed">
          IHello! I am Mohammed Idris, a passionate and innovative architect with a strong dedication to creating sustainable and functional designs. With over 5year of experience in architectural design and urban planning, I specialize in combining aesthetic appeal with practicality. My expertise spans across residential, commercial, and public projects, where I focus on integrating modern architectural trends with environmentally conscious solutions.
          <br />
          I believe architecture has the power to transform spaces and improve quality of life, and I am committed to bringing that vision to every project I work on. My design approach revolves around understanding the client’s needs, creating timeless designs, and ensuring seamless execution from concept to completion.
        </p>
        <div>
          <p className="text-gray-700 font-medium mb-2">Contact:</p>
          <p className="text-gray-600 font-semibold">Email:idrisdesign7@gmail.com</p>
          <p className="text-gray-600 font-thin">Phone: 014-6433155,011-26100766</p>
        </div>
      </motion.div>

    </div>
  );
};

export default Contact;
