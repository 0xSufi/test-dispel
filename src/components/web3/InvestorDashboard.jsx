import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useWallet } from '../../hooks/useWallet'
import TokenBalance from './TokenBalance'
import PropertyMetadata from './PropertyMetadata'
import { CONTRACTS } from '../../config/web3Config'
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../../utils/animations'

export default function InvestorDashboard() {
  const { account } = useWallet()

  if (!account) return null

  return (
    <section className="investor-dashboard">
      <div className="container">
        <motion.header
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <p className="eyebrow">Your Portfolio</p>
          <h2>Investment Dashboard</h2>
          <p>View your tokenized real estate holdings and property details.</p>
        </motion.header>

        <div className="dashboard-grid">
          {/* Portfolio Overview */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <Link to="/holdings" className="dashboard-card portfolio-overview clickable">
              <div className="card-header">
                <h3>Token Holdings</h3>
                <span className="view-more">View Details →</span>
              </div>
              <div className="token-list">
                {Object.keys(CONTRACTS).map(key => (
                  <TokenBalance key={key} contractKey={key} />
                ))}
              </div>
            </Link>
          </motion.div>

          {/* Property Cards */}
          {Object.keys(CONTRACTS).map(key => (
            <motion.div
              key={key}
              className="dashboard-card property-card"
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <PropertyMetadata contractKey={key} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="dashboard-info"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <p className="info-text">
            <strong>Note:</strong> This is a demonstration interface. Real contract addresses
            will display live blockchain data.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
