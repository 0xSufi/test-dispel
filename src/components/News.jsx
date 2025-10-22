import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

export default function News() {
  return (
    <section className="news" id="news">
      <div className="container">
        <motion.header
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <p className="eyebrow">Insights</p>
          <h2>Latest news and updates.</h2>
          <p>Stay informed on RedSwan announcements, tokenized offerings, and market commentary.</p>
        </motion.header>
        <motion.div
          className="news-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.article
            className="news-card"
            variants={staggerItem}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <span className="news-tag">Press Release</span>
            <h3>RedSwan completes Series B to scale tokenization services</h3>
            <p>New funding accelerates platform automation, global partnerships, and institutional onboarding.</p>
            <a className="text-link" href="#contact">Read announcement</a>
          </motion.article>
          <motion.article
            className="news-card"
            variants={staggerItem}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <span className="news-tag">Webinar</span>
            <h3>Tokenizing CRE assets with EY and Hedera</h3>
            <p>Industry specialists share best practices for structuring and distributing digital securities.</p>
            <a className="text-link" href="#contact">Reserve your seat</a>
          </motion.article>
          <motion.article
            className="news-card"
            variants={staggerItem}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <span className="news-tag">Case Study</span>
            <h3>How a multifamily portfolio unlocked liquidity via RedSwan</h3>
            <p>Tokenization enabled recapitalization while delivering flexibility to existing LPs.</p>
            <a className="text-link" href="#projects">Explore the case study</a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
