import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const BookDetails = () => {
	const [book, setBook] = useState({})

	const { id } = useParams()
	const navigate = useNavigate()

	const deleteBook = () => {
		axios.delete(`http://localhost:8000/api/books/${id}`).then((res) => {
			console.log(res.data)
			navigate("/")
		})
	}

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/books/${id}`)
			.then((res) => {
				console.log(res.data)
				setBook(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [id])

	return (
		<div className="detailsContainer">
			<p>
				<Link to={`/`}>Back to Home</Link>
			</p>
			<div className="bookEntry">
				<h1>{book.title}</h1>
				<label className="detailsLabel" htmlFor="author">
					Author
				</label>
				<p className="detailsDesc" id="author">
					{book.author}
				</p>

				<label className="detailsLabel" htmlFor="pages">
					Pages
				</label>
				<p className="detailsDesc" id="pages">
					{book.pages}
				</p>

				<label className="detailsLabel" htmlFor="isAvailable">
					Available?
				</label>
				<p
					className="detailsDesc"
					id="isAvailable"
					style={{ color: book.isAvailable ? "#00FF00" : "red" }}
				>
					{book.isAvailable
						? `${book.title} is available!`
						: `${book.title} is not available!`}
				</p>

				<button onClick={deleteBook} className="deleteButton">
					Borrow!
				</button>
			</div>
		</div>
	)
}

export default BookDetails
