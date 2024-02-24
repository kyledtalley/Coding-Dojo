import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const VariableDetails = () => {
	const [recipe, setRecipe] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()

	const deleteOg = () => {
		axios
			.delete(`http://localhost:8000/api/recipes/${id}`)
			.then((res) => {
				navigate("/")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/recipes/${id}`)
			.then((res) => {
				setRecipe(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [id])

	return (
		<div className="details-container">
			<div className="edit-link-container">
				<p>
					<Link className="editLink" to={`/recipes/${id}/update`}>
						Update Recipe Details
					</Link>
				</p>
				<h1>Secret Recipe</h1>
			</div>
			<div className="dets">
				<label htmlFor="dishName">Dish Name</label>
				<p id="dishName">{recipe.dishName}</p>

				<label htmlFor="totalMin">Time Required</label>
				<p id="totalMin">{recipe.totalMin}min</p>

				<label htmlFor="directions">Directions</label>
				<p id="directions">{recipe.directions}</p>

				<label htmlFor="ingredientOne">Ingredient One</label>
				<p id="ingredientOne">{recipe.ingredientOne}</p>

				<label htmlFor="ingredientTwo">Ingredient Two</label>
				<p id="ingredientTwo">{recipe.ingredientTwo}</p>

				<label htmlFor="ingredientThree">Ingredient Three</label>
				<p id="ingredientThree">{recipe.ingredientThree}</p>

				<button onClick={deleteOg} className="deleteButton">
					Remove Recipe
				</button>
			</div>
		</div>
	)
}

export default VariableDetails
