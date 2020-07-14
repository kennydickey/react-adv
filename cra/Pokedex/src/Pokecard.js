import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// looking for result of.. 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png';

class Pokecard extends Component {
 render() {
  let imgend= `${POKE_API}${this.props.id}.png`
  return (
  <div className="Pokecard">
   <h1>{this.props.name}</h1>
   <img src={imgend} alt={this.props.name} />
   <div>Type: {this.props.type}</div>
  <div>Exp: {this.props.exp}</div>
  </div>
  );
 }
}

export default Pokecard;