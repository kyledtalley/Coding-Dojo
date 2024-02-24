import { model, Schema } from "mongoose"
const RecipeSchema = new Schema(
	{
		dishName: {
			type: String,
			required: [true, "Dish Name is a required field!"],
			minlength: [
				3,
				"Dish Name length must be at least 3 characters long",
			],
			maxlength: [255, "Dish Name length must be 25 characters maximum"],
		},
		totalMin: {
			type: Number,
			required: [true, "Total Minutes is a required field!"],
			min: [2, "Total minutes must be at least 2 minutes"],
			max: [240, "Total minutes must be no more than 240 minutes"],
		},
		directions: {
			type: String,
			required: [true, "Directions is a required field!"],
			minlength: [
				10,
				"Directions length must be at least 10 characters long",
			],
			maxlength: [
				75, "Directions length must be no longer than 75 characters long"
			]
		},
		ingredients: {
			ingredientOne: {
				type: String,
				required: false,
				minlength: [
					2,
					"Ingredient One length must be at least 2 characters",
				],
				maxlength: [
					75,
					"Ingredient One length must be 30 characters maximum",
				],
			},
			ingredientTwo: {
				type: String,
				required: false,
				minlength: [
					2,
					"Ingredient Two length must be at least 3 characters long",
				],
				maxlength: [
					75,
					"Ingredient Two length must be 30 characters maximum",
				],
			},
			ingredientThree: {
				type: String,
				required: false,
				minlength: [
					2,
					"Ingredient Three length must be at least 3 characters long",
				],
				maxlength: [
					75,
					"Ingredient Three length must be 30 characters maximum",
				],
			},
		},
	},
	{ timestamps: true }
)
const Recipe = model("Recipe", RecipeSchema)
export default Recipe
