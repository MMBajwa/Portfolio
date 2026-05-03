import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import AnimatedBackground from './components/AnimatedBackground'
import Navigation from './components/Navigation'
import TypingAnimation from './components/TypingAnimation'
import ContactForm from './components/ContactForm'

// Hero Section - Premium AI Landing Page
const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const scrollToWork = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-96 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-1/4 -right-96 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-hero leading-tight mb-6 text-white">
            <span className="block mb-2">Crafting Digital</span>
            <span className="gradient-text block">Experiences</span>
            <span className="block">That Matter</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-dark-muted mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I'm a frontend developer and AI enthusiast who builds stunning, performant web experiences. 
          <span className="text-white"> From concept to deployment,</span> I transform ideas into elegant digital solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={scrollToWork}
            className="btn-premium btn-primary px-8 py-4 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
            <span className="ml-2">↓</span>
          </motion.button>

          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-lg font-semibold border border-dark-border text-white hover:bg-dark-card transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Floating Cards Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-8 pt-8 border-t border-dark-border/30"
        >
          {[
            { label: 'React', icon: '⚛️' },
            { label: 'Design', icon: '🎨' },
            { label: 'Performance', icon: '⚡' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2 text-sm text-dark-muted"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// About Section - Premium Cards
const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const highlights = [
    { title: 'Frontend Expert', desc: 'React, Vite, Tailwind CSS', icon: '💻' },
    { title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces', icon: '🎨' },
    { title: 'Performance', desc: 'Lightning-fast applications', icon: '⚡' },
    { title: 'Innovation', desc: 'Always learning, always growing', icon: '🚀' },
  ]

  return (
    <section ref={ref} id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title text-white mb-6">About Me</h2>
          <p className="text-lg text-dark-muted max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with a keen eye for design and a commitment to clean code. 
            I love solving complex problems and creating seamless user experiences.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="card-glass p-6 rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 0 40px rgba(124, 92, 255, 0.3)' }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-dark-muted text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 card-glass rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'Vite', 'Tailwind', 'JavaScript', 'Node.js', 'Firebase', 'Next.js', 'TypeScript', 'Git', 'Figma', 'SEO', 'PHP'].map((skill) => (
              <motion.div
                key={skill}
                className="px-4 py-3 rounded-lg bg-dark-card border border-dark-border/50 text-center text-sm font-medium text-white"
                whileHover={{ scale: 1.05, borderColor: 'rgba(124, 92, 255, 0.5)' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Projects Section - Floating Cards
const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'AI Chat Interface',
      description: 'Real-time AI-powered chat application with message history and smart suggestions',
      tags: ['React', 'WebSocket', 'AI API', 'Tailwind'],
      icon: '🤖',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive business analytics with real-time data visualization',
      tags: ['React', 'Chart.js', 'Firebase', 'Node.js'],
      icon: '📊',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
      icon: '🛍️',
    },
  ]

  return (
    <section ref={ref} id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title text-white mb-6">Featured Projects</h2>
          <p className="text-lg text-dark-muted max-w-3xl mx-auto">
            A selection of projects showcasing my expertise in building modern, scalable web applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="card-glass p-8 rounded-2xl group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px rgba(124, 92, 255, 0.3)',
              }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-dark-muted mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-dark-card border border-dark-border/50 text-white hover:border-purple-500/50 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="btn-premium btn-primary px-8 py-4 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Services Section
const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      title: 'Web Development',
      description: 'Building fast, responsive websites with modern technologies',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting beautiful interfaces that users love',
      icon: '🎨',
    },
    {
      title: 'Performance Optimization',
      description: 'Ensuring your site loads lightning-fast',
      icon: '⚡',
    },
    {
      title: 'AI Integration',
      description: 'Implementing cutting-edge AI features in your apps',
      icon: '🤖',
    },
  ]

  return (
    <section ref={ref} id="services" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title text-white mb-6">What I Offer</h2>
          <p className="text-lg text-dark-muted max-w-3xl mx-auto">
            Comprehensive services to bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="card-glass p-6 rounded-2xl text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 0 40px rgba(124, 92, 255, 0.3)' }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title text-white mb-6">Let's Work Together</h2>
          <p className="text-lg text-dark-muted max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="card-glass p-8 rounded-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: '📧', label: 'Email', value: 'businessmypersonalbajwa@gmail.com', href: 'mailto:businessmypersonalbajwa@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+92 308 0143575', href: 'tel:+923080143575' },
              { icon: '📍', label: 'Location', value: 'Lahore, Punjab, Pakistan', href: null },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="card-glass p-6 rounded-xl"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <p className="text-dark-muted text-sm mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold hover:gradient-text transition-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="card-glass p-6 rounded-xl"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-white font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/MMBajwa', icon: '💻' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mmbajwa2626/', icon: '💼' },
                  { name: 'Instagram', url: 'https://www.instagram.com/_themurtazababer/', icon: '📷' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-ai flex items-center justify-center text-xl hover:shadow-glow-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
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
      <div className="relative min-h-screen bg-dark-bg text-white overflow-hidden">
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

        {/* Footer */}
        <footer className="relative z-10 py-12 px-6 border-t border-dark-border/30 bg-dark-bg/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-dark-muted mb-4">
              © 2026 Murtaza Muhammad. Built with <span className="gradient-text">✨ premium dark AI aesthetics</span>
            </p>
            <p className="text-sm text-dark-muted/70">
              Crafted with React, Vite, Tailwind CSS & Framer Motion
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
