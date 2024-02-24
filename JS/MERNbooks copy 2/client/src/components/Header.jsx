import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="header">
			<div className="header-left">
				<Link to="/" className="header-button">
					Catalog
				</Link>
				<Link to="/books/create" className="header-button">
					Add Book
				</Link>
			</div>
			<div className="header-right">Book Catalog</div>
		</div>
	)
}

export default Header
