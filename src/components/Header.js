import React from 'react';
import logo from './header-images/logo.png';
import pharmacy from './header-images/pharmacy.png';
import "@fontsource/poppins";

function Header() {
  return (
    
    /* Header */
    
    <div className='header'>
      <div className='header-logo'>
        <img src={logo} alt="" />
      </div>
      <div className='header-pharmacy'>
        <img src={pharmacy} alt="" />
      </div>
      <button style={{fontFamily:'poppins'}} className='header-homepage-btn'>Homepage</button>
      <h1 style={{fontFamily:'poppins'}} className='header-all-pharmacies'>All Pharmacies</h1>
      <h1 style={{fontFamily:'poppins'}} className='header-add-new'>Add New</h1>
      <h1 style={{fontFamily:'poppins'}} className='header-contact'>Contact</h1>
      <button style={{fontFamily:'poppins'}} className='header-login-btn'>Login</button>
    </div>
  )
  
}
export default Header
