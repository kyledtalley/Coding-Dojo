import React, { useState } from "react"
import "./App.css"
import Main from "./components/Main"
import axios from "axios"
import pokeball from "./assets/pokeball_gif.gif"
import flyingpokeball from "./assets/flyingpokeball.gif"
import pokedex from "./assets/pokedex.gif"
import pokeballshimmer from './assets/pokeballshimmer.gif'

function App() {
	const [pokemonName, setPokemonName] = useState("")
	const [pokemonChosen, setPokemonChosen] = useState(false)
	const [pokemon, setPokemon] = useState({
		name: "",
		species: "",
		img: "",
		hp: "",
		attack: "",
		defense: "",
		type: "",
	})

	const searchPokemon = () => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
			.then((response) => {
				setPokemon({
					name: pokemonName,
					species: response.data.species.name,
					img: response.data.sprites.front_shiny,
					hp: response.data.stats[0].base_stat,
					attack: response.data.stats[1].base_stat,
					defense: response.data.stats[2].base_stat,
					speed: response.data.stats[3].base_stat,
					type: response.data.types[0].type.name,
				})
				setPokemonChosen(true)
			})
	}

	return (
		<div className="App">
			<div className="TitleSection">
				<h1>Pokemon Stats</h1>
				<img src={pokeballshimmer} />
				<h6>(Shiny Edition)</h6>
				<input
					type="text"
					onChange={(e) => {
						setPokemonName(e.target.value)
					}}
				/>
				<button onClick={searchPokemon}>Search Pokemon</button>
			</div>
			<div className="DisplaySection">
				{!pokemonChosen ? (
					<h1>Please choose a Pokemon</h1>
				) : (
					<>
						<h1 style={{ textTransform: "capitalize" }}>
							{pokemon.name}

						</h1>
						<img src={pokemon.img} />
						<h3 style={{ textTransform: "capitalize" }}>
							Species: {pokemon.species}
						</h3>
						<h3 style={{ textTransform: "capitalize" }}>
							Primary Type: {pokemon.type}
						</h3>
						<h4>HP: {pokemon.hp}</h4>
						<h4>Attack: {pokemon.attack}</h4>
						<h4>Defense: {pokemon.defense}</h4>
						<h4>Speed: {pokemon.speed}</h4>
					</>
				)}
			</div>
			<Main />
		</div>
	)
}
export default App
