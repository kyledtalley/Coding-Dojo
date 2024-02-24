import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const BookForm = () => {
	const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")
	const [pages, setPages] = useState(0)
	const [isAvailable, setIsAvailable] = useState(false)
	const [errors, setErrors] = useState({})

	const navigate = useNavigate()

	const titleHandler = (e) => {
		setTitle(e.target.value)
	}

	const authorHandler = (e) => {
		setAuthor(e.target.value)
	}

	const pagesHandler = (e) => {
		setPages(e.target.value)
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
				console.log(err)
				setErrors(err.response.data.errors)
			})
	}

	return (
		<div className="container">
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
				{errors.title && <p className = "error-message">{errors.title.message}</p>}
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
				{errors.author && <p className = "error-message">{errors.author.message}</p>}

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
				{errors.pages && <p className = "error-message">{errors.pages.message}</p>}

				<label className="label" htmlFor="isAvailable">
					Available?
				</label>
				<input
					type="checkbox"
					id="isAvailable"
					checked={isAvailable}
					onChange={isAvailableHandler}
				/>

				<button className="submitButton">Submit</button>
			</form>
		</div>
	)
}

export default BookForm
