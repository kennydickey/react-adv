import React, { Component } from 'react'
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
 static defaultProps = {
  allColors: ['purple', 'magenta', 'violet', 'pink'],
  numBoxes: 18
 }
 render() {
  //create new arr while specifying length of new arr and map over each piece of arr while placing a box into each
  const boxes = Array.from({length: this.props.numBoxes}).map(
   //set a prop in box for use in box component
   () => <Box colors={this.props.allColors}/> // can add parens after arrow fn for multi lines
  )
  return <div className='BoxContainer'>{boxes}</div>
 }
}

export default BoxContainer;