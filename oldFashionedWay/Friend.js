class Friend extends React.Component {
	render() {
  const { name, hobbies } = this.props; //name = this.props.name etc
  return(
   <div>
    <h1>{name}</h1>
    <ul>
     <li>Dancing</li>
     {/* curlys within jsx markup to make h dynamic as part of js */}
     {hobbies.map(h => <li>{h}</li>)}
    </ul>
   </div>
  );
 }
}