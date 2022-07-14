import './App.css';
import Pokecard from './Pokecard';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard
          id={4}
          name="Charmander"
        />
      </div>
    );
  }
}

export default App;
