import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-black  text-gray-300 py-16">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">IDRIS DESIGN AND CONSTRUCTION</h3>
          <p className="mb-4 leading-relaxed">
            We strive to deliver top-notch services with quality and reliability. Our dedicated team is here to help you.
          </p>
          <p className="text-sm">&copy; 2024 IDRIS DESIGN AND CONSTRUCTION. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link  className="hover:text-indigo-400 transition-all duration-300 ease-in-out ">
              About Us
              </Link> 
    
    
            </li>
          
            <li>
              <Link to="/projects" className="hover:text-indigo-400 transition-all duration-300 ease-in-out ">
              projects
              </Link> 
    
    
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition-all duration-300 ease-in-out ">
              services
              </Link> 
    
    
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 transition-all duration-300 ease-in-out ">
              contact us
              </Link> 
    
    
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">Subscribe to our Newsletter</h3>
          <p className="mb-4 leading-relaxed">
            Stay updated with the latest news and offers from our company.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-12 flex justify-center space-x-6 text-gray-400">
        <a href="https://instagram.com/mohamedidri_s" className="hover:text-indigo-400 transition-all duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M24 4.56v14.88c0 2.51-2.03 4.56-4.56 4.56H4.56C2.05 24 0 21.95 0 19.44V4.56C0 2.05 2.05 0 4.56 0h14.88C21.95 0 24 2.05 24 4.56zM9.49 19.56v-8.13h-2.66V8.44h2.66V6.56c0-2.31 1.42-3.56 3.5-3.56.99 0 1.84.07 2.09.1v2.43h-1.43c-1.13 0-1.35.54-1.35 1.32v1.73h2.71l-.36 2.99h-2.35v8.13H9.49z"/>
          </svg>
        </a>
        <a href="#" className="hover:text-indigo-400 transition-all duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M12 2.04c-5.52 0-9.96 4.48-9.96 9.96 0 5.52 4.48 9.96 9.96 9.96s9.96-4.48 9.96-9.96c0-5.52-4.48-9.96-9.96-9.96zm4.52 9.35c.01.13.01.26.01.39 0 3.99-3.03 8.6-8.58 8.6-1.7 0-3.28-.5-4.61-1.35.23.03.46.05.69.05 1.42 0 2.73-.49 3.77-1.33-1.33-.02-2.46-.91-2.85-2.13.19.04.37.06.57.06.27 0 .53-.03.77-.1-1.39-.28-2.42-1.52-2.42-3.01v-.04c.41.23.89.37 1.4.39-1.02-.68-1.68-1.83-1.68-3.13 0-.69.18-1.35.5-1.91 1.82 2.24 4.53 3.72 7.6 3.88-.06-.28-.1-.58-.1-.88 0-2.15 1.75-3.9 3.9-3.9 1.12 0 2.13.47 2.84 1.23.89-.18 1.73-.5 2.48-.95-.29.9-.91 1.65-1.72 2.13.79-.1 1.54-.31 2.24-.63-.53.78-1.2 1.46-1.97 2.01z"/>
          </svg>
        </a>
        <a href="#" className="hover:text-indigo-400 transition-all duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M24 2.56c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.57 2.17-2.73-.95.57-2.01.98-3.13 1.2-.9-.96-2.18-1.55-3.59-1.55-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.12 1.13C7.69 8.09 4.07 6.13 1.64 3.16c-.42.72-.66 1.55-.66 2.44 0 1.68.86 3.16 2.18 4.03-.8-.03-1.55-.25-2.21-.61v.06c0 2.34 1.67 4.29 3.89 4.74-.41.11-.83.17-1.27.17-.31 0-.61-.03-.91-.09.61 1.9 2.37 3.28 4.46 3.32-1.63 1.28-3.68 2.04-5.91 2.04-.38 0-.76-.02-1.14-.07 2.1 1.35 4.59 2.14 7.27 2.14 8.73 0 13.51-7.24 13.51-13.51v-.62c.92-.66 1.71-1.49 2.34-2.43z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
