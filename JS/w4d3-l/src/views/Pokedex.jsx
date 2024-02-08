import React, { useEffect, useState } from "react"
import axios from "axios"
const Pokedex = () => {
	const [pokeData, setPokeData] = useState([])

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
			.then((response) => {
				setPokeData(response.data.results)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])
	return (
		<div>
			{
                pokeData.map((item, index) => (
				<p key={index}> {item.name} </p>
                ))
            }
		</div>
	)
}

export default Pokedex
