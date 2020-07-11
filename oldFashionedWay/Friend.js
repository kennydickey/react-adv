class Friend extends React.Component {
	render() {
  const { name, hobbies } = this.props; //name = this.props.name etc
  return(
   <div>
    <p>I am a friend</p>
    <h1>{name}</h1>
    <ul>
     <li>Singing</li>
     <li>Dancing</li>
    </ul>
   </div>
  );
 }
}