import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWallet } from '../../hooks/useWallet'
import { toastVariants } from '../../utils/animations'

export default function ErrorNotification() {
  const { error, clearError } = useWallet()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (error) {
      setVisible(true)
      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => {
        setVisible(false)
        setTimeout(() => clearError(), 300) // Clear after fade out
      }, 5000)

      return () => clearTimeout(timer)
    } else {
      setVisible(false)
    }
  }, [error, clearError])

  return (
    <AnimatePresence mode="wait">
      {error && visible && (
        <motion.div
          className="error-notification visible"
          variants={toastVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="error-content"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.span
              className="error-icon"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              ⚠️
            </motion.span>
            <span className="error-message">{error}</span>
            <motion.button
              className="error-close"
              onClick={() => {
                setVisible(false)
                setTimeout(() => clearError(), 300)
              }}
              aria-label="Close notification"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
