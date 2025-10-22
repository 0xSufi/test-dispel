import React, { useState, useEffect } from 'react'
import { Contract } from 'ethers'
import { useWallet } from '../../hooks/useWallet'
import { CONTRACTS, ERC20_ABI } from '../../config/web3Config'

export default function PropertyMetadata({ contractKey }) {
  const { provider } = useWallet()
  const [metadata, setMetadata] = useState(null)
  const [loading, setLoading] = useState(false)

  const tokenConfig = CONTRACTS[contractKey]

  useEffect(() => {
    async function fetchMetadata() {
      if (!provider || !tokenConfig?.address) {
        setMetadata(null)
        return
      }

      // If mock address, use config data
      if (tokenConfig.address === '0x0000000000000000000000000000000000000000') {
        setMetadata({
          name: tokenConfig.name,
          symbol: tokenConfig.symbol,
          totalSupply: tokenConfig.totalSupply,
          propertyName: tokenConfig.propertyName,
          propertyValue: tokenConfig.propertyValue
        })
        return
      }

      setLoading(true)

      try {
        const contract = new Contract(
          tokenConfig.address,
          ERC20_ABI,
          provider
        )

        const [name, symbol, totalSupply] = await Promise.all([
          contract.name(),
          contract.symbol(),
          contract.totalSupply()
        ])

        setMetadata({
          name,
          symbol,
          totalSupply: totalSupply.toString(),
          propertyName: tokenConfig.propertyName,
          propertyValue: tokenConfig.propertyValue
        })
      } catch (err) {
        console.error('Error fetching property metadata:', err)
        // Fallback to config data
        setMetadata({
          name: tokenConfig.name,
          symbol: tokenConfig.symbol,
          totalSupply: tokenConfig.totalSupply,
          propertyName: tokenConfig.propertyName,
          propertyValue: tokenConfig.propertyValue
        })
      } finally {
        setLoading(false)
      }
    }

    fetchMetadata()
  }, [provider, tokenConfig])

  if (loading) {
    return (
      <div className="property-metadata loading">
        <p>Loading property details...</p>
      </div>
    )
  }

  if (!metadata) {
    return null
  }

  return (
    <div className="property-metadata">
      <div className="property-header">
        <h3>{metadata.propertyName}</h3>
        <span className="property-badge">{metadata.symbol}</span>
      </div>

      <div className="property-details">
        <div className="property-detail-item">
          <span className="detail-label">Property Value</span>
          <span className="detail-value">{metadata.propertyValue}</span>
        </div>

        <div className="property-detail-item">
          <span className="detail-label">Total Token Supply</span>
          <span className="detail-value">{parseInt(metadata.totalSupply).toLocaleString()}</span>
        </div>

        <div className="property-detail-item">
          <span className="detail-label">Token Name</span>
          <span className="detail-value">{metadata.name}</span>
        </div>

        {tokenConfig?.address && tokenConfig.address !== '0x0000000000000000000000000000000000000000' && (
          <div className="property-detail-item">
            <span className="detail-label">Contract Address</span>
            <span className="detail-value contract-address">
              {tokenConfig.address.slice(0, 6)}...{tokenConfig.address.slice(-4)}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
