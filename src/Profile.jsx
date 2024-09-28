import React from 'react';
import two from './assets/two.jpg';
import four from './assets/four.jpg';
import { motion } from 'framer-motion';

const Profile = () => {
    return (
      <div className='px-4 sm:px-24'>
        {/* First Row */}
        <div className='flex flex-col sm:flex-row gap-14'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }} 
            viewport={{ once: false }} 
          >
            <img src={two} alt="Description" className='max-w-full sm:max-w-2xl rounded' />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }} 
            viewport={{ once: false }} 
          >
            <h1 className='text-4xl sm:text-5xl text-black font-thin text-left uppercase mb-5'>What We Done</h1>
            <p className='font-thin'>
            At Idris Design and Construction, we specialize in delivering innovative and sustainable architectural solutions. Our services span across residential, commercial, and institutional projects, offering comprehensive design and construction management tailored to meet the unique needs of each client. We take pride in our ability to blend aesthetics with functionality, creating spaces that are not only visually striking but also efficient and environmentally conscious.            </p>
            <br />
            <p className='font-thin'>
           
            </p>
          </motion.div>
        </div>
        
        {/* Second Row */}
        <div className='flex flex-col sm:flex-row gap-14 mt-14'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }} 
            viewport={{ once: false }} 
          >
            <p className='font-thin'>
            From initial concept development to the final build, we collaborate closely with our clients to ensure every detail aligns with their vision. Whether it's designing modern homes, contemporary office spaces, or large-scale public facilities, our team brings creativity, precision, and a deep commitment to quality craftsmanship to every project. We strive to enhance urban landscapes while embracing sustainable practices, ensuring that each project contributes to a greener and more innovative future.
            
            </p>
            <br />
            <br />
            <p className='font-thin'>
            From initial concept development to the final build, we collaborate closely with our clients to ensure every detail aligns with their vision. Whether it's designing modern homes, contemporary office spaces, or large-scale public facilities, our team brings creativity, precision, and a deep commitment to quality craftsmanship to every project. We strive to enhance urban landscapes while embracing sustainable practices, ensuring that each project contributes to a greener and more innovative future.
            
            </p>
          
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }} 
            viewport={{ once: false }} 
          >
            <img src={four} alt="Description" className='max-w-full sm:max-w-3xl rounded' />
          </motion.div>
        </div>
      </div>
    );
}

export default Profile;
