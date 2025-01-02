import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, CircleUserRound } from 'lucide-react';
import { motion } from 'framer-motion';



const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="relative bg-gradient-to-br from-indigo-500 via-blue-500 to-teal-500 text-white py-8">
      {/* Background Gradient */}
      <div className="absolute  bg-gradient-to-br from-indigo-400 via-blue-300 to-teal-200 opacity-30 animate-pulse"></div>

      <div className="container mx-auto flex justify-between items-center px-8 relative z-10">
        {/* Logo and Title */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          
          <motion.img src={""} alt="Description of the image"
            className="w-35 h-50 object-cover rounded-lg transition-colors"
            onClick={() => handleNavigation('/')}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
           
          </motion.img>
        </motion.div>

        {/* Navigation Bar */}
        {/* <nav className="hidden md:flex space-x-12 text-lg font-medium">
          <motion.a
            onClick={() => handleNavigation('/')}
            className="relative text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Home
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 transform scale-x-0 origin-left hover:scale-x-100 transition-transform duration-300"
            />
          </motion.a>
          <motion.a
            onClick={() => handleNavigation('/contests')}
            className="relative text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Contests
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 transform scale-x-0 origin-left hover:scale-x-100 transition-transform duration-300"
            />
          </motion.a>
          <motion.a
            onClick={() => handleNavigation('/create-contest')}
            className="relative text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Create Contest
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 transform scale-x-0 origin-left hover:scale-x-100 transition-transform duration-300"
            />
          </motion.a>
          <motion.a
            onClick={() => handleNavigation('/about')}
            className="relative text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            About Us
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 transform scale-x-0 origin-left hover:scale-x-100 transition-transform duration-300"
            />
          </motion.a>
        </nav> */}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-200"
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => handleNavigation('/profile')}
          className="bg-teal-500 text-white w-12 h-12 ml-0 flex items-center justify-center font-semibold shadow-xl transform hover:scale-105 transition-all hover:bg-teal-600 rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <CircleUserRound />
        </motion.button>
      </div> 

      {/* Hero Section */}
      <div className="text-center mt-4">
        <motion.h2
          className="text-5xl font-bold text-white mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, delay: 0.5 }}
        >
          Design Your Future
        </motion.h2>
        <motion.p
          className="text-2xl text-gray-200 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, delay: 1 }}
        >
          Unleash your creativity and solve exciting challenges with CAPZERO. Join now!
        </motion.p>
        <motion.button
          onClick={() => handleNavigation('/contests')}
          className="bg-teal-600 text-white py-3 px-8 rounded-full text-lg font-semibold transform hover:scale-105 transition-all hover:bg-teal-700"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1.2 }}
        >
          Explore Contests
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
