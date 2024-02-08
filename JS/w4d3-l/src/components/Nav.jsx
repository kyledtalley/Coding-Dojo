import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
	return (
		<div>
			<ul className="navUl">
				<Link to="/">Home</Link>
				<Link to="/pokedex">Pokedex</Link>
			</ul>
		</div>
	)
}

export default Nav
