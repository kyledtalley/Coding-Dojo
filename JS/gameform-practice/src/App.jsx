import React, { useState } from "react"

const App = () => {
	const [gameState, setGameState] = useState({
		title: "",
		available: true,
		yearReleased: 0,
	})

	const handleChange = (e) => {
		let newValue

		if (e.target.type === "checkbox") {
			newValue = e.target.checked
		} else {
			newValue = e.target.value
		}

		setGameState((prevState) => ({
			...prevState,
			[e.target.name]: newValue,
		}))
	}

  const submitHandler = (e) => {
    e.preventDefault()
    let newGame = {...gameState}
    setGameList((prevGameList) => [newGame, ...prevGameList])
    setGameState({
      title: "",
      available: true,
      yearReleased: 0
    })
  }

	return (
		<div>
			<h1>Game Form</h1>

			<form onSubmit={submitHandler}>
				<label htmlFor="title">title</label>
				<input
					name="title"
					id="title"
					type="text"
					value={gameState.title}
					onChange={handleChange}
				/>

				<label htmlFor="available">available</label>
				<input
					name="availagameState.ble"
					id="available"
					type="checkbox"
					checked={gameState.available}
					onChange={handleChange}
				/>

				<label htmlFor="yearReleased">yearReleased</label>
				<input
					name="yearReleased"
					id="yearReleased"
					type="number"
					value={gameState.yearReleased}
					onChange={handleChange}
				/>
        <button>Submit</button>
			</form>
		</div>
	)
}

export default App
