import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useRecipes } from "../components/RecipesContext.jsx"

const Home = () => {
	const [Recipes, setRecipes] = useState([])
	const { recipeCount, setRecipeCount } = useRecipes()
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
							<td className="tdTextShadow">{recipe.dishName}</td>
							<td
								className="time"
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
							<td className="tdTextShadow">
								{/* did the below ternary thing to make commas not appear if there aren't certain ingredients */}
								{recipe.ingredients
									? `${
											recipe.ingredients.ingredientOne
												? recipe.ingredients
														.ingredientOne
												: ""
									  }${
											recipe.ingredients.ingredientOne &&
											(recipe.ingredients.ingredientTwo ||
												recipe.ingredients
													.ingredientThree)
												? ", "
												: ""
									  }${
											recipe.ingredients.ingredientTwo
												? recipe.ingredients
														.ingredientTwo
												: ""
									  }${
											recipe.ingredients.ingredientTwo &&
											recipe.ingredients.ingredientThree
												? ", "
												: ""
									  }${
											recipe.ingredients.ingredientThree
												? recipe.ingredients
														.ingredientThree
												: ""
									  }`
									: ""}
							</td>
							<td className="tdTextShadow">
								<button className="linkToButton">
									<Link
										className="detLink"
										to={`/recipes/${recipe._id}/details`}
									>
										Details
									</Link>
								</button>
							</td>
							<td className="tdTextShadow">
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
