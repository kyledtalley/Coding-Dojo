import React, { useState, useEffect } from "react"
import PokemonList from "./components/PokemonList"
import Pages from "./components/Pages"
import axios from "axios"
function App() {
	const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
	const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon")
	const [nextURL, setNextURL] = useState()
	const [prevURL, setPrevURL] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		let cancel
		axios
			.get(URL, {
				cancelToken: new axios.CancelToken((c) => (cancel = c)),
			})
			.then((result) => {
				setLoading(false)
				setNextURL(result.data.next)
				setPrevURL(result.data.previous)
				setPokemon(result.data.results.map((p) => p.name))
			})

		return () => {
			cancel()
		}
	}, [URL])

	function goToNextPage() {
		setURL(nextURL)
	}

	function goToPrevPage() {
		setURL(prevURL)
	}

	if (loading) return "Loading..."

	return (
		<>
			<PokemonList pokemon={pokemon} />
			<Pages goToNextPage={goToNextPage ? goToNextPage : null} goToPrevPage={goToPrevPage ? goToNextPage : null} />
		</>
	)
}

export default App
