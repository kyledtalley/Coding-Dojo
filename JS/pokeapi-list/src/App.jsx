import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"

const App = () => {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=151")
			.then((response) => {
				const pokemonNames = response.data.results.map((p) => p.name)
				setPokemon(pokemonNames)
			})
			.catch((error) => {
				console.error("Error fetching data: ", error)
			})
	}, [])

	return (
		<div>
			{
				pokemon.map((name, index) => (
				<div key={index}>{name}</div>
			))}
		</div>
	)
}
export default App
