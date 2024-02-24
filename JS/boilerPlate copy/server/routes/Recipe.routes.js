//If you do an incorrect route you can see the lil error page I set up for that
import { Router } from "express"

import {
	getAllRecipes,
	createRecipe,
	getOneRecipe,
	updateOneRecipe,
	deleteOneRecipe,
} from "../controllers/Recipe.controller.js"
const router = Router()

router.route("/recipes").get(getAllRecipes).post(createRecipe)

router.route("/recipes/:id").get(getOneRecipe).put(updateOneRecipe).delete(deleteOneRecipe)


export default router
