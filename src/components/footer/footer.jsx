import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="first-section">
        <ul className="footer-links">
          <li><a href="">Destinations</a></li>
          <li><a href="">FAQs</a></li>
          <li><a href="">Developer Tools</a></li>
          <li><a href="">Contribute</a></li>
        </ul>
      </div>
      <div className="footer-me">
        <ul className="this-page">
          <li><a href="">Locate us</a></li>
          <li><a href="">Write for us</a></li>
          <li><a href="">Report a Bug</a></li>
          <li><a href="">Buy me a coffee</a></li>
        </ul>
      </div>
      <div className="footer-social">
        <ul className="socials">
          <li><a href="">Github</a></li>
          <li><a href="">LinkedIn</a></li>
          <li><a href="">Twitch</a></li>
          <li><a href="">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer