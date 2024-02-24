import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"

const BookUpdate = () => {
	const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")
	const [pages, setPages] = useState(0)
	const [isAvailable, setIsAvailable] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/books/${id}`)
			.then((res) => {
				console.log(res.data)
				setTitle(res.data.title)
				setAuthor(res.data.author)
				setPages(res.data.pages)
				setIsAvailable(res.data.isAvailable)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [id])

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
			.put(`http://localhost:8000/api/books/${id}`, {
				title,
				author,
				pages,
				isAvailable,
			})
			.then((res) => {
				console.log(res)
				navigate("/")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<div className="container">
				<h1>Update a Book</h1>
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
					<label className="label" htmlFor="isAvailable">
						Available?
					</label>
					<input
						type="checkbox"
						id="isAvailable"
						checked={isAvailable}
						onChange={isAvailableHandler}
					/>
					<button className="submitButton">Update</button>
				</form>
			</div>
		</div>
	)
}

export default BookUpdate
