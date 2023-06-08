import React from 'react';
import './Card.css'
import noImg from '../../assets/Noimage-Small.png'
import { Link } from 'react-router-dom';


const Card = ({ name, image, id, displaySingleCharacterCard }) => {
  const noImage = <img className="no-card-img" src={noImg} alt="" />;
  return (
    <Link to={`/${id}`} key={`/${id}`}>
      <div className='card'>
        {!image ? (<div className="img">{noImage}</div>) : (<img className="img" src={image} onClick={() => displaySingleCharacterCard(id)}/>)}
      <h3>{name}</h3>
      </div>
    </Link>
  )
}




export default Card;
