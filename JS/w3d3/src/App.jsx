import React, { useState } from "react"
import "./App.css"
import Card from "./components/Card"
import ShowCards from "./components/ShowCards"

const App = () => {
	const [cards, setCards] = useState([])

	return (
		<div>
			<Card cards = {cards} setCards = {setCards}/>
			<ShowCards cards = {cards} setCards = {setCards}/>
		</div>
	)
}

export default App
