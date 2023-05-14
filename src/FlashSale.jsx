import React from 'react'
import './flashsale.css'
import Card from './Card'

const FlashSale = () => {
  let arr=[1,2,3,4,5,6,7,8,]
  return (
    <div className='darazclone__flashsale'>
     <div className='darazclone__flashsale-text'>
     <p>On Sale Now 
      </p>
      <p>Ending IN</p>
     </div>
    <div className='darazclone__flashsale-countdown'>
   
    <p>00:</p>
    <p>00:</p>
    <p>00:</p>
    <p>00</p>
    </div> 
    <div className='darazclone__flashsale-product'>
       {arr.map((item,index) => 
          <Card  item = {item} key={index} />
         )}
    </div>

    </div>
  )
}

export default FlashSale