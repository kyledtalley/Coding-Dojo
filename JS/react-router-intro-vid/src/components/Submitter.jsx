import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Submitter = (props) => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")

	const navigate = useNavigate()

	const submitHandler = (e) => {
		e.preventDefault()
		alert(`Thank you for your submission ${firstName} ${lastName}!`)
        alert("Redirecting to your details page!")
        navigate(`/details/${firstName}/${lastName}`)
	}

	return (
		<div>
			<div className="menu">
				<Link to="/">Go to Home</Link>
				<Link to="/about">Go to About</Link>
			</div>
			<h1 className="about">Submitter component</h1>

			<form onSubmit={submitHandler}>
				<label htmlFor="firstName">First Name:</label>
				<input
					id="firstName"
					tpe="text"
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<br />
				<label htmlFor="lastName">Last name:</label>
				<input
					id="lastName"
					type="text"
					onChange={(e) => setLastName(e.target.value)}
				/>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default Submitter
