# Web3 Integration Guide

## Overview

This Astarte application now includes a minimal viable product (MVP) web3 integration that provides:

- ✅ MetaMask wallet connection
- ✅ Multi-network support (Polygon, Ethereum, Hedera-ready)
- ✅ Read-only token balance display
- ✅ Property metadata viewing
- ✅ Investor dashboard (shown when wallet is connected)
- ✅ Network switching and detection
- ✅ Error handling and user notifications

## Quick Start

### Prerequisites

1. **Install MetaMask**: https://metamask.io/download/
2. **Get test tokens** (for testing on testnet):
   - Polygon Amoy: https://faucet.polygon.technology/
   - Ethereum Sepolia: https://sepoliafaucet.com/

### Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Architecture

```
src/
├── config/
│   └── web3Config.js          # Network & contract configuration
├── contexts/
│   └── Web3Context.jsx        # Global wallet state management
├── hooks/
│   └── useWallet.js           # Custom hook for wallet operations
├── components/web3/
│   ├── WalletButton.jsx       # Connect wallet button
│   ├── AccountDropdown.jsx    # Account info dropdown
│   ├── NetworkIndicator.jsx   # Network status badge
│   ├── TokenBalance.jsx       # Token balance display
│   ├── PropertyMetadata.jsx   # Property details card
│   ├── InvestorDashboard.jsx  # Portfolio dashboard
│   └── ErrorNotification.jsx  # Error toast notifications
└── styles/
    └── web3.css               # Web3 component styles
```

## Updating Contract Addresses

Currently, the app uses **placeholder/mock contracts**. When you have real contract addresses:

### Step 1: Update `src/config/web3Config.js`

```javascript
export const CONTRACTS = {
  PROPERTY_TOKEN_1: {
    address: '0xYourRealContractAddress', // ← Update this
    name: 'Astarte Property Token Alpha',
    symbol: 'RSPT-A',
    network: 'POLYGON_AMOY',          // or 'POLYGON_MAINNET'
    propertyName: 'Downtown Manhattan Office Tower',
    propertyValue: '$50,000,000',
    totalSupply: '1000000'
  },
  // Add more properties as needed
}
```

### Step 2: Update Network (if needed)

```javascript
// Change DEFAULT_NETWORK to production when ready
export const DEFAULT_NETWORK = SUPPORTED_NETWORKS.POLYGON_MAINNET
```

### Step 3: Update Token ABI (if using custom tokens)

If your tokens have additional functions beyond standard ERC-20:

```javascript
export const ERC20_ABI = [
  // Standard ERC-20
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function balanceOf(address) view returns (uint256)',

  // Add your custom functions here
  'function dividendPerToken() view returns (uint256)',
  'function claimDividends() returns (bool)',
]
```

## Features Explained

### 1. Wallet Connection

The **WalletButton** in the header allows users to:
- Connect their MetaMask wallet
- View their connected address
- Disconnect when done

**Code location**: `src/components/web3/WalletButton.jsx:13`

### 2. Network Management

The **NetworkIndicator** shows:
- Current connected network
- Warning if on wrong network
- Quick switch button to default network

**Code location**: `src/components/web3/NetworkIndicator.jsx:10`

### 3. Token Balance Display

**TokenBalance** component fetches and displays:
- User's token holdings for each property
- Automatic updates when wallet changes
- Mock data for placeholder contracts

**Code location**: `src/components/web3/TokenBalance.jsx:13`

### 4. Property Metadata

**PropertyMetadata** shows:
- Property name and details
- Total token supply
- Property valuation
- Contract address (when real)

**Code location**: `src/components/web3/PropertyMetadata.jsx:12`

### 5. Investor Dashboard

The **InvestorDashboard** appears when a wallet is connected and displays:
- Portfolio overview with all token holdings
- Individual property cards with metadata
- Responsive grid layout

**Code location**: `src/components/web3/InvestorDashboard.jsx:8`

## Configuration Options

