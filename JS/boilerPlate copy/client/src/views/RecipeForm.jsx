import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


/*Dear Chris:
When I wrote this code, only god and I knew how it worked.
Now, only god knows!

Also I can't submit my form when an ingredient is not present even though
I set required to false and I set up validations to allow it to be 0
in here, maybe if you see my problem we could go over it in office hour
*/
//Also, I think I mentioned this on another page but I can't find it now,
//Check out my 404 page by going to a random incorrect route!


const VariableForm = () => {
	const [dishName, setDishName] = useState("")
	const [totalMin, setTotalMin] = useState(0)
	const [directions, setDirections] = useState("")
	const [ingredientOne, setIngredientOne] = useState("")
	const [ingredientTwo, setIngredientTwo] = useState("")
	const [ingredientThree, setIngredientThree] = useState("")

	const [errors, setErrors] = useState({
		statusCode: "",
		message: "",
		name: "",
		validationErrors: {},
	})
	const [formErrors, setFormErrors] = useState({
		dishName: "",
		directions: "",
		totalMin: "",
	})

	const navigate = useNavigate()

	const validateForm = () => {
		const areFieldsFilled = dishName && directions && totalMin > 0
		const areNoErrors = !formErrors.dishName && !formErrors.directions && !formErrors.totalMin
		return areFieldsFilled && areNoErrors
	}

	const dishNameHandler = (e) => {
		setDishName(e.target.value)
		const value = e.target.value
		let errorMsg = ""
		if (value) {
			if (value.length < 2) {
				errorMsg = "Dish Name must be at least 3 characters long!"
			} else if (value.length > 255) {
				errorMsg = "Dish Name must be less than 255 characters long"
			}
		} else {
			errorMsg = "dishName is required!"
		}
		setErrors((prevErrors) => ({
			...prevErrors,
			validationErrors: {
				...prevErrors.validationErrors,
				dishName: errorMsg,
			},
		}))
		setFormErrors({ ...formErrors, dishName: errorMsg })
	}

	const directionsHandler = (e) => {
		setDirections(e.target.value)
		const value = e.target.value
		let errorMsg = ""
		if (value) {
			if (value.length < 2) {
				errorMsg = "Directions must be at least 3 characters long!"
			} else if (value.length > 75) {
				errorMsg =
					"Directions must be less than 75 characters long"
			}
		} else {
			errorMsg = "Directions are required!"
		}
		setErrors((prevErrors) => ({
			...prevErrors,
			validationErrors: {
				...prevErrors.validationErrors,
				directions: errorMsg,
			},
		}))
		setFormErrors({ ...formErrors, directions: errorMsg })
	}

	const totalMinHandler = (e) => {
		setTotalMin(e.target.value)
		const value = e.target.value.trim()
		let errorMsg = ""
		if (value) {
			if (value < 2) {
				errorMsg = "Requirement of at least 2 total minutes!"
			}
		} else {
			errorMsg = "Number of totalMin is required!"
		}
		setErrors((prevErrors) => ({
			...prevErrors,
			validationErrors: {
				...prevErrors.validationErrors,
				totalMin: errorMsg,
			},
		}))
		setFormErrors({ ...formErrors, totalMin: errorMsg })
	}

	const ingredientOneHandler = (e) => {
		setIngredientOne(e.target.value)
		const value = e.target.value
		let errorMsg = ""
		if (value) {
			if (value.length == 1) {
				errorMsg = "Ingredient must be at least 3 characters long!"
			} else if (value.length >= 1 && value.length > 75) {
				errorMsg =
					"Ingredient must be less than 75 characters long"
			}
		}
		setErrors((prevErrors) => ({
			...prevErrors,
			validationErrors: {
				...prevErrors.validationErrors,
				ingredientOne: errorMsg,
			},
		}))
		setFormErrors({ ...formErrors, directions: errorMsg })
	}
	const ingredientTwoHandler = (e) => {
		setIngredientTwo(e.target.value)
		const value = e.target.value
		let errorMsg = ""
		if (value) {
			if (value.length == 1) {
				errorMsg = "Ingredient must be at least 3 characters long!"
			} else if (value.length >= 1 && value.length > 75) {
				errorMsg =
					"Ingredient must be less than 75 characters long"
			}
		}
		setErrors((prevErrors) => ({
			...prevErrors,
			validationErrors: {
				...prevErrors.validationErrors,
				ingredientTwo: errorMsg,
			},
		}))
		setFormErrors({ ...formErrors, directions: errorMsg })
	}
	const ingredientThreeHandler = (e) => {
		setIngredientThree(e.target.value)
		const value = e.target.value
		let errorMsg = ""
		if (value) {
			if (value.length == 1) {
				errorMsg = "Ingredient must be at least 3 characters long!"
			} else if (value.length >= 1 && value.length > 75) {
				errorMsg =
					"Ingredient must be less than 75 characters long"
			}else {
				errorMsg = ""
			}
		}
		setErrors((prevErrors) => ({
			...prevErrors,
			validationErrors: {
				...prevErrors.validationErrors,
				ingredientThree: errorMsg,
			},
		}))
		setFormErrors({ ...formErrors, directions: errorMsg })
	}

	const submitHandler = (e) => {
		e.preventDefault()
		axios
			.post("http://localhost:8000/api/recipes", {
				dishName,
				directions,
				totalMin,
				ingredientOne,
				ingredientTwo,
				ingredientThree,
			})
			.then((res) => {
				console.log(res)
				console.log(res.data)
				navigate("/")
			})
			.catch((err) => {
				console.log(err.response.status)
				console.log(err.response.data)
				setErrors(err.response.data)
			})
	}

	return (
		<div className="container">
			{errors.statusCode && (
				<p className="error-message">
					Error {errors.statusCode}: {errors.message}
				</p>
			)}

			{errors.validationErrors &&
				Object.keys(errors.validationErrors).length > 0 && (
					<p className="error-message">
						BACKEND: {errors.statusCode}
					</p>
				)}

			{errors.validationErrors &&
				Object.entries(errors.validationErrors).map(([idx, error]) => (
					<p key={idx} className="error-message">
						{idx}: {error}
					</p>
				))}
			<h1>Register a og to loan</h1>

			<form onSubmit={submitHandler} className="form">
				<label className="label" htmlFor="dishName">
					Dish Name
				</label>
				<input
					className="input"
					type="text"
					id="dishName"
					value={dishName}
					onChange={dishNameHandler}
				/>

				{formErrors.dishName && (
					<p className="error-message">
						Frontend Error: {formErrors.dishName}
					</p>
				)}

				<label className="label" htmlFor="totalMin">
					Total Minutes Required
				</label>
				<input
					className="input"
					type="number"
					id="totalMin"
					value={totalMin}
					onChange={totalMinHandler}
				/>
				{formErrors.totalMin && (
					<p className="error-message">
						Frontend Error: {formErrors.totalMin}
					</p>
				)}


				<label className="label" htmlFor="directions">
					Directions
				</label>
				<input
					className="input"
					type="text"
					id="directions"
					value={directions}
					onChange={directionsHandler}
				/>
				{formErrors.directions && (
					<p className="error-message">
						Frontend Error: {formErrors.directions}
					</p>
				)}




				<label className="label" htmlFor="ingredientOne">
					Ingredient One
				</label>
				<input
					className="input"
					type="text"
					id="ingredientOne"
					value={ingredientOne}
					onChange={ingredientOneHandler}
				/>
				{formErrors.ingredientOne && (
					<p className="error-message">
						Frontend Error: {formErrors.ingredientOne}
					</p>
				)}



				<label className="label" htmlFor="ingredientTwo">
					Ingredient Two
				</label>
				<input
					className="input"
					type="text"
					id="ingredientTwo"
					value={ingredientTwo}
					onChange={ingredientTwoHandler}
				/>
				{formErrors.ingredientTwo && (
					<p className="error-message">
						Frontend Error: {formErrors.ingredientTwo}
					</p>
				)}



				<label className="label" htmlFor="ingredientThree">
					Ingredient Three
				</label>
				<input
					className="input"
					type="text"
					id="ingredientThree"
					value={ingredientThree}
					onChange={ingredientThreeHandler}
				/>
				{formErrors.ingredientThree && (
					<p className="error-message">
						Frontend Error: {formErrors.ingredientThree}
					</p>
				)}


				<button
					className="submitButton"
					type="submit"
					disabled={!validateForm()}
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default VariableForm
