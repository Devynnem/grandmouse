import React from 'react';

const Favorites = ({ favorites }) => {
  const favoriteCharacters = favorites.map((favorite, id) => {
    <div className='card'>
     <p key={id}>{favorite}</p>
    </div>
  })

  

  return (
    <div className='fav-container'>
      {!favorites.length && <h2>No Favorite Characters yet!</h2>}
      {/* <button
        className="favorite-button"
        name={favoriteCharacters.name}
        // onClick={() => handleEvent()}
      >
      </button> */}
      {favoriteCharacters}
    </div>
  )
}

export default Favorites;