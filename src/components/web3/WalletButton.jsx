import React from 'react'
import { motion } from 'framer-motion'
import { useWallet, truncateAddress } from '../../hooks/useWallet'

export default function WalletButton({ onAccountClick }) {
  const { account, isConnecting, connect, hasMetaMask } = useWallet()

  const handleClick = () => {
    if (account) {
      // If connected, show account dropdown
      if (onAccountClick) onAccountClick()
    } else {
      // If not connected, connect wallet
      connect()
    }
  }

  if (!hasMetaMask) {
    return (
      <motion.a
        href="https://metamask.io/download/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Install MetaMask
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={handleClick}
      disabled={isConnecting}
      className={`btn ${account ? 'btn-account' : 'btn-primary'}`}
      style={{
        cursor: isConnecting ? 'not-allowed' : 'pointer'
      }}
      whileHover={!isConnecting ? { scale: 1.05 } : {}}
      whileTap={!isConnecting ? { scale: 0.95 } : {}}
      animate={isConnecting ? { opacity: 0.7 } : { opacity: 1 }}
    >
      {isConnecting ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'inline-block' }}
          >
            ⟳
          </motion.span>
          Connecting...
        </motion.span>
      ) : account ? (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {truncateAddress(account)}
        </motion.span>
      ) : (
        'Connect Wallet'
      )}
    </motion.button>
  )
}
