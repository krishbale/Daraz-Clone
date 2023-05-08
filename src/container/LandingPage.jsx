import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
let arr = [1,2,3]
import './../style/landing.css'
import Card from '../components/Card'
const LandingPage = () => {
  return (
    <div className='daraz__landingpage  section__margin'>
      <div className="daraz__landingpage-category">
       <div className="daraz__landingpage-category_menu">
       
      
        <p>  <GiHamburgerMenu  /> Browse Products</p>
        
       </div>
       <div className="daraz__landingpage-category_items">
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
        <p>Women's Fashion</p>
       </div>
        
      </div>
      <div className="daraz__landingpage-image">
        <img src="" alt="coverpage" />
      </div>
      <div className="daraz__landingpage-specialoffer">
        {arr.map((item,index) => 
          <Card  item = {item} key={index} />
         )}
      </div>
    </div>
  )
}

export default LandingPage