import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import about from './assets/About.jpg'; // Image file
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='mt-[93px] py-16 lg:px-24 px-4 bg-base-300 gap-8'>
      {/* Container for flex items */}
      <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 sm:ml-2 md:w-full'>
        
        {/* Left side content */}
        <div className='md:w-5/6 w-full'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className='text-4xl md:text-5xl font-medium uppercase py-7'
          >
            About Us
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <p className='text-black font-thin text-xl md:text-2xl'>
              Welcome to <span>IDIRIS ARCHITECTS AND CONSTRUCTIONS</span>, where architecture meets artistry. Founded by IDRIS in 2020, our firm is dedicated to crafting innovative and sustainable designs that enhance the built environment and enrich the lives of those who inhabit it.
              <br /><br />
              At Idris Architects and Constructions, we believe that every project tells a story. We take a collaborative approach, working closely with clients to understand their vision and aspirations. Our team of experienced architects and designers blends creativity with technical expertise to deliver spaces that are not only aesthetically pleasing but also functional and sustainable.
              <br />
              Our portfolio spans a diverse range of projects, including residential, commercial, and public spaces. We are passionate about using sustainable materials and practices to minimize our ecological footprint while creating timeless designs that stand the test of time.
              <br />
              With a commitment to excellence and attention to detail, we aim to exceed expectations at every stage of the design process. Let us help you bring your vision to life.
              <br />
              Explore our work and discover how we can transform your ideas into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h4 className='text-2xl md:text-3xl mt-4 text-black font-medium uppercase'>
              Architecture is the art of creating spaces that breathe life
            </h4>
          </motion.div>
          <div>
            <Link to="/services">
            <button className='mt-10 py-4 px-9 rounded hover:bg-zinc-600 transition-all duration-500 bg-black uppercase text-white'>
              Explore Us
            </button>
            </Link>
          </div>
        </div>

        {/* Image section */}
        <div className='w-full md:w-1/2 mt-8 md:mt-0'>
          <img src={about} alt="About us" className='rounded w-full h-auto' />
        </div>
      </div>
    </div>
  );
};

export default About;
