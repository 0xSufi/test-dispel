import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <motion.header
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <p className="eyebrow">Benefits</p>
          <h2>Benefits of investing with Astarte.</h2>
          <p>Diversify into stabilized, income-producing real estate with tailored investor protections.</p>
        </motion.header>
        <motion.div
          className="benefit-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.article
            className="benefit-card"
            variants={staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=720&q=80" alt="Modern commercial building" />
            <div className="benefit-body">
              <h3>Institutional Quality</h3>
              <p>Access Class A office, multifamily, and mixed-use assets with extensive diligence and third-party audits.</p>
              <a className="text-link" href="#projects">See project details</a>
            </div>
          </motion.article>
          <motion.article
            className="benefit-card"
            variants={staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=720&q=80" alt="Investors discussing portfolio" />
            <div className="benefit-body">
              <h3>Investor-Friendly Liquidity</h3>
              <p>Trade tokenized shares during scheduled windows and receive automatic, on-chain dividend payouts.</p>
              <a className="text-link" href="#contact">Join the marketplace</a>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
