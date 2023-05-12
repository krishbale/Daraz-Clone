import React from 'react'
import logo from './../assets/logo.png';
import searchicon from './../assets/searchicon.png'
import signinpic from './../assets/account.png'
import cartpic from './../assets/cart.png'
import './../style/navbar.css'
import
{AiOutlineShoppingCart} from 'react-icons/ai/';
const Navbar = () => {
  return (
    <div className='daraz__navbar'>
    <div className="daraz__navbar-logo">
    <img src={logo} alt="Daraz logo" />

    </div>
    <div className="daraz__navbar-searchbar">
    <div className='daraz__navbar-searchbar_input'>
    <input type="text" placeholder='Search for products...' />
    <button type='submit'><img src={searchicon} alt="" /></button>
    </div>
    
   
    </div>
    <div className='daraz__navbar-signin'>
     <img src={signinpic} alt="signinpic" />
     <p>Sign Account</p>
    </div>
    <div className='daraz__navbar-cart'>
    <p>Cart</p>
    <img src={cartpic} alt="" />
     {/* <AiOutlineShoppingCart className='daraz__navbar-cart_carticon' /> */}
    
    </div>
     
    </div>
  )
}

export default Navbar