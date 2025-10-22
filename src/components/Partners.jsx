import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

export default function Partners() {
  return (
    <section className="partners">
      <motion.div
        className="container partners-inner"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUp}
      >
        <p className="eyebrow light">Trusted Partners</p>
        <h2>Strategic blockchain and financial partners.</h2>
        <motion.div
          className="logo-row"
          variants={staggerContainer}
        >
          <motion.span
            className="logo-pill"
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -4 }}
          >
            EY
          </motion.span>
          <motion.span
            className="logo-pill"
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -4 }}
          >
            Hedera
          </motion.span>
          <motion.span
            className="logo-pill"
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -4 }}
          >
            Polygon
          </motion.span>
          <motion.span
            className="logo-pill"
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -4 }}
          >
            Prime Trust
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}
