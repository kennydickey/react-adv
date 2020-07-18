//imrc snippet
import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
 //moved defaultprops to pokegame
 static defaultProps = {
  pokemon : [
   {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
   {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
   {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
   {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
   {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
   {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
   {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
   {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
 };
 render(){
  let title;
  if(this.props.isWinner) {
   title = <h1 className="Pokedex-winner">Winning Hand</h1>
  } else {
   title = <h1 className="Pokedex-loser">Losing Hand</h1>
  }
  return (
   <div className="Pokedex">
    {title}
    <h1>Pokedex!</h1>
    <h3>Total Experience: {this.props.exp}</h3> {/* exp and isWinner coming from our prop in Pokegame within Pokedex component */}
    <p>{this.props.isWinner ? 'winner!' : 'second place!'}</p>
    <div className="Pokedex-cards">
    {this.props.pokemon.map((p) => (
     <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_exp} />
     ))
    }
    </div>
   </div>
  )
 }
}

export default Pokedex;