import { useContext } from 'react'
import { Web3Context } from '../contexts/Web3Context'

/**
 * Custom hook to access Web3 wallet functionality
 * @returns {Object} Web3 context with wallet state and methods
 */
export function useWallet() {
  const context = useContext(Web3Context)

  if (context === null) {
    throw new Error('useWallet must be used within a Web3Provider')
  }

  return context
}

/**
 * Helper function to truncate Ethereum addresses
 * @param {string} address - Full Ethereum address
 * @param {number} startChars - Number of characters to show at start (default: 6)
 * @param {number} endChars - Number of characters to show at end (default: 4)
 * @returns {string} Truncated address (e.g., "0x1234...5678")
 */
export function truncateAddress(address, startChars = 6, endChars = 4) {
  if (!address) return ''
  if (address.length < startChars + endChars) return address
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`
}

/**
 * Helper function to format token amounts with decimals
 * @param {string|BigInt} amount - Token amount in smallest unit
 * @param {number} decimals - Number of decimals (default: 18)
 * @param {number} displayDecimals - Number of decimals to display (default: 4)
 * @returns {string} Formatted amount
 */
export function formatTokenAmount(amount, decimals = 18, displayDecimals = 4) {
  if (!amount) return '0'

  const value = typeof amount === 'bigint' ? amount : BigInt(amount)
  const divisor = BigInt(10 ** decimals)
  const wholePart = value / divisor
  const fractionalPart = value % divisor

  const fractionalString = fractionalPart.toString().padStart(decimals, '0')
  const displayFractional = fractionalString.slice(0, displayDecimals)

  return `${wholePart}.${displayFractional}`
}
