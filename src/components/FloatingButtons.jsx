import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingButtons = ({ darkMode, toggleDarkMode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Control visibility of scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Contact Floating Button */}
      <motion.a
        href="#contact"
        className="fixed right-5 md:right-20 bottom-20 w-12 h-12 rounded-full gradient-bg shadow-lg flex items-center justify-center z-50 text-white text-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        title="Contact me"
      >
        <i className="bi bi-envelope-fill"></i>
      </motion.a>

      {/* Theme Toggle Button */}
      <motion.div
        onClick={toggleDarkMode}
        className="fixed left-5 md:left-20 bottom-20 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center z-50 cursor-pointer border-2 border-gray-200 dark:border-slate-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
        title="Toggle dark/light mode"
      >
        <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'} text-xl text-gray-700 dark:text-gray-300`}></i>
      </motion.div>
      
      {/* Scroll to Top Button */}
      <motion.div
        onClick={scrollToTop}
        className={`fixed right-5 md:right-20 bottom-36 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center z-50 cursor-pointer border-2 border-gray-200 dark:border-slate-600 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        title="Scroll to top"
      >
        <i className="bi bi-arrow-up text-xl text-gray-700 dark:text-gray-300"></i>
      </motion.div>
    </>
  )
}

export default FloatingButtons
