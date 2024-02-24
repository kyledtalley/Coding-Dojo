import { Router } from "express"
import {
	getAllBooks,
	createBook,
	deleteOneBook,
	getOneBook,
	updateOneBook,
} from "../controllers/book.controller.js"
const router = Router()

router.route("/books").get(getAllBooks).post(createBook)

router
	.route("/books/:id")
	.get(getOneBook)
	.put(updateOneBook)
	.delete(deleteOneBook)

export default router
