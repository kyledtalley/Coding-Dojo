import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useRecipes } from "../components/RecipesContext.jsx"

const Home = () => {
	const [Recipes, setRecipes] = useState([])
	const {recipeCount, setRecipeCount } = useRecipes()
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/recipes")
			.then((res) => {
				console.log(res.data)
				setRecipes(res.data)
				setRecipeCount(res.data.length)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	return (
		<div className="homeContainer">
			<h1 className="homeTitle">Speedy Meals</h1>
			<p>Number of Recipes: {recipeCount}</p>


			<table>
				<thead>
					<tr>
						<th>Dish</th>
						<th>Time</th>
						<th>Ingredients</th>
						<th>More</th>
						<th>Quick to make?</th>
					</tr>
				</thead>
				<tbody>
					{Recipes.map((recipe, index) => (
						<tr key={index}>
							<td>{recipe.dishName}</td>
							<td
								style={{
									color:
										recipe.totalMin < 20
											? "green"
											: recipe.totalMin <= 59
											? "#DAA520"
											: "red",
								}}
							>
								{recipe.totalMin}
							</td>
							<td>
								{recipe.ingredientOne}, {recipe.ingredientTwo}, {recipe.ingredientThree}
							</td>
							<td>
								<button className="linkToButton">
									<Link
										className="detLink"
										to={`/recipes/${recipe._id}/details`}
									>
										Details
									</Link>
								</button>
							</td>
							<td>
								{recipe.totalMin < 20
									? "Very quick!"
									: recipe.totalMin <= 59
									? "Takes some time!"
									: "Hope you're not hungry yet"}
							</td>
						</tr>
					))}
				</tbody>
			</table>

		</div>
	)
}

export default Home
