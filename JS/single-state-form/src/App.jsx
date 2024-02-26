import React, { useState } from "react"
import "./App.css"

const App = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPW: "",
	})

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const submitHandler = (e) => {
		e.preventDefault()
		let newFormData = { ...formData }
		setFormList((prevFormData) => [newFormData, ...prevFormData])
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPW: "",
		})
	}

	return (
		<div className = "AppContainer">
			<div className = "Form">
				<form onSubmit={submitHandler}>
        <div className="form-group">
					<label htmlFor="firstName">First Name: </label>
					<input
						name="firstName"
						id="firstName"
						type="text"
						value={formData.firstName}
						onChange={handleChange}
					/>
          </div>
          <div className="form-group">
					<label htmlFor="lastName">Last Name: </label>
					<input
						name="lastName"
						id="lastName"
						type="text"
						value={formData.lastName}
						onChange={handleChange}
					/>
          </div>
          <div className="form-group">
					<label htmlFor="email">Email: </label>
					<input
						name="email"
						id="email"
						type="text"
						value={formData.email}
						onChange={handleChange}
					/>
          </div>
          <div className="form-group">
					<label htmlFor="password">Password: </label>
					<input
						name="password"
						id="password"
						type="password"
						value={formData.password}
						onChange={handleChange}
					/>
          </div>
          <div className="form-group">
					<label htmlFor="confirmPW">Confirm Password: </label>
					<input
						name="confirmPW"
						id="confirmPW"
						type="password"
						value={formData.confirmPW}
						onChange={handleChange}
					/>
          </div>

					<button>Submit</button>
				</form>
			</div>

			<div className="List">
				<h1>Form Data: </h1>
				<p>First Name: {formData.firstName}</p>
				<p>Last Name: {formData.lastName}</p>
				<p>Email: {formData.email}</p>
			</div>
		</div>
	)
}

export default App
