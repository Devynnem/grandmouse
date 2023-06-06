import React from 'react';
import Card from '../card/Card';
import './Characters.css';


const Characters = ({ characters }) => {
  // console.log(characters.data)
  const characterCards = characters.map(character => {
    return (
      <Card 
        image={character.imageUrl}
        name={character.name}
        films={character.films}
        id={character._id}
        key={character._id}
      />
    )
  })
  console.log("characterCards",characterCards)
  return (
    <div className='characters-container'>
      {characterCards}
    </div>
  )
}


export default Characters;