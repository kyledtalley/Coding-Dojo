import React, { useState } from "react"

const Form = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPW, setConfirmPW] = useState("")

	const createUser = (e) => {
		e.preventDefault()
	}

	return (
		<div>
			<form onSubmit={createUser}>
				<div>
					<label htmlFor="firstName">
						First Name:
						<input
							type="text"
							value={firstName}
							name={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</label>
				</div>
				{firstName.length > 0 ? (
					firstName.length < 2 ? (
						<p className="error">
							First name must be at least 2 characters
						</p>
					) : null
				) : null}
				<div>
					<label htmlFor="lastName">
						Last Name:
						<input
							type="text"
							value={lastName}
							name={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</label>
				</div>
				{lastName.length > 0 ? (
					lastName.length < 2 ? (
						<p className="error">
							Last Name must be at least 2 characters
						</p>
					) : null
				) : null}
				<div>
					<label htmlFor="email">
						Email:
						<input
							type="email"
							value={email}
							name={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
				</div>
				{email.length > 0 ? (
					email.length < 5 ? (
						<p className="error">
							Email must be at least 5 characters
						</p>
					) : null
				) : null}
				<div>
					<label htmlFor="password">
						Password:
						<input
							type="password"
							value={password}
							name={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				{password.length > 0 ? (
					password.length < 8 ? (
						<p className="error">
							Password must be at least 8 characters
						</p>
					) : null
				) : null}

				<div>
					<label htmlFor="confirmPW">
						Confirm Password:
						<input
							type="password"
							value={confirmPW}
							name={confirmPW}
							onChange={(e) => setConfirmPW(e.target.value)}
						/>
					</label>
				</div>
				{password.length >= 8 && confirmPW.length > 0 ? (
					password !== confirmPW ? (
						<p className="error">Passwords do not match</p>
					) : null
				) : null}
				<input type="submit" />
			</form>
		</div>
	)
}

export default Form
