import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  // Animation variants
  const cardVariantLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const cardVariantRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="text-center"
        >
          <h1 className="font-medium text-6xl">HOW WE WORK</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 lg:px-16 py-16 bg-white">
          {/* Client Study + Site Study */}
          <motion.div
            variants={cardVariantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#76A09B] p-8 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-white text-2xl font-bold mb-6 tracking-wider">Client Study + Site Study</h2>
            <p className="text-white text-lg leading-7">
              We understand our client requirements, ideas, wishes, and goals. A detailed study of the site location, orientation, context, climatic conditions, and wind direction to create climate-responsive architecture.
            </p>
          </motion.div>

          {/* Space Planning */}
          <motion.div
            variants={cardVariantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#8A8A8A] p-8 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-white text-2xl font-bold mb-6 tracking-wider">Space Planning</h2>
            <p className="text-white text-lg leading-7">
              We listen to clients' feedback and interact with the client to fine-tune floor plans and spaces. We also prepare furniture drawings to understand the circulation spaces and landscape spaces.
            </p>
          </motion.div>

          {/* Exterior Design */}
          <motion.div
            variants={cardVariantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#76A09B] p-8 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-white text-2xl font-bold mb-6 tracking-wider">Exterior Design</h2>
            <p className="text-white text-lg leading-7">
              We focus on the exterior facade and work with windows, ventilators, and balcony positions to create unique elevation designs. We also prepare 3D photo-realistic views of buildings and spaces with material finishes.
            </p>
          </motion.div>

          {/* Construction Drawings */}
          <motion.div
            variants={cardVariantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#8A8A8A] p-8 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-white text-2xl font-bold mb-6 tracking-wider">Construction Drawings</h2>
            <p className="text-white text-lg leading-7">
              We prepare working drawings, structural designs, electrical plans, and plumbing layouts that are essential for construction.
            </p>
          </motion.div>

          {/* Concept + Scheme Design */}
          <motion.div
            variants={cardVariantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#EBAE97] p-8 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-white text-2xl font-bold mb-6 tracking-wider">Concept + Scheme Design</h2>
            <p className="text-white text-lg leading-7">
              Development of design concepts based on client requirements, including massing, zoning, and basic layout with initial site analysis and client vision.
            </p>
          </motion.div>

          {/* Finishes and Detailing */}
          <motion.div
            variants={cardVariantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#EBAE97] p-8 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-white text-2xl font-bold mb-6 tracking-wider">Finishes and Detailing</h2>
            <p className="text-white text-lg leading-7">
              Selection of materials and finishes that meet the aesthetic and functional requirements of the project, along with intricate detailing of design elements.
            </p>
          </motion.div>

          {/* Cost Control */}
          <motion.div
            variants={cardVariantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#76A09B] p-8 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-white text-2xl font-bold mb-6 tracking-wider">Cost Control</h2>
            <p className="text-white text-lg leading-7">
              Preparation of Bill of Quantities (BOQ) and project budget forecasts. We identify material suppliers and select vendors that fit the project’s budget and requirements.
            </p>
          </motion.div>

          {/* Team Organising */}
          <motion.div
            variants={cardVariantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#8A8A8A] p-8 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-white text-2xl font-bold mb-6 tracking-wider">Team Organising</h2>
            <p className="text-white text-lg leading-7">
              Identifying qualified professionals needed to execute the project and ensuring smooth coordination among all team members for efficient project delivery.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
