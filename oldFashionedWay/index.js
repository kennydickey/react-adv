
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
		const num = getNum();
		return (
			//jsx here vv
			<div>
				{/* multiple siblings must be in a div */}
				<h1>Hello there!</h1>
				<h1>embedded js 2x4 {2 * 4}</h1>
				<h1>current mood is {getMood()}</h1>
				<h1>random num is {num}</h1>
				{/* ternary if num = 7 this else that*/}
				<p>{num === 7 ? 'congrats!' : 'wrong num :('}</p>
				{/* multi line ternary */}
				{
					num === 7 ? <img src="https://images.unsplash.com/photo-1551726195-9d356d629367?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"/>
					: null
				}
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

// tell react dom what and where to render
ReactDOM.render(<Hello />, document.getElementById('root'));
