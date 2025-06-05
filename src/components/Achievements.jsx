import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Achievements = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const achievements = [
    {
      title: "EY CAFTA Case Championship",
      description: "Secured 2nd Rank in EY CAFTA Case Championship Mega Edition 2024 (Round 1) and 4th rank in Final Round.",
      icon: "bi-trophy",
      badge: { text: "2nd Place", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400" }
    },
    {
      title: "Conference Paper Acceptance",
      description: '"Student Style" accepted at ICRAET-2024 on 06th Jun 2024 at Munnar, India.',
      icon: "bi-journal-richtext",
      badge: { text: "Published", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" }
    },
    {
      title: "Innovation Awards",
      description: "Recognized for innovation with two state-level and one national-level Science Exhibition awards held at IIT-DELHI, showcasing real-life problem-solving and technical expertise.",
      icon: "bi-lightbulb",
      badges: [
        { text: "National Award", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
        { text: "State Awards (2)", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400" }
      ]
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
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Achievements</span> & Awards
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md custom-shadow hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute -top-4 -right-4 w-14 h-14 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <i className={`bi ${achievement.icon} text-2xl`}></i>
              </motion.div>
              
              <h3 className="text-2xl font-semibold mb-2 pr-12 text-gray-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {achievement.description}
              </p>
              
              <div className="flex items-center space-x-3 flex-wrap gap-2">
                {achievement.badge && (
                  <span className={`px-3 py-1 rounded-full text-sm flex items-center ${achievement.badge.color}`}>
                    <i className="bi bi-star-fill mr-1"></i> {achievement.badge.text}
                  </span>
                )}
                {achievement.badges && achievement.badges.map((badge, badgeIndex) => (
                  <span key={badgeIndex} className={`px-3 py-1 rounded-full text-sm flex items-center ${badge.color}`}>
                    <i className="bi bi-award-fill mr-1"></i> {badge.text}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements