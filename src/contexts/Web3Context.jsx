import React, { createContext, useState, useEffect, useCallback } from 'react'
import { BrowserProvider } from 'ethers'
import { DEFAULT_NETWORK, getNetworkByChainId, formatChainId } from '../config/web3Config'

export const Web3Context = createContext(null)

export function Web3Provider({ children }) {
  const [account, setAccount] = useState(null)
  const [chainId, setChainId] = useState(null)
  const [provider, setProvider] = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState(null)

  // Check if MetaMask is installed
  const hasMetaMask = typeof window !== 'undefined' && window.ethereum

  // Initialize provider when account is connected
  useEffect(() => {
    if (account && window.ethereum) {
      const browserProvider = new BrowserProvider(window.ethereum)
      setProvider(browserProvider)
    } else {
      setProvider(null)
    }
  }, [account])

  // Handle account changes
  const handleAccountsChanged = useCallback((accounts) => {
    if (accounts.length === 0) {
      // User disconnected
      setAccount(null)
      setProvider(null)
      localStorage.removeItem('walletConnected')
    } else if (accounts[0] !== account) {
      setAccount(accounts[0])
      localStorage.setItem('walletConnected', 'true')
    }
  }, [account])

  // Handle chain changes
  const handleChainChanged = useCallback((newChainId) => {
    setChainId(formatChainId(parseInt(newChainId, 16)))
    // Reload to avoid any stale state
    window.location.reload()
  }, [])

  // Set up event listeners
  useEffect(() => {
    if (!window.ethereum) return

    window.ethereum.on('accountsChanged', handleAccountsChanged)
    window.ethereum.on('chainChanged', handleChainChanged)

    return () => {
      if (window.ethereum.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
        window.ethereum.removeListener('chainChanged', handleChainChanged)
      }
    }
  }, [handleAccountsChanged, handleChainChanged])

  // Check for existing connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (!window.ethereum) return

      const wasConnected = localStorage.getItem('walletConnected')
      if (wasConnected) {
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_accounts'
          })
          if (accounts.length > 0) {
            setAccount(accounts[0])
            const chainId = await window.ethereum.request({
              method: 'eth_chainId'
            })
            setChainId(chainId)
          }
        } catch (err) {
          console.error('Error checking connection:', err)
        }
      }
    }

    checkConnection()
  }, [])

  // Connect wallet
  const connect = async () => {
    if (!window.ethereum) {
      setError('MetaMask is not installed. Please install it to continue.')
      return false
    }

    setIsConnecting(true)
    setError(null)

    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })

      if (accounts.length > 0) {
        setAccount(accounts[0])

        // Get current chain ID
        const chainId = await window.ethereum.request({
          method: 'eth_chainId'
        })
        setChainId(chainId)

        localStorage.setItem('walletConnected', 'true')
        setIsConnecting(false)
        return true
      }
    } catch (err) {
      console.error('Error connecting wallet:', err)
      if (err.code === 4001) {
        setError('Connection request was rejected')
      } else {
        setError('Failed to connect wallet')
      }
      setIsConnecting(false)
      return false
    }
  }

  // Disconnect wallet
  const disconnect = () => {
    setAccount(null)
    setChainId(null)
    setProvider(null)
    localStorage.removeItem('walletConnected')
  }

  // Switch network
  const switchNetwork = async (networkConfig) => {
    if (!window.ethereum) {
      setError('MetaMask is not installed')
      return false
    }

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: networkConfig.chainId }]
      })
      return true
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [networkConfig]
          })
          return true
        } catch (addError) {
          console.error('Error adding network:', addError)
          setError('Failed to add network')
          return false
        }
      }
      console.error('Error switching network:', err)
      setError('Failed to switch network')
      return false
    }
  }

  // Get current network info
  const currentNetwork = chainId ? getNetworkByChainId(chainId) : null

  const value = {
    account,
    chainId,
    provider,
    isConnecting,
    error,
    hasMetaMask,
    currentNetwork,
    connect,
    disconnect,
    switchNetwork,
    clearError: () => setError(null)
  }

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  )
}
