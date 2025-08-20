import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'
  
  // Form state
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    // Basic validation
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setMessage('Please fill in all fields')
      setMessageType('error')
      setIsLoading(false)
      return
    }

    try {
      // EmailJS configuration
      const result = await emailjs.sendForm(
        'service_jkv4fga', // EmailJS service ID
        'template_n2829xo', // EmailJS template ID
        form.current,
        'r3tCGci9LksyVBrez' // EmailJS public key
      )

      console.log('Email sent successfully:', result.text)
      setMessage('Message sent successfully! 🚀 I\'ll get back to you soon.')
      setMessageType('success')
      
      // Note: This will send to businessmypersonalbajwa@gmail.com
      
      // Reset form
      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      })
      
    } catch (error) {
      console.error('Failed to send email:', error)
      setMessage('Failed to send message. Please try again or contact me directly.')
      setMessageType('error')
    } finally {
      setIsLoading(false)
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage('')
        setMessageType('')
      }, 5000)
    }
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-light-text dark:text-dark-text font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:border-transparent transition-all"
          placeholder="Your name"
          disabled={isLoading}
        />
      </div>
      
      <div>
        <label className="block text-light-text dark:text-dark-text font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:border-transparent transition-all"
          placeholder="your@email.com"
          disabled={isLoading}
        />
      </div>
      
      <div>
        <label className="block text-light-text dark:text-dark-text font-medium mb-2">
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:border-transparent transition-all"
          placeholder="Tell me about your project..."
          disabled={isLoading}
        />
      </div>

      {/* Status Message */}
      {message && (
        <motion.div
          className={`p-3 rounded-lg text-sm ${
            messageType === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {message}
        </motion.div>
      )}
      
      <motion.button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${
          isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-light-accent to-light-muted dark:from-dark-accent dark:to-dark-neon text-white hover:scale-105'
        }`}
        whileHover={!isLoading ? { y: -2 } : {}}
        whileTap={!isLoading ? { scale: 0.95 } : {}}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </div>
        ) : (
          'Send Message 🚀'
        )}
      </motion.button>
    </form>
  )
}

export default ContactForm
