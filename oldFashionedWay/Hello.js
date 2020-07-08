function getMood() {
	const moods = [ 'angry', 'silly' ]
	//return a random mood based on random index of moods arr
	return moods[Math.floor(Math.random() * moods.length)];
}
function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class Hello extends React.Component {
	render() {
  console.log(this.props); //props are added to declaration in higher component, shows as an obj in console, also try this.props.to as example to grab parts of obj
  //this.props.name = coltsCat // does not work here bc props are immutable
  const num = getNum();
  //repeat a string amount of times specified in out prop
  let bangs = "!".repeat(this.props.bangs)
		return (
			//jsx here vv
			<div>
				{/* multiple siblings must be in a div */}
  <h1>Hello there! {this.props.to} from {this.props.from} {bangs}</h1>
				<h1>embedded js 2x4 {2 * 4}</h1>
				<h1>current mood is {getMood()}</h1>
			</div>
		);
	}
}

//equivalent
// function Hello() {
// 	return (
// 		<div>
// 			<h1>Hello there!</h1>
//  		<h1>Hello there!</h1>
// 		</div>
// 	)
// }