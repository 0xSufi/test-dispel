import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem, viewport } from '../utils/animations'

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="container why-grid">
        <motion.div
          className="why-text"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInLeft}
        >
          <p className="eyebrow light">Why Tokenized Commercial Real Estate?</p>
          <h2>Tokenization brings transparency, liquidity, and access to premium commercial assets.</h2>
          <p>Our infrastructure unifies issuance, compliance, and trading so sponsors and investors can participate with confidence.</p>
          <ul className="why-metrics">
            <li>
              <span className="metric-title">Lower minimums</span>
              <span className="metric-copy">Start from $1,000 per tokenized share.</span>
            </li>
            <li>
              <span className="metric-title">Streamlined onboarding</span>
              <span className="metric-copy">Automated KYC/AML completes inside minutes.</span>
            </li>
            <li>
              <span className="metric-title">Transparent reporting</span>
              <span className="metric-copy">Real-time dashboards, distributions, and investor updates.</span>
            </li>
          </ul>
          <motion.a
            className="btn light"
            href="#news"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download the playbook
          </motion.a>
        </motion.div>
        <motion.div
          className="why-cards"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.article
            className="highlight-card"
            variants={staggerItem}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img src="https://images.unsplash.com/photo-1465800872432-fffb7f0e9560?auto=format&fit=crop&w=420&q=80" alt="Skyline at dusk" />
            <div>
              <h3>Global Reach</h3>
              <p>Access a borderless network of accredited investors with compliant digital onboarding.</p>
            </div>
          </motion.article>
          <motion.article
            className="highlight-card"
            variants={staggerItem}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=420&q=80" alt="Business discussion" />
            <div>
              <h3>Institutional Grade</h3>
              <p>Every deal is underwritten by a seasoned team with decades of commercial real estate experience.</p>
            </div>
          </motion.article>
          <motion.article
            className="highlight-card"
            variants={staggerItem}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=420&q=80" alt="Investors collaborating" />
            <div>
              <h3>Digital Ownership</h3>
              <p>Investors receive programmable tokens that manage distributions, voting, and transfers.</p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
