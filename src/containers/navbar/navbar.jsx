import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className="travel__navbar">
      <div className="navbar__logo">
        <h1 className="logo_text">TravelTimes</h1>
      </div>
      <div className="navbar__links">
        <ul className="navbar-list">
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About us</a></li>
          <li><a href='#destination'>Destinations</a></li>
          <li><a href='#gallery'>Gallery</a></li>
        </ul>
      </div>
      <div className="navbar__sign">
          <ul className="sign_in">
            <li><a>Sign in</a></li>
            <li> <button>Login</button></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar