import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight, viewport } from '../utils/animations'
import { SimpleCounter } from './AnimatedCounter'

export default function Intro() {
  return (
    <section className="intro" id="about">
      <div className="container intro-grid">
        <motion.div
          className="intro-text"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInLeft}
        >
          <p className="eyebrow">About RedSwan</p>
          <h2>RedSwan is a full-service global facilitator digitizing institutional real estate investments.</h2>
          <p>Our capital markets team tokenizes quality commercial real estate so investors can participate in deals previously reserved for private networks.</p>
          <motion.a
            className="btn small"
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a demo
          </motion.a>
        </motion.div>
        <motion.div
          className="intro-stats"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInRight}
        >
          <motion.article className="stat-card" variants={fadeInUp}>
            <span className="stat-value">
              <SimpleCounter end={20} suffix="k+" duration={2} />
            </span>
            <span className="stat-label">Global investors</span>
            <p>Accredited community with onboarding in under 15 minutes across 72 countries.</p>
          </motion.article>
          <motion.article className="stat-card" variants={fadeInUp}>
            <span className="stat-value">
              <SimpleCounter end={780} prefix="$" suffix="M" duration={2.5} />
            </span>
            <span className="stat-label">Tokenized to date</span>
            <p>Curated mid-market and institutional offerings prepared with due diligence reports.</p>
          </motion.article>
          <motion.article className="stat-card" variants={fadeInUp}>
            <span className="stat-value">
              <SimpleCounter end={12} duration={1.5} />
            </span>
            <span className="stat-label">Regulated partners</span>
            <p>Broker-dealers, transfer agents, and qualified custodians ensure compliance.</p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
