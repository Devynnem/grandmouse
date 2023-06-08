import React from 'react';
import './SingleCharacterCard.css';



const SingleCharacterCard = ({ character }) => {
  // console.log(character)
  return (
    <div className="single-character-card">
      <img className="single-img"src={character.imageUrl} />
      <div className="character-info">
        <h2 className="character-name">{character.name}</h2>
        {/* {character.films.length === 0 ? (<p>No films yet!</p>) : (<p>Films:   {character.films}</p>)}
        {character.tvShows.length === 0 ? (<p>No TV Shows yet!</p>) : (<p>TV Shows:   {character.tvShows}</p>)} */}
      </div>
  </div>
  )
}





export default SingleCharacterCard;