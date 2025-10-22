import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand">Red<span>Swan</span></a>
          <p>Tokenizing institutional commercial real estate for global investors.</p>
          <div className="footer-meta">
            <span>hello@redswan.io</span>
            <span>+1 (713) 555-0182</span>
          </div>
        </div>
        <div className="footer-nav">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#solutions">Services</a>
          <a href="#projects">Projects</a>
          <a href="#news">Insights</a>
        </div>
        <div className="footer-nav">
          <h4>Resources</h4>
          <a href="#">Documentation</a>
          <a href="#">Investor FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe</h4>
          <p>Receive platform updates and new investment opportunities.</p>
          <form className="footer-form">
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2024 RedSwan Exchange. All rights reserved.</span>
        <a href="#home" className="back-to-top">Back to top</a>
      </div>
    </footer>
  )
}
