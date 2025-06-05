import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const featuredProjects = [
    {
      title: "Journal Application",
      description: "A scalable backend application using Java and Spring Boot, implementing secure user authentication and authorization with JWT. The application features robust data management and caching mechanisms.",
      technologies: ["Spring Boot", "MongoDB", "Redis", "JWT"],
      githubUrl: "https://github.com/Avi1606/Journal-Appplication-Rest-API",
      icon: "bi-journal-text",
      gradient: "from-primary-500 to-primary-700"
    },
    {
      title: "NetflixGPT",
      description: "A React application that revolutionizes movie discovery through AI-powered search. Built with Redux for state management and Firebase authentication for secure user access.",
      technologies: ["React", "Redux", "Firebase", "OpenAI API"],
      githubUrl: "https://github.com/Avi1606/netflix-gpt.git",
      demoUrl: "https://netflix-gpt-seven-alpha.vercel.app/",
      icon: "bi-film",
      gradient: "from-primary-500 to-primary-700"
    },
    {
      title: "YouTube Clone",
      description: "Advanced React application showcasing optimization techniques including search debouncing and result caching for improved performance. Features real-time video streaming and interactive UI.",
      technologies: ["React", "Redux", "Tailwind CSS", "API Integration"],
      githubUrl: "https://github.com/Avi1606/YouTube.git",
      demoUrl: "https://youtube-nine-khaki.vercel.app/",
      icon: "bi-youtube",
      gradient: "from-primary-600 to-primary-800"
    },
    {
      title: "Banking Application",
      description: "Built a basic Banking website using Spring Boot and MySQL. Verified RESTful APIs using Postman for robust functionality. Currently enhancing security features.",
      technologies: ["Spring Boot", "MySQL", "RESTful API", "Postman"],
      githubUrl: "https://github.com/Avi1606",
      icon: "bi-bank",
      gradient: "from-primary-700 to-primary-500"
    },
    {
      title: "Quick-News",
      description: "Cross-platform mobile application built with React Native featuring state management, navigation, API integration, and responsive UI components for seamless news browsing experience.",
      technologies: ["React Native", "Redux", "API Integration", "Mobile UI"],
      githubUrl: "https://github.com/Avi1606",
      icon: "bi-phone",
      gradient: "from-primary-600 to-primary-800"
    },
    {
      title: "VoteLogic",
      description: "Developed VoteLogic, an interactive web platform enabling users to rate political leaders, report local issues, and access government schemes, fostering civic engagement.",
      technologies: ["JavaScript", "HTML/CSS", "UI/UX"],
      githubUrl: "https://github.com/Avi1606",
      demoUrl: "https://avi1606.github.io/VoteLogic/",
      icon: "bi-check2-square",
      gradient: "from-primary-800 to-primary-600"
    }
  ]

  const otherProjects = [
    {
      title: "Student Style",
      description: "A dynamic Trend Recommendation Application integrating Sorting and Priority Queue algorithms.",
      icon: "bi-award"
    },
    {
      title: "Intra",
      description: "A front-end website for house interior design using HTML and CSS.",
      icon: "bi-house-door"
    },
    {
      title: "Spring Boot Basic",
      description: "A foundational Spring Boot project showcasing core framework capabilities.",
      icon: "bi-code-square"
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-md custom-shadow hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, rotateY: 2 }}
            >
              <div className={`h-56 bg-gradient-to-r ${project.gradient} p-6 flex items-end`}>
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg inline-block">
                  <i className={`bi ${project.icon} text-4xl text-primary-600`}></i>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="bi bi-github mr-2"></i> View Source
                  </motion.a>
                  
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-box-arrow-up-right mr-2"></i> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-700 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-slate-600 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <h4 className="font-medium flex items-center text-gray-900 dark:text-white">
                  <i className={`bi ${project.icon} text-primary-500 mr-2`}></i>
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects