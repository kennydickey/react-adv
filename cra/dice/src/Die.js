import React, { Component } from 'react';
import "./Die.css";

class Die extends Component {
 render(){
  // inclide Die in the className to attach css
  // return <i className={`Die fas fa-dice-${this.props.face}`}></i> //"fas fa-dice-one"
 return <i className={`Die ${this.props.face} ${this.props.rolling ? 'shaking' : '' }`}>{this.props.face}</i> //temp patch fix for fa not rendering
 }
}
export default Die;
