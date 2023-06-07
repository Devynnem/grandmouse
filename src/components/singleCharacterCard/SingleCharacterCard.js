import React from 'react';
import './SingleCharacterCard.css';
import { Link } from 'react-router-dom';



const SingleCharacterCard = ({ character }) => {
  // console.log("single character", character.imageURL)
  return (
    <div className="single-character-card">
      <img className="single-img"src={character.imageUrl} />
      <div className="character-info">
        <h2 className="character-name">{character.name}</h2>
        <p>Films:   {character.films}</p>
        <p>TV Shows:   {character.tvShows}</p>
      {/* <p>Tagline: {character.tagline}</p>
      <p>Plot: {character.overview}</p>
      <p>Runtime: {character.runtime} min</p>
      <p>Average Rating: {characterRating}</p>
      <p>Budget: ${character.budget}</p>
      <p>Revenue: ${character.revenue}</p> */}
    {/* <Link to={'/'} key={`${character.id}`}><button className="back-to-main" onClick= {() => displayMainPage()}>Back to Movies</button></Link> */}
      </div>
  </div>
  )
}





export default SingleCharacterCard;