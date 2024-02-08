import "./App.css"
import "./index.css"
import React from "react"
import ClickComponent from "./components/ClickComponent.jsx"
import ChangeComponent from "./components/ChangeComponent.jsx"
import SubmitComponent from "./components/SubmitComponent.jsx"
const App = () => {
	return (
		<>
			<ClickComponent clickProp="I've been clicked!" />

			<ChangeComponent />

			<SubmitComponent submitProp="Thanks for the submission!" />
		</>
	)
}

export default App
