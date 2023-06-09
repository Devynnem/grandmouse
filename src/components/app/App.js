import React, { Component } from 'react';
import Characters from '../characters/Characters';
import Header from '../header/Header';
import './App.css';
import acquireInfo from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';
import SingleCharacterCard from '../singleCharacterCard/SingleCharacterCard';
import Favorites from '../favorites/Favorites';
import Error from '../error/Error';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      singleCharacter:{},
      favorites: [],
      alreadyFavorited: false,
      error: null
    };
  };

  componentDidMount() {
    const pageInfo = '?page=60&pageSize=50'
    acquireInfo(pageInfo)
    .then(data => {
        this.setState({ characters: data.data })
      })
      .catch(() => {
        this.setState({ error: "Something went worng, please try again!" })
      })
  };

  displaySingleCharacterCard = (id) => {
    acquireInfo(`/${id}`)
    .then(data => {
      this.setState({ singleCharacter: data.data })
    })
    .catch(() => {
      this.setState({ error: "Something went worng, please try again!" })
    })
  };

  addFavorite = (newFav) => {
    const existingFav = this.state.favorites.find(fav => fav[0] === newFav[0]);
    if (!existingFav) {
      this.setState({ favorites: [...this.state.favorites, newFav], alreadyFavorited: false });
    } else {
      this.setState({ alreadyFavorited: true });
      setTimeout(() => {
        this.setState({ alreadyFavorited: false });
      }, 3000);
    };
  };
  

  render() {
    return (
      <main className='App'>
        <Header />
          {this.state.alreadyFavorited && (<h2>Already Favorited!</h2>) }
        <Switch>
          <Route exact path="/error"> 
            <Error error="Something went wrong, please try again!" />
          </Route>
          <Route exact path="/favorites" render={() => <Favorites favorites={this.state.favorites} />} />
          <Route exact path="/:id" render={({ match }) => {
            const characterId = match.params.id;
            return <SingleCharacterCard  characterId= {characterId} />}
          }/>
          {this.state.error && (<Redirect to="/error" />) }
         <Route exact path="/" render={() => <Characters characters={this.state.characters} addFavorite={this.addFavorite}/>} /> 
         <Route path="*" render={() => (<div> <Error error="This path does not exist."/> </div> )} />
        </Switch>
      </main>
    );
  };
};

export default App;
App.propTypes = {
  characters: PropTypes.string,
  singleCharacter: PropTypes.object,
  favorites: PropTypes.array,
  alreadyFavorited: PropTypes.bool,
  displaySingleCharacterCard: PropTypes.func,
  addFavorite: PropTypes.func
}