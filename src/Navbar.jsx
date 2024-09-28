import React, { useState, useEffect } from 'react';
import { PiBuildingsThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo4 from "./assets/logos.png";
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dropdownVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 shadow-lg transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-80 text-black' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo4} alt="" className='w-24' />
          <p className="ml-2 text-2xl font-semibold">IDRIS ARCHITECTS</p>
        </div>

        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown menu with Framer Motion */}
      <motion.div
        className="overflow-hidden w-full shadow-lg"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={dropdownVariants}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 py-6">
          <li>
            <Link
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } text-2xl font-semibold uppercase hover:text-gray-600 transition duration-150`}
              to="/"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } text-2xl font-semibold uppercase hover:text-gray-600 transition duration-150`}
              to="/about"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } text-2xl font-semibold uppercase hover:text-gray-600 transition duration-150`}
              to="/services"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } text-2xl font-semibold uppercase hover:text-gray-600 transition duration-150`}
              to="/projects"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } text-2xl font-semibold uppercase hover:text-gray-600 transition duration-150`}
              to="/contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919788898983" // Replace with your WhatsApp number
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-400 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </nav>
  );
};

export default Navbar;
