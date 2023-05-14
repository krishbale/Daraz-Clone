import React from 'react'
import './Card.css';
const Card = ({item}) => {
  return (
    <div className='product' key={item}>
      <img src='https://static-01.daraz.com.np/p/04e931235c213ba2b4fde3183ab1277c.jpg'></img>
      <p>3 in One set ladies bag </p>
      <p> Rs.999
      </p>
    </div>
  )
}

export default Card