import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample project data with detailed content
const projectsData = [
  {
    title: 'Modern Villa',
    description: 'A stunning modern villa designed for luxury and comfort, featuring an open floor plan, natural light, and sustainable materials.',
    image: 'https://imperiobanus.com/wp/wp-content/uploads/2018/04/1-1.jpg',
    details: 'This villa incorporates modern architecture principles with expansive glass walls that create a seamless connection between indoor and outdoor spaces. The use of eco-friendly materials ensures that the home is as sustainable as it is beautiful.',
  },
  {
    title: 'Urban Park',
    description: 'An urban park that enhances community spaces and greenery, featuring walking trails and recreational areas.',
    image: 'https://www.lifeberrys.com/img/article/lumbi-1603353155-lb.jpg',
    details: 'Designed to revitalize the urban landscape, this park includes native plantings, playgrounds, and open spaces for community events, promoting a healthy lifestyle and community engagement.',
  },
  {
    title: 'Office Complex',
    description: 'A modern office complex designed for productivity and collaboration, featuring flexible workspaces and eco-friendly technologies.',
    image: 'https://images.adsttc.com/media/images/63d2/96c7/760d/d225/d226/f3cf/slideshow/icone-collaborative-office-complex-foster-plus-partners_1.jpg?1674745651',
    details: 'This office complex emphasizes open collaboration while providing quiet spaces for focused work. Sustainable design practices and energy-efficient systems were used throughout to reduce the building\'s carbon footprint.',
  },
  {
    title: 'Sustainable House',
    description: 'A sustainable house that utilizes eco-friendly materials and innovative design for energy efficiency.',
    image: 'https://cdn.habitusliving.com/wp-content/uploads/01_SustainableHouseGardinerArchitectsccTessKelly_rearextension.jpg',
    details: 'This residence is built with renewable resources and features solar panels, rainwater harvesting, and passive heating techniques, showcasing how beautiful design can work hand-in-hand with sustainability.',
  },
  {
    title: 'Cultural Center',
    description: 'A cultural center promoting art and community engagement, featuring galleries and event spaces.',
    image: 'https://images.adsttc.com/media/images/50a6/a875/b3fc/4b2f/c000/00ca/large_jpg/NVR_photo_10.jpg?1414084404',
    details: 'The cultural center serves as a hub for the arts, providing exhibition spaces, studios, and auditoriums for performances. Its design encourages community participation and celebrates local culture.',
  },
  {
    title: 'Luxury Hotel',
    description: 'A luxury hotel with exquisite designs and amenities, featuring breathtaking views and premium services.',
    image: 'https://lp-cms-production.imgix.net/news/2017/10/34884794003_79b7caebee_k-e1509108009678.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=23&dpr=4',
    details: 'This hotel offers an unparalleled guest experience with its state-of-the-art facilities, spa services, and fine dining options. Every detail, from the architecture to the interior design, is crafted for elegance and comfort.',
  },
  {
    title: 'Residential Tower',
    description: 'A modern residential tower with breathtaking views and innovative living solutions.',
    image: 'https://th.bing.com/th/id/OIP.E-pajhYJNtpn1p18m6RUvwHaEo?rs=1&pid=ImgDetMain',
    details: 'Designed with urban living in mind, this tower features luxury apartments with floor-to-ceiling windows, rooftop gardens, and communal spaces that foster community interaction.',
  },
  {
    title: 'Beach Resort',
    description: 'A beach resort designed for relaxation and leisure, featuring stunning ocean views and elegant architecture.',
    image: 'https://images.rosewoodhotels.com/is/image/rwhg/heroshot-punta-bonita-pool-and-beach-1',
    details: 'This resort seamlessly integrates with the coastal environment, offering private villas, infinity pools, and open-air dining. It provides a tranquil escape for guests looking to unwind by the sea.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="py-16 lg:px-24 px-4 mt-[93px] bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-semibold text-center mb-10"
      >
        Our Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl text-center mb-16 text-gray-700"
      >
        Explore some of our recent projects showcasing our architectural expertise.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side Content */}
        <div className="md:w-1/3 flex flex-col justify-start gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleProjectClick(project)}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side Image and Description */}
        <div className="md:w-2/3 flex flex-col items-center">
          <motion.img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-fit object-cover rounded-lg transition-all duration-500" // Increased height
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="bg-white p-4 mt-4 rounded-lg shadow-md w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold">{selectedProject.title}</h3>
            <p className="text-gray-700 mt-8 ">{selectedProject.details}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
