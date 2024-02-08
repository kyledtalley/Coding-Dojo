import React, { useState } from "react"

const MapComponent = () => {
	const people = [
		{ id: "1", name: "Kyle", description: "Ya know?" },
		{ id: "2", name: "The Incredible hulk", description: "Hulk smash!" },
		{ id: "3", name: "Macho Man Randy Savage", description: "Ohhh yeah!" },
	]

	const [peopleState, setPeopleState] = useState(people)
	const [editValue, setEditValue] = useState("")

	const editStateElement = (peopleId) => {
		let newList = peopleState.map((person) => {
			if (person.id === peopleId) {
				let personCopy = { ...person }
				personCopy.name = editValue
				return personCopy
			} else {
				return person
			}
		})

		setPeopleState(newList)
		setEditValue("")
	}

	return (
		<div>
			<h2>Example mapping through an array of objects</h2>
			<input
				type="text"
				value={editValue}
				onChange={(e) => setEditValue(e.target.value)}
				placeholder="Enter a new name"
			/>

			{peopleState.map((person) => (
				<div key={person.id}>
					<h3>{person.name}</h3>
					<p>{person.description}</p>
					<button onClick={() => editStateElement(person.id)}>
						Change my name {editValue ? "to " + editValue : ""}
					</button>
				</div>
			))}
		</div>
	)
}

export default MapComponent
