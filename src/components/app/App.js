import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Characters from '../characters/Characters';
import Header from '../header/Header';
import './App.css';
import acquireInfo from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    acquireInfo()
    .then(data => {
        console.log("App character state", data.data)
        this.setState({ characters: data.data })
      })
      .catch(err => {
        throw new Error(`${err}`)
      })
  }
  

  render() {
    return (
      <main className='App'>
        <Header />
        {console.log("state?", this.state.characters)}
        <Characters characters={this.state.characters}/>
      </main>
    )
  }
}

export default App;