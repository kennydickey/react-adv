import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
 static defaultProps = {
  sides: ['one', 'two', 'three', 'four', 'five', 'six']
 };
  constructor(props){
   super(props);
   // set initial vals
   this.state = { die1: 'one', die2: 'two', rolling: false };
   // tell react that we want 'this' to be our component itself vv
   this.roll = this.roll.bind(this);
  }
  roll(){
   //get random index for this.props.sides on each die
   const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
   const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
   //the actual roll vv
   this.setState({ die1: newDie1, die2: newDie2, rolling: true });
   console.log('rolled');
   //wait one sec, then set rolling to false
   setTimeout(() => {
    this.setState({rolling: false})
   }, 500)
  }
  render() {
   return (
    <div className="RollDice">
     <div className="RollDice-container">
     <Die face={this.state.die1} rolling={this.state.rolling} /> {/* face is a prop */}
     <Die face={this.state.die2} rolling={this.state.rolling}/>
     </div>
     <button onClick={this.roll} disabled={this.state.rolling}> {/*disabled takes a boolean*/}
      {this.state.rolling ? 'Rolling..' : 'Press to roll'}
     </button>
    </div>
   );
  }
}

export default RollDice;
