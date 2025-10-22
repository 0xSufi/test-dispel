import React from 'react'
import { motion } from 'framer-motion'
import { slideInLeft, slideInRight, viewport } from '../utils/animations'

export default function Featured() {
  return (
    <section className="featured" id="projects">
      <div className="container featured-grid">
        <motion.div
          className="featured-image"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInLeft}
        >
          <img src="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&w=900&q=80" alt="High-rise building exterior" />
        </motion.div>
        <motion.div
          className="featured-content"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInRight}
        >
          <p className="eyebrow">Featured Commercial Real Estate Project</p>
          <h2>Downtown Mixed-Use Tower, Austin</h2>
          <p>This 32-story Class A tower offers premium office, hospitality, and retail anchored by Fortune 500 tenants.</p>
          <motion.ul
            className="featured-stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ delay: 0.4 }}
            >
              <strong>$68M</strong><span>Equity being tokenized</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ delay: 0.5 }}
            >
              <strong>14%</strong><span>Projected investor IRR</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ delay: 0.6 }}
            >
              <strong>2025</strong><span>Stabilization target</span>
            </motion.li>
          </motion.ul>
          <motion.a
            className="btn"
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request the investment deck
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
