import React from 'react';
import './Card.css'
import noImg from '../../assets/Noimage-Small.png'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"


const Card = ({ name, image, id, addFavorite }) => {
  const noImage = <img className="no-card-img" src={noImg} alt="" />;
  return (
    <div className='card-div'>
      <button className='fav-btn' onClick={() => addFavorite([name, image, id])}>❤️</button>
      <Link to={`/${id}`} key={`/${id}`}>
        <div className='card' >
          {!image ? (<div className="img">{noImage}</div>) : (<img className="img" src={image} />)}
          <h3>{name}</h3>
        </div>
      </Link>
    </div>
    
  )
}


export default Card;

Card.propType = {
  name: PropTypes.string,
  id: PropTypes.number,
  displaySingleCharacterCard: PropTypes.func,
  addFavorite: PropTypes.func
}
