import React, { useState } from "react"
import "./App.css"
import List from "./components/List"
import Form from "./components/Form"

const App = () => {
	const [liftedState, setLiftedState] = useState([])

	const stateUpdater = (newValue) => {
		setLiftedState((prevLiftedState) => [...prevLiftedState, newValue])
	}
	return (
		<>
			<Form  stateUpdater= {stateUpdater} liftedState = {liftedState} setLiftedState = {setLiftedState}/>
			<List  stateUpdtaer = {stateUpdater} liftedState = {liftedState} setLiftedState = {setLiftedState}/>
		</>
	)
}

export default App
