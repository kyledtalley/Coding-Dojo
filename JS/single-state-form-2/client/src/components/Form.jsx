import React, { useReducer } from "react"

const Form = (props) => {
	const { state, dispatch } = props
	//STATE = REDUCER
	//DISPATCH = INITIAL STATE
	/*
    firstName
    lastName
    email
    password
    confirmPW

    Display them in real time under the form
    */

	const submitHandler = (e) => {
		e.preventDefault()
	}
	const handleFN = (e) => {
		dispatch({
			type: "inputFN",
			payload: e.target.value,
		})
	}
	const handleLN = (e) => {
		dispatch({
			type: "inputLN",
			payload: e.target.value,
		})
	}
	const handleEM = (e) => {
		dispatch({
			type: "inputEM",
			payload: e.target.value,
		})
	}
	const handlePW = (e) => {
		dispatch({
			type: "inputPW",
			payload: e.target.value,
		})
	}
	const handleCPW = (e) => {
		dispatch({
			type: "inputCPW",
			payload: e.target.value,
		})
	}
	return (
		<div>
			<div className="form">
				<h1>Form</h1>
				<form onSubmit={submitHandler}>
					<label>
						<span>First Name: </span>
						<input
							type="text"
							id="firstName"
							value={state.firstName}
							onChange={(e) => handleFN(e)}
						/>
					</label>
					<label>
						<span>Last Name: </span>
						<input
							id="lastName"
							type="text"
							value={state.lastName}
							onChange={(e) => handleLN(e)}
						/>
					</label>
					<label>
						<span>Email: </span>
						<input
							id="email"
							type="text"
							value={state.email}
							onChange={(e) => handleEM(e)}
						/>
					</label>
					<label>
						<span>Password: </span>
						<input
							type="password"
							id="password"
							value={state.password}
							onChange={(e) => handlePW(e)}
						/>
					</label>
					<label>
						<span>Confirm Password: </span>
						<input
							id="confirmPW"
							type="password"
							value={state.confirmPW}
							onChange={(e) => handleCPW(e)}
						/>
					</label>
				</form>
			</div>
			<div className="List">
				<h1>Form Data: </h1>
				<p>First Name: {state.firstName}</p>
				<p>Last Name: {state.lastName}</p>
				<p>Email: {state.email}</p>
			</div>
		</div>
	)
}

export default Form
