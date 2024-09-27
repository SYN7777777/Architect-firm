import React from 'react';
import { motion } from 'framer-motion';
import design from './assets/design2.png';
import people from './assets/handshake.gif';
import secuity from './assets/security.png';

const Custom = () => {
  return (
    <div className='py-16 bg-base-200 lg:px-24 px-4'>
      <div className='text-center'>
        <h1 className='text-6xl font-thin'>WHY FM ARCHITECTS?</h1>
      </div>

      <div className='mt-16 flex-col md:flex-row px-40 flex gap-5 items-center justify-evenly'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img src={design} alt="" className='w-64 py-5' />
          <h1 className='text-4xl text-center sm:text-2xl font-semibold py-4'>Design Experts</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img src={people} alt="" className='w-64' />
          <h1 className='text-4xl font-semibold sm:text-2xl text-center py-4'>Happy Customers</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img src={secuity} alt="" className='w-64 py-2' />
          <h1 className='text-4xl font-semibold sm:text-2xl text-center py-4'>Security</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Custom;





