import React, {Component} from 'react';
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import Pokecard from './Pokecard';
import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App">
      <Pokecard
      id={4}
      name="example card"
      type="fire"
      exp={62}
      />
      {/* <Pokedex/> */}
      <Pokegame />
    </div>
  );
  }
}

export default App;
