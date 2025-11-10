import React from 'react'
import './Navbar.css';
import navlogo from '../../assets/logo.png';
import navProfile from '../../assets/nav_profile.jpeg'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={navlogo} alt="" />
        <div>
          <h2>SHOPPER</h2>
          <p>Admin Panel</p>
        </div>
      </div>

      <img src={navProfile} alt="" className="nav-profile" />
    </div>

  )
}

export default Navbar;