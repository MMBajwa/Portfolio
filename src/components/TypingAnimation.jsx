import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypingAnimation = ({ 
  texts = ["Frontend Developer", "UI/UX Designer", "Problem Solver"], 
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000 
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimer)
    }

    if (!isDeleting && displayText === currentText) {
      setIsPaused(true)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1))
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentIndex, isPaused, texts, speed, deleteSpeed, pauseTime])

  return (
    <span className="relative">
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-light-accent dark:bg-dark-accent ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  )
}

export default TypingAnimation
