// Web3 Configuration
// Update these values when you have real contract addresses

export const SUPPORTED_NETWORKS = {
  POLYGON_MAINNET: {
    chainId: '0x89', // 137
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: ['https://polygon-rpc.com'],
    blockExplorerUrls: ['https://polygonscan.com']
  },
  POLYGON_AMOY: {
    chainId: '0x13882', // 80002
    chainName: 'Polygon Amoy Testnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: ['https://rpc-amoy.polygon.technology'],
    blockExplorerUrls: ['https://amoy.polygonscan.com']
  },
  ETHEREUM_MAINNET: {
    chainId: '0x1', // 1
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['https://eth.llamarpc.com'],
    blockExplorerUrls: ['https://etherscan.io']
  },
  ETHEREUM_SEPOLIA: {
    chainId: '0xaa36a7', // 11155111
    chainName: 'Sepolia Testnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['https://rpc.sepolia.org'],
    blockExplorerUrls: ['https://sepolia.etherscan.io']
  }
}

// Default network for the app
export const DEFAULT_NETWORK = SUPPORTED_NETWORKS.POLYGON_AMOY

// Mock security token contracts (replace with real addresses)
export const CONTRACTS = {
  // Example property token on Polygon Amoy testnet
  PROPERTY_TOKEN_1: {
    address: '0x0000000000000000000000000000000000000000', // Replace with real address
    name: 'Astarte Property Token Alpha',
    symbol: 'RSPT-A',
    network: 'POLYGON_AMOY',
    propertyName: 'Downtown Manhattan Office Tower',
    propertyValue: '$50,000,000',
    totalSupply: '1000000',
    apr: 7.5 // Annual Percentage Rate
  },
  PROPERTY_TOKEN_2: {
    address: '0x0000000000000000000000000000000000000000', // Replace with real address
    name: 'Astarte Property Token Beta',
    symbol: 'RSPT-B',
    network: 'POLYGON_AMOY',
    propertyName: 'Miami Luxury Residential Complex',
    propertyValue: '$35,000,000',
    totalSupply: '750000',
    apr: 6.8 // Annual Percentage Rate
  }
}

// Simplified ERC-20 ABI for reading token data
export const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)'
]

// Helper to get network by chainId
export function getNetworkByChainId(chainId) {
  return Object.values(SUPPORTED_NETWORKS).find(
    network => network.chainId === chainId
  )
}

// Helper to format chain ID from number to hex
export function formatChainId(chainId) {
  if (typeof chainId === 'string') return chainId
  return '0x' + chainId.toString(16)
}
