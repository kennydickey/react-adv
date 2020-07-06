class Hello extends React.Component {
	render() {
		return (
			//jsx here vv
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
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
// 			<h1>Hello there!</h1>
// 		</div>
// 	)
// }

// tell react dom what and where to render
ReactDOM.render(<Hello />, document.getElementById('root'));
