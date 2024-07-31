import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import logo_profile from '../../assets/logo_profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-header'>
        <img src={logo} alt="" className="nav-logo" />
        <h3>STYLISH.COM</h3>
      </div>
      <img src={logo_profile} alt="" className="nav-profile-logo" />
    </div>
  )
}

export default Navbar
