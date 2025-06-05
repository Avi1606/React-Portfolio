import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const skillCategories = [
    {
      title: "Programming",
      icon: "bi-code-slash",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "bi-globe",
      skills: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Docker*", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
      ]
    },
    {
      title: "Database",
      icon: "bi-database",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "bi-tools",
      skills: [
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
        { name: "Postman*", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md custom-shadow hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl text-primary-500 mr-3">
                  <i className={`bi ${category.icon}`}></i>
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-2 rounded-full transition-all duration-300 hover:bg-primary-200 dark:hover:bg-primary-800/50"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-5 h-5 mr-2"
                      style={{ 
                        backgroundColor: skill.name === 'Express.js' || skill.name === 'GitHub' ? 'white' : 'transparent',
                        borderRadius: skill.name === 'Express.js' || skill.name === 'GitHub' ? '3px' : '0'
                      }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p
          className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          * Elementary proficiency
        </motion.p>
      </div>
    </section>
  )
}

export default Skills