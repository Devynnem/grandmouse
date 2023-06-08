import React, { Component } from 'react';
import Characters from '../characters/Characters';
import Header from '../header/Header';
import './App.css';
import acquireInfo from '../../apiCalls';
import { Route } from 'react-router-dom'
import SingleCharacterCard from '../singleCharacterCard/SingleCharacterCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      singleCharacter:{}
    }
  }

  componentDidMount() {
    const pageInfo = '?page=60&pageSize=50'
    acquireInfo(pageInfo)
    .then(data => {
        this.setState({ characters: data.data })
      })
      .catch(err => {
        throw new Error(`${err}`)
      })
  }

  displaySingleCharacterCard = (id) => {
    acquireInfo(`/${id}`)
    .then(data => {
      this.setState({ singleCharacter: data.data })
    })
    .catch(err => {
      throw new Error(`${err}`)
    })
  }
  

  render() {
    return (
      <main className='App'>
        <Header />
        <Route exact path="/" render={() => <Characters characters={this.state.characters} displaySingleCharacterCard={this.displaySingleCharacterCard}/>} />
        <Route path="/:id" render={({ match }) => {
          const characterId = match.params.id;
          this.displaySingleCharacterCard(characterId);
          return (<SingleCharacterCard character={this.state.singleCharacter} />)}
        }/>
        {/* {console.log(this.state.singleCharacter)} */}
      </main>
    )
  }
}

export default App;