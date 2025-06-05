import { motion } from 'framer-motion'

const FloatingButtons = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      {/* Contact Floating Button */}
      <motion.a
        href="#contact"
        className="fixed right-20 bottom-20 w-12 h-12 rounded-full gradient-bg shadow-lg flex items-center justify-center z-50 text-white text-xl"
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
        className="fixed left-20 bottom-20 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center z-50 cursor-pointer border-2 border-gray-200 dark:border-slate-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
        title="Toggle dark/light mode"
      >
        <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'} text-xl text-gray-700 dark:text-gray-300`}></i>
      </motion.div>
    </>
  )
}

export default FloatingButtons