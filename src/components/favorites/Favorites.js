import React from 'react';
import './Favorites.css';
import PropTypes from "prop-types";


const Favorites = ({ favorites }) => {
  const favoriteCharacters = favorites.map(favorite => {
    return (
      <div className='fav-card' key={favorite[0]}>
        <p>{favorite[0]}</p>
        <img className="img" src={favorite[1]} />
      </div>
    );
  });

  return (
    <div>
      {!favorites.length && <h2>No Favorite Characters yet!</h2>}
      <div className='fav-container'>
        {favoriteCharacters}
      </div>
    </div>
  );
};

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array
}