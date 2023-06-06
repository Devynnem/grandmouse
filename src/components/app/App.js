import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
  }

  render() {
    return (
      <h1>GrandMouse</h1>
    )
  }
}

export default App;