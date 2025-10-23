import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <motion.header
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <p className="eyebrow">Onboarding</p>
          <h2>Getting started is easy.</h2>
          <p>From onboarding to secondary trading, Astarte guides you every step of the way.</p>
        </motion.header>
        <motion.div
          className="step-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.article
            className="step-card"
            variants={staggerItem}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className="step-icon">01</div>
            <h3>Curate qualified commercial assets</h3>
            <p>Submit stabilized or value-add projects. Our diligence team packages everything for tokenization.</p>
          </motion.article>
          <motion.article
            className="step-card"
            variants={staggerItem}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className="step-icon">02</div>
            <h3>Publish and distribute offering</h3>
            <p>Launch to global investors with automated accreditation, subscription agreements, and escrow services.</p>
          </motion.article>
          <motion.article
            className="step-card"
            variants={staggerItem}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className="step-icon">03</div>
            <h3>Manage investors and liquidity</h3>
            <p>Track performance, pay dividends, and enable compliant secondary trading through Astarte Exchange.</p>
          </motion.article>
        </motion.div>
        <motion.div
          className="step-cta"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <motion.a
            className="btn small"
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a strategy session
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
