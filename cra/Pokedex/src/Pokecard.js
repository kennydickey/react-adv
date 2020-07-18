import React, { Component } from 'react';
import './Pokecard.css';


// for sprites, looking for result of.. 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png';
//hd images VV
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//if num less than 999, add num onto 00 for ex 0023 and slice last 3 to get 023
//else return num as is
let padThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
 render() {
  let imgend= `${POKE_API}${padThree(this.props.id)}.png`
  return (
  <div className="Pokecard">
   <h1 className="Pokecard-title">{this.props.name}</h1>
   <div className="Pokecard-image">
    <img src={imgend} alt={this.props.name} />
   </div>
   <div className="Pokecard-data">Type: {this.props.type}</div>
   <div className="Pokecard-data">Exp: {this.props.exp}</div>
  </div>
  );
 }
}

export default Pokecard;