import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Image URLs
const images = [
  'https://cdn.pixabay.com/photo/2019/10/26/11/01/evening-4579176_1280.jpg',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1350&q=80',
  'https://cdn.pixabay.com/photo/2019/01/13/11/49/iceland-3930162_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/08/31/11/18/kitchen-9011264_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/07/15/11/55/bedroom-8896574_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/05/25/08/03/glass-facade-8016589_1280.jpg'
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence>
        {images.map((image, index) => (
          index === currentImageIndex && (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} // Smooth fade transition for images
            />
          )
        ))}
      </AnimatePresence>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold uppercase mb-4 transition-transform duration-500 ease-in-out"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 50 }} 
          transition={{ duration: 0.5 }}
        >
          Welcome to Modern Architecture
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 transition-transform duration-500 ease-in-out"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 20 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We design your dreams
        </motion.p>
        <Link to="/projects">
        <motion.button 
          className="bg-white text-black px-6 py-3 font-semibold rounded-md transition duration-300 hover:bg-gray-200"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 30 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Started
        </motion.button>
        </Link>

      </div>
    </div>
  );
};

export default Header;
