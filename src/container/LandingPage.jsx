import React from 'react'

let arr = [1,2,3]
import './../style/landing.css'
import Card from '../components/Card'
const LandingPage = () => {
  return (
    <div className='daraz__landingpage  section__margin'>
      <div className="daraz__landingpage-category">
       <div className="daraz__landingpage-category_menu">
       
      
        <p>  Browse Products</p>
        
       </div>
       <div className="daraz__landingpage-category_items">
        <p>Women's Fashion</p>
        <p>Health & Beauty </p>
        <p>Men's Fashion</p>
        <p>Watches, Bags, Jewelery</p>
        <p>Electronics Devices</p>
        <p>TV & Home Appliances</p>
        <p>Groceries & Pets</p>
        <p>Babies & Toys</p>
        <p>Home & LifeStyle</p>
        <p>Sports & Outdoor</p>
        <p>Motors,Tools & DIY</p>
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