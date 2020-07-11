class App extends React.Component {
	render(){
		return (
		//div here allows us to place multiple components
		<div>
			{/* with our props (properties) */}
				<Hello 
				to='Ringo' 
				from='Paul'
				num={3} //must be str or barackets, will not parse num=3 for ex
				data={[1,2,3,4]}
				isFunny // same as saying isFunny={true}
				bangs={4}
				/>

				<Friend
					name="elton"
					hobbies={['piano', 'singing']}
				/>
				<Friend
					name="frida"
					hobbies={['drawing', 'painting']}
				/>

				<NumPicker img="https://i.pinimg.com/originals/17/5e/2f/175e2f55ecb45be4927d457e9dbfaab3.jpg"/>
		</div>
			)
		}
}


// tell react dom what and where to render
ReactDOM.render(<App />, document.getElementById('root'));
