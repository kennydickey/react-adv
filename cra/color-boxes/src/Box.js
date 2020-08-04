import React, { Component } from 'react';
import { choice } from './helpers'
import './Box.css'

class Box extends Component {
 constructor(props){
  super(props);
  this.state = { color: choice(this.props.colors) };
  this.handleClick = this.handleClick.bind(this);
 }
 pickColor(){
  let newColor;
  do {
   newColor = choice(this.props.colors);
   //if new color is same as current, choose another
  } while (newColor === this.state.color);
  this.setState({ color: newColor });
 }
 handleClick(){
  this.pickColor()
 }
 render(){
  return (
   <div className="Box" 
   //double brackets here indicate css inside of jsx
   style={{backgroundColor: this.state.color}}
   onClick={this.handleClick}>  
   </div>
  )
 }
}

export default Box;