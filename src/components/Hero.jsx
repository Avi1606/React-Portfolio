import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [typingText, setTypingText] = useState('')
  const fullText = 'Full Stack Developer'

  useEffect(() => {
    if (inView) {
      let i = 0
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypingText(fullText.slice(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
        }
      }, 100)
      return () => clearInterval(typingInterval)
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-lg text-primary-500 font-medium mb-3"
              variants={itemVariants}
            >
              Hello, I am a
            </motion.h2>
            
            <div className="typing-container mb-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight"
                variants={itemVariants}
              >
                {typingText}
                <span className="gradient-text"> {typingText === fullText ? '' : '|'}</span>
              </motion.h1>
            </div>

            <motion.p 
              className="text-gray-600 dark:text-gray-300 text-lg mb-8"
              variants={itemVariants}
            >
              Passionate about creating scalable web applications and solving complex problems with innovative solutions. I specialize in full-stack development with modern technologies.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-10"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="gradient-bg text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-code-slash mr-2"></i>View Projects
              </motion.a>
              
              <motion.a
                href="#contact"
                className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-chat-dots mr-2"></i>Contact Me
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex space-x-5"
              variants={itemVariants}
            >
              {[
                { href: "https://github.com/Avi1606", icon: "bi-github" },
                { href: "https://linkedin.com/in/aviiiprajapati", icon: "bi-linkedin" },
                { href: "mailto:aviiiprajapti16@gmail.com", icon: "bi-envelope-fill" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary-500 transition"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`bi ${social.icon}`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative w-72 h-72 md:w-96 md:h-96 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ 
                rotateY: 5, 
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-8xl gradient-text">
                  <i className="bi bi-code-square"></i>
                </span>
              </div>
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-primary-500 text-white p-4 rounded-full shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <i className="bi bi-braces text-2xl"></i>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-primary-500 text-white p-4 rounded-full shadow-lg"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <i className="bi bi-database-fill text-2xl"></i>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero