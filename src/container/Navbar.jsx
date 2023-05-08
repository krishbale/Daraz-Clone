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
    
    <div className="daraz__navbar-searchbar_categories">
    <label for="">Categories:</label>

      <select name="category" id="category">
        <option value="laptop">Laptop</option>
        <option value="Desktop">Desktop</option>
        <option value="Tablet">Tablet</option>
        <option value="Smartphone">Smartphones</option>
      </select>
     
    </div> 

    </div>
    <div className='daraz__navbar-signin'>
     <img src={signinpic} alt="signinpic" />
     <p>Sign Account</p>
    </div>
    <div className='daraz__navbar-cart'>
     <AiOutlineShoppingCart className='daraz__navbar-cart_carticon' />
      <p>Cart</p>
    </div>
     
    </div>
  )
}

export default Navbar