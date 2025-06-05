import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const educationData = [
    {
      institution: "Bennett University, Greater Noida",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      cgpa: "CGPA: 8.75/10.0",
      status: "Present",
      icon: "bi-mortarboard-fill"
    },
    {
      institution: "Shree Ram Vidyalaya",
      degree: "State Board of Higher Education",
      cgpa: "Percentage: 80.89%",
      status: "Completed",
      icon: "bi-book"
    },
    {
      institution: "Shree Ram Vidyalaya",
      degree: "State Board of Secondary Education",
      cgpa: "Percentage: 82.89%",
      status: "Completed",
      icon: "bi-book"
    }
  ]

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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Education</span> Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[20px] top-0 bottom-0 w-1 bg-primary-100 dark:bg-primary-900 rounded lg:ml-12"></div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="flex ml-3"
                  variants={itemVariants}
                >
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-lg z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <i className={`bi ${edu.icon} text-white`}></i>
                  </motion.div>
                  
                  <motion.div
                    className="ml-8 p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md custom-shadow hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {edu.degree}
                        </p>
                        <p className="text-blue-500 font-medium">
                          <i className="bi bi-star-fill mr-2 text-yellow-400"></i>
                          {edu.cgpa}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Present'
                            ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education