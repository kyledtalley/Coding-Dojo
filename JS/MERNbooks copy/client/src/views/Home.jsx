import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Home = () => {
	const [books, setBooks] = useState([])

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/books")
			.then((res) => {
				console.log(res.data)
				setBooks(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	return (
		<div className="homeContainer">
			<h1>Home</h1>
			<Link to="/books/create">Loan a Book</Link>

			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Author</th>
						<th>Pages</th>
						<th>Available</th>
					</tr>
				</thead>
				<tbody>
					{books.map((book, index) => (
						<tr key={index}>
							<td>{book.title}</td>
							<td>{book.author}</td>
							<td>{book.pages}</td>
							<td>{book.isAvailable ? "Yes" : "No"}</td>
							<td><button className= "submitButton"><Link to={`/books/${book._id}/details`}>Details</Link></button></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Home
