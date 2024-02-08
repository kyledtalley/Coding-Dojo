import React, { useReducer } from "react"

const initialState = { count: 0 }

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 }
		case "DECREMENT":
			return { count: state.count - 1 }
		case "RESET":
			return { count: 0 }
		default:
			return state
	}
}

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const increment = () => {
		dispatch({ type: "INCREMENT" })
	}
	const decrement = () => {
		dispatch({ type: "DECREMENT" })
	}
	const reset = () => {
		dispatch({ type: "RESET" })
	}

	return (
		<div>
			<h3>Count: {state.count} </h3>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default Counter
