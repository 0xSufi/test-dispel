import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight, viewport } from '../utils/animations'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInLeft}
        >
          <p className="eyebrow light">Ready to digitize your next raise?</p>
          <h2>Partner with Astarte to launch your tokenized offering.</h2>
        </motion.div>
        <motion.a
          className="btn"
          href="#contact"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInRight}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start the conversation
        </motion.a>
      </div>
    </section>
  )
}
