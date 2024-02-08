import { useReducer } from "react"
// Note how now our initialState has keys nested 2 levels deep
const initialState = {
	email: {
		value: "",
		error: "",
	},
	password: {
		value: "",
		error: "",
	},
	hasBeenSubmitted: false,
}
// REMEMBER the action will look like: {type: "DO_SOMETHING", payload: "some_value"}
const reducer = (state, action) => {
	switch (action.type) {
		case "SET_EMAIL_VALUE":
			return {
				...state,
				email: {
					// we have to add this or it would wipe out any existing value for state.email.error
					...state.email,
					value: action.payload,
				},
			}
		case "SET_EMAIL_ERROR":
			return {
				...state,
				email: {
					...state.email.value,
					error: action.payload,
				},
			}
		case "SET_PASSWORD_VALUE":
			return {
				...state,
				password: {
					...state.password.value,
					value: action.payload,
				},
			}
		case "SET_PASSWORD_ERROR":
			return {
				...state,
				password: {
					...state.password.value,
					error: action.payload,
				},
			}
		case "SET_SUBMITTED_BOOLEAN":
			return {
				...state,
				hasBeenSubmitted: action.payload,
			}
		default:
			return state
	}
}

export default () => {
	//  We call the useReducer function. and feed it the reducer function and initialState.
	//  This function will return an array with a state variable ("state") which will hold
	//  the CURRENT value of our app's state, and the dispatch fn ("dispatch") which
	//  will dispatch our action to our reducer.
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleEmailChange = (e) => {
		// if length of input value (e.target.value) is less than 5, dispatch action to set email error
		if (e.target.value.length < 5) {
			dispatch({
				type: "SET_EMAIL_ERROR",
				payload: "Email must be at least 5 characters",
			})
		} else {
			// if length of input value is >= 5, the else block will be hit and we will dispatch action to set email error
			// back to an empty string
			dispatch({
				type: "SET_EMAIL_ERROR",
				payload: "",
			})
		}
		// Regardless of what the length of the input is, we still need to dispatch an action to update
		// state.email.value with current value of email input
		dispatch({
			type: "SET_EMAIL_VALUE",
			payload: e.target.value,
		})
	}
	const handlePasswordChange = (e) => {
		// if length of input value (e.target.value) is less than 8, dispatch action to set password error
		if (e.target.value.length < 5) {
			dispatch({
				type: "SET_PASSWORD_ERROR",
				payload: "Password must be at least 5 characters",
			})
		} else {
			// if length of input value is >= 8, the else block will be hit and we will dispatch action to set password
			// value back to empty string
			dispatch({
				type: "SET_PASSWORD_ERROR",
				payload: "",
			})
		}
		// Regardless of what the length of input is, we still need to dispatch an action to update
		// state.password.value with current value of password input
		dispatch({
			type: "SET_PASSWORD_VALUE",
			payload: e.target.value,
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// When form is submitted, dispatch action to set setSubmittedBoolean to true, indicating form submission
		dispatch({
			type: "SET_SUBMITTED_BOOLEAN",
			payload: true,
		})
	}

	return (
		<div>
			<h1>{JSON.stringify(state)}</h1>{" "}
			{/* display current value of state */}
			// If state.hasBeenSubmitted === true, display some text telling
			user
			{state.hasBeenSubmitted ? <h3>Form has been submitted!</h3> : null}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Email</label>
					<input
						id="name"
						value={state.email.value}
						onChange={(e) => handleEmailChange(e)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						id="password"
						value={state.password.value}
						onChange={(e) => handlePasswordChange(e)}
					/>
				</div>
			</form>
		</div>
	)
}
