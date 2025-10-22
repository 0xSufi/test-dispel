import React from 'react'
import { useWallet } from '../../hooks/useWallet'
import TokenBalance from './TokenBalance'
import { CONTRACTS } from '../../config/web3Config'

export default function TokenHoldings() {
  const { account } = useWallet()

  if (!account) {
    return (
      <section className="token-holdings-page">
        <div className="container">
          <div className="connect-message">
            <p>Connect your wallet to view your token holdings.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="token-holdings-page">
      <div className="container">
        <div className="holdings-grid">
          {Object.keys(CONTRACTS).map(key => {
            const tokenConfig = CONTRACTS[key]
            return (
              <div key={key} className="holding-card">
                <div className="holding-header">
                  <h3>{tokenConfig.symbol}</h3>
                  <span className="token-name">{tokenConfig.name}</span>
                </div>

                <div className="holding-details">
                  <div className="detail-item">
                    <span className="detail-label">Property</span>
                    <span className="detail-value">{tokenConfig.propertyName}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Your Balance</span>
                    <div className="balance-wrapper">
                      <TokenBalance contractKey={key} showSymbol={false} />
                    </div>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Property Value</span>
                    <span className="detail-value">{tokenConfig.propertyValue}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Total Token Supply</span>
                    <span className="detail-value">{Number(tokenConfig.totalSupply).toLocaleString()}</span>
                  </div>

                  <div className="detail-item apr-highlight">
                    <span className="detail-label">APR</span>
                    <span className="detail-value apr-value">{tokenConfig.apr}%</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="holdings-info">
          <p className="info-text">
            <strong>Note:</strong> APR (Annual Percentage Rate) represents the estimated annual return on your investment.
            Actual returns may vary based on property performance and market conditions.
          </p>
        </div>
      </div>
    </section>
  )
}