### Supported Networks

The app is pre-configured for:
- ✅ Polygon Mainnet
- ✅ Polygon Amoy Testnet (default)
- ✅ Ethereum Mainnet
- ✅ Ethereum Sepolia Testnet

To add Hedera or other networks, update `SUPPORTED_NETWORKS` in `src/config/web3Config.js:3`

### Adding New Properties

To add a new tokenized property:

1. Add to `CONTRACTS` object in `src/config/web3Config.js:53`
2. The dashboard will automatically display it
3. No other code changes needed

Example:

```javascript
PROPERTY_TOKEN_3: {
  address: '0xNewContractAddress',
  name: 'Astarte Property Token Gamma',
  symbol: 'RSPT-G',
  network: 'POLYGON_AMOY',
  propertyName: 'Austin Tech Campus',
  propertyValue: '$28,000,000',
  totalSupply: '500000'
}
```

## Testing Checklist

- [ ] Connect wallet with MetaMask
- [ ] Verify network indicator shows correct network
- [ ] Switch networks and confirm network indicator updates
- [ ] View account dropdown with full address
- [ ] Copy address to clipboard
- [ ] Verify investor dashboard appears when connected
- [ ] Check token balances display correctly
- [ ] Verify property metadata shows for each property
- [ ] Disconnect wallet and confirm UI updates
- [ ] Test error notifications (try connecting without MetaMask)

## Current Limitations (MVP)

This is a **read-only** MVP. It does NOT include:
- ❌ Token purchase/transfer functionality
- ❌ Smart contract write operations
- ❌ KYC/AML verification
- ❌ Secondary market trading
- ❌ Dividend claiming

These features can be added in future iterations.

## Troubleshooting

### "MetaMask is not installed" error
- Install MetaMask browser extension
- Refresh the page

### Token balances show "0" or "Error"
- Verify contract address is correct
- Check you're on the correct network
- Ensure your wallet holds tokens

### "Wrong network" warning
- Click the "Switch" button in the network indicator
- Or manually switch in MetaMask

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Security Notes

1. **Never commit private keys** to version control
2. **Validate all user inputs** before sending transactions (future)
3. **Use environment variables** for sensitive config (future)
4. **Audit smart contracts** before mainnet deployment
5. **Test thoroughly** on testnet before production

## Next Steps

To expand beyond MVP:

1. **Add Write Operations**
   - Token purchasing flow
   - Transfer approvals
   - Dividend claiming

2. **Integrate Backend**
   - KYC/AML verification API
   - User authentication
   - Transaction indexing

3. **Enhanced UI**
   - Transaction history
   - Charts and analytics
   - Real-time price updates

4. **Multi-chain Support**
   - Hedera integration
   - Cross-chain bridges
   - Network auto-detection

## Support

For questions or issues with the web3 integration, check:
- `src/config/web3Config.js` - Configuration
- `src/contexts/Web3Context.jsx` - Core logic
- Console logs for debugging

## File Structure Reference

**Configuration**:
- `/workspace/astarte/src/config/web3Config.js:1` - All web3 settings

**State Management**:
- `/workspace/astarte/src/contexts/Web3Context.jsx:1` - Wallet state
- `/workspace/astarte/src/hooks/useWallet.js:1` - Hook interface

**UI Components**:
- `/workspace/astarte/src/components/web3/WalletButton.jsx:1`
- `/workspace/astarte/src/components/web3/AccountDropdown.jsx:1`
- `/workspace/astarte/src/components/web3/NetworkIndicator.jsx:1`
- `/workspace/astarte/src/components/web3/TokenBalance.jsx:1`
- `/workspace/astarte/src/components/web3/PropertyMetadata.jsx:1`
- `/workspace/astarte/src/components/web3/InvestorDashboard.jsx:1`
- `/workspace/astarte/src/components/web3/ErrorNotification.jsx:1`

**Styling**:
- `/workspace/astarte/src/styles/web3.css:1` - All web3 styles
