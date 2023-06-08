import React from 'react';

const Favorites = ({ favorites }) => {
  console.log(favorites)
  const favoriteCharacters = favorites.map(favorite => {
    return (
      <div key={favorite[0]}>
        <p>{favorite[0]}</p>
        <img className="img" src={favorite[1]} />
      </div>
    )
  })

  

  return (
    <div className='fav-container'>
      {!favorites.length && <h2>No Favorite Characters yet!</h2>}
      {favoriteCharacters}
    </div>
  )
}

export default Favorites;