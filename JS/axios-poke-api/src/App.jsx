import React, { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
	const [responseData, setResponseData] = useState(null)
	const [name, setName] = useState()
	URL = "https://pokeapi.co/api/v2/pokemon/ditto"
	useEffect(() => {
		axios.get(URL).then((response) => {
			setResponseData(response.data)
			setName(response.data.name).catch((error) => {
				console.log("There was an error:", error)
			})
		})
	}, [])
	return (
		<div>
			{name.map((item, index) => (
				<div key={index}>
					<p>{item.name}</p>
				</div>
			))}
		</div>
	)
}
export default App
