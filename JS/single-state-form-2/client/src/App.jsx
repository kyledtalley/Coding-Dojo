import { useReducer } from "react"
import "./App.css"
import Form from "./components/Form"

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPW: "",
}

function reducer(state, action) {
	switch (action.type) {
		case "inputFN":
			return { ...state, firstName: action.payload }
		case "inputLN":
			return { ...state, lastName: action.payload }
		case "inputEM":
			return { ...state, email: action.payload }
		case "inputPW":
			return { ...state, password: action.payload }
		case "inputCPW":
			return { ...state, confirmPW: action.payload }
		default:
			throw new Error("Unhandled action type: " + action.type)
	}
}
const App = () => {

  const[state, dispatch] = useReducer(reducer, initialState)

	return (
		<>

			<Form state = {state} dispatch = {dispatch} />
		</>
	)
}

export default App
