import React from 'react';
import './Card.css'
import noImg from '../../assets/Noimage-Small.png'
const Card = ({ name, image }) => {
  const noImage = <img className="no-card-img" src={noImg} alt="" />;
  return (
    <div className='card'>
       {!image ? (<div>{noImage}</div>) : (<img className="single-img" src={image} />)}
      <h3>{name}</h3>
    </div>
  )
}




export default Card;
