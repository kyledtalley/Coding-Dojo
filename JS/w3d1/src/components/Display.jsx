import React from "react"

const Display = (props) => {
	const { recipes, setRecipes } = props
	const destroy = (index) => {
    let desRec = recipes.filter ((item, idx) => idx !== index)
    setRecipes(desRec)
  }
	return (
		<div>
			{recipes.map((recipe, index) => (
				<div key={index}>
					<p>{index}</p>
					<p>{recipe.name}</p>
					<p>{recipe.ingredientOne}</p>
					<p>{recipe.ingredientTwo}</p>
					<button onClick={destroy(index)}></button>
				</div>
			))}
		</div>
	)
}

export default Display
