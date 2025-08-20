import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import AnimatedBackground from './components/AnimatedBackground'
import Navigation from './components/Navigation'
import TypingAnimation from './components/TypingAnimation'
import ContactForm from './components/ContactForm'

// Hero Section Component
const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const scrollToWork = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg transition-colors duration-500">
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-heading font-bold text-light-text dark:text-dark-text mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-light-accent dark:text-dark-accent">Murtaza</span>
        </motion.h1>
        
        <motion.div
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-body h-8 flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a <span className="text-light-accent dark:text-dark-accent font-medium ml-2">
            <TypingAnimation texts={["Frontend Developer", "UI/UX Designer", "Problem Solver"]} />
          </span>
        </motion.div>
        
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 font-body leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I design and build websites that feel <span className="text-light-muted dark:text-dark-neon font-medium">alive</span>.
        </motion.p>

        <motion.button
          onClick={scrollToWork}
          className="bg-gradient-to-r from-light-accent to-light-muted dark:from-dark-accent dark:to-dark-neon text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work ✨
        </motion.button>
      </div>
    </section>
  )
}

// About Section Component
const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'PHP/MySQL', icon: '🐘' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Unity', icon: '🎮' },
    { name: 'SEO', icon: '📈' }
  ]

  return (
    <section ref={ref} id="about" className="py-20 px-6 bg-light-card dark:bg-dark-card transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-center text-light-text dark:text-dark-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-body">
            I'm a computer science student who loves bringing ideas to life on the web. 
            From sleek portfolios to complex backends, I experiment, learn, and build. 
            <span className="text-light-accent dark:text-dark-accent font-medium"> I don't just code, I craft digital experiences.</span>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="text-light-text dark:text-dark-text font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Projects Section Component
const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showMessage, setShowMessage] = useState(false)

  const projects = [
    {
      title: 'Fanpage Blog Website',
      description: 'A dynamic fan community platform with user interactions and content management',
      tags: ['React', 'Node.js', 'Firebase'],
      color: 'purple',
      glowColor: 'rgba(139, 92, 246, 0.6)'
    },
    {
      title: 'Weather Website',
      description: 'Real-time weather application with forecasts and location-based data',
      tags: ['React', 'Express.js', 'Weather API', 'Node.js'],
      color: 'teal',
      glowColor: 'rgba(20, 184, 166, 0.6)'
    },
    {
      title: 'Business Dashboard',
      description: 'Analytics dashboard for small businesses',
      tags: ['Vue.js', 'Chart.js', 'Firebase'],
      color: 'gold',
      glowColor: 'rgba(245, 158, 11, 0.6)'
    }
  ]

  return (
    <section ref={ref} id="projects" className="py-20 px-6 bg-light-bg dark:bg-dark-bg transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-center text-light-text dark:text-dark-text mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{
                filter: 'grayscale(100%)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                filter: 'grayscale(0%)',
                boxShadow: `0 20px 40px ${project.glowColor}`,
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Cool Oval Button with Message */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative">
            <motion.button
              onClick={() => setShowMessage(!showMessage)}
              className="bg-gradient-to-r from-light-accent to-light-muted dark:from-dark-accent dark:to-dark-neon text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg font-medium">More Projects</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
                <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
              </div>
            </motion.button>
            
            {/* Cool Message Popup */}
            {showMessage && (
              <motion.div
                className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-light-text dark:text-dark-text px-4 py-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-xs sm:max-w-sm md:max-w-md lg:whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  {/* Arrow pointing up */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 rotate-45"></div>
                  <p className="text-sm sm:text-base md:text-lg font-medium text-center">
                    📅 <span className="text-light-accent dark:text-dark-accent">Schedule a meeting</span> and you won't regret it! ✨
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Services Section Component
const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies',
      icon: '💻'
    },
    {
      title: 'Backend & Databases',
      description: 'Robust server-side solutions and database architecture',
      icon: '🔧'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
      icon: '🎨'
    },
    {
      title: 'SEO & Digital Strategy',
      description: 'Optimize your online presence and reach more customers',
      icon: '📈'
    }
  ]

  return (
    <section ref={ref} id="services" className="py-20 px-6 bg-light-card dark:bg-dark-card transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-center text-light-text dark:text-dark-text mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What I can do for you
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-16 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here's how I can help bring your ideas to life
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-heading font-semibold text-light-text dark:text-dark-text mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-body text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="contact" className="py-20 px-6 bg-light-bg dark:bg-dark-bg transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-center text-light-text dark:text-dark-text mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let's work together
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-4">
                Get in touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span className="text-gray-600 dark:text-gray-300">businessmypersonalbajwa@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span className="text-gray-600 dark:text-gray-300">+923080143575</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-600 dark:text-gray-300">Lahore, Punjab</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-4">
                Follow me
              </h3>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/MMBajwa', icon: '💻' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mmbajwa2626/', icon: '💼' },
                  { name: 'Instagram', url: 'https://www.instagram.com/_themurtazababer/', icon: '📷' }
                ].map(social => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-light-accent to-light-muted dark:from-dark-accent dark:to-dark-neon text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm flex items-center gap-2"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{social.icon}</span>
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main App Component
function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-500">
        <AnimatedBackground />
        <Navigation />
        <ThemeToggle />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        
        <footer className="relative z-10 py-8 text-center text-gray-600 dark:text-gray-400 bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-700">
          <p>&copy; 2024 Murtaza. Built with ❤️ and lots of coffee.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App 