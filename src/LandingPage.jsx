import React from 'react'

let arr = [1,2,3]
import './landing.css';
import Card from './Card'
const LandingPage = () => {
  return (
    <div className="daraz_landback">

    
    <div className='daraz__landingpage  '>
      <div className="daraz__landingpage-category">
     
       <div className="daraz__landingpage-category_items">
        <ul>
          <li>
            <a href="#">
            <p>Women's Fashion</p>
        
            </a>
          </li>
          <li>
            <a href="#">
            <p>Health & Beauty </p>
        
            </a>
          </li>
          <li>
            <a href="#">
            <p>Men's Fashion</p>
        <p>Watches, Bags, Jewelery</p>
       
            </a>
          </li>
          <li>
            <a href="#">
            <p>Electronics Devices</p>
      
            </a>
          </li>
          <li>
            <a href="#">
            <p>TV & Home Appliances</p>
        <p>Groceries & Pets</p>
       
            </a>
          </li>
          <li>
            <a href="#">
            <p>Babies & Toys</p>
      
            </a>
          </li>
          <li>
            <a href="#">
            <p>Home & LifeStyle</p>
        
            </a>
          </li>
          <li>
            <a href="#">
            <p>Sports & Outdoor</p>
       
            </a>
          </li>

        </ul>
      
       </div>
        
      </div>
      <div className="daraz__landingpage-image">
        <img src="https://icms-image.slatic.net/images/ims-web/780b97b9-9104-45e0-9a9a-a9357d760015.jpg_1200x1200.jpg" alt="coverpage" />
      </div>
   
    </div>
    </div>
  )
}

export default LandingPage