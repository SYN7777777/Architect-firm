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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae at accusantium voluptatum necessitatibus modi id ab commodi quia nisi voluptas quae, obcaecati, impedit quas alias velit maxime quaerat saepe.
            </p>
            <br />
            <p className='font-thin'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae at accusantium voluptatum necessitatibus modi id ab commodi quia nisi voluptas quae, obcaecati, impedit quas alias velit maxime quaerat saepe.
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
            <h1 className='text-4xl sm:text-5xl text-black font-thin text-left uppercase mb-5'>What We Done</h1>
            <p className='font-thin'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae at accusantium voluptatum necessitatibus modi id ab commodi quia nisi voluptas quae, obcaecati, impedit quas alias velit maxime quaerat saepe.
            </p>
            <br />
            <p className='font-thin'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae at accusantium voluptatum necessitatibus modi id ab commodi quia nisi voluptas quae, obcaecati, impedit quas alias velit maxime quaerat saepe.
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
