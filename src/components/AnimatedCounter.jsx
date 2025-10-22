import React, { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

/**
 * Animated number counter component
 * Smoothly animates from 0 to target value
 */
export function AnimatedCounter({ value, duration = 2, prefix = '', suffix = '', decimals = 0 }) {
  const [isVisible, setIsVisible] = useState(false)

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0
  })

  const display = useTransform(spring, (current) => {
    return prefix + current.toFixed(decimals) + suffix
  })

  useEffect(() => {
    if (isVisible) {
      spring.set(value)
    }
  }, [spring, value, isVisible])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setIsVisible(true)}
      style={{ display: 'inline-block' }}
    >
      {display}
    </motion.span>
  )
}

/**
 * Simple counter that animates integers
 */
export function SimpleCounter({ end, start = 0, duration = 2, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(start)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!hasAnimated) return

    let startTime
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + (end - start) * easeOutQuart)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [start, end, duration, hasAnimated])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setHasAnimated(true)}
      style={{ display: 'inline-block' }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  )
}

export default AnimatedCounter
