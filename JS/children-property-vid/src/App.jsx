import React from "react"
import "./App.css"
import Card from "./components/Card"

const App = () => {
	return (
		<div>
			<h1>Card Example</h1>

			<Card>
				<h2>Title</h2>
        <p>This is the content of the card</p>
			</Card>
			<Card>
				<h2>Another Title</h2>
				<p>More content for another card</p>
			</Card>
		</div>
	)
}

export default App
