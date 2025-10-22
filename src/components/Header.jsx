import React, { useState } from 'react'
import { motion } from 'framer-motion'
import WalletButton from './web3/WalletButton'
import AccountDropdown from './web3/AccountDropdown'
import NetworkIndicator from './web3/NetworkIndicator'
import { useWallet } from '../hooks/useWallet'

export default function Header() {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false)
  const { account } = useWallet()

  return (
    <header className="hero" id="home">
      <motion.nav
        className="nav container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <a href="#home" className="brand">Red<span>Swan</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#solutions">Solutions</a>
          <a href="#why">Why Tokenize</a>
          <a href="#projects">Projects</a>
          <a href="#news">News</a>
        </div>
        <div className="nav-wallet-section">
          {account && <NetworkIndicator />}
          <div className="wallet-dropdown-wrapper">
            <WalletButton onAccountClick={() => setShowAccountDropdown(!showAccountDropdown)} />
            <AccountDropdown
              isOpen={showAccountDropdown}
              onClose={() => setShowAccountDropdown(false)}
            />
          </div>
        </div>
      </motion.nav>
      <motion.div
        className="hero-content container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Digital Commercial Real Estate
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Tokenizing Real Estate
        </motion.h1>
        <motion.p
          className="hero-lede"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          RedSwan fractionalizes institutional-grade properties so you can access real estate deals with greater liquidity, lower minimums, and streamlined compliance.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.a
            className="btn"
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </motion.a>
          <motion.a
            className="btn ghost"
            href="#why"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Platform
          </motion.a>
        </motion.div>
        <motion.div
          className="hero-metric"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <div className="metric-value">$3.2B+</div>
          <p className="metric-label">Institutional pipeline under evaluation</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-scroll container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll to discover
        </motion.span>
      </motion.div>
    </header>
  )
}
