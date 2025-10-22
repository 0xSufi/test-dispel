import React, { useState, useEffect } from 'react'
import { Contract } from 'ethers'
import { useWallet, formatTokenAmount } from '../../hooks/useWallet'
import { CONTRACTS, ERC20_ABI } from '../../config/web3Config'

export default function TokenBalance({ contractKey, showSymbol = true }) {
  const { account, provider } = useWallet()
  const [balance, setBalance] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const tokenConfig = CONTRACTS[contractKey]

  useEffect(() => {
    async function fetchBalance() {
      if (!account || !provider || !tokenConfig?.address) {
        setBalance(null)
        return
      }

      // Skip if mock address (all zeros)
      if (tokenConfig.address === '0x0000000000000000000000000000000000000000') {
        // Use mock data for demonstration
        setBalance('1000')
        return
      }

      setLoading(true)
      setError(null)

      try {
        const contract = new Contract(
          tokenConfig.address,
          ERC20_ABI,
          provider
        )

        const balanceRaw = await contract.balanceOf(account)
        setBalance(balanceRaw.toString())
      } catch (err) {
        console.error('Error fetching token balance:', err)
        setError('Failed to fetch balance')
        setBalance(null)
      } finally {
        setLoading(false)
      }
    }

    fetchBalance()
  }, [account, provider, tokenConfig])

  if (!account) {
    return (
      <div className="token-balance">
        {showSymbol && <span className="token-symbol">{tokenConfig?.symbol || 'TOKEN'}</span>}
        <span className="balance-value">—</span>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="token-balance">
        {showSymbol && <span className="token-symbol">{tokenConfig?.symbol || 'TOKEN'}</span>}
        <span className="balance-value">Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="token-balance error">
        {showSymbol && <span className="token-symbol">{tokenConfig?.symbol || 'TOKEN'}</span>}
        <span className="balance-value">Error</span>
      </div>
    )
  }

  const formattedBalance = balance ? formatTokenAmount(balance, 18, 2) : '0.00'

  return (
    <div className="token-balance">
      {showSymbol && <span className="token-symbol">{tokenConfig?.symbol || 'TOKEN'}</span>}
      <span className="balance-value">{formattedBalance}</span>
    </div>
  )
}
