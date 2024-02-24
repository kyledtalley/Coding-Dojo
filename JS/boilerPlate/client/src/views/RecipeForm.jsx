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

const RecipeForm = () => {
	const [dishName, setDishName] = useState("")
	const [totalMin, setTotalMin] = useState("")
	const [directions, setDirections] = useState("")
	const [ingredients, setIngredients] = useState({
		ingredientOne: "",
		ingredientTwo: "",
		ingredientThree: "",
	})

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
		ingredients: {
			ingredientOne: "",
			ingredientTwo: "",
			ingredientThree: "",
		},
	})

	const navigate = useNavigate()

	const validateForm = () => {
		const areFieldsFilled = dishName && directions && totalMin > 0
		const areNoErrors =
			!formErrors.dishName &&
			!formErrors.directions &&
			!formErrors.totalMin
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
			errorMsg = "Dish Name is required!"
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
				errorMsg = "Directions must be less than 75 characters long"
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
			} else if (value > 240) {
				errorMsg = "Maximum length of 240 minutes exceeded"
			}
		} else {
			errorMsg = "Amount of total minutes is required!"
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

	const ingredientsHandler = (e, ingredientName) => {
		const value = e.target.value
		let errorMsg = ""

		if (value.length == 1) {
			errorMsg = `${ingredientName} must be at least 2 characters long`
		} else if (value.length > 0 && value.length > 75) {
			errorMsg = `${ingredientName} must be less than 75 characters long`
		} else {
			errorMsg = ""
		}

		setIngredients((prevIngredients) => ({
			...prevIngredients,
			[ingredientName]: value,
		}))

		setFormErrors((prevFormErrors) => ({
			...prevFormErrors,
			ingredients: {
				...prevFormErrors.ingredients,
				[ingredientName]: errorMsg,
			},
		}))
	}
	const submitHandler = (e) => {
		e.preventDefault()
		axios
			.post("http://localhost:8000/api/recipes", {
				dishName,
				directions,
				totalMin,
				ingredients: {
					ingredientOne: ingredients.ingredientOne,
					ingredientTwo: ingredients.ingredientTwo,
					ingredientThree: ingredients.ingredientThree,
				},
			})
			.then((res) => {
				console.log(res)
				console.log(res.data)
				navigate("/")
			})
			.catch((err) => {
				const statusCode = err.response
					? err.response.status
					: "No status code"
				const message =
					err.response &&
					err.response.data &&
					err.response.data.message
						? err.response.data.message
						: "An error occurred"

				console.log(statusCode)
				console.log(message)

				setErrors((prevErrors) => ({
					...prevErrors,
					statusCode: statusCode.toString(),
					message: message,
				}))
			})
	}

	return (
		<div className="container">
			{errors.statusCode && (
				<p className="error-message">
					The server responded with Error <Code></Code>: {errors.statusCode}
				</p>
			)}


			{errors.validationErrors &&
				Object.entries(errors.validationErrors).map(([idx, error]) => (
					<p key={idx} className="error-message">
						{error}
					</p>
				))}

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
					value={ingredients.ingredientOne}
					onChange={(e) => ingredientsHandler(e, "ingredientOne")}
				/>
				{formErrors.ingredients.ingredientOne && (
					<p className="error-message">
						Frontend Error: {formErrors.ingredients.ingredientOne}
					</p>
				)}

				<label className="label" htmlFor="ingredientTwo">
					Ingredient Two
				</label>
				<input
					className="input"
					type="text"
					id="ingredientTwo"
					value={ingredients.ingredientTwo}
					onChange={(e) => ingredientsHandler(e, "ingredientTwo")}
				/>
				{formErrors.ingredients.ingredientTwo && (
					<p className="error-message">
						Frontend Error: {formErrors.ingredients.ingredientTwo}
					</p>
				)}

				<label className="label" htmlFor="ingredientThree">
					Ingredient Three
				</label>
				<input
					className="input"
					type="text"
					id="ingredientThree"
					value={ingredients.ingredientThree}
					onChange={(e) => ingredientsHandler(e, "ingredientThree")}
				/>
				{formErrors.ingredients.ingredientThree && (
					<p className="error-message">
						Frontend Error: {formErrors.ingredients.ingredientThree}
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
export default RecipeForm
