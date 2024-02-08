import React from 'react'

const Display = (props) => {
    const {recipes, setRecipes} = props
    
    const destroy = (index) => {
      let desRec = recipes.filter( (item, idx) => idx !== index )
      console.log(desRec)
      setRecipes(desRec)
    }

  return (
    <div>
      {
        recipes.map( (recipe, index) => (
          <div key={index}>
            <p>{recipe.name}</p>
            <p>{recipe.ingredientOne}</p>
            <p>{recipe.ingredientTwo}</p>
            <button onClick={() => destroy(index)}>Delete</button>
          </div>
        ))
      }
      {/* <h2>{content}</h2> */}
    </div>
  )
}

export default Display