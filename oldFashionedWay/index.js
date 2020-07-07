class App extends React.Component {
	render(){
		return (
		//div here allows us to place multiple components
		<div>
				<Hello />
				<NumPicker />
		</div>
		)
		}
}


// tell react dom what and where to render
ReactDOM.render(<App />, document.getElementById('root'));
