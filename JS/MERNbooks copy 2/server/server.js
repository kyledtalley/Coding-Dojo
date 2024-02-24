import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import dbConnect from "./config/mongoose.config.js"
import router from "./routes/book.routes.js"
dotenv.config()
const app = express()
app.use(express.json(), cors())
const PORT = process.env.PORT
dbConnect()
app.use("/api", router)

app.use((req, res, next) => {
	const err = new Error("Not Found")
	err.statusCode = 404
	err.name = "Not Found"
	next(err)
})
app.use((err, req, res, next) => {
	if (err.name === "ValidationError") {
		console.log(err.statusCode)
		err.statusCode = 400
	}
	if (err.statusCode === 404) {
		return res.status(404).json({ message: "Resource not found" })
	}

	const normalizedError = {
		statusCode: err.statusCode || 500,
		message: err.message || "Something went wrong",
		name: err.name || "Server Error",
		validationErrors: extractValidationErrors(err),

	}
	console.log(err.statusCode)

	res.status(normalizedError.statusCode).json(normalizedError)
})
function extractValidationErrors(err) {
	const validationErrors = {}
	if (err.name === "ValidationError") {
		for (const errorsBE in err.errors) {
			console.log(errorsBE)
			if (err.errors.hasOwnProperty(errorsBE)) {
				const errorMessage = err.errors[errorsBE].message
				validationErrors[errorsBE] = errorMessage
			}
		}
	}
	return validationErrors
}

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
