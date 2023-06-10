import React from 'react'
import './servicebutton.css'
const ServiceButton = () => {
  return (
    <div className='darazclone__service'>
     
     <div className='darazclone_serviceimage'>
        <img src='https://icms-image.slatic.net/images/ims-web/3648b8bb-990a-42e6-9e72-8581012011ea.png' />
        <p> Mart</p>
        </div>

        <div className='darazclone_serviceimage'>
   
      <img src='https://icms-image.slatic.net/images/ims-web/a78f5a8e-8db8-4c04-bcaf-6729d486a17a.gif'/>
      <p>Fashion</p>
      </div>
      <div className='darazclone_serviceimage'>
      <img src='https://icms-image.slatic.net/images/ims-web/a340da07-79cb-4767-877e-44f5adbcc4f5.png' /> 
      <p>Home & Decor</p>
      </div>
      <div className='darazclone_serviceimage'>
      <img src='https://icms-image.slatic.net/images/ims-web/f11ff793-bc02-4348-aec9-d3351ee8640b.png' />
      <p> Proudly Nepali</p>

      </div>
    
  
    </div>
  )
}

export default ServiceButton