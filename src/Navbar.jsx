import React from 'react'
import logo from './assets/Logo.png'
import searchicon from './assets/searchicon.png'
import signinpic from './assets/account.png'
import cartpic from './assets/cart.png'
import './navbar.css'


const Navbar = () => {
  return (
    <div className='daraz__navbar'>
    <div className="daraz__navbar-logo">
    <img src={logo} alt="Daraz logo" />

    </div>
    <div className="daraz__navbar-searchbar">
    <input type="text" placeholder='Search for products...' />
    <img src={searchicon} alt="" />
   
   
    </div>
    <div className='daraz__navbar-signin'>
     <img src={signinpic} alt="signinpic" />
     <p>Sign Account</p>
    </div>
    <div className='daraz__navbar-cart'>
    <p>Cart</p>
    <img src={cartpic} alt="" />
    
    
    </div>
    <div className="daraz__navbar-livebanner">
     <img src="https://icms-image.slatic.net/images/ims-web/5f6edc41-ecbe-4328-8fdf-da3ad500c7c7.gif" alt="" />
    </div>
     
    </div>
  )
}

export default Navbar