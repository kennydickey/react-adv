class NumPicker extends React.Component {
	render() {
		const num = getNum();
		return (
			//jsx here vv
			<div>
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