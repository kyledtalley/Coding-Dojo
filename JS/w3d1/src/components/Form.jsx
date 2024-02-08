import React, { useState } from "react"

const Form = (props) => {
	const { recipes, setRecipes } = props
	// const [inputVal, setInputVal] = useState("")
	const [errors, setErrors] = useState({
		name: "",
		ingredientOne: "",
		ingredientTwo: "",
	})

	const [recipe, setRecipe] = useState({
		name: "",
		ingredientOne: "",
		ingredientTwo: "",
	})

	const submitHandler = (e) => {
		e.preventDefault()
		// setContent(inputVal)
		setRecipes([...recipes, recipe])
	}

	const changeHandler = (e) => {
		const newErr = { ...errors }
		if (e.target.name === "name" && e.target.value.length <= 3) {
			console.log("1")
			// setErrors({...errors, [e.target.name]: "Too Short!!"})
			newErr[e.target.name] = "Too Short"
		} else if (
			e.target.name === "ingredientOne" &&
			e.target.value.length <= 4
		) {
			// setErrors({...errors, ["ingredientTwo"]: "Please type more than 6 char!!"})
			console.log("2")
			newErr[e.target.name] = "Please type more than 4 char!!"
		} else if (
			e.target.name === "ingredientTwo" &&
			e.target.value.length <= 6
		) {
			// setErrors({...errors, ["ingredientTwo"]: "Please type more than 6 char!!"})
			console.log("2")
			newErr[e.target.name] = "Please type more than 6 char!!"
		} else {
			// setErrors({...errors, [e.target.name]: ""})
			console.log("3")
			newErr[e.target.name] = ""
		}

		console.log(newErr)
		setErrors(newErr)
		setRecipe({ ...recipe, [e.target.name]: e.target.value })
	}
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="">Recipe</label>
				</div>
				<div>
					<input type="text" name="name" onChange={changeHandler} />
					<span className="error">{errors.name}</span>
				</div>
				<div>
					<label htmlFor="">ingredientOne</label>
				</div>
				<div>
					<input
						type="text"
						name="ingredientOne"
						onChange={changeHandler}
					/>
					<span className="error">{errors.ingredientOne}</span>
				</div>
				<div>
					<label htmlFor="">ingredientTwo</label>
				</div>
				<div>
					<input
						type="text"
						name="ingredientTwo"
						onChange={changeHandler}
					/>
					<span className="error">{errors.ingredientTwo}</span>
				</div>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default Form
