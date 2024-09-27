import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Architectural Design',
    description: 'We create innovative and functional architectural designs tailored to your needs.',
    icon: '🏛️',
  },
  {
    title: 'Interior Design',
    description: 'Our team provides expert interior design solutions that enhance your space and lifestyle.',
    icon: '🛋️',
  },
  {
    title: 'Sustainable Solutions',
    description: 'We focus on sustainable practices and materials to minimize environmental impact.',
    icon: '♻️',
  },
  {
    title: 'Project Management',
    description: 'Expert project management services to ensure your project is completed on time and within budget.',
    icon: '📈',
  },
  {
    title: '3D Visualization',
    description: 'High-quality 3D visualizations to help you visualize your project before it’s built.',
    icon: '🖼️',
  },
  {
    title: 'Landscape Architecture',
    description: 'Designing outdoor spaces that harmonize with nature and enhance user experience.',
    icon: '🌳',
  },
  {
    title: 'Renovation Services',
    description: 'Transform your existing spaces with our expert renovation services.',
    icon: '🔨',
  },
  {
    title: 'Consultation Services',
    description: 'Personalized consultations to guide you through every step of the design process.',
    icon: '💬',
  },
];

const Ourservices = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="py-16 lg:px-24 px-4 mt-[93px] bg-base-300">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-semibold text-center mb-10"
      >
        Our Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl text-center mb-16 text-gray-700"
      >
        Discover the range of services we offer to bring your vision to life.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-16 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-5xl mb-4 text-center">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 text-center">{service.title}</h2>
            <p className="text-gray-700 text-center">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ourservices;
