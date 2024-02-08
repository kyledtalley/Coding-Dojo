import "./App.css"

function App() {

	const myNumber = 42
	const myArray = [1, 2, 3, 4, 5]
	const myString = "Hello, World!"

	return (
		<>
			<div className="stringStyle">
				<h1>String</h1>
			</div>
			<p>Say Hello: {myString} </p>

			<div className="numberStyle">
				<h1>Number</h1>
				<p>Lucky Number: {myNumber}</p>
			</div>
		</>
	)
}

export default App
