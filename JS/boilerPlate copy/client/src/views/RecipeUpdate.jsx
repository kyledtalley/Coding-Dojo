import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"

const RecipeUpdate = () => {
	const [dishName, setDishName] = useState("")
	const [totalMin, setTotalMin] = useState(0)
	const [directions, setDirections] = useState("")
	const [ingredientOne, setIngredientOne] = useState("")
	const [ingredientTwo, setIngredientTwo] = useState("")
	const [ingredientThree, setIngredientThree] = useState("")

	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/Recipes/${id}`)
			.then((res) => {
				console.log(res.data)
				setDishName(res.data.dishName)
				setTotalMin(res.data.totalMin)
				setDirections(res.data.directions)
				setIngredientOne(res.data.ingredientOne)
				setIngredientTwo(res.data.ingredientTwo)
				setIngredientThree(res.data.ingredientThree)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [id])

	const dishNameHandler = (e) => {
		setDishName(e.target.value)
	}

	const directionsHandler = (e) => {
		setDirections(e.target.value)
	}

	const totalMinHandler = (e) => {
		setTotalMin(e.target.value)
	}
	const ingredientOneHandler = (e) => {
		setIngredientOne(e.target.value)
	}
	const ingredientTwoHandler = (e) => {
		setIngredientTwo(e.target.value)
	}
	const ingredientThreeHandler = (e) => {
		setIngredientThree(e.target.value)
	}



	const submitHandler = (e) => {
		e.preventDefault()
		axios
			.put(`http://localhost:8000/api/Recipes/${id}`, {
				dishName,
				totalMin,
				directions,
				ingredientOne,
				ingredientTwo,
				ingredientThree
			})
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
				<h1>Update a Recipe</h1>

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
					<button className="submitButton">Update</button>
				</form>
			</div>
		</div>
	)
}

export default RecipeUpdate
