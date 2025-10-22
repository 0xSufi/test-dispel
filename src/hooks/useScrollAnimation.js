import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Custom hook for scroll-based animations
 * Returns a ref and inView state to trigger animations when element enters viewport
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
    ...options
  })

  return [ref, isInView]
}

export default useScrollAnimation
