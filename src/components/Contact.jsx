import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { submitContactForm } from '../utils/firebase'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [showValidationPopup, setShowValidationPopup] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const validateForm = () => {
    const errors = []

    if (formData.name.trim() === '') {
      errors.push('Name is required')
    }

    if (formData.email.trim() === '') {
      errors.push('Email is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Email is not valid')
    }

    if (formData.message.trim() === '') {
      errors.push('Message is required')
    } else if (formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters')
    }

    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate the form
    const errors = validateForm()
    if (errors.length > 0) {
      setValidationErrors(errors)
      setShowValidationPopup(true)
      return
    }

    setIsSubmitting(true)

    try {
      await submitContactForm(formData)
      setShowSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setShowError(true)
      setErrorMessage(error.message || 'Sorry, there was an error sending your message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: "bi-envelope",
      title: "Email",
      content: "aviiiprajapti16@gmail.com",
      href: "mailto:aviiiprajapti16@gmail.com"
    },
    {
      icon: "bi-geo-alt",
      title: "Location",
      content: "Greater Noida, India"
    },
    {
      icon: "bi-linkedin",
      title: "LinkedIn",
      content: "linkedin.com/in/aviiiprajapati",
      href: "https://linkedin.com/in/aviiiprajapati"
    },
    {
      icon: "bi-github",
      title: "GitHub",
      content: "github.com/Avi1606",
      href: "https://github.com/Avi1606"
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
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out if you have any questions or if you'd like to collaborate on a project.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <i className={`bi ${info.icon} text-white text-xl`}></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-slate-700 p-8 rounded-xl shadow-md space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition resize-none"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full gradient-bg text-white font-medium px-6 py-3 rounded-lg transition flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="bi bi-send mr-2"></i> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowSuccess(false)}></div>
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-md mx-auto z-10 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                <i className="bi bi-check-lg text-green-600 dark:text-green-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Thank you for your message! I will get back to you soon.</p>
              <div className="mt-5">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="gradient-bg text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Error Popup */}
      {showError && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowError(false)}></div>
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-md mx-auto z-10 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
                <i className="bi bi-exclamation-triangle text-red-600 dark:text-red-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Error</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{errorMessage}</p>
              <div className="mt-5">
                <button
                  onClick={() => setShowError(false)}
                  className="gradient-bg text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Validation Error Popup */}
      <AnimatePresence>
        {showValidationPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowValidationPopup(false)}></div>
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-md mx-auto z-10 shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
                  <i className="bi bi-exclamation-octagon text-red-600 dark:text-red-400 text-xl"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Validation Errors</h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc list-inside mb-4">
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <button
                    onClick={() => setShowValidationPopup(false)}
                    className="gradient-bg text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact