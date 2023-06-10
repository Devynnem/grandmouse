import React from 'react';
import Card from '../card/Card';
import './Characters.css';
import PropTypes from "prop-types"


const Characters = ({ characters, addFavorite }) => {
  const characterCards = characters.map(character => {
    return (
      <Card 
        image={character.imageUrl}
        name={character.name}
        films={character.films}
        id={character._id}
        key={character._id}
        // displaySingleCharacterCard={displaySingleCharacterCard}
        addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='characters-container'>
      {characterCards}
    </div>
  )
}


export default Characters;

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  displaySingleCharacterCard: PropTypes.func,
  addFavorite: PropTypes.func
}