import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"

const RecipeUpdate = () => {
	const [formData, setFormData] = useState({
		dishName: "",
		totalMin: 0,
		directions: "",
		ingredients: {
			ingredientOne: "",
			ingredientTwo: "",
			ingredientThree: "",
		},
	})

	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/Recipes/${id}`)
			.then((res) => {
				console.log(res.data)
				setFormData({
					dishName: res.data.dishName,
					totalMin: res.data.totalMin,
					directions: res.data.directions,
					ingredients: res.data.ingredients || {
						ingredientOne: "",
						ingredientTwo: "",
						ingredientThree: "",
					},
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}, [id])

	const handleChange = (e) => {
		const { name, value } = e.target
		if (name in formData.ingredients) {
			setFormData({
				...formData,
				ingredients: {
					...formData.ingredients,
					[name]: value,
				},
			})
		} else {
			setFormData({
				...formData,
				[name]: value,
			})
		}
	}

	const submitHandler = (e) => {
		e.preventDefault()
		axios
			.put(`http://localhost:8000/api/Recipes/${id}`, formData)
			.then((res) => {
				console.log(res)
				navigate("/")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<div className="container">
				<p>
					<Link className="editLink" to={`/Recipes/${id}/details`}>
						View Recipe Details
					</Link>
				</p>
				<h1 className = "putShadowHere">Update a Recipe</h1>

				<form onSubmit={submitHandler} className="form">
					<label className="label" htmlFor="dishName">
						Dish Name
					</label>
					<input
						className="input"
						type="text"
						name="dishName"
						value={formData.dishName}
						onChange={handleChange}
					/>

					<label className="label" htmlFor="totalMin">
						Total Minutes Required
					</label>
					<input
						className="input"
						type="number"
						name="totalMin"
						value={formData.totalMin}
						onChange={handleChange}
					/>

					<label className="label" htmlFor="directions">
						Directions
					</label>
					<input
						className="input"
						type="text"
						name="directions"
						value={formData.directions}
						onChange={handleChange}
					/>

					{Object.keys(formData.ingredients).map(
						(ingredient, index) => (
							<div key={index}>
								<label className="label" htmlFor={ingredient}>
									Ingredient {index + 1}
								</label>
								<input
									className="input"
									type="text"
									name={ingredient}
									value={formData.ingredients[ingredient]}
									onChange={handleChange}
								/>
							</div>
						)
					)}

					<button className="submitButton">Update</button>
				</form>
			</div>
		</div>
	)
}

export default RecipeUpdate
