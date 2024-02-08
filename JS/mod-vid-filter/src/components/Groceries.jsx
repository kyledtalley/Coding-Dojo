import { useState } from "react"

const Groceries = () => {
	const filteredList = [
		"pearl onions",
		"thyme",
		"cremini mushrooms",
		"butter",
	]

	const [groceryList, setGroceryList] = useState(filteredList)

	const [filterLetter, setFilterLetter] = useState("")

	const handleFilter = () => {
		const updatedList = groceryList.filter((grocery) =>
			grocery.includes(filterLetter)
		)
		setGroceryList(updatedList)
        setFilterLetter("")
	}
	return (
		<ul>
			{groceryList.map((grocery, index) => (
				<li key={index}>{grocery}</li>
			))}

			<input
				type="text"
				value={filterLetter}
				name="filterLetter"
				onChange={(e) => setFilterLetter(e.target.value)}
			/>
			<button onClick={handleFilter}>Filter</button>
		</ul>
	)
}

export default Groceries
