import React, { useReducer } from "react"
import List from "./components/List"
import Form from "./components/Form"
import "./App.css"

// Initial state for the application
const initialState = []

// Reducer function to handle state updates based on actions
function reducer(state, action) {
	switch (action.type) {
		case "addItem":
			return [...state, action.payload]
		case "deleteItem":
			return state.filter((_, index) => index !== action.payload)
		case "toggleItem":
			return state.map((item, index) =>
				index === action.payload
					? { ...item, completed: !item.completed }
					: item
			)
		default:
			throw new Error("Unhandled action type: " + action.type)
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div className="app-container">
			<Form dispatch={dispatch} />
			<List items={state} dispatch={dispatch} />
		</div>
	)
}

export default App
