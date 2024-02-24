import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="header">
			<div className="header-left">
				<Link to="/" className="header-button">
					Menu
				</Link>
				<Link to="/recipes/create" className="header-button">
					Add A Recipe
				</Link>
			</div>
			<div className="header-right">Speedy Meals</div>
		</div>
	)
}

export default Header
