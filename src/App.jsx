import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import { initializeFirebase } from './utils/firebase'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Initialize Firebase
    initializeFirebase()
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100">
        <Navbar />
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
        <FloatingButtons darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  )
}

export default App