import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/Avi1606", icon: "bi-github" },
    { href: "https://linkedin.com/in/aviiiprajapati", icon: "bi-linkedin" },
    { href: "#", icon: "bi-twitter" },
    { href: "mailto:aviiiprajapti16@gmail.com", icon: "bi-envelope-fill" }
  ]

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <motion.h3
            className="text-2xl font-bold gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Avikumar
          </motion.h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`bi ${link.icon} text-xl`}></i>
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-slate-400">
              © 2025 Avikumar. All rights reserved. Last updated: 2025-06-05
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer