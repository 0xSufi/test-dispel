import React, { useState, useRef, useEffect } from 'react'
import { useWallet, truncateAddress } from '../../hooks/useWallet'

export default function AccountDropdown({ isOpen, onClose }) {
  const { account, disconnect, currentNetwork } = useWallet()
  const dropdownRef = useRef(null)
  const [copied, setCopied] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const copyAddress = () => {
    if (account) {
      navigator.clipboard.writeText(account)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDisconnect = () => {
    disconnect()
    onClose()
  }

  if (!isOpen || !account) return null

  return (
    <div className="account-dropdown" ref={dropdownRef}>
      <div className="account-dropdown-header">
        <span className="account-label">Connected Account</span>
      </div>

      <div className="account-address-section">
        <div className="account-address-display">
          <span className="account-address">{truncateAddress(account, 10, 8)}</span>
          <button
            onClick={copyAddress}
            className="copy-button"
            title={copied ? 'Copied!' : 'Copy address'}
          >
            {copied ? '✓' : '📋'}
          </button>
        </div>
        {currentNetwork && (
          <div className="account-network">
            <span className="network-dot"></span>
            {currentNetwork.chainName}
          </div>
        )}
      </div>

      <div className="account-dropdown-actions">
        <button onClick={handleDisconnect} className="btn-disconnect">
          Disconnect
        </button>
      </div>
    </div>
  )
}
