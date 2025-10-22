import React from 'react'
import { useWallet } from '../../hooks/useWallet'
import { DEFAULT_NETWORK } from '../../config/web3Config'

export default function NetworkIndicator() {
  const { currentNetwork, chainId, switchNetwork } = useWallet()

  if (!chainId) return null

  const isCorrectNetwork = currentNetwork?.chainId === DEFAULT_NETWORK.chainId
  const networkName = currentNetwork?.chainName || 'Unknown Network'

  const handleSwitchNetwork = () => {
    switchNetwork(DEFAULT_NETWORK)
  }

  return (
    <div className={`network-indicator ${isCorrectNetwork ? 'correct' : 'wrong'}`}>
      <span className="network-dot"></span>
      <span className="network-name">{networkName}</span>
      {!isCorrectNetwork && (
        <button
          onClick={handleSwitchNetwork}
          className="btn-switch-network"
          title={`Switch to ${DEFAULT_NETWORK.chainName}`}
        >
          Switch
        </button>
      )}
    </div>
  )
}
