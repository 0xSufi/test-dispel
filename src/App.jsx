import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Web3Provider } from './contexts/Web3Context'
import Header from './components/Header'
import Intro from './components/Intro'
import Solutions from './components/Solutions'
import Why from './components/Why'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Partners from './components/Partners'
import Featured from './components/Featured'
import News from './components/News'
import CTA from './components/CTA'
import Footer from './components/Footer'
import InvestorDashboard from './components/web3/InvestorDashboard'
import TokenHoldings from './components/web3/TokenHoldings'
import ErrorNotification from './components/web3/ErrorNotification'

function HomePage() {
  return (
    <>
      <Intro />
      <InvestorDashboard />
      <Solutions />
      <Why />
      <Benefits />
      <Process />
      <Partners />
      <Featured />
      <News />
      <CTA />
    </>
  )
}

function App() {
  return (
    <Web3Provider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/holdings" element={<TokenHoldings />} />
          </Routes>
        </main>
        <Footer />
        <ErrorNotification />
      </Router>
    </Web3Provider>
  )
}

export default App
