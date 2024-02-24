import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const BookForm = () => {
	const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")
	const [pages, setPages] = useState(0)
	const [isAvailable, setIsAvailable] = useState(false)

	const [errors, setErrors] = useState({
		statusCode: "",
		message: "",
		name: "",
		validationErrors: {},
	})
	const [formErrors, setFormErrors] = useState({
		title: "",
		author: "",
		pages: "",
	})

	const navigate = useNavigate()

	const validateForm = () => {
		const areFieldsFilled = title && author && pages > 0
		const areNoErrors = Object.values(formErrors).every(
			(value) => value === ""
		)
		return areFieldsFilled && areNoErrors
	}

	const titleHandler = (e) => {
		setTitle(e.target.value)
		const value = e.target.value
		let errorMsg = ""
		if (value) {
			if (value.length < 2) {
				errorMsg = "Title must be at least 3 characters long!"
			} else if (value.length > 255) {
				errorMsg = "Title must be less than 255 characters long"
			}
		} else {
			errorMsg = "Title is required!"
		}
		setErrors((prevErrors) => ({
			...prevErrors,
			validationErrors: {
				...prevErrors.validationErrors,
				title: errorMsg,
			},
		}))
		setFormErrors({ ...formErrors, title: errorMsg })
	}

	const authorHandler = (e) => {
		setAuthor(e.target.value)
		const value = e.target.value
		let errorMsg = ""
		if (value) {
			if (value.length < 2) {
				errorMsg = "Author name must be at least 3 characters long!"
			} else if (value.length > 75) {
				errorMsg = "Author name must be less than 75 characters long"
			}
		} else {
			errorMsg = "Author name is required!"
		}
		setErrors((prevErrors) => ({
			...prevErrors,
			validationErrors: {
				...prevErrors.validationErrors,
				author: errorMsg,
			},
		}))
		setFormErrors({ ...formErrors, author: errorMsg })
	}

	const pagesHandler = (e) => {
		setPages(e.target.value)
		const value = e.target.value.trim()
		let errorMsg = ""
		if (value) {
			if (value < 2) {
				errorMsg = "There must be at least 2 pages in the book!"
			}
		} else {
			errorMsg = "Number of pages is required!"
		}
		setErrors((prevErrors) => ({
			...prevErrors,
			validationErrors: {
				...prevErrors.validationErrors,
				pages: errorMsg,
			},
		}))
		setFormErrors({ ...formErrors, pages: errorMsg })
	}

	const isAvailableHandler = (e) => {
		setIsAvailable(e.target.checked)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		axios
			.post("http://localhost:8000/api/books", {
				title,
				author,
				pages,
				isAvailable,
			})
			.then((res) => {
				console.log(res)
				console.log(res.data)
				navigate("/")
			})
			.catch((err) => {
				console.log(err.response.data)
				setErrors(err.response.data)
			})
	}

	return (
		<div className="container">
			{errors.statusCode && (
				<p className="error-message">
					Error {errors.statusCode}: {errors.message}
				</p>
			)}

			{errors.validationErrors &&
				Object.keys(errors.validationErrors).length > 0 && (
					<p className="error-message">
						BACKEND: {errors.statusCode}
					</p>
				)}

			{/* {errors.validationErrors && (
  <p className="error-message">
    Backend {errors.statusCode}:
    {errors.validationErrors.title ? `Title: ${errors.validationErrors.title}` : ''}
    {errors.validationErrors.author ? `Author: ${errors.validationErrors.author}` : ''}
    {errors.validationErrors.pages ? `Pages: ${errors.validationErrors.pages}` : ''}
  </p>
)} */}

			{errors.validationErrors &&
				Object.entries(errors.validationErrors).map(([idx, error]) => (
					<p key={idx} className="error-message">
						Backend error: {idx}: {error}
					</p>
				))}
			<h1>Register a Book to loan</h1>
			<p>
				<Link to={`/`}>Back to Home</Link>
			</p>
			<form onSubmit={submitHandler} className="form">
				<label className="label" htmlFor="title">
					Title
				</label>
				<input
					className="input"
					type="text"
					id="title"
					value={title}
					onChange={titleHandler}
				/>
				{/* {errors.validationErrors.title && (
					<p className="error-message">
						Frontend Error: {errors.validationErrors.title}
					</p>
				)} */}
				{formErrors.title && (
					<p className="error-message">
						Frontend Error: {formErrors.title}
					</p>
				)}

				<label className="label" htmlFor="author">
					Author
				</label>
				<input
					className="input"
					type="text"
					id="author"
					value={author}
					onChange={authorHandler}
				/>
				{formErrors.author && (
					<p className="error-message">
						Frontend Error: {formErrors.author}
					</p>
				)}
				{errors.validationErrors && (
					<p>{errors.validationErrors.author}</p>
				)}

				<label className="label" htmlFor="pages">
					Pages
				</label>
				<input
					className="input"
					type="number"
					id="pages"
					value={pages}
					onChange={pagesHandler}
				/>
				{formErrors.pages && (
					<p className="error-message">
						Frontend Error: {formErrors.pages}
					</p>
				)}
				{errors.validationErrors && (
					<p>{errors.validationErrors.pages}</p>
				)}

				<label className="label" htmlFor="isAvailable">
					Available?
				</label>
				<input
					type="checkbox"
					id="isAvailable"
					checked={isAvailable}
					onChange={isAvailableHandler}
				/>

				<button
					className="submitButton"
					type="submit"
					disabled={!validateForm()}
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default BookForm
