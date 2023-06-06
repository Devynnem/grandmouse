import React from 'react';
import './Card.css'

const Card = ({ name, image }) => {
  return (
    <div className='card'>
       <img className="single-img" src={image} />
      <h3>{name}</h3>
    </div>
  )
}




export default Card;
