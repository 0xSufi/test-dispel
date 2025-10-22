import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, viewport, cardHover } from '../utils/animations'

export default function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <motion.header
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <p className="eyebrow">Solutions</p>
          <h2>Unlock value through tokenized real estate.</h2>
          <p>Structured digital securities simplify capital formation, investor relations, and secondary liquidity.</p>
        </motion.header>
        <motion.div
          className="card-grid three"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.article
            className="info-card"
            variants={staggerItem}
            whileHover="hover"
            initial="rest"
            animate="rest"
            custom={cardHover}
          >
            <h3>Institutional Structuring</h3>
            <p>Tokenize equity through SPVs aligned with SEC exemptions and regional regulations.</p>
            <a className="text-link" href="#contact">Talk to our experts</a>
          </motion.article>
          <motion.article
            className="info-card"
            variants={staggerItem}
            whileHover="hover"
            initial="rest"
            animate="rest"
            custom={cardHover}
          >
            <h3>Global Distribution</h3>
            <p>Launch offerings with investor accreditation, KYC/AML, and frictionless subscription flows.</p>
            <a className="text-link" href="#projects">View live offerings</a>
          </motion.article>
          <motion.article
            className="info-card"
            variants={staggerItem}
            whileHover="hover"
            initial="rest"
            animate="rest"
            custom={cardHover}
          >
            <h3>Secondary Liquidity</h3>
            <p>Provide scheduled trading windows and automated dividend disbursements through blockchain rails.</p>
            <a className="text-link" href="#why">See how it works</a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
