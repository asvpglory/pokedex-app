import './App.css';
import Pokedex from './Pokedex';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export default App;
